import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { HomePage } from '../home/home';
import { Storage } from '@ionic/storage';


@Component({
   selector: 'page-register',
  templateUrl: 'register.html'
})
export class Register {
  selectedItem: any;
  contact1:string
  contact2:string
  emer_txt : string


  icons: string[];
  items: Array<{title: string, note: string, icon: string}>;

  constructor(public navCtrl: NavController, public navParams: NavParams,public storage: Storage)
  {
    // If we navigated to this page, we will have an item available as a nav param
    this.selectedItem = navParams.get('item');

    this.items = [];


  }

 async StoreInfo(contact1,contact2,emer_txt) {

    alert(" User Registered : "+this.contact1 + this.contact2 + this.emer_txt);
    console.log("this is we are storing - "+contact1,contact2,emer_txt);

    this.navCtrl.setRoot(HomePage);


     this.storage.set('contact1',this.contact1);
     this.storage.set('contact2',this.contact2);
     this.storage.set('emer_txt',this.emer_txt);

console.log("Values stored :  "+this.contact1+""+this.contact2+""+this.emer_txt);

     /*  return this.setData(key, data).then(
      () => console.log('setData() called', data)
    ).then(
      () => this.getData(key)
    ).then(
      value => console.log('getData() called', value)
    ) */


  }

  setData<T>(key: string, data: T): Promise<void> {
    return this.storage.ready().then(
      () => this.storage.set(key, JSON.stringify(data))
    );
  }

  getData<T>(key: string): Promise<T> {
    return this.storage.ready().then(
      () => this.storage.get(key)
    ).then(
      strObj => strObj ? JSON.parse(strObj) : null

    );

  }






  itemTapped(event, item) {
    // That's right, we're pushing to ourselves!
    this.navCtrl.push(Register, {
      item: item
    });
  }
}
