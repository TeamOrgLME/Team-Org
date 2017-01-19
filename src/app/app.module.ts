import { NgModule, ErrorHandler } from '@angular/core';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';

import { Home } from '../pages/home/home';
import { Player } from '../pages/player/player';
import { Checkout } from '../pages/checkout/checkout';
import { Finelist } from '../pages/finelist/finelist';
import { Matches } from '../pages/matches/matches';


@NgModule({
  declarations: [
    MyApp,
    Home,
    Player,
    Checkout,
    Finelist,
    Matches
  ],
  imports: [
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    Home,
    Player,
    Checkout,
    Finelist,
    Matches
  ],
  providers: [{provide: ErrorHandler, useClass: IonicErrorHandler}]
})
export class AppModule {}
