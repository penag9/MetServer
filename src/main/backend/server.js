var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var jwt = require('jsonwebtoken');
var mongoose = require('mongoose');
var User = require('./user.model');
var FamilyHolliday = require('./family.holliday.model');
var MetapeletHolliday = require('./metapelet.holliday.model');
var Admin = require('./admin.model');


var port = 8080;
var db = 'mongodb://localhost/example5';
var promise = mongoose.connect(db, {
    useMongoClient: true
});
//promise.then(function(some) {});

//mongoose.connection.dropDatabase();



//User.remove({}).exec();

User.create({
    username: 'a@a.a',
    password: '12345678'
});

Admin.create({
    username: 'admin',
    password: 'admin',
});

app.use((req, res, next) => {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept, authorization");
    next();
})

app.use(bodyParser.json());


// list of all users
app.get('/users', (req, res) => {

    User.find({}, { _id: 0, password: 0, bot: 0, __v: 0 }, function(err, results) {
        if (err) {
            console.log('error occured ', err);
            res.status(500).send('Internal error');
        } else {
            res.json(results);
        }
    });
});

// delete user
app.get('/user/delete', checkAuthenticated, (req, res) => {

    User.findOne({ username: req.username }, function(err, result) {
        if (err) {
            console.log('error occured ', err);
            res.status(500).send('Internal error');
        } else {

            MetapeletHolliday.remove({ user: result._id }, function(err) {
                if (err) {
                    console.log('error occured when deleting messages', err);
                }
            });
            FamilyHolliday.remove({ user: result._id }, function(err) {
                if (err) {
                    console.log('error occured when deleting messages', err);
                }
            });

            result.remove();
            res.status(200).send(req.username + ' deleted');
        }
    });

});

// Get profile
app.get('/user', checkAuthenticated, (req, res) => {

    User.findOne({ username: req.username }, { _id: 0, password: 0, __v: 0 }, function(err, result) {
        if (err) {
            console.log('error occured ', err);
            res.status(500).send('Internal error');

        } else {

            if (result) {
                console.log('result ', result);
                res.send(result);
            } else res.status(403).send({ message: 'User does not exist' });
        }
    });
});

// Update profile
app.post('/user/update', checkAuthenticated, (req, res) => {

    var resendToken = false;
    console.log('req.username  ', req.username);
    User.findOne({ username: req.username }, function(err, result) {
        if (err) {
            console.log('error occured ', err);
            res.status(500).send('Internal error');

        } else {
            if (result) {

                console.log('body ', req.body);
                for (var field in req.body) {
                    result[field] = req.body[field];
                    if (field == 'password') resendToken = true;
                }
                result.save();
                if (resendToken) sendToken(result, res);
                else res.status(200).send(req.username + ' updated');

            } else res.status(403).send({ message: 'User does not exist' });
        }
    });

});

//User login
app.post('/login', (req, res) => {

    User.find({ username: req.body.username }, function(err, results) {
        if (err) {
            console.log('error occured ', err);
            res.status(500).send('Internal error');

        } else {
            if (results.length == 0) {
                sendAuthError(res);
                return;
            }

            if (results[0].password == req.body.password)
                sendToken(results[0], res);
            else
                sendAuthError(res);


        }
    });

});

//Registration
app.post('/register', (req, res) => {

    User.find({ username: req.body.username }, function(err, results) {
        if (err) {
            console.log('error occured ', err);
            res.status(500).send('Internal error');
        } else {
            if (results.length > 0) {
                res.status(403).send({ message: 'Username already exist' });
            } else {
                User.create({ username: req.body.username, password: req.body.password }, function(err, results) {
                    if (err) {
                        console.log('error occured ', err);
                        res.status(500).send('Internal error');
                    } else {
                        sendToken(results, res);
                    }
                });
            }
        }
    });

});

//------------- Messages ----------------

