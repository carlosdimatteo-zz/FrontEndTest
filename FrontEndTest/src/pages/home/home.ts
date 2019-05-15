import { UserInfoProvider } from './../../providers/user-info/user-info';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, LoadingController } from 'ionic-angular';
import { DetailPage } from '../detail/detail';

/**
 * Generated class for the HomePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-home',
  templateUrl: 'home.html',
})
export class HomePage {
  private userType: string
  private userList: Array<{}>=[]
  private customersList: Array<{}>=[]
  private invitesList: Array<{}>=[]
  constructor(public navCtrl: NavController, public navParams: NavParams,private userInfo:UserInfoProvider,private loadingCtrl:LoadingController) {

    this.userType='pros'
    const loader = this.loadingCtrl.create({
      content:'Please Wait...'
    })
    loader.present()
    this.userInfo.getUsers().subscribe((res:any)=>{
      this.customersList=res.results[0]
      this.customersList.sort((firstUser:any,secondUser:any)=>{
        // console.log(`sorting ${firstUser.first} - ${secondUser.first}`)
        return this.letterCompare(firstUser, secondUser)
      })
      this.customersList = this.groupList(this.customersList)
    })
    this.userInfo.getUsers().subscribe((res:any)=>{
      this.invitesList=res.results[0]
      this.invitesList.sort((firstUser:any,secondUser:any)=>{
        return this.letterCompare(firstUser, secondUser)
      })
      this.invitesList = this.groupList(this.invitesList)
    })
     this.userInfo.getUsers().subscribe((res:any)=>{
      this.userList = res.results[0]
      this.userList.sort((firstUser:any,secondUser:any)=>{
        return this.letterCompare(firstUser, secondUser)
      })
      this.userList = this.groupList(this.userList)
      loader.dismiss()
    })

    

  }

    letterCompare=(firstItem,secondItem)=>{
      let letter1 = firstItem.first.charAt(0)
      let letter2 = secondItem.first.charAt(0)
      return letter1<letter2 ? -1:letter1>letter2? 1:0
    }


    groupList(list:Array<any>){
      let groupList=[]
      let currentItems = []
      let currentLetter=list[0].first.charAt(0)
      // console.log('first letter : ',currentLetter)
      list.forEach((item)=>{
        if (item.first.charAt(0) !== currentLetter && currentItems.length >0){
          let newGroup = {
            letter:currentLetter,
            users:currentItems
          }
          // console.log('created group for letter '+currentLetter+'next letter',item.first.charAt(0))
          // console.log('group created',newGroup)
          groupList.push(newGroup)
          currentItems=[]
          currentLetter=item.first.charAt(0)
        } else{
          // console.log(item.first.charAt(0)+"is same as "+currentLetter)
          currentItems.push(item)
        }

      })
      return groupList
    }

  ionViewDidLoad() {
    console.log('ionViewDidLoad HomePage');


  }


  goToDetail(first,last){
        this.navCtrl.push(DetailPage,{first,last})
  }

}
