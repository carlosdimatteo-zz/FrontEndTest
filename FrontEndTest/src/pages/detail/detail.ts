import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, LoadingController, AlertController } from 'ionic-angular';
import { UserInfoProvider } from '../../providers/user-info/user-info';

/**
 * Generated class for the DetailPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-detail',
  templateUrl: 'detail.html',
})
export class DetailPage {
  private user:{}={
    picture:{
      thumbnail:''
    },
    email:'',
    nat:'',
    dob:{
      age:0
    },
    location:{
      street:''
    },
    phone:'',

  }
  private randomNumber:number
  private firstName : string
  private lastName:string
  constructor(public navCtrl: NavController, public navParams: NavParams,private userInfo:UserInfoProvider,private loadingCtrl:LoadingController,private alertCtrl:AlertController) {
    this.randomNumber = Math.round(100+(Math.random()*(999-100)))
    const loader = this.loadingCtrl.create({
      content:'Please Wait...'
    })
    loader.present()
    this.firstName = this.navParams.get('first')
    this.lastName = this.navParams.get('last')
    this.userInfo.getUserInfo().subscribe((res:any)=>{
        this.user = res.results[0]
        console.log('user',this.user)
        loader.dismiss()
    })
  }

  favorite(){
    const alert = this.alertCtrl.create({
      title: 'Added!!',
      subTitle: 'You have added '+this.firstName+' '+this.lastName+' To your favorites!',
      buttons: ['OK']
    });
    alert.present();
  }

  call(){
    const alert = this.alertCtrl.create({
      title: 'Calling',
      subTitle: 'Calling '+this.firstName+' '+this.lastName+', please wait while we redirect you...',
      buttons: ['OK']
    });
    alert.present();
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad DetailPage');
  }

}
