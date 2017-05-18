import { Component, OnInit,ViewChild } from '@angular/core';
import { Router }            from '@angular/router';
import { Observable } from 'rxjs/Observable';
import { Championship }   from './classes/championship';
import { DataService }   from './dataService';
import { ModalComponent } from 'ng2-bs3-modal/ng2-bs3-modal';
import { Sport } from './classes/sport';
import { Condition } from './classes/condition';
import { Specialization } from './classes/specialization';
import { ConditionType } from './classes/conditiontype';

@Component({
  selector: 'my-Championship',
  templateUrl: './Championship.component.html',
  styleUrls: [ './Championship.component.css' ]
})
export class AppComponent implements OnInit {
  selectedChampionship: Championship;
  Championships: Championship[] = [];
  Sports: Sport[] = [];
  ConditionTypes: ConditionType[] = [];
  Conditions:Condition[] = [];
  Specialization: Specialization[] = [];
  roundEvents: any = [];

  conditiontypeid: number = 1;

  newSport: any = {championshipid: -1, sportid: 1, specializationid:[], conditionid:[]};
  newRound: any = {eventid: 1, name: "", description:""};
 
  currentAddType = "Condition";
  addTypes= ["Condition", "Condition Type", "Season", "Seria", "Sports", "Sport specialization"];

  //ConditionAdd
  selectedConditionTypeForAddnew = 1;
  conditionData: any =[];
  newCondition = {name: "", description: "", minimum: "", maximum: "", equal: "", typeid: 1, sportid: 1};

  //ConditionTypeAdd
  conditionTypeData:any = [];
  newConditionType:any = {name: "", description: ""};

  //SeasonAdd
  seasonData:any = [];
  newseason = {name: "", description: ""};

  //seriaAdd
  seriaData:any = [];
  newseria = {name: "", description: ""};

  //sportsAdd
  sportsData:any = [];
  newsports = {name: "", description: ""};

  //specAdd
  selectedSportForAddnew = 4;
  specData:any = [];
  newspec = {name: "", description: "", parendid: 1};

  @ViewChild('championshipdetailmodal')
  ChampionshipDetailsModal: ModalComponent;
  
  @ViewChild('championshipaddsportmodal')
  addSportModal: ModalComponent;

  @ViewChild('championshipaddroundmodal')
  addRoundModal: ModalComponent;

  @ViewChild('addnewmodal')
  addNewModal: ModalComponent;


  constructor(
    private DataService: DataService) {
     }

  getData() {
     this.DataService.getChampionships().subscribe((data:any) => {this.Championships = data});
     this.DataService.getSports().subscribe((data:any)=>{this.Sports = data});
     this.DataService.getConditions().subscribe((data:any)=>{this.ConditionTypes = data});
     
     this.sportChanged(this.newSport.sportid);
     this.conditionChanged(this.conditiontypeid);
     this.conditionTypeChangedAtAdd(this.selectedConditionTypeForAddnew);
  } 

  ngOnInit(): void {
    this.getData();
  }

  onSelect(Championship: Championship): void {
    
  }
  
  openDetailsModal(championship:Championship){
    this.selectedChampionship = championship;
    this.ChampionshipDetailsModal.open();
  }

  addSport(id:number)
  {
    this.newSport.championshipid = id;
    this.addSportModal.open();
  }

  addRound(id:number)
  {
    this.DataService.getChampionshipsEVENTS(id).subscribe((data:any)=>{
      this.roundEvents = data;
    })
    this.addRoundModal.open();
  }

  postSport()
  {
    this.DataService.addSport(this.newSport).subscribe((data:any)=>{console.log(data)});
  }

  postRound(){
    this.DataService.addRound(this.newRound).subscribe((data:any)=>{console.log(data)});
  }

  sportChanged(event:any)
  {
    this.DataService.getSpecializationById(event).subscribe((data:any) =>{
      this.Specialization = data;
    })
  }

  conditionChanged(event:any)
  {
    this.DataService.getConditionById(event).subscribe((data:any) =>{
      this.Conditions = data;
    })
  }

  onditionChanged(event:any)
  {
    this.DataService.getConditionById(event).subscribe((data:any) =>{
      this.Conditions = data;
    })
  }

  addNew(){

  }

  openAddNewModal(){
    this.addNewModal.open();
  }

  conditionTypeChangedAtAdd(event:any)
  {
    this.DataService.getConditionById(event).subscribe(data=>{
      this.conditionData = data;
    })
  }

  sportChangedAtAddSpec(event:any)
  {
    this.DataService.getSpecById(event).subscribe(data=>{
      this.specData = data;
    })
  }

  addNewCondition()
  {
    this.DataService.saveCondition(this.newCondition).subscribe(data=>{console.log(data)});
  }

  addNewSpec()
  {
    this.DataService.saveSpec(this.newspec).subscribe(data=>{console.log(data)});
  }


  addTypeChanged(){
    switch(this.currentAddType)
    {
      case "Condition":
        this.DataService.getConditionById(1).subscribe(data=>{this.conditionData = data});
      break;
      case "Condition Type":
        this.DataService.getExistingConditionType().subscribe(data=>{this.conditionTypeData = data});
      break;
      case "Season":
        this.DataService.getExistingSeason().subscribe(data=>{this.seasonData = data});
      break;
      case "Seria":
        this.DataService.getExistingSeria().subscribe(data=>{this.seriaData = data});
      break;
      case "Sports":
        this.DataService.getExistingSport().subscribe(data=>{this.sportsData = data});
      break;
      case "Sport specialization":
        this.DataService.getSpecializationById(this.selectedSportForAddnew).subscribe((data:any)=>{this.specData = data});
      break;
    }
  }

  addNewConditionType(){
    this.DataService.saveConditionType(this.newConditionType).subscribe(data=>{console.log(data)});
  }

  addNewseason(){
    this.DataService.saveSeason(this.newseason).subscribe(data=>{console.log(data)});
  }

  addNewseria(){
    this.DataService.saveSeria(this.newseria).subscribe(data=>{console.log(data)});
  }

  addNewsports(){
    this.DataService.saveSports(this.newsports).subscribe(data=>{console.log(data)});
  }

}
