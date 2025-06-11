import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UserprofileComponent } from './userprofile/userprofile.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { TasklistsComponent } from './tasklists/tasklists.component';
import { HoverBackgroundDirective } from './tasklists/hover-background.directive';

@NgModule({
  declarations: [AppComponent, UserprofileComponent, TasklistsComponent, HoverBackgroundDirective],
  imports: [BrowserModule, AppRoutingModule, FormsModule, ReactiveFormsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
