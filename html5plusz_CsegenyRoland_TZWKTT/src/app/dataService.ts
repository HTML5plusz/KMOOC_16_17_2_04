import { Injectable }    from '@angular/core';
import { Headers, Http, Response, RequestOptions } from '@angular/http';

import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';
import {Championship} from './classes/championship'
@Injectable()
export class DataService {

  private headers = new Headers({'Content-Type': 'application/json'});
  private options = new RequestOptions({ headers: this.headers });


  constructor(private http: Http) { }

  getChampionships() {
    return this.http.get("http://94.177.230.203:8080/sport/rest/championship/entity/all")
                    .map(this.extractData)
                    .catch(this.handleError);
  }
  getChampionshipsND():any {
    return this.http.get("http://94.177.230.203:8080/sport/rest/championship/namedescription/all")
                    .map(this.extractData)
                    .catch(this.handleError);
  }
  getChampionship(id:number):any {
    return this.http.get("http://94.177.230.203:8080/sport/rest/championship/" + id.toString())
                    .map(this.extractData)
                    .catch(this.handleError);
  }
  getChampionshipsIDNAME():any {
    return this.http.get("http://94.177.230.203:8080/sport/rest/championship/idname/all")
                    .map(this.extractData)
                    .catch(this.handleError);
  }
  getChampionshipsEVENTS(id:number):any {
    return this.http.get("http://94.177.230.203:8080/sport/rest/championship/events/idname/" + id.toString())
                    .map(this.extractData)
                    .catch(this.handleError);
  }
  
  getSports():any {
    return this.http.get("http://94.177.230.203:8080/sport/rest/sport/entity/all")
                    .map(this.extractData)
                    .catch(this.handleError);
  }

  
  getConditions():any {
    return this.http.get("http://94.177.230.203:8080/sport/rest/conditiontype/entity/all")
                    .map(this.extractData)
                    .catch(this.handleError);
  }

  
  getSpecializationById(id:number):any {
    return this.http.get("http://94.177.230.203:8080/sport/rest/sportspecialization/entity/" + id.toString())
                    .map(this.extractData)
                    .catch(this.handleError);
  }

  getConditionById(id:number)
  {
    
    return this.http.get("http://94.177.230.203:8080/sport/rest/condition/entity/all/" + id.toString())
                    .map(this.extractData)
                    .catch(this.handleError);
  }

  getSpecById(id:number)
  {
    
    return this.http.get("http://94.177.230.203:8080/sport/rest/sportspecialization/entity/" + id.toString())
                    .map(this.extractData)
                    .catch(this.handleError);
  }
  
  getExistingConditionType()
  {
    
    return this.http.get("http://94.177.230.203:8080/sport/rest/conditiontype/entity/all")
                    .map(this.extractData)
                    .catch(this.handleError);
  }

  getExistingSeason()
  {
    
    return this.http.get("http://94.177.230.203:8080/sport/rest/season/entity/all")
                    .map(this.extractData)
                    .catch(this.handleError);
  }

  getExistingSeria()
  {
    
    return this.http.get("http://94.177.230.203:8080/sport/rest/seria/entity/all")
                    .map(this.extractData)
                    .catch(this.handleError);
  }

  getExistingSport()
  {
    
    return this.http.get("http://94.177.230.203:8080/sport/rest/sport/entity/all")
                    .map(this.extractData)
                    .catch(this.handleError);
  }

  addSport(sport: any)
  {
    return this.http.post("http://94.177.230.203:8080/sport/rest/championship/addsport", sport, this.options).map(this.extractData);
  }

  addRound(round: any)
  {
    return this.http.post("http://94.177.230.203:8080/sport/rest/championship/addround", round, this.options).map(this.extractData);
  }

  saveCondition(cond:any)
  {
    return this.http.post("http://94.177.230.203:8080/sport/rest/condition/save", {cond}, this.options).map(this.extractData);
  }
  saveSpec(spec:any)
  {
    return this.http.post("http://94.177.230.203:8080/sport/rest/sportspecialization/save", {spec}, this.options).map(this.extractData);
  }

  saveConditionType(condt:any)
  {
    return this.http.post("http://94.177.230.203:8080/sport/rest/conditiontype/save", {condt}, this.options).map(this.extractData);
  }

  saveSeason(season:any)
  {
    return this.http.post("http://94.177.230.203:8080/sport/rest/season/save", {season}, this.options).map(this.extractData);
  }

  saveSeria(seria:any)
  {
    return this.http.post("http://94.177.230.203:8080/sport/rest/seria/save", {seria}, this.options).map(this.extractData);
  }

  saveSports(sport:any)
  {
    return this.http.post("http://94.177.230.203:8080/sport/rest/sport/save", {sport}, this.options).map(this.extractData);
  }

  private extractData(res: Response) {
    let body = JSON.parse(res["_body"]);
    return body || { };
  } 
               
              

  private handleError(error: any): Promise<any> {
    console.error('An error occurred', error); // for demo purposes only
    return Promise.reject(error.message || error);
  }
}

