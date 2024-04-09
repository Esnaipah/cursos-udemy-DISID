import { Component, EventEmitter, Input, OnDestroy, OnInit, Output, ViewChild } from '@angular/core';
import { Subject, Subscription, debounceTime } from 'rxjs';

@Component({
  selector: 'shared-search-box',
  templateUrl: './search-box.component.html',
  styles: []
})
export class SearchBoxComponent implements OnInit, OnDestroy{

  private debouncer: Subject<string> = new Subject<string>();
  private debouncerSuscription?: Subscription;

  @Input()
  public placeholder: string = '';
  @Input()
  public initialValue: string = '';

  @Output()
  public queryEmitter: EventEmitter<string> = new EventEmitter<string>()
  @Output()
  public onDebounce: EventEmitter<string> = new EventEmitter<string>()


  ngOnInit(): void {
    this.debouncerSuscription = this.debouncer
    .pipe(
      //cuando no se reciben valores en 0.4s se continúa el flujo
      debounceTime(400)
      )
      .subscribe(value => {
        this.onDebounce.emit(value);

      })
    }

    ngOnDestroy(): void {
      this.debouncerSuscription?.unsubscribe();
    }

  emitValue (value: string) {

    this.queryEmitter.emit(value)

  }

  onkeyPressed(searchTerm: string) {

    this.debouncer.next(searchTerm);

  }

}
