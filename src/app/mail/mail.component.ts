import { Component, OnInit } from '@angular/core';
import { Mail } from './mail';

@Component({
  selector: 'app-mail',
  templateUrl: './mail.component.html',
  styleUrls: ['./mail.component.scss']
})
export class MailComponent implements OnInit {
  mail: Mail = {
    sender : 'Jim Al-Khalili',
    subject: 'Nuclear fusion',
    content: 'Since strong nuclear force was discovered all changed drastically...',
    date   : '14 Nov'
  };
  constructor() { }

  ngOnInit() {
  }

}
