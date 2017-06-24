package repository;

import model.User;
import org.springframework.data.repository.PagingAndSortingRepository;
import org.springframework.stereotype.Repository;

/**
 * Created by faina on 24/06/17.
 */
@Repository
public interface IUserRepositry extends PagingAndSortingRepository<User, String> {
}
