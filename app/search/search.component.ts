import { Component, OnInit, EventEmitter, Output, ViewChild } from '@angular/core';


@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit {

  constructor() { }
  
  @Output() onSearch= new EventEmitter<string>();

  ngOnInit() {
  }
  
  searchData(name:string){
   this.onSearch.emit(name);
  }
}