// Get list of messages for the user
app.get('user/messages', (req, res) => {
    var fullResult = [];
    User.findOne({ username: req.body.username }, function(err, result) {
        if (err) {
            console.log('error occured ', err);
            // res.status(500).send('Internal error');
        } else {
            FamilyHolliday.find({ user: result._id }, function(err, results) {
                if (err) {
                    console.log('error occured ', err);
                } else {
                    console.log('result ', results);
                    fullResult = fullResult.concat(results);
                }
            });
            MetapeletHolliday.find({ user: result._id }, function(err, results) {
                if (err) {
                    console.log('error occured ', err);
                } else {
                    console.log('result ', results);
                    fullResult = fullResult.concat(results);
                }
            });

        }
    });

    res.sent(results);
});

// Get list of messages by type
app.get('/messages/:type', (req, res) => {
    console.log('type ', req.params.type);
    switch (req.params.type) {
        case 'familyHolliday':
            FamilyHolliday.find({}, function(err, results) {
                if (err) {
                    console.log('error occured ', err);
                    res.status(500).send('Internal error');
                } else {
                    console.log('result ', results);
                    res.sent(results);
                }
            });
            break;
        case 'metapeletHolliday':
            MetapeletHolliday.find({}, function(err, results) {
                if (err) {
                    console.log('error occured ', err);
                    res.status(500).send('Internal error');
                } else {
                    console.log('result ', results);
                    res.sent(results);
                }
            });
            break;
    }
});

// Add message
app.post('/addMessage', checkAuthenticated, (req, res) => {

    User.find({ username: req.body.username }, function(err, results) {
        if (err) {
            console.log('error occured ', err);
            res.status(500).send('Internal error');

        } else {
            if (results.length == 0) {
                sendAuthError(res);
                return;
            }

            Messages.create({
                type: req.body.type,
                text: req.body.test,
                beginDate: req.body.beginDate,
                endDate: req.body.endDate,
                user: results[0]._id
            }, function(err, result) {
                if (err) {
                    console.log('error occured ', err);
                    res.status(500).send('Internal error');
                } else {
                    res.status(200).send('Message added');
                }
            });
        }
    });
});

// Delete message  change by type?
/*
app.post('/deleteMessage/:id', checkAuthenticated, (req, res) => {

    Messages.remove(req.params.id, function(err) {
        if (err) {
            console.log('error occured ', err);
            res.status(500).send('Internal error');

        } else {
            res.status(200).send('Message deleted');
        }
    });
});
*/
//------------- Admin tools -------------

//Admin login
app.post('/admin/login', (req, res) => {
    Admin.find({ username: req.body.username }, function(err, results) {
        if (err) {
            console.log('error occured ', err);
            res.status(500).send('Internal error');

        } else {
            if (results.length == 0) {
                sendAuthError(res);
                return;
            }

            if (results[0].password == req.body.password)
                sendToken(results[0], res);
            else
                sendAuthError(res);


        }
    });

});

//Admin generate new user
app.get('/admin/generate', checkAuthenticated, (req, res) => {

    console.log('Generate');

    User.findOne()
        .sort({ bot: -1 })
        .exec(function(err, results) {
            if (err) {
                console.log('error occured ', err);
                res.status(500).send('Internal error');
            } else {

                console.log(results);
                var max = results.bot ? results.bot + 1 : 1;

                User.create({ username: 'iMetapelet' + max + '@a.com', password: '12345678', bot: max }, function(err, results) {
                    if (err) {
                        console.log('error occured ', err);
                        res.status(500).send('Internal error');

                    } else {
                        res.json({ username: 'iMetapelet' + max + '@a.com' });
                    }
                });

            }
        });

});


// list of all bots
app.get('/admin/bots', checkAuthenticated, (req, res) => {

    console.log('Bots');

    User.find({ bot: { $exists: true } /*{ $gt: 0 }*/ }, { _id: 0, __v: 0 }, function(err, results) {
        if (err) {
            console.log('error occured ', err);
            res.status(500).send('Internal error');
        } else {
            res.json(results);
        }
    });
});

// delete user
app.get('/admin/delete/:user', checkAuthenticated, (req, res) => {

    User.findOne({ username: req.params.user }, function(err, result) {
        if (err) {
            console.log('error occured ', err);
            res.status(500).send('Internal error');
        } else {
            Messages.remove({ user: result._id }, function(err) {
                if (err) {
                    console.log('error occured when deleting messages', err);
                }
            });
            result.remove();
            res.status(200).send(req.username + ' deleted');
        }
    });
});

