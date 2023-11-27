import { Component } from '@angular/core';

import { faBaby } from '@fortawesome/free-solid-svg-icons';
import { faFaceLaughBeam } from '@fortawesome/free-regular-svg-icons';


import { PredictionService } from '../services/prediction.service';

@Component({
  selector: 'baby-prediction',
  templateUrl: './baby-prediction.component.html',
  styleUrls: ['./baby-prediction.component.css']
})
export class BabyPredictionComponent {
  faBaby = faBaby;
  faSmile = faFaceLaughBeam;

  constructor(private predictionService: PredictionService) {}

  predictions = this.predictionService.getBabyPredictions();
}
