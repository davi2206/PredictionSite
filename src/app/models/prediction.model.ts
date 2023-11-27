



export class Prediction {
    
    constructor(public name: string, public prediction: Date, public betting: boolean) { }

    get isPastDate() {
        return Date.now() > (this.prediction?.valueOf() ?? Date.now());
    }
}