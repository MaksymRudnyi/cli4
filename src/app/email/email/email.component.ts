import {Component, OnInit, Input} from '@angular/core';
import {Email} from './email.model';

@Component({
    selector: 'app-email',
    templateUrl: './email.component.html',
    styleUrls: ['./email.component.css']
})
export class EmailComponent implements OnInit {
    @Input() email: Email;

    constructor() {
    }

    ngOnInit() {
    }

}
