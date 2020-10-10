import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

import { User } from 'src/app/module.auth/models/User.model';
import { QueryService } from '../query-service/query.service';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private isLoggedIn: boolean = false;
  private isAuthorized: boolean = false;
  private user: User;
  private permissions: string[];

  constructor(
    private query: QueryService
  ) { }

  login(user: User): Observable<any> {
    this.query.setURI('login');
    this.query.setHeaders();
    return this.query.post(user);
  }

  logout(): void {
    this.user = null;
    this.checkIfLoggedIn();
  }

  checkIfLoggedIn(): boolean {
    this.user = localStorage.getItem('user') ? JSON.parse(localStorage.getItem('user')) : null;
    this.isLoggedIn = this.user['token'] ? true : false;

    return this.isLoggedIn;
  }

  checkIfAuthorized(role: string, reqPermissions?: string[]): boolean {
    let issues: number = 0;
    this.permissions = localStorage.getItem('user') ? JSON.parse(localStorage.getItem('user'))['permissions'] : null;

    if (reqPermissions && reqPermissions.length > 0) {
      reqPermissions.filter((permission, i, arr) => {
        if (this.permissions.indexOf(permission) === -1) {
          issues++;
          return false;
        }
      });

      this.isAuthorized = issues === 0;
    } else {
      this.isAuthorized = true;
    }

    return this.isAuthorized;
  }
}