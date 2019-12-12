import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';



@Injectable({
  providedIn: 'root'
})
export class CampeonesService {

  constructor(private http:HttpClient) { }

  getCampeones(){
    return this.http.get('http://ddragon.leagueoflegends.com/cdn/9.23.1/data/es_ES/champion.json')
      
  }
}
