import { Component, OnInit } from '@angular/core';
import { NbComponentShape, NbComponentSize, NbComponentStatus } from '@nebular/theme';
import { LocalDataSource } from 'ng2-smart-table';

@Component({
  selector: 'ngx-add-lead',
  templateUrl: './add-lead.component.html',
  styleUrls: ['./add-lead.component.scss']
})
export class AddLeadComponent implements OnInit {
  statuses: NbComponentStatus[] = [ 'primary', 'success', 'info', 'warning', 'danger' ];
  shapes: NbComponentShape[] = [ 'rectangle', 'semi-round', 'round' ];
  sizes: NbComponentSize[] = [ 'tiny', 'small', 'medium', 'large', 'giant' ];

  lead: any = {meta: {}};
  eligibilityForm: any = {};
  verificationForm: any = {};
  propertyForm: any = {};
  kycForm: any = {};
  offerForm: any = {};
  leads = [];
  source: LocalDataSource = new LocalDataSource();
  showForm: false;

  constructor() { }

  ngOnInit(): void {
  }

  addLead(frm) {
    frm.markAllAsTouched();
    if (frm.valid) {
      this.leads.push(this.lead);
      this.source.load(this.leads);
      this.showForm = false;
      this.lead = {};
    }
  }

  editUserole(data) {
    console.log(data);
  }

  onDeleteConfirm(e) {

  }

  customEvent(e) {
    console.log(e);
  }

}
