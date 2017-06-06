import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule, Routes } from '@angular/router';

import { BoardModule } from './board/board.module';

import { AppComponent } from './app.component';
import { LaunchComponent } from './launch.component';
import { AuthComponent } from './auth.component';
import { BoardComponent } from './board/board.component';

const appRoutes: Routes = [
  { path: 'auth', component: AuthComponent },
  { path: 'launch', component: LaunchComponent },
  { path: 'board', component: BoardComponent },
  { path: '', redirectTo: '/launch', pathMatch: 'full' },
  { path: '**', component: LaunchComponent }  // TODO: need to change to 404
];

@NgModule({
  declarations: [
    AppComponent,
    LaunchComponent,
    AuthComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot(appRoutes),
    BoardModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
