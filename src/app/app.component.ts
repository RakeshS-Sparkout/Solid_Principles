import { Component } from '@angular/core';
import { BankMap, EntityMap } from './app.constant';
import { BankAccount } from './bank-account/bank-account';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Solid_Principles';

  bankTypes = BankMap;

  getInterest(bankType: string) {
      const bankAccount: BankAccount = EntityMap.get(bankType)!;
      if (bankAccount) {
        const interest = bankAccount.calculateInterest();
        console.log(interest);
      }
  }
}
