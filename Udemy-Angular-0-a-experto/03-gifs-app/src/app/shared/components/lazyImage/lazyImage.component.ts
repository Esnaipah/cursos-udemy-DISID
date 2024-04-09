import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'shared-lazy-image',
  templateUrl: './lazyImage.component.html',
  styleUrl: './lazyImage.component.css',
})
export class LazyImageComponent implements OnInit {

  @Input()
  public url!: string;
  @Input()
  public alt?: string = '';

  public hasLoaded: boolean= false;

  ngOnInit(): void {
    if (!this.url) throw new Error('Url property is mandatory');

  }

  onLoad():void {
    console.log('Image loaded');
    this.hasLoaded = true;
  }

}
