import { Component, OnInit } from '@angular/core';
import { CampeonesService } from '../campeones.service';
import { SharedModule } from '../../shared/shared.module';



@Component({
  selector: 'app-campeones',
  templateUrl: './campeones.component.html',
  styleUrls: ['./campeones.component.css']
})
export class CampeonesComponent implements OnInit {

  campeones: any = []
  nuevo: any = []


  constructor(private CampeonesService: CampeonesService, private shared: SharedModule) { }

  currentPage = 1;
  maxSize: number;
  totalItems: number;
  itemsPerPage: number = 6;

  ngOnInit() {
    this.mosntrarCampeones()
  }

  mosntrarCampeones(){
    this.CampeonesService.getCampeones()
      .subscribe(res => {
        this.campeones = Object.values(res['data'])
        console.log(this.campeones.length)
        this.totalItems = this.campeones.length;
        this.maxSize = 5;
        // console.log(this.totalItems)
        // console.log(this.maxSize)
        // console.log(this.campeones.slice(0, this.itemsPerPage))
        this.nuevo = this.campeones.slice(0,this.itemsPerPage)
        

      })
  }

  cambiodePagina(event: any): void {
    this.currentPage = event.page;
    const startItem = (event.page - 1) * this.itemsPerPage;
    const endItem = event.page * event.itemsPerPage;
    console.log(this.campeones.slice(startItem, endItem));
    // this.nuevo = this.campeones.slice(startItem, endItem);
    setTimeout(() => {
      this.nuevo = this.campeones.slice(startItem, endItem);
    }, 200);
    
    
  }


}
