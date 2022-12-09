import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from '../services/authentication.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-poslogin',
  templateUrl: './poslogin.component.html',
  styleUrls: ['./poslogin.component.css']
})
export class PosloginComponent implements OnInit {

  ngOnInit(): void {
  }

  user$ = this.authService.currentUser$;

  constructor(public authService: AuthenticationService, private router: Router) {
    
  }

  logout() {
    this.authService.logout().subscribe(() => {
      this.router.navigate(['../login']);
    });
  }

}
