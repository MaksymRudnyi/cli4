import {Component, OnInit} from '@angular/core';

@Component({
    selector: 'app-header',
    templateUrl: './header.component.html',
    styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
    searchData = {
        text: ''
    };

    constructor() {
    }

    ngOnInit() {
    }

    goSearch () {
        // Search through the emails
        return this.searchData.text.trim();
    }

}
