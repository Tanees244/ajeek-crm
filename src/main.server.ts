import { platformServer } from '@angular/platform-server';
import { AppComponent } from './app/app.component'; // Import the standalone AppComponent
import { appConfig } from './app/app.config'; // Your app configuration for SSR

platformServer([{ provide: 'appConfig', useValue: appConfig }])
  .bootstrapModule(AppComponent)
  .catch(err => console.error(err));
