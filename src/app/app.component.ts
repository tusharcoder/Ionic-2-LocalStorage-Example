/**
* @Author: Tushar Agarwal(tusharcoder) <tushar>
* @Date:   2017-01-26T15:15:43+05:30
* @Email:  tamyworld@gmail.com
* @Filename: app.component.ts
* @Last modified by:   tushar
* @Last modified time: 2017-01-26T15:38:29+05:30
*/



import { Component } from '@angular/core';
import { Platform } from 'ionic-angular';
import { StatusBar, Splashscreen } from 'ionic-native';

import { HomePage } from '../pages/home/home';
import {Localstorage} from '../providers/localstorage';


@Component({
  templateUrl: 'app.html',
})
export class MyApp {
  rootPage = HomePage;
  email='tushar@somewhere.com';

  constructor(platform: Platform,private localstorage:Localstorage) {
    platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      StatusBar.styleDefault();
      Splashscreen.hide();
      this.saveEmail();
      this.getEmail();
      this.removeEmail();
      this.clearLocalStorage();
    });
  }
  saveEmail(){
    this.localstorage.setEmail(this.email);
  }
  getEmail(){
    this.localstorage.getEmail();
  }
  removeEmail(){
    this.localstorage.removeEmail();
  }
  clearLocalStorage(){
    this.localstorage.clearStorage();
  }
}
