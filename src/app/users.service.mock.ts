import { User } from './user';
import { Observable, of } from 'rxjs';

export class MockUsersService{

  getAllUsers(): Observable<User[]>{
    return of([
      new User('valentina','valentina@gmx.de','asas'),
      new User('nicolas','nicolas@gmx.de','asas'),
      new User('zulema','zule@gmx.de','asas'),
    ]);
  }

}