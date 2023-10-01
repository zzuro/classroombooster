import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit{

  constructor(private title:Title){
    this.title.setTitle('Kontakt');
  }
  ngOnInit(): void {
    setTimeout(() => {
      document.querySelector(".loader")?.classList.add("loader--hidden");
    }, 200)
  }

}
