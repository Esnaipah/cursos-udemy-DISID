import { AfterViewInit, Component, ElementRef, Input, ViewChild } from '@angular/core';
import mapboxgl, { Marker } from 'mapbox-gl';

@Component({
  selector: 'map-mini-map',
  templateUrl: './mini-map.component.html',
  styleUrl: './mini-map.component.css'
})
export class MiniMapComponent implements AfterViewInit{

  @ViewChild('map')
  public divMap?: ElementRef;

  @Input() lngLat?: [number, number]

  ngAfterViewInit(): void {
    if (!this.divMap) throw 'Map container not found'
    if (!this.lngLat) throw 'LngLat not found'


      const map = new mapboxgl.Map({
        container: this.divMap.nativeElement, // container ID
        style: 'mapbox://styles/mapbox/streets-v12', // style URL
        center: this.lngLat, // starting position [lng, lat]
        zoom: 14, // starting zoom
        interactive: false,
      });

      new Marker ()
        .setLngLat(this.lngLat)
        .addTo(map)

  }




}
