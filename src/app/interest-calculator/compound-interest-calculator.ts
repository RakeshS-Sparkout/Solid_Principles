import { IInterestCalculator } from "./interest-calculator.interface";

export class CompoundInterestCalculator implements IInterestCalculator {
    calculateInterest(rate: number, amount: number): number {
        return (rate * amount) / 100;
    }
}