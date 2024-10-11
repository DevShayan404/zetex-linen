import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [],
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
}
