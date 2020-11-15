import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { CardService } from '../card.service';


@Component({
  selector: 'app-credit-card-form',
  templateUrl: './credit-card-form.component.html',
  styleUrls: ['./credit-card-form.component.css']
})
export class CreditCardFormComponent implements OnInit {

  creditCardForm : FormGroup;
  constructor(private cardService : CardService) { }

  ngOnInit(): void {
    this.initForm();
  }
  private initForm()
  {
    this.creditCardForm = new FormGroup(
      {
        'cardNo' : new FormControl(''),
        'cardHolder': new FormControl(''),
        'expMonth': new FormControl('Month'),
        'expYear': new FormControl('Year'),
        'cvv' : new FormControl()
      }
    );
  }
  
  putBlankSpaceInCardNo(index: number)
  {
    var val = this.creditCardForm.get('cardNo');
    let lastdigit = val.value.charAt(index);
    val.setValue(val.value.substring(0,index));
    val.setValue(val.value.concat(" "));
    val.setValue(val.value.concat(lastdigit));
  }
  onInputCardNo(element : InputEvent)
  {
    var data = +element.data;
    var val = this.creditCardForm.get('cardNo');
    if(!(data>=0) || !(data<=9) || element.data==" ")
    {
      val.setValue(val.value.substring(0,val.value.length-1));
    }
    else
    {
      if( element.data!=null )
      {
        if(val.value.length === 5)
        {
          this.putBlankSpaceInCardNo(4);
        }
        else if(val.value.length === 10)
        {
          this.putBlankSpaceInCardNo(9);
        }
        else if(val.value.length === 15)
        {
          this.putBlankSpaceInCardNo(14);
        }
      }
      else if(element.data==null && (val.value.length === 5 || val.value.length === 10 || val.value.length === 15))
      {
        val.setValue(val.value.substring(0,val.value.length-1));
      }
      //console.log(val.value);
      this.cardService.cardNo.next(val.value);
    }
  }
  onInputCardHolder(event : InputEvent)
  {
    var cardHolderControl = this.creditCardForm.get('cardHolder');
    cardHolderControl.setValue(cardHolderControl.value.toUpperCase());
    if(event.data==null)
    {
      this.cardService.cardHolder.next(cardHolderControl.value);
    }
    else
    {
      var asciiValueOfData = event.data.toLowerCase().charCodeAt(0);
      if(asciiValueOfData==32)
      {
        if(cardHolderControl.value.length==1)
        cardHolderControl.setValue(cardHolderControl.value.substring(0,cardHolderControl.value.length-1));
        else
        this.cardService.cardHolder.next(cardHolderControl.value);
      }
      else if(asciiValueOfData >= 97 && asciiValueOfData <= 122)
      {
        this.cardService.cardHolder.next(cardHolderControl.value);
      }
      else
      cardHolderControl.setValue(cardHolderControl.value.substring(0,cardHolderControl.value.length-1));
    }
  }
  onInputCVV(event : InputEvent)
  {
    var data = +event.data;
    var cvvControl = this.creditCardForm.get('cvv');
    if(!(data>=0) || !(data<=9) || event.data==" ")
    {
      cvvControl.setValue(cvvControl.value.substring(0,cvvControl.value.length-1));
    }
    else
    {
      this.cardService.cardCvv.next(cvvControl.value);
    }
  }
  onInputExpDate()
  {
    var expirationMonthControl = this.creditCardForm.get('expMonth').value;
    var expirationYearControl = this.creditCardForm.get('expYear').value;
    this.cardService.cardExpiration.next(expirationMonthControl+expirationYearControl);
  }
  onSubmit()
  {
    console.log(this.creditCardForm);
  }
  onFocus(text :string)
  {
    this.cardService.containerToHighlight.next(text);
  }
}
