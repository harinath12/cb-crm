import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {LeadsComponent} from './leads.component';
import { AddLeadComponent } from './add-lead/add-lead.component';
import { UserComponent } from './user/user.component';
import { UserRolesComponent } from './user-roles/user-roles.component';
import { SettingsComponent } from './settings/settings.component';
import { ReportsComponent } from './reports/reports.component';
import { ProfileComponent } from './profile/profile.component';


const routes: Routes = [{
  path: '',
  children: [
    {
      path: '',
      component: LeadsComponent,
    },
    {
      path: 'add',
      component: AddLeadComponent,
    },
    {
      path: 'user',
      component: UserComponent,
    },
    {
      path: 'user-role',
      component: UserRolesComponent,
    },
    {
      path: 'settings',
      component: SettingsComponent,
    },
    {
      path: 'reports',
      component: ReportsComponent,
    },
    {
      path: 'profile',
      component: ProfileComponent,
    },
  ]
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class LeadsRoutingModule { }
