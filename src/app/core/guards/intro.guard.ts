import { EntityState } from 'src/app/core/+state/entity.state';
import { Store } from '@ngxs/store';
import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class IntroGuard implements CanActivate {
  constructor(private store: Store, private router: Router) {}

  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    const introCompleted = this.store.selectSnapshot(EntityState.introCompleted);

    console.log(introCompleted);
    if (introCompleted) {
      return true;
    } else {
      this.router.navigateByUrl('/intro');
    }
  }
  
}
