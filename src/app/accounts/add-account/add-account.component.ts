import { Component, OnInit } from '@angular/core';
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

export class AddAccountComponent implements OnInit {
    loading = false;
    roles?: Role[];
    selectedRoles?: Role[];

    account: Account = {
      user_id: 0,
      username: '',
      password: '',
      email: ''
    };
    submitted = false;
  
    constructor(private userService: UserService,  private router: Router) { 
      this.selectedRoles = [];
    }
  
    ngOnInit(): void {
      this.getRoles();
    }

    getRoles() {
      this.loading = true;
      this.userService.getRoles().pipe(first()).subscribe(roles => {
        this.loading = false;
        this.roles = roles;
      });
    }

  
    saveAccount(): void {
      const data = {
        username: this.account.username,
        password: this.account.password,
        email: this.account.email,
        roles: this.selectedRoles
      };
  
      this.userService.create(data)
        .subscribe({
          next: (res) => {
            console.log(res);
            this.submitted = true;
            this.router.navigate(['/'])
          },
          error: (e) => console.error(e)
        });
    }
  
    newAccount(): void {
      this.submitted = false;
      this.account = {
        username: '',
        password: '',
        email: ''
      };
    }

    checkRoles (event : any, role: Role) {
      if (event.currentTarget.checked) {
        this.selectedRoles?.push(role);
      } else {
        this.selectedRoles?.splice(this.selectedRoles.indexOf(role), 1);
      }
    }
  
  }

