import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {HttpModule} from '@angular/http';
import {AppComponent} from './app.component';
import {Routes, RouterModule} from '@angular/router';
import {EmailsComponent} from './emails/emails.component';
import {SidebarComponent} from './email/sidebar/sidebar.component';

const routes: Routes = [
    {path: '', redirectTo: 'mail', pathMatch: 'full'},
    {path: 'mail', component: EmailsComponent}
];

@NgModule({
    declarations: [
        AppComponent,
        EmailsComponent,
        SidebarComponent
    ],
    imports: [
        BrowserModule,
        FormsModule,
        HttpModule,
        RouterModule.forRoot(routes)
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule {
}
