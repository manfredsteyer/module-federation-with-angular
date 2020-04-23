// import { AppModule } from './app/app.module';
import { AppComponentFac } from './app/app.component';
import { environment } from './environments/environment';
import { enableProdMode, ɵrenderComponent as renderComponent} from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';


import '@angular/compiler';

console.debug('enableProdMode', enableProdMode);

(async _ => {

  // const enableProdMode = await import('@angular/core').then(m => m.enableProdMode);
  // const renderComponent = await import('@angular/core').then(m => m.ɵrenderComponent);

  // const enableProdMode = require('@angular/core').enableProdMode;
  // const renderComponent = require('@angular/core').ɵrenderComponent;

  // const platformBrowserDynamic = await import('@angular/platform-browser-dynamic').then(m => m.platformBrowserDynamic);

  if (environment.production) {
    console.debug('prod mode');
    enableProdMode();
  }
  else {
    console.debug('dev mode');
  }

  // platformBrowserDynamic().bootstrapModule(AppModule)
  //   .catch(err => console.error(err));

  const AppComponent = await AppComponentFac();
  renderComponent(AppComponent);

})();
