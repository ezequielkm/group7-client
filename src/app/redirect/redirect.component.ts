import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthenticationService } from 'app/_services';
import { concatMap } from 'rxjs';
import { User } from 'app/_models/user';

@Component({
  selector: 'app-redirect',
  templateUrl: './redirect.component.html',
  styleUrls: ['./redirect.component.css']
})
export class RedirectComponent implements OnInit {

  constructor(private active: ActivatedRoute, private serv: AuthenticationService, private router: Router) { }
  ngOnInit(): void {
    this.active.queryParamMap.pipe(concatMap(x=>this.serv.getAcessToken(x.get('code')!)))
    .subscribe(data=>this.serv.getUserDetails().subscribe({
      next: (res) => {
        this.serv.loginGit(res["login"]!, res["email"]!)
        .subscribe(data=>this.router.navigate(['/']),err=>{console.log(err)})
      },
      error: (e) => console.error(e)
    }));
  }
}

