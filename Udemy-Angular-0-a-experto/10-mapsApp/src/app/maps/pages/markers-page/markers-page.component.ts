import { AfterViewInit, Component, ElementRef, ViewChild } from '@angular/core';


import mapboxgl, { LngLat, Map, Marker } from 'mapbox-gl'; // or "const mapboxgl = require('mapbox-gl');"

(mapboxgl.accessToken as any) = 'pk.eyJ1IjoiZXNuYWlwYWgiLCJhIjoiY2x3Nm5jcTFmMTJ4azJ6cno1ZHBrcHdrbyJ9.k-EzNsI-PtqTTGKlAk3FnQ';
@Component({
  templateUrl: './markers-page.component.html',
  styleUrl: './markers-page.component.css'
})
export class MarkersPageComponent implements AfterViewInit {
  @ViewChild('map')
  public divMap?: ElementRef;

  public map?: Map;

  public currentLngLat: LngLat = new LngLat(-0.61, 38.82)


  ngAfterViewInit(): void {



    if (!this.divMap) throw new Error('No se ha podido encontrar el map container')

    this.map = new mapboxgl.Map({
      container: this.divMap.nativeElement, // container ID
      style: 'mapbox://styles/mapbox/streets-v12', // style URL
      center: this.currentLngLat, // starting position [lng, lat]
      zoom: 13  // starting zoom
    });

    //   const markerHtml = document.createElement('div');

    //   const marker = new Marker({
    //     element: markerHtml
    //   })
    //     .setLngLat(this.currentLngLat)
    //     .addTo(this.map);

  }

  createMarker() {

    if(!this.map) return;

    const color = '#xxxxxx'.replace(/x/g, y=>(Math.random()*16|0).toString(16));

    const lngLat = this.map.getCenter();

    this.addMarker(lngLat, color);
  }

  addMarker(lngLat: LngLat, color: string = 'lightblue') {
    if (!this.map) return;

    const marker = new Marker({
      color,
      draggable: true
    })
      .setLngLat(lngLat)
      .addTo(this.map);

  }

}
