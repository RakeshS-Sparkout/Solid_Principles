import { InterestCalculator } from "../interest-calculator/interest-calculator";
import { IInterestCalculator } from "../interest-calculator/interest-calculator.interface";
import { IBankAccount } from "./bank-account.interface";

export class BankAccount implements IBankAccount, IInterestCalculator {
    amount = 1000;

    constructor(interestCalculator: InterestCalculator){
        this.interestCalculator = interestCalculator;
    }
    interestCalculator: InterestCalculator;

    deposit(amount: number): void {
        this.amount += amount;
    }

    withdraw(amount: number): void {
        this.amount -= amount;
    }

    calculateInterest(): number {
        return this.interestCalculator.calculateInterest(5, this.amount);
    }
}