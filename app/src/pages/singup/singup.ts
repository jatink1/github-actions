import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';


@IonicPage()
@Component({
  selector: 'page-singup',
  templateUrl: 'singup.html',
})
export class SingupPage {

  username:any = false;
  password:any = false;

  fpassword: any;
  fname:any;

  ngname:any;
  ngpassword:any;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad SingupPage');
  }

  login(){
    this.navCtrl.pop();
  };


}
