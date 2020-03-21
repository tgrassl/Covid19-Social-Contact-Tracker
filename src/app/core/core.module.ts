import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {NgxsModule} from '@ngxs/store';
import {EntityState} from './+state/entity.state';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    NgxsModule.forFeature([EntityState])
  ]
})
export class CoreModule { }
