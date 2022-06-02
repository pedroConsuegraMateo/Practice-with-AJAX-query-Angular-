import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Universidad } from './Universidad';

@Component({
  selector: 'app-tarjeta',
  templateUrl: './tarjeta.component.html',
  styleUrls: ['./tarjeta.component.css']
})
export class TarjetaComponent implements OnInit {
  public universidades?: Observable<Universidad[]>;
  public listaUnis?: Universidad[];
  public pais: string = "spain";
  constructor(private _HttpClient: HttpClient) { }

  ngOnInit(): void {
    let unis = this._HttpClient.get<Universidad[]>("http://universities.hipolabs.com/search?country=spain");
    unis.subscribe(
      {
        next: (resp: any) => {
          console.log("Ha ido todo bien, ", resp);
          this.listaUnis = resp;
          console.log("Universidades: " + this.listaUnis);
          
        },
        error: (error) => {
          console.error("Ha habido un error, ", error);
        }
      }
    );
  }
  public showUniversidades(pais: string){
    let unis = this._HttpClient.get<Universidad[]>(`http://universities.hipolabs.com/search?country=${pais}`);
    unis.subscribe(
      {
        next: (resp: any) => {
          console.log("Ha ido todo bien, ", resp);
          this.listaUnis = resp;
          console.log("Universidades: " + this.listaUnis);
          
        },
        error: (error) => {
          console.error("Ha habido un error, ", error);
        }
      }
    );
  }
}
