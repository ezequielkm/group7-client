import { Component } from '@angular/core';
import { first } from 'rxjs/operators';

import { UserService } from 'app/_services';
import { Account } from 'app/_models/account';
import { Role } from 'app/_models/role';

@Component({ templateUrl: 'home.component.html', styleUrls: ['./home.component.css'] })
export class HomeComponent {
    loading = false;
    users?: Account[];
    deleteUsers: Account[];
    currentUser: string | undefined;
    showAccount = false;
    accountSent: null | any;

    constructor(private userService: UserService) {
      this.deleteUsers = [];
      this.currentUser = JSON.parse(localStorage.getItem('user')!).account.username;
      this.accountSent = new Account();
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
          if(res.status == 200) {
            alert("Usuário excluído com sucesso!");
          }
        },
        error: (e) => {
          console.error(e);
        }
      }).add(() => {this.getUsers();});
    }
    onRightClick(event:any, user:any) {
      event.preventDefault();
      const data = {
        id: user.user_id
      };
      this.userService.getUser(data).subscribe({
        next: (user) => this.editAccount(user),
        error: (e) => {console.error(e);}
      });      
     }

     saveAccount(data: any) {
      if(data.user_id) {
        this.userService.edit(data).subscribe({
          next: (res) => {
            console.log(res);
          },
          error: (e) => {console.error(e);}
        }).add(this.getUsers());
      }
      else {
        this.userService.create(data)
        .subscribe({
          next: (res) => {
            console.log(res);
          },
          error: (e) => {console.error(e);}
        }).add(this.getUsers());
      }
    }

    createAccount() {
      this.accountSent = null;
      this.showAccount = true;
    }
  
    closeAccount() {
      this.accountSent = null;
      this.showAccount = false;
    }
  
    editAccount(data:any) {
      this.accountSent = data;
      this.showAccount = true;
    }
}
