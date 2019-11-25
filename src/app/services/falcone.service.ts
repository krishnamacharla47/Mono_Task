import { Injectable } from '@angular/core';
import { HttpClient,HttpHeaders } from '@angular/common/http';
import { Vehicles } from '../models/vehicles';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
  providedIn: 'root'
})
export class FalconeService {

  private planets_url='https://findfalcone.herokuapp.com/planets';
  private vehicles_url='https://findfalcone.herokuapp.com/vehicles';
  private token='https://findfalcone.herokuapp.com/token';
  private find='https://findfalcone.herokuapp.com/find';

  constructor(private http:HttpClient) { 
  }
  
  getPlanets(){
    return this.http.get<any>(this.planets_url)
  }
  
  getVehicles(){
    return this.http.get<Vehicles[]>(this.vehicles_url)
    
  }

  getTokenFromAPI(){
        return this.http.post<any>(this.token,null, {headers: new HttpHeaders({'Accept': 'application/json'})});
  }

  getGeneatetoken(){
    return !!localStorage.getItem('TOKEN');
  }

  getToken(){
      return localStorage.getItem('TOKEN');
  }

  FindFalcon(planetnames:any[],vehiclenames:any[]){
    var request ={
      "token":localStorage.getItem('TOKEN'),
      "planet_names": planetnames,
      "vehicle_names":vehiclenames
    }
    console.log(request);
    return this.http.post<any>(this.find,JSON.stringify(request),{headers: new HttpHeaders({'Accept': 'application/json','Content-Type' :'application/json'})})
  }

}
