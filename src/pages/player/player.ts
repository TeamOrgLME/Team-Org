import { Component } from '@angular/core';

import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-player',
  templateUrl: 'player.html'
})
export class Player {
players: string[];

  constructor(public navCtrl: NavController) {
    

    // Let's populate this page with some filler content for funzies
    this.players = ['16 Mario', '37 Nino', '11 Janni', '18 Luca', '17 Micha', '1 Ronny'];

      };

}
