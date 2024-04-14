import { Pipe, PipeTransform } from "@angular/core";

// pau | toggleCase = 'PAU'
// PAU | toggleCase = 'pau'


@Pipe({
  name: 'toggleCase'
})
export class ToggleCasePipe implements PipeTransform {


  transform(value: string, toUpper:boolean = false):string {
    return (toUpper) ? value.toUpperCase() : value.toLowerCase();
  }

}
