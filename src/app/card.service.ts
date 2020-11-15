import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CardService {

  containerToHighlight = new Subject<string>();
  cardNo = new Subject<string>();
  cardHolder = new Subject<string>();
  cardCvv = new Subject<string>();
  cardExpiration = new Subject<string>();
  constructor() { }
}
