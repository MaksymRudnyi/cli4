import {Component, OnInit} from '@angular/core';
import {Email} from '../email/email.model';

@Component({
    selector: 'app-email-list',
    templateUrl: './email-list.component.html',
    styleUrls: ['./email-list.component.css']
})
export class EmailListComponent implements OnInit {
    emails: Email[];

    constructor() {
        this.emails = [
            new Email('Den Berg', 'Income Payment'),
            new Email('Den Berg', 'Income Payment'),
            new Email('Den Berg', 'Income Payment'),
            new Email('Den Berg', 'Income Payment'),
        ];
    }

    ngOnInit() {
    }

}
