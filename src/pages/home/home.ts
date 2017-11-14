import { Component } from '@angular/core';
import { NavController, IonicPage} from 'ionic-angular';
import { DataProvider } from "../../providers/data/data";

@IonicPage()
@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

    myItems:any;

  constructor(public navCtrl: NavController, public data: DataProvider) {

  }

  ionViewDidLoad () {
      this.myItems = this.data.myItems;
  }

  gotoInfoPage() {
      this.navCtrl.push('InfoPage');
  }

  showDesc(item): void {
      this.navCtrl.push('DescriptionPage', item);
  }

}
