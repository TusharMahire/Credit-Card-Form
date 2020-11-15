import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'cardNoFormat'
})
export class CardNoFormatPipe implements PipeTransform {

  transform(value: string):string
  {
    for(let i=value.length;i<19;i++)
    {
      if(i==4 || i==9 || i==14)
      {
        value+=" ";
      }
      else value+="#";
    }
    return value;
  }
}
