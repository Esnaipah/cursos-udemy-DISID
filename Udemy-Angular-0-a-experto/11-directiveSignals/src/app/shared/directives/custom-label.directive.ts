import { Directive, ElementRef, Input } from '@angular/core';
import { ValidationErrors } from '@angular/forms';

@Directive({
  selector: '[customLabel]'
})
export class CustomLabelDirective {

  private htmlElement?: ElementRef<HTMLElement>
  private _color: string = 'red';
  private _errors?: ValidationErrors | null;

  @Input() set color (value: string) {
    this._color = value;
    this.setStyle();
  }

  @Input() set errors (value: ValidationErrors | null | undefined) {
    this._errors = value;
    this.setMessage();
  }

  constructor( private el: ElementRef<HTMLElement>) {
    this.htmlElement = el;
  }

  setStyle() {
    if (!this.htmlElement) return;
    this.htmlElement!.nativeElement.style.color = this._color;
  }

  setMessage() {
    if (!this.htmlElement) return;
    if (!this._errors){
      this.htmlElement!.nativeElement.innerHTML = 'No hay errores';
    }
    const errors = Object.keys(this._errors || {})

    if (errors.includes('required')){
      this.htmlElement!.nativeElement.innerHTML = 'Campo requerido';
      return;
    }

    if (errors.includes('minlength')){
      this.htmlElement!.nativeElement.innerHTML = `Mínimo 6 caracteres. Actualmente ${this._errors!['minlength']['actualLength']}`;
      return;
    }

    if (errors.includes('email')){
      this.htmlElement!.nativeElement.innerHTML = 'Formato de email no válido';
      return;
    }


  }

}
