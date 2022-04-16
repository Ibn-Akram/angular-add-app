import { Component, Input, OnChanges,DoCheck,OnDestroy, OnInit, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-adduser',
  templateUrl: './adduser.component.html',
  styleUrls: ['./adduser.component.scss']
})
export class AdduserComponent implements OnChanges,DoCheck,OnInit,OnDestroy {
  @Input()
  value:string='Full Name of user'
  constructor() { 
    console.log(`Addser constructor ${this.value}`);
  }


  ngOnInit(): void {
    console.log(`ng OnInit constructor  ${this.value}`);
    
  }
  ngDoCheck(): void {
    console.log(`ng DoCheck ${this.value}`);
  }
  ngOnChanges(changes: SimpleChanges): void {
    console.log(`ng onChanges ${this.value}`);
  }
ngOnDestroy(): void {
  console.log(`ng onDestroy ${this.value}`);
  
}

}
