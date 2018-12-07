import {Component, ViewEncapsulation} from '@angular/core';

@Component({
  selector: 'app-root',
  
  template: ` <app-banners></app-banners> 
              <app-services></app-services>
              <app-products></app-products>
              <app-prices></app-prices>
              <app-contact></app-contact>
            `,
})
export class AppComponent{

  title = 'WTM';

  constructor() { }

}
