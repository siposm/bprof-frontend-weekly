import { Component } from '@angular/core';
import { Developer } from '../developer';
import { DeveloperService } from '../developer.service';
import { StatisticsService } from '../statistics.service';

@Component({
  selector: 'app-stats',
  standalone: false,
  templateUrl: './stats.component.html',
  styleUrl: './stats.component.sass'
})
export class StatsComponent {
  constructor(public statService: StatisticsService) { }
}
