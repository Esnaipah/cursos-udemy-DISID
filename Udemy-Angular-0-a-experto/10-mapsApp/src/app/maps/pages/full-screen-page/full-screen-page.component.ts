import { AfterViewInit, Component, ElementRef, ViewChild } from '@angular/core';


import mapboxgl from 'mapbox-gl'; // or "const mapboxgl = require('mapbox-gl');"

(mapboxgl.accessToken as any) = 'pk.eyJ1IjoiZXNuYWlwYWgiLCJhIjoiY2x3Nm5jcTFmMTJ4azJ6cno1ZHBrcHdrbyJ9.k-EzNsI-PtqTTGKlAk3FnQ';

@Component({
  templateUrl: './full-screen-page.component.html',
  styleUrl: './full-screen-page.component.css'
})
export class FullScreenPageComponent implements AfterViewInit{

  @ViewChild('map')
  public divMap?: ElementRef;




  ngAfterViewInit(): void {

    if (!this.divMap) throw new Error('No se ha podido encontrar el map container')

    const map = new mapboxgl.Map({
      container: this.divMap.nativeElement, // container ID
      style: 'mapbox://styles/mapbox/streets-v12', // style URL
      center: [-74.5, 40], // starting position [lng, lat]
      zoom: 9, // starting zoom
    });
  }
}
