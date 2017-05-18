import { Component, OnInit } from '@angular/core';
import { Router }            from '@angular/router';
import { Observable } from 'rxjs/Observable';
import {Championship }   from './classes/championship';
import { DataService }   from './dataService';
//import { MODAL_DIRECTIVES, ModalComponent } from '../ng2-bs3-modal/ng2-bs3-modal';

@Component({
  selector: 'my-Championship',
  templateUrl: './Championship.component.html',
  styleUrls: [ './Championship.component.css' ]
})
export class AppComponent implements OnInit {
  selectedChampionship: Championship;
  Championships: Championship[] = [];
 // public AddChampionshipModal: ModalComponent
  
  constructor(
    private DataService: DataService) {
     }

  getChampionships() {
     this.DataService.getChampionships().subscribe((data:any) => {this.Championships = data});
    
  }

  ngOnInit(): void {
    this.getChampionships();
  }

  onSelect(Championship: Championship): void {
    this.selectedChampionship = Championship;
  }

}
