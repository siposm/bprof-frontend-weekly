import { Component } from '@angular/core';
import { StatisticsService } from '../statistics.service';

@Component({
  selector: 'app-stats',
  standalone: false,
  templateUrl: './stats.component.html',
  styleUrl: './stats.component.sass',
  providers: [StatisticsService]
})
export class StatsComponent {
  constructor(public statService: StatisticsService) { }
}
