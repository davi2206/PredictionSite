import { Injectable, inject } from '@angular/core';
import { Prediction } from '../models/prediction.model';


@Injectable({
  providedIn: 'root'
})
export class PredictionService {
  
  constructor() { }

  getBabyPredictions() {
    // TODO: Put an API call here instead
    let predictions = [
      new Prediction("David", new Date("2023-12-24"), true),
      new Prediction("Sara", new Date("2024-01-02"), true),
      new Prediction("Benjamin", new Date("2023-12-22"), true),
      new Prediction("Marianne", new Date("2000-01-01"), false),
    ];

    // Sort by Date
    var byDate = predictions.slice(0);
    byDate.sort(function(a,b) {
      return a.prediction.valueOf() - b.prediction.valueOf();
    });

    return byDate;
  }
}
