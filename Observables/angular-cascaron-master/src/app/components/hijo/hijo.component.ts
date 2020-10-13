import { Component, OnInit, OnDestroy } from '@angular/core';
import { DataService } from 'src/app/services/data.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-hijo',
  templateUrl: './hijo.component.html',
  styleUrls: ['./hijo.component.css']
})
export class HijoComponent implements OnInit, OnDestroy {


  mensaje: string  = 'Mensaje !';

  nombreSuscription: Subscription;

  constructor(public dataService: DataService) { }

  ngOnInit() {

    /**
    this.nombreSuscription = this.dataService.nombre$.subscribe( resp =>{

      this.mensaje = resp;  
    });

    */
  }

  ngOnDestroy(){
    
    //this.nombreSuscription.unsubscribe();
  }

}