// Get profile
app.get('/admin/user/:user', checkAuthenticated, (req, res) => {

    User.findOne({ username: req.params.user }, { _id: 0, __v: 0 }, function(err, result) {
        if (err) {
            console.log('error occured ', err);
            res.status(500).send('Internal error');

        } else {

            if (result) {
                console.log('result ', result);
                res.send(result);
            } else res.status(403).send({ message: 'User does not exist' });
        }
    });
});

// Update profile
app.post('/admin/update/:user', checkAuthenticated, (req, res) => {

    User.findOne({ username: req.params.user }, function(err, result) {
        if (err) {
            console.log('error occured ', err);
            res.status(500).send('Internal error');

        } else {
            if (result) {
                for (var field in req.body) {
                    result[field] = req.body[field];

                    console.log('field ', field);

                }

                console.log('result ', result);
                result.save();
                res.status(200).send(req.params.user + ' updated');

            } else res.status(403).send({ message: 'User does not exist' });
        }
    });
});

//-----------------Helpers--------------------

function sendToken(user, res) {
    var token = jwt.sign(user.username, '123');
    res.json({ token });
}


function sendAuthError(res) {
    return res.status(401).send({ message: 'email or password incorrect' });
}

function checkAuthenticated(req, res, next) {
    if (!req.header('authorization'))
        return res.status(401).send({ message: 'Unauthorized requested. Missing authentication header' });

    var token = req.header('authorization');

    var username = jwt.decode(token, '123');
    if (!username)
        return res.status(401).send({ message: 'Unauthorized requested. Authentication header invalid' });

    req.username = username;

    next();
}

function tmp() {

    console.log('List of all users :');
    User.find({ /*bot: { $exists: true } /*{ $gt: 0 }*/ }, { _id: 0, __v: 0 }, function(err, results) {

        if (err) {
            console.log('error ', err);
        } else {
            console.log(results);
        }
    });

    // messages for a
    /*
    User.findOne({ username: 'a@a.a' }, function(err, result) {
        if (err) {
            console.log('error occured ', err);
        } else {

            Messages.create({ type: 12, lang: 'Русский', place: 'Яфо', begin: '2/3/2017', end: '  5/3/2017', name: 'Кто-то 1',
            phone: '11111', russian: true, russianLevel: 3, hebrew: false, hebrewLevel: 0, romanian: false,
            romanianLevel: 0, english: false, englishLevel: 0, text: 'aaaaa', user: result._id  });



            Messages.create({ type: 12, lang: 'Русский, Иврит, Румынский, Английский', place: 'Яфо', begin: '3/4/2017', end: '  7/4/2017', name: 'Кто-то 2',
            phone: '22222', russian: true, russianLevel: 3, hebrew: true, hebrewLevel: 1, romanian: true,
            romanianLevel: 1, english: true, englishLevel: 2, text: 'ssssss', user: result._id  });
    


            Messages.create({ type: 22,  lang: 'Русский, Иврит', place: 'Яфо', begin: '4/5/2017', end: '  8/5/2017', name: 'Кто-то 3',
            phone: '33333', russian: true, russianLevel: 3, hebrew: true, hebrewLevel: 3, romanian: false,
            romanianLevel: 0, english: false, englishLevel: 0, text: 'dddddd', user: result._id  });
        


            Messages.create({ type: 22, lang: 'Русский', place: 'Яфо', begin: '5/6/2017', end: '  9/6/2017', name: 'Кто-то 4',
            phone: '444444', russian: true, russianLevel: 3, hebrew: false, hebrewLevel: 0, romanian: false,
            romanianLevel: 0, english: false, englishLevel: 0, text: 'ffffff', user: result._id  });
                             
            }
    });
        
    Messages.find({ }, { _id: 0, __v: 0 }, function(err, results) {
        
        if (err) {
            console.log('error  ', err);
        } else {
            console.log(results);
        }
    });
    */
}

app.listen(port, function() {
    console.log('app listening on port ' + port);
    tmp();
});