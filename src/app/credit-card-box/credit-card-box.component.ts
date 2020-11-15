import { Component, OnInit, Input, OnDestroy } from '@angular/core';
import { CardService } from '../card.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-credit-card-box',
  templateUrl: './credit-card-box.component.html',
  styleUrls: ['./credit-card-box.component.css']
})
export class CreditCardBoxComponent implements OnInit,OnDestroy{

  cardNo = "";
  cardHolder : string = "MR. XYZ";
  cvv : string ="";
  expiration : string ="";

  containerToHighlight : string;
  highlightSubscription : Subscription;
  cardNoSubscription : Subscription;
  cardHolderSubscription : Subscription;
  cardCvvSubscription : Subscription;
  cardExpirationSubscription : Subscription;

  constructor(private cardService: CardService) { }

  ngOnInit(): void 
  {
    this.highlightSubscription = this.cardService.containerToHighlight.subscribe((text : string)=>
    {
      this.containerToHighlight=text;
    });
    this.cardNoSubscription = this.cardService.cardNo.subscribe((text :string)=>
    {
      this.cardNo = text;
    });
    this.cardHolderSubscription = this.cardService.cardHolder.subscribe((holderName : string)=>
    {
      this.cardHolder = holderName;
    });
    this.cardCvvSubscription = this.cardService.cardCvv.subscribe((cvv:string)=>
    {
      this.cvv = cvv;
    });
    this.cardExpirationSubscription = this.cardService.cardExpiration.subscribe((expiration:string)=>
    {
      this.expiration = expiration;
    }); 
   }
  ngOnDestroy()
  {
    this.highlightSubscription.unsubscribe();
    this.cardNoSubscription.unsubscribe();
    this.cardHolderSubscription.unsubscribe();
    this.cardExpirationSubscription.unsubscribe();
  }
}
