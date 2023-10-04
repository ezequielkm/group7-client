import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';
import { Account } from 'app/_models/account';
import { UserService } from 'app/_services/user.service'
import { Role } from 'app/_models/role';
import { first } from 'rxjs';

@Component({
  selector: 'app-add-account',
  templateUrl: './add-account.component.html',
  styleUrls: ['./add-account.component.css']
})

export class AddAccountComponent {

  @Input() showAccount = true;
  @Output() sendShowAccount = new EventEmitter<void>();

  @Output() newAccount = new EventEmitter<Account>();

  @Input() accountReceived: any;

    roles: Role[] | any = [];

    loading = false;

    selectedRoles?: Role[] | any;

    account: Account = {
      user_id: 0,
      username: '',
      password: '',
      email: ''
    };
    submitted = false;

    constructor(private userService: UserService) {
      this.selectedRoles = [];
    }

    ngOnInit(): void {
      if (this.accountReceived) {
        this.account.user_id = this.accountReceived[0].user_id;
        this.account.username = this.accountReceived[0].username;
        this.account.password = this.accountReceived[0].password;
        this.account.email = this.accountReceived[0].email;
        this.selectedRoles = this.accountReceived[0].roles;
        this.selectedRoles?.forEach((role: any) => {delete role.accountRoles});
        //delete this.selectedRoles['accountRoles'];
      }
      this.getRoles();
    }


    getRoles() {
      this.loading = true;
      this.userService.getRoles().subscribe(roles => {
        this.loading = false;
        this.roles = roles;
      }).add(() => {this.roles.forEach((role:  any) => {
        var contains = this.selectedRoles.some((elem : any) =>{
          return JSON.stringify(role) === JSON.stringify(elem);
        });
        if (contains) {
          role.select = true;
        }
        else
        {
          role.select = false;
        }
      })});
    }

    saveAccount(): void {
      const data = {
        user_id: this.account.user_id,
        username: this.account.username,
        password: this.account.password,
        email: this.account.email,
        roles: this.selectedRoles
      };
      this.newAccount.emit(data);
      this.sendShowAccount.emit();
    }
    cancelAccount() {
      this.sendShowAccount.emit();
    }
    toggle() {
      this.sendShowAccount.emit();
    }
    checkRoles (event : any, role: Role) {
      if (event.currentTarget.checked) {
        this.selectedRoles?.push(role);
      } else {
        this.selectedRoles?.splice(this.selectedRoles.indexOf(role), 1);
      }
    }
  }

