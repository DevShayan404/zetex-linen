import { Location } from '@angular/common';
import { Component } from '@angular/core';
import { Router, RouterLink } from '@angular/router';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css',
})
export class NavbarComponent {
  navLinks: string[] = ['Home', 'About Us', 'Products', 'Contact'];
  activeLink: number = 0;

  constructor(private router: Router, private location: Location) {}

  ngOnInit() {
    const url = this.location.path();
    this.setActiveLinkByUrl(url);
  }

  setActiveLink(i: number, name: string) {
    switch (name) {
      case 'Home':
        this.router.navigate(['']);
        this.activeLink = i;
        break;
      case 'About Us':
        this.router.navigate(['about-us']);
        this.activeLink = i;
        break;
      case 'Products':
        this.router.navigate(['products']);
        this.activeLink = i;
        break;
      case 'Contact':
        this.router.navigate(['contact']);
        this.activeLink = i;
        break;

      default:
        break;
    }
  }
  setActiveLinkByUrl(url: string) {
    console.log(url);
    switch (url) {
      case ' ':
        this.activeLink = 0;
        break;
      case '/about-us':
        this.activeLink = 1;
        break;
      case '/products':
        this.activeLink = 2;
        break;
      case '/contact':
        this.activeLink = 3;
        break;
      default:
        this.activeLink = 0;
        break;
    }
  }
}
