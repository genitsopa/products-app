import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private router: Router) { }

  login(email: string,password: string) {
    if(email === 'genitsopa@outlook.com' && password === '12345678'){
      return 200;
    } else {
        return 403;
      }
    }

    logout() {
      this.router.navigate(['login']);
    }
  }


