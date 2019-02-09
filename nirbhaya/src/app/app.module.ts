import { CallNumber } from '@ionic-native/call-number';
import { HelpLine } from './../pages/help/help';

import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { AboutUs } from './../pages/aboutus/about';


import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { Register } from '../pages/register/register';
import { PoliceNearBy } from '../pages/police/police';
import { IonicStorageModule } from '@ionic/storage';
import {SMS} from '@ionic-native/sms'
import {Geolocation} from '@ionic-native/geolocation'

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    AboutUs,
    HelpLine,
    Register,
    PoliceNearBy


  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    IonicStorageModule.forRoot(),
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    AboutUs,
    HelpLine,
    Register,
    PoliceNearBy

  ],
  providers: [
    StatusBar,
    SplashScreen,
    SMS,
    Geolocation,
    CallNumber,

    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
