import { SharedModule } from '../shared/shared.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SampleRoutingModule } from './sample-routing.module';
import { ContentComponent } from './content/content.component';

@NgModule({
  declarations: [ContentComponent],
  imports: [
    CommonModule,
    SampleRoutingModule,
    SharedModule
  ]
})
export class SampleModule { }
