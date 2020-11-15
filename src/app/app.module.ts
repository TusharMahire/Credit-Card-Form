import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms'

import { AppComponent } from './app.component';
import { CreditCardBoxComponent } from './credit-card-box/credit-card-box.component';
import { CreditCardFormComponent } from './credit-card-form/credit-card-form.component';
import { CardService } from './card.service';
import { CardNoFormatPipe } from './card-no-format.pipe';
import { ExpireFormatPipe } from './expire-format.pipe'

@NgModule({
  declarations: [
    AppComponent,
    CreditCardBoxComponent,
    CreditCardFormComponent,
    CardNoFormatPipe,
    ExpireFormatPipe
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule
  ],
  providers: [CardService],
  bootstrap: [AppComponent]
})
export class AppModule { }
