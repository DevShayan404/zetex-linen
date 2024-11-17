import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from './app/app.config';
import { AppComponent } from './app/app.component';

bootstrapApplication(AppComponent, appConfig)
  .catch((err) => console.error(err))
  .then(() => {
    const body = document.querySelector('body');
    setTimeout(() => {
      if (body) {
        body.classList.add('app-loaded');
      }
    }, 3000);
  });
