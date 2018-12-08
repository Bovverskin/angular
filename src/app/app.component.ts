import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'new-app';
  videos = [
    {name: 'video one', liked: true},
    {name: 'video two', liked: false}
  ]
  views: 2
  liked: true;
  constructor(){}
  }
  
  handleClick(){
    console.log( "Someone clicked the 'Like' button in the template :-)" )
}