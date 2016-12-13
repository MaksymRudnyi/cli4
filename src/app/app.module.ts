import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { AppsMenuComponent } from './header/apps-menu/apps-menu.component';
import { SearchComponent } from './header/search/search.component';
import { EmailListComponent } from './email/email-list/email-list.component';
import { EmailComponent } from './email/email/email.component';
import { MailComponent } from './mail/mail.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    AppsMenuComponent,
    SearchComponent,
    EmailListComponent,
    EmailComponent,
    AppComponent,
    MailComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
