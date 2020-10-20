import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {LeadsComponent} from './leads.component';
import { AddLeadComponent } from './add-lead/add-lead.component';


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
    }
  ]
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class LeadsRoutingModule { }
