/**
* @Author: Tushar Agarwal(tusharcoder) <tushar>
* @Date:   2017-01-26T15:15:19+05:30
* @Email:  tamyworld@gmail.com
* @Filename: app.module.ts
* @Last modified by:   tushar
* @Last modified time: 2017-01-26T15:38:22+05:30
*/



import { NgModule, ErrorHandler } from '@angular/core';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import {Storage} from "@ionic/storage";
import {Localstorage} from '../providers/localstorage';

@NgModule({
  declarations: [
    MyApp,
    HomePage
  ],
  imports: [
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage
  ],
  providers: [
    {provide: ErrorHandler, useClass: IonicErrorHandler},
      Localstorage,
    Storage]
})
export class AppModule {}
