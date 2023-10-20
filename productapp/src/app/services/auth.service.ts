import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private baseUrl = 'https://reqres.in/api';

  constructor(private http: HttpClient,private router:Router) { }

  login(email: string, password: string) {
    return this.http.post(`${this.baseUrl}/login`, { email: email, password });
  }

  logout() {
      this.router.navigate(['login']);
    }
  }


