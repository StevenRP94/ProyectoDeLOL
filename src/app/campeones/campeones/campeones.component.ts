import { Component, OnInit } from '@angular/core';
import { CampeonesService } from '../campeones.service';


@Component({
  selector: 'app-campeones',
  templateUrl: './campeones.component.html',
  styleUrls: ['./campeones.component.css']
})
export class CampeonesComponent implements OnInit {

  campeones:any = []
  

  constructor(private CampeonesService:CampeonesService) { }

  ngOnInit() {
      this.CampeonesService.getCampeones()
        .subscribe(res=>{
          this.campeones =  Object.values(res['data'])
          console.log(this.campeones)
        })
  }

}
