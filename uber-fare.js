class UberCalculator {
    constructor(baseFare, costPerMile, costPerMinute, surgeMultiplier) {
        this.baseFare = baseFare;
        this.costPerMile = costPerMile;
        this.costPerMinute = costPerMinute;
        this.surgeMultiplier = surgeMultiplier;
    }

    calculatePrice(distanceInMiles, timeInMinutes) {
        const totalFare = this.baseFare +
            (distanceInMiles * this.costPerMile) +
            (timeInMinutes * this.costPerMinute);
        
        const finalFare = totalFare * this.surgeMultiplier;

        return finalFare;
    }
}


const uberX = new UberCalculator(2.5, 1.2, 0.2, 1.5);

const distance = 5; 
const time = 15; 

const price = uberX.calculatePrice(distance, time);
console.log("Uber Price: $" + price.toFixed(2));
