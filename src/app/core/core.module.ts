import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {NgxsModule} from '@ngxs/store';
import {EntityState} from './+state/entity.state';
import { SafePipe } from './pipes/safe.pipe';

@NgModule({
  declarations: [SafePipe],
  imports: [
    CommonModule,
    NgxsModule.forFeature([EntityState])
  ],
  exports: [
    SafePipe
  ]
})
export class CoreModule { }
