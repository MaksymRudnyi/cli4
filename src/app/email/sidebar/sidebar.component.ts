import {Component, Output, EventEmitter} from '@angular/core';
import {MenuItem, menuMock} from './menu_item';

@Component({
    selector: 'app-sidebar',
    templateUrl: './sidebar.component.html',
    styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent {
    selectedItem: number;
    menu: MenuItem[] = menuMock;
    @Output() onMenuSelected = new EventEmitter<number>();

    menuItemClick(event: Event, item: MenuItem) {
        event.preventDefault();
        this.onMenuSelected.emit(item.id);
        this.selectedItem = item.id;
        this.menu.forEach((menuItem) => menuItem.unselect());
        item.select();
    }
}
