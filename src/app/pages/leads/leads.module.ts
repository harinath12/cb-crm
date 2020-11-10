import { NgModule } from '@angular/core';
import { NbCardModule, NbIconModule, NbInputModule, NbTreeGridModule,
  NbActionsModule,
  NbButtonModule,
  NbCheckboxModule,
  NbDatepickerModule,
  NbRadioModule,
  NbSelectModule,
  NbUserModule,
  NbStepperModule
 } from '@nebular/theme';
import { Ng2SmartTableModule } from 'ng2-smart-table';

import { ThemeModule } from '../../@theme/theme.module';
import { AddLeadComponent } from './add-lead/add-lead.component';
import { LeadsComponent } from './leads.component';
import { LeadsRoutingModule } from './leads-routing.module';
import { UserComponent } from './user/user.component';
import { UserRolesComponent } from './user-roles/user-roles.component';
import { SettingsComponent } from './settings/settings.component';
import { ReportsComponent } from './reports/reports.component';
import { ProfileComponent } from './profile/profile.component';
import { FormsModule } from '@angular/forms';
import { ApiService } from 'app/shared/service/api.service';




@NgModule({
  imports: [
    NbCardModule,
    NbTreeGridModule,
    NbIconModule,
    NbInputModule,
    NbStepperModule,
    ThemeModule,
    Ng2SmartTableModule,
    LeadsRoutingModule,
    NbButtonModule,
    NbActionsModule,
    NbUserModule,
    NbCheckboxModule,
    NbRadioModule,
    NbDatepickerModule,
    NbSelectModule,
    FormsModule,
  ],
  declarations: [
  LeadsComponent,
  AddLeadComponent,
  UserComponent,
  UserRolesComponent,
  SettingsComponent,
  ReportsComponent,
  ProfileComponent,
],
providers: [
  ApiService,
],
})
export class LeadsModule {

}
