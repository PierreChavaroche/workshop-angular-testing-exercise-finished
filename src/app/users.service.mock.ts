import { User } from './user';
import { Observable, of } from 'rxjs';

export class MockUsersService{

  getAllUsers(): Observable<User[]>{
    return of([
      new User('valentina','valentina@gmx.de','12345678'),
      new User('nicolas','nicolas@gmx.de','12345678'),
      new User('zulema','zule@gmx.de','12345678'),
    ]);
  }

}