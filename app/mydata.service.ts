import { Injectable } from '@angular/core';

@Injectable()
export class MydataService {

mydata=[];
constructor() { }

add(val){
  this.mydata.push(val);
}

edit(){
  	
}
list(){
	return this.mydata;
}
searchArray(id){
	let filteredElemnts=this.mydata.filter(element=>element.id==id);
	return filteredElemnts[0];
}
searchByName(name){
	let filteredElemnts=this.mydata.filter(element=>element.name==name);
	return filteredElemnts;
}

deleteData(id){
	for(var i=0;i<this.mydata.length;i++){
		if(this.mydata[i].id==id){
			this.mydata.splice(i,1);
			break;
		}
	}
	return; 
}

}
