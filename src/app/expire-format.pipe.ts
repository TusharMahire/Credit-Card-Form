import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'expireFormat'
})
export class ExpireFormatPipe implements PipeTransform {

  transform(value: string): string 
  {
    var expiration : string = "";
    if(value.length==0)
    {
      expiration+="MM/YY";
    }
    else
    {
      var whatnext : number;   
      if(value.charAt(0)=='M')
      {
        expiration+=('MM/');
        whatnext=5;
      }
      else
      {
        expiration+=(value.substring(0,2)+'/');
        whatnext=2;
      }
      if(Number.isInteger(+value.charAt(whatnext)))
        expiration+=(value.substring(whatnext+2));
      else
      expiration+=("YY");
    }
    return expiration;
  }

}
