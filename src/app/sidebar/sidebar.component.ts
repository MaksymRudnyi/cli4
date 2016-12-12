import { Component } from '@angular/core';
import { MenuItem } from './menu_item';

const menuMock: MenuItem[] = [
  {
    text: 'Inbox',
    active: true
  },
  {
    text: 'Outbox',
    active: false
  }

];

@Component({
  selector: 'sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent {
  menu: MenuItem[] = menuMock;
}
