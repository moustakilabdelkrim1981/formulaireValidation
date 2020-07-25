import { Component, OnInit } from '@angular/core';
import { DomontService } from '../domont.service';

@Component({
  selector: 'app-domont',
  templateUrl: './domont.component.html',
  styleUrls: ['./domont.component.css']
})
export class DomontComponent implements OnInit {
   


  constructor(){ 
    
  }
  
    
  ngOnInit(): void {
    
  }

    log(x){
      console.log(x);
    }
   
  
}
