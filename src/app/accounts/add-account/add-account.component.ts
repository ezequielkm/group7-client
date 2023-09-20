import { Component, OnInit } from '@angular/core';
import { Account } from 'app/_models/account';
import { UserService } from 'app/_services/user.service'

@Component({
  selector: 'app-add-account',
  templateUrl: './add-account.component.html',
  styleUrls: ['./add-account.component.css']
})
export class AddAccountComponent implements OnInit {

    account: Account = {
      username: '',
      password: '',
      email: ''
    };
    submitted = false;
  
    constructor(private userService: UserService) { }
  
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

