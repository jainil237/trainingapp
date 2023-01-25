import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
 
  title = 'UdemyMatAngular';
  openSideNav= false;
  SideNave(){
    this.openSideNav=true;
  }
}

