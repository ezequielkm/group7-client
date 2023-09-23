import { Component } from '@angular/core';
import { first } from 'rxjs/operators';

import { User } from 'app/_models';
import { UserService } from 'app/_services';
import { Account } from 'app/_models/account';

@Component({ templateUrl: 'home.component.html' })
export class HomeComponent {
    loading = false;
    users?: User[];
    deleteUsers: Account[];

    constructor(private userService: UserService) { 
      this.deleteUsers = [];
    }

    ngOnInit() {
        this.loading = true;
        this.userService.getAll().pipe(first()).subscribe(users => {
            this.loading = false;
            this.users = users;
        });
    }

    checkUser (event : any, account: Account) {
        if (event.currentTarget.checked) {
          this.deleteUsers?.push(account);
        } else {
          this.deleteUsers?.splice(this.deleteUsers.indexOf(account), 1);
        }
      }
      
    deleteAccounts(): void {  
        if (this.deleteUsers == null) {
            return;
        }
        this.deleteUsers.forEach(account => { 
          const data = {
            id: <Number>account.user_id
          };
        this.userService.delete(data)
          .subscribe({
            next: (res) => {
              console.log(res);
            },
            error: (e) => console.error(e)
          });
        });
        location.reload();
      }
}
