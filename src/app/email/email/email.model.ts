export class Email {
    from: string;
    subject: string;
    cc: string[];

    constructor (from: string, subject: string, cc?: string[]) {
        this.from = from || 'Default sender';
        this.subject = subject || 'Empty subject';
        this.cc = cc || [];
    }


}
