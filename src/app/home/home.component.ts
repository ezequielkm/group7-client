import { Component } from '@angular/core';
import { first } from 'rxjs/operators';

import { UserService } from 'app/_services';
import { Account } from 'app/_models/account';

@Component({ templateUrl: 'home.component.html', styleUrls: ['./home.component.css'] })
export class HomeComponent {
    loading = false;
    users?: Account[];
    deleteUsers: Account[];
    currentUser: string | undefined;

    constructor(private userService: UserService) {
      this.deleteUsers = [];
      this.currentUser = JSON.parse(localStorage.getItem('user')!).account.username;
    }

    ngOnInit() {
     this.getUsers();
    }

    getUsers(){
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
        if (this.deleteUsers == null || !confirm("Deseja excluir os usuários selecionados?")) {
            return;
        }
        this.deleteUsers.forEach(account => {
          this.deleteAccount(<number>account.user_id);
        });
        
    }
    deleteAccount(idParam? : number): void {
      const data = {
        id: idParam
      };
      this.userService.delete(data).subscribe({
        next: (res) => {
          console.log(res);
        },
        error: (e) => {
          console.error(e);
        }
      }).add(() => {this.getUsers();});
    }
}
