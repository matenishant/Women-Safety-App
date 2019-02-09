import { Register } from './../register/register';
import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { CallNumber } from '@ionic-native/call-number';
import { SMS } from '@ionic-native/sms';
import { Storage } from '@ionic/storage';
import { Geolocation } from '@ionic-native/geolocation';
@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  contact1:string
  contact2:string
  emer_txt : string
  lat :any
  lng:any

  constructor(public navCtrl: NavController,private callNumber: CallNumber, public sms: SMS, public storage: Storage,public geolocation: Geolocation)
   {

    this.geolocation.getCurrentPosition().then((resp) => {

      this.lat = resp.coords.latitude;
      this.lng = resp.coords.longitude;
     //console.log(this.lat+"::::"+this.lng)
    }).catch((error) => {
      console.log('Error getting location', error);
    });

    let watch = this.geolocation.watchPosition();
watch.subscribe((data) => {
  this.lat = data.coords.latitude;
  this.lng = data.coords.longitude;
// console.log(data.coords.latitude)
// console.log(data.coords.longitude);
});


    }





  emerg_btncall() {

    const gmapUrl = 'http://maps.google.com?q='+this.lat+","+this.lng;

    console.log(gmapUrl);



     var contact1 = this.storage.get('contact1')

     var contact2 = this.storage.get('contact2')

     var emer_txt = this.storage.get('emer_txt')



     this.navCtrl.setRoot(HomePage);



   Promise.all([contact1, contact2, emer_txt,gmapUrl])
   .then(values=>{
     if(!values[0])
     {
       alert('Please register First!!')
     }
      if(!values[1]){
        console.log('enter contact second')
     }
     if(!values[2]){
      console.log('Please register Emergency message!!')
     }
       else{
         this.sms.send(values[0],values[2])
         this.sms.send(values[0],gmapUrl)

         console.log(values)
        }})
   Promise.all([contact1, contact2, emer_txt])
   .then(values=>{
    if(!values[0])
    {
       console.log(values[0])
    }
     if(!values[1]){
      console.log(values[1])
    }
    if(!values[2]){
      console.log(values[2])
    }
      else{
        this.sms.send(values[1],values[2])
        this.sms.send(values[1],gmapUrl)
        console.log(values)
        alert('message sent!!')
       }})
        console.log("sms sending")


    }



  police_call(){
    alert("Calling police..!!")
    this.callNumber = this.callNumber;
    this.callNumber.callNumber("100", true)
    .then(res => console.log('Launched dialer!', res))
    .catch(err => console.log('Error launching dialer', err));
    console.log("Calling on "+this.callNumber)
  }

}
