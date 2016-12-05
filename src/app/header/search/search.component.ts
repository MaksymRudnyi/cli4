import {Component, OnInit} from '@angular/core';

@Component({
    selector: 'app-search',
    templateUrl: './search.component.html',
    styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {
    searchData = {
        text: ''
    };

    constructor() {
    }

    ngOnInit() {
    }

    goSearch() {
        // Search through the emails
        return this.searchData.text.trim();
    }

}
