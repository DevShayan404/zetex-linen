import { Component, HostListener } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
})
export class HomeComponent {
  startYear: number = 1989;
  yearsOfWork!: number;
  ngOnInit() {
    const currentYear = new Date().getFullYear();
    this.yearsOfWork = currentYear - this.startYear;
  }

  improvingBrand: number = 0;
  gettingTraffic: number = 0;
  targetRelevance: number = 0;
  increaseTrust: number = 0;
  activeDefer: boolean = false;
  @HostListener('window:scroll', [])
  onWindowScroll() {
    const yOffset = window.scrollY;
    const scrollTopButtonVisibility = yOffset > 3850;
    if (scrollTopButtonVisibility) {
      this.improvingBrand = 91;
      this.gettingTraffic = 85;
      this.targetRelevance = 89;
      this.increaseTrust = 94;
    }
    if (yOffset > 10) {
      this.activeDefer = true;
    }
  }
}
