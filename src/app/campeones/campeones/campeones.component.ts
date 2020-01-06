import { Component, OnInit, Input } from '@angular/core';
import { CampeonesService } from '../campeones.service';
import { SharedModule } from '../../shared/shared.module';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { ThrowStmt } from '@angular/compiler';
import { log } from 'util';



@Component({
  selector: 'app-campeones',
  templateUrl: './campeones.component.html',
  styleUrls: ['./campeones.component.css']
})
export class CampeonesComponent implements OnInit {

  campeones: any = []
  nuevo: any = []
  temporarCapeones:any[] = []
  nombreBusqueda:string;


  constructor(private CampeonesService: CampeonesService, private shared: SharedModule) { 
    this.filtro = new FormGroup({
      'nombre' : new FormControl("")
    })
  }

  currentPage = 1;
  maxSize: number;
  totalItems: number;
  itemsPerPage: number = 6;

  filtro:FormGroup

  ngOnInit() {
    this.mostrarCampeones()
  }



  mostrarCampeones(x = null){
   
    this.CampeonesService.getCampeones()
      .subscribe(res => {
        this.campeones = Object.values(res['data'])
        this.totalItems = this.campeones.length;
        var temp = []
        
        if(x == null || x == ""){
          this.nuevo = this.campeones.slice(0,this.itemsPerPage)
          this.temporarCapeones = this.nuevo;
          temp = this.campeones;
          
                 
        }else{
          
          for(let champs of this.campeones){
            console.log(x)
            let nombre = champs['name'];
            if(nombre.indexOf(x) >= 0){
              temp.push(champs);                           
            }
          }
          this.temporarCapeones = temp
          this.nuevo = temp;
          this.cambiodePagina({page: 1, itemsPerPage: 6});
          console.log(temp)
          
        }
  
          this.maxSize = 5;
      
        
      })
  }

 

  busqueda(){
    var x = this.filtro.value['nombre']
    x = x.toLowerCase();
    x = x.charAt(0).toUpperCase() + x.slice(1);
    this.mostrarCampeones(x)
    this.nombreBusqueda = x
  }
  
  

  cambiodePagina(event: any): void {
    console.log(event)
    this.currentPage = event.page;
    const startItem = (event.page - 1) * this.itemsPerPage;
    const endItem = event.page * event.itemsPerPage;
    console.log(this.temporarCapeones.slice(startItem, endItem));
    if (this.temporarCapeones.slice(startItem, endItem).length <= 0 && (this.nombreBusqueda == "" || this.nombreBusqueda == null)) {
      this.nuevo = this.campeones.slice(startItem, endItem);
    }else{
      this.nuevo = this.temporarCapeones.slice(startItem, endItem);
    }
    console.log(this.nuevo);
      
    
    
    
  }


}
