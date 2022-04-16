import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  // template:'`<strong>Test</strong>`'
  styleUrls: ['./app.component.scss']
  // styles: [`h1,h5 {color:red}`]
})
export class AppComponent {
showUser:boolean=true
  user= 'Abdulaziz ibn Akram'
  title = 'my-app';
}
