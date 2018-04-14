import { Component, OnInit } from '@angular/core';
import { User } from '../User'
import { MydataService } from '../mydata.service'
@Component({
  selector: 'app-adduser',
  templateUrl: './adduser.component.html',
  styleUrls: ['./adduser.component.scss']
})
export class AdduserComponent implements OnInit {
  
  model=new User("","","","");
  btVal="Submit";
  isEdit:boolean=false;
  countId=1;

  
  constructor(private _data:MydataService) { }

  ngOnInit() {
  }

  

  onSubmit(){
  	if(this.isEdit){
  		this.btVal="Submit";
  		this.isEdit=false;
  	}else{
  		this.model.id=this.countId++;
  		this.model.isactive=(!this.model.isactive)?false:true;
  		this._data.add(this.model);
  	}
  	this.model={};
  }

  getUserID(id:number){
  	this.btVal="Update";
  	this.isEdit=true;
  	let usrID=this._data.searchArray(id);
  	this.model=usrID;
  
  }

}
