import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FlightsSearchComponent } from './flights-search/flights-search.component';
import { RouterModule } from '@angular/router';

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild([
      {
        path: 'flights-search',
        component: FlightsSearchComponent
      }
    ])
  ],
  declarations: [
    FlightsSearchComponent
  ]
})
export class FlightsModule { }
