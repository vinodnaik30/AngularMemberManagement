import { BrowserModule } from '@angular/platform-browser';
import { NgModule, Component } from '@angular/core';
import { RouterModule, Route } from '@angular/router'
import { ReactiveFormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { from, fromEventPattern } from 'rxjs';
// import { Route } from '@angular/compiler/src/core';
import { MemberComponent } from './member/member.component';
import { CreatememberComponent } from './createmember/createmember.component';
import { ValidatorComponent } from './validator/validator.component';

const appRoutes: Route[] = [
  { path: 'member', component: MemberComponent },
  { path: 'CreateMember', component: CreatememberComponent }
]
@NgModule({
  declarations: [
    AppComponent,
    MemberComponent,
    CreatememberComponent,
    ValidatorComponent
  ],
  imports: [
    BrowserModule, RouterModule.forRoot(appRoutes, { useHash :true }), ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
