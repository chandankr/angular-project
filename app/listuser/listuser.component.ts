import { Component, OnInit, Output, EventEmitter, ViewChild } from '@angular/core';
import { MydataService } from '../mydata.service'

@Component({
  selector: 'app-listuser',
  templateUrl: './listuser.component.html',
  styleUrls: ['./listuser.component.scss']
})
export class ListuserComponent implements OnInit {
 data;

 @ViewChild('id') id;
 @ViewChild('name') name;
 @ViewChild('age') age;
 @ViewChild('isactive') isactive;

 listData=[];
 public searchByName;
 public sortByID=false;
 public sortByName=true;
 public sortByAge=false;
 public sortByIsActive=false;
 public duplicateData;

 @Output() editUserInformation= new EventEmitter<number>();

  
  editData(id:number){
    console.log(id);
  	this.editUserInformation.emit(id);
  }

constructor(private _data:MydataService) {
	this.data=this._data.list();
    this.duplicateData=this.data;
   
 }
  	
  ngOnInit() {
  this.sort(2); 		
	
  }
  
  
  deleteData(id){
    console.log("::::"+id);
    if(confirm("really want to delete" + id)){
  	this._data.deleteData(id);
  	}
  	return;
  }

  searchData(name:string){
    if(name!=''){
    	return this.data=this._data.searchByName(name);
    	//alert(JSON.stringify(this.data));
  }else{
    	return this.data=this.duplicateData;
  }

  }

  removeClass(){
  	this.id.nativeElement.className='';
  	this.name.nativeElement.className='';
  	this.age.nativeElement.className='';
  	this.isactive.nativeElement.className='';
  }

  sort(val){
  	this.removeClass();
  	switch(val){
  		case 1:
  			this.id.nativeElement.className="glyphicon " +(this.sortByID?'glyphicon-sort-by-alphabet':'glyphicon-sort-by-alphabet-alt')+ ' active';
  			this.byID();
  			break;
  		case 2:
  			this.name.nativeElement.className="glyphicon " +(this.sortByID?'glyphicon-sort-by-alphabet':'glyphicon-sort-by-alphabet-alt')+ ' active';
  			this.byName();
  			break;
  		case 3:
  			this.age.nativeElement.className="glyphicon " +(this.sortByID?'glyphicon-sort-by-alphabet':'glyphicon-sort-by-alphabet-alt')+ ' active';
  			this.byAge();
  			break;
  		case 4:
  			this.isactive.nativeElement.className="glyphicon " +(this.sortByID?'glyphicon-sort-by-alphabet':'glyphicon-sort-by-alphabet-alt')+ ' active';
  			this.byIsActive();
  			break;					

  	}

  }

  byID(){

     this.sortByID=!this.sortByID;
     this.data=this.data.sort((a,b)=>{
        if(!this.sortByID){
        	return a.id<b.id;
        }else{
        	return a.id>b.id;
        }

     });
  }
  byName(){
     this.sortByName=!this.sortByName;
     this.data=this.data.sort((a,b)=>{
        if(!this.sortByName){
        	return a.name<b.name;
        }else{
        	return a.name>b.name;
        }

     });
  }
  byAge(){
     this.sortByAge=!this.sortByAge;
     this.data=this.data.sort((a,b)=>{
        if(!this.sortByAge){
        	return a.age<b.age;
        }else{
        	return a.age>b.age;
        }

     });
  }

  byIsActive(){
     this.sortByIsActive=!this.sortByIsActive;
     this.data=this.data.sort((a,b)=>{
        if(!this.sortByIsActive){
        	return a.isactive<b.isactive;
        }else{
        	return a.isactive>b.isactive;
        }

     });
  }

  
}
