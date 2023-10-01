import { Component, OnInit } from '@angular/core';
import { Subject } from '/app/src/app/models';
import { Title } from '@angular/platform-browser';


declare function preloader():void; 

@Component({
  selector: 'app-offer',
  templateUrl: './offer.component.html',
  styleUrls: ['./offer.component.scss']
})



export class OfferComponent implements OnInit {

  public subjects!: Array<Subject>;
  
  constructor(private title: Title) { 
  }

  ngOnInit() {
    
    setTimeout(() => {
      document.querySelector(".loader")?.classList.add("loader--hidden");
    }, 200)

    this.title.setTitle('Angebot');

    this.subjects = [
      {school: 'Gymnasium', subjects: ['Mathematik', 'Physik', 'Informatik'], img: 'assets/gymnasium.jpg'},
      // tslint:disable-next-line:max-line-length
      {school: 'Informatik Studium', subjects: ['Analysis I', 'Analysis II', 'Wahrscheinlichkeit und Statistik', 'Numerical Methods for Computer Science', 'Einführung in die Programmierung', 'Systems Programming and Computer Architecture', 'Computer Networks'], img: 'assets/cs.jpg'},
      // tslint:disable-next-line:max-line-length
      {school: 'Elektrotechnik und Informationstechnologie Studium', subjects: ['Lineare Algebra', 'Analysis I', 'Analysis II', 'Numerische Methoden', 'Netzwerk und Schaltungen I', 'Netzwerk und Schaltungen II', 'Physik I'], img: 'assets/et.jpg'}
    ];
  }

}
