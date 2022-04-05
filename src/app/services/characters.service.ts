import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class CharactersService {

  constructor(private http: HttpClient) { }

  getAll(){
    return this.http.get(`${environment.pathApi}/characters`)
  }

  getStudents(){
    return this.http.get(`${environment.pathApi}/characters/students`)
  }

  getStaff(){
    return this.http.get(`${environment.pathApi}/characters/staff`)
  }

  getGrifo(){
    return this.http.get(`${environment.pathApi}/characters/house/gryffindor`)
  }
  getSerpe(){
    return this.http.get(`${environment.pathApi}/characters/house/slytherin`)
  }
  getCorvo(){
    return this.http.get(`${environment.pathApi}/characters/house/ravenclaw`)
  }
  getTasso(){
    return this.http.get(`${environment.pathApi}/characters/house/hufflepuff`)
  }
}
