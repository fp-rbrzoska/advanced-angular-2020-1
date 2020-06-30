import { Directive, TemplateRef, ViewContainerRef, OnInit, OnDestroy } from '@angular/core';
import { AuthService } from '../core/auth.service';

@Directive({
  selector: '[fpOnlyForAuthorized]'
})
export class OnlyForAuthorizedDirective implements OnInit, OnDestroy{

  subscription;
  constructor(private template: TemplateRef<any>, private vcr: ViewContainerRef, private authService: AuthService) {
   }

   ngOnInit() {
     this.subscription = this.authService.isLoggedIn$.subscribe( isLoggedIn => {
       this.vcr.clear();
       if(isLoggedIn) {
        this.vcr.createEmbeddedView(this.template)
       }


     })
   }

   ngOnDestroy() {
     this.subscription.unsubscribe();
   }

}
