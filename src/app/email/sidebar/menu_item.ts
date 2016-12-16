export interface IMenuItem {
    text: string;
}

export class MenuItem implements IMenuItem {
    id: number;

    constructor(public text: string, private active: boolean = false) {
        this.id = MenuItem.currentMenuItemId++;
    }

    select() {
        this.active = true;
    }

    unselect() {
        this.active = false;
    }

    static currentMenuItemId = 1;

}

export let menuMock: MenuItem[] = [
    new MenuItem('Inbox'),
    new MenuItem('Outbox'),
    new MenuItem('Sent'),
    new MenuItem('Draft'),
];
