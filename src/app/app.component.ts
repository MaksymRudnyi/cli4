import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
    sideBarMenuSelected(menuItemId: number) {
        console.log('selected menu item id: %d', menuItemId);
    }
}
