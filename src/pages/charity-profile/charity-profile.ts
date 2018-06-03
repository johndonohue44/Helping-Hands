import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Charity } from '../../models/charity';
import { PaymentPage } from '../payment/payment';



@Component({
  selector: 'page-charity-profile',
  templateUrl: 'charity-profile.html',
})
export class CharityProfilePage {

  public charity: Charity;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.charity = this.navParams.get("charity");
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad CharityProfilePage');
  }
  navigateToPayment() {
    this.navCtrl.push(PaymentPage);
    }
}