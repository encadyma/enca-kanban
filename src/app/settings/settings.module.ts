import { NgModule }       from '@angular/core';
import { CommonModule }   from '@angular/common';
import { FormsModule }    from '@angular/forms';

import { ToolbarModule }    from '../toolbar/toolbar.module';

import { SettingsComponent } from './settings.component';
import { SettingsBarComponent } from './settings-bar.component';
import { SettingsViewComponent } from './settings-view.component';
import { SettingFormComponent } from './setting-form.component';
import { SettingOptionPickerComponent } from './setting-option-picker.component';
import { SettingOptionButtonComponent } from './setting-option-button.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ToolbarModule
  ],
  declarations: [
    SettingsComponent,
    SettingsBarComponent,
    SettingsViewComponent,
    SettingFormComponent,
    SettingOptionPickerComponent,
    SettingOptionButtonComponent
  ]
})
export class SettingsModule {}
