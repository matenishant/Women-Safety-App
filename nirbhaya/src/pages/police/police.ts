import { Component, ViewChild, ElementRef } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { Geolocation } from '@ionic-native/geolocation';

declare var google;
@Component({
   selector: 'page-police',
  templateUrl: 'police.html'
})
export class PoliceNearBy  {

  @ViewChild("map") mapElement: ElementRef;

  selectedItem: any;
  icons: string[];
lat :any
lng: any
map:any


  constructor(public navCtrl: NavController, public navParams: NavParams,public geolocation: Geolocation )
  {



      this.geolocation.getCurrentPosition().then((resp) => {
      console.log(this.lat = resp.coords.latitude);
      this.lng = resp.coords.longitude;

     console.log(this.lat+"::::"+this.lng )

    }).catch((error) => {
      console.log('Error getting location', error);
    });

    let watch = this.geolocation.watchPosition();
  watch.subscribe((data) => {
    this.lat = data.coords.latitude;
    this.lng = data.coords.longitude;
  //console.log(data.coords.latitude)
  //console.log(data.coords.longitude);
  });

  }

ngOnInit(): void {

  this.initMap();
}

initMap(){
this.geolocation.getCurrentPosition().then(res=>console.log(res))
  let coords = new google.maps.LatLng(12.9916928,77.6617984)
   let mapOptions =  google.maps.MapOptions= {
		center: coords,
    zoom: 14,
    mapTypeId : google.maps.MapTypeId.ROADMAP
  }

  this.map = new google.maps.Map(this.mapElement.nativeElement,mapOptions )

   let marker = google.maps.Marker = new google.maps.Marker({
    map : this.map,
    position : coords
  })   
}






}
