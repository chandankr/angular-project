import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule }   from '@angular/forms';

import { MydataService } from './mydata.service'
import { AppComponent } from './app.component';
import { AdduserComponent } from './adduser/adduser.component';
import { ListuserComponent } from './listuser/listuser.component';
import { SearchComponent } from './search/search.component';
import { ConvertBooleanPipe } from './convert-boolean.pipe';


@NgModule({
  declarations: [
    AppComponent,
    AdduserComponent,
    ListuserComponent,
    SearchComponent,
    ConvertBooleanPipe
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [MydataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
