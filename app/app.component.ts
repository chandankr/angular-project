
import { Component, ViewChild, OnInit, AfterViewInit } from '@angular/core';
import { AdduserComponent } from './adduser/adduser.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent  implements OnInit{
  title = 'app';

  @ViewChild ( AdduserComponent ) userid : childVM; 
  editData(id:number){
  	this.userid.getUserID(id);
  
  }
}
