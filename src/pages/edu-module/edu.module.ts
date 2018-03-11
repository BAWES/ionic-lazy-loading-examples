import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';

import { EducationPageModule } from './education/education.module';
import { EducationPageListModule } from './education-list/education-list.module';

@NgModule({
  imports: [
    EducationPageModule,
    EducationPageListModule,
  ],
  exports: [
    EducationPageModule,
    EducationPageListModule,
  ]
})
export class EduModule {}
