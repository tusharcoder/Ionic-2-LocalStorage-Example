/**
* @Author: Tushar Agarwal(tusharcoder) <tushar>
* @Date:   2017-01-26T14:26:53+05:30
* @Email:  tamyworld@gmail.com
* @Filename: localstorage.ts
* @Last modified by:   tushar
* @Last modified time: 2017-01-26T15:35:54+05:30
*/



import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';
import {Storage} from '@ionic/storage';

/*
  Generated class for the Localstorage provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular 2 DI.
*/
@Injectable()
export class Localstorage {

  constructor(public http: Http,private storage:Storage) {
    console.log('Hello Localstorage Provider');
    }

    //store the email address
    setEmail(email){
    this.storage.set('email',email);
    }

    //get the stored email
    getEmail(){
    	this.storage.get('email').then(email=>{
    		console.log('email: '+ email);
    	});
    }

    //delete the email address
    removeEmail(){
    this.storage.remove('email').then(()=>{
    		console.log('email is removed');
    	});
    }

    //clear the whole local storage
    clearStorage(){
    	this.storage.clear().then(()=>{
		console.log('all keys are cleared');
    	});
    }

}
