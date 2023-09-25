import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Account } from 'app/_models/account';
import { UserService } from 'app/_services/user.service'

@Component({
  selector: 'app-add-account',
  templateUrl: './add-account.component.html',
  styleUrls: ['./add-account.component.css']
})

export class AddAccountComponent implements OnInit {

  
    account: Account = {
      user_id: 0,
      username: '',
      password: '',
      email: ''
    };
    submitted = false;
  
    constructor(private userService: UserService,  private router: Router) { 
      
    }
  
    ngOnInit(): void {
    }
  
    saveAccount(): void {
      const data = {
        username: this.account.username,
        password: this.account.password,
        email: this.account.email
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
  
  }

