export interface IMenuItem {
    text: string;
}

export class MenuItem implements IMenuItem {
    static currentMenuItemId = 1;
    id: number;

    constructor(public text: string, private active = false) {
        this.id = MenuItem.currentMenuItemId++;
    }

    select() {
        this.active = true;
    }

    unselect() {
        this.active = false;
    }
}

export let menuMock: MenuItem[] = [
    new MenuItem('Inbox'),
    new MenuItem('Outbox'),
    new MenuItem('Sent'),
    new MenuItem('Draft'),
];
