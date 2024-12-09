import { ApplicationConfig, provideZoneChangeDetection } from '@angular/core';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';

import { providePrimeNG } from 'primeng/config';
import Aura from '@primeng/themes/aura';
import MyPreset from './themes/mypreset';

export const appConfig: ApplicationConfig = {
  providers: [
    provideZoneChangeDetection({ eventCoalescing: true }), 
    provideRouter(routes),
    provideAnimationsAsync(),
    providePrimeNG({ 
      ripple: true,
      theme: {
        preset: MyPreset,
        options: {
          cssLayer: {
              name: 'primeng',
              order: '  tailwind-base, primeng, tailwind-utilities'
          }
      }
                
      }
    })
  ]
};