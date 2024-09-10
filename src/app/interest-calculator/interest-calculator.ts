export class InterestCalculator {
    calculateInterest(rate: number, amount: number): number {
        return (rate * amount) / 100;
    }
}