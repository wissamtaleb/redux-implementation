import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppState } from './reducers';
import { Login } from './auth.actions';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
 
 
 

  title = 'redux-angular-exercise';

  constructor(private store: Store<AppState>){
    
  }


  ngOnInit() {
    this.store.subscribe(state => {
      console.log(state);
    })
  }

 

    
  
 

  login(){

    this.store.dispatch(new Login());
  }
}
