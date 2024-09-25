import { bootstrapApplication } from '@angular/platform-browser';
import { provideExperimentalZonelessChangeDetection } from '@angular/core';

import { AppComponent } from './app/app.component';

bootstrapApplication(AppComponent, {
  providers: [provideExperimentalZonelessChangeDetection()],
}).catch(err => console.error(err));

// remove 'zone.js' from 'polyfills' in `angular.json` file
// then `npm uninstall zone.js` or `yarn remove zone.js`
