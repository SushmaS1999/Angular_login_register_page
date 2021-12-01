// import { Injectable } from '@angular/core';
// import { ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
// import { Observable } from 'rxjs';
// import { AuthenticationService } from '../service/authentication.service';
// @Injectable({
//   providedIn: 'root'
// })
// export class AuthGuard implements CanActivate {
//   constructor(
//     private router: Router,
//     private authenticationService: AuthenticationService
//   ) { }
//   //   canActivate(
//   //     route: ActivatedRouteSnapshot,
//   //     state: RouterStateSnapshot)
//   //     // : Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
//   //     // return true;
//   //     {
//   //       const currentUser = this.authenticationService.currentUserValue;
//   //           if (currentUser) {
//   //             if (route.data.roles && route.data.roles.indexOf(currentUser.role) === -1)
//   //              {
//   //                this.router.navigate(['/']);
//   //                 return false;
//   //             }
//   //             this.router.navigate(['/login'], { queryParams: {
//   //               returnUrl: state.url }});
//   //               return false;
//   //   }
//   //
//   // }
//   canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
//     const currentUser = this.authenticationService.currentUserValue;
//     if (currentUser) {
//       // check if route is restricted by role
//       // if (route.data['roles'] && route.data['roles'].indexOf(currentUser.role) === -1) {
//       // role not authorised so redirect to home page
//       if (currentUser.username === "admin" && currentUser.password === "123456"){
//         this.router.navigate(['/']);
//       return false;
//     }
//
//     // authorised so return true
//     return true;
//   }
//
//     // not logged in so redirect to login page with the return url
//     this.router.navigate(['/login'], { queryParams: { returnUrl: state.url } });
// return false;
//   }
// }
