import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit{

  constructor(private router:Router, private title:Title){}

  ngOnInit(): void {
    this.title.setTitle("Willkommen");
  }

  navigateTo(loc: string){
    this.router.navigate(['/' + loc]);
  }

}
