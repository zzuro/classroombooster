import {Component, NgModuleRef, OnInit} from '@angular/core';
import {Title} from '@angular/platform-browser';
import {Person} from '../../models';
import {MatDialog} from '@angular/material/dialog';
import {DialogComponent} from '../dialog/dialog.component';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent implements OnInit {

  public person !: Array<Person>;
  constructor(private title: Title, private matDialog: MatDialog) { }

  ngOnInit() {

    setTimeout(() => {
      document.querySelector(".loader")?.classList.add("loader--hidden");
    }, 200)
    
    this.title.setTitle('Über uns');

    this.person = [
      {
        name : 'Alessandro Vezzù',
        profession: 'Full-Stack Engineer',
        desc: 'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.',
        img: 'assets/avatar.jpg'
      },
      {
        name : 'Grischa Ruprecht',
        profession: 'Master Student',
        desc: 'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.',
        img: 'assets/avatar.jpg'
      }
    ];
  }

  openDialog(name: string, desc: string, prof: string) {
    let dia = this.matDialog.open(DialogComponent, {
      width: '700px',
      height: '400px',
      autoFocus: false
    });

    dia.componentInstance.name = name;
    dia.componentInstance.desc = desc;
    dia.componentInstance.prof = prof;
  }

}