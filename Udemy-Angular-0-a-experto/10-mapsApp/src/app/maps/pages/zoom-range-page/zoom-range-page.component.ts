import { AfterViewInit, Component, ElementRef, OnDestroy, ViewChild } from '@angular/core';


import mapboxgl, { LngLat, Map } from 'mapbox-gl'; // or "const mapboxgl = require('mapbox-gl');"

(mapboxgl.accessToken as any) = 'pk.eyJ1IjoiZXNuYWlwYWgiLCJhIjoiY2x3Nm5jcTFmMTJ4azJ6cno1ZHBrcHdrbyJ9.k-EzNsI-PtqTTGKlAk3FnQ';

@Component({
  templateUrl: './zoom-range-page.component.html',
  styleUrl: './zoom-range-page.component.css'
})
export class ZoomRangePageComponent implements AfterViewInit, OnDestroy{

  @ViewChild('map')
  public divMap?: ElementRef;

  public zoom: number = 8;

  public map?: Map;

  public currentLngLat: LngLat = new LngLat(-0.61, 38.82)


  ngAfterViewInit(): void {

    console.log(this.divMap);


    if (!this.divMap) throw new Error('No se ha podido encontrar el map container')

    this.map = new mapboxgl.Map({
      container: this.divMap.nativeElement, // container ID
      style: 'mapbox://styles/mapbox/streets-v12', // style URL
      center: this.currentLngLat, // starting position [lng, lat]
      zoom: this.zoom  // starting zoom
    });

    this.mapListeners();
  }

  ngOnDestroy(): void {
      this.map?.remove();
  }

  mapListeners() {
    if (!this.map) throw new Error ('El mapa no está inicializado');

    this.map.on('zoom', (ev) => {

      this.zoom = this.map!.getZoom();

    })

    this.map.on('zoomend', (es) => {
      if (this.map!.getZoom() < 18 ) return;
      this.map!.zoomTo(18)
    })

    this.map.on('moveend', () => {
      this.currentLngLat = this.map!.getCenter();
      const {lng, lat} = this.currentLngLat;

    })

  }

  public changeZoomRanger (input: number) {
    this.zoom = input;
    this.map?.setZoom(this.zoom);
  }

  public changeZoomButtons (increment: number) {
    this.zoom += increment;
    this.map?.setZoom(this.zoom);
  }

}
