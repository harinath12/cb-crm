import { Component, OnInit } from '@angular/core';
import { NbComponentShape, NbComponentSize, NbComponentStatus } from '@nebular/theme';
import { LocalDataSource } from 'ng2-smart-table';


@Component({
  selector: 'ngx-user-roles',
  templateUrl: './user-roles.component.html',
  styleUrls: ['./user-roles.component.scss']
})
export class UserRolesComponent implements OnInit {
  statuses: NbComponentStatus[] = [ 'primary', 'success', 'info', 'warning', 'danger' ];
  shapes: NbComponentShape[] = [ 'rectangle', 'semi-round', 'round' ];
  sizes: NbComponentSize[] = [ 'tiny', 'small', 'medium', 'large', 'giant' ];

  userole: any = {};
  useroleForm: any = {};
  useroles = [];
  source: LocalDataSource = new LocalDataSource();

  settings = {
    actions: {
      position: 'right',
    },
    add: {
      addButtonContent: '<i class="nb-plus"></i>',
      createButtonContent: '<i class="nb-checkmark"></i>',
      cancelButtonContent: '<i class="nb-close"></i>',
    },
    edit: {
      editButtonContent: '<i class="nb-edit"></i>',
      saveButtonContent: '<i class="nb-checkmark"></i>',
      cancelButtonContent: '<i class="nb-close"></i>',
    },
    delete: {
      deleteButtonContent: '<i class="nb-trash"></i>',
      confirmDelete: true,
    },
    columns: {
      SN: {
        title: 'Si.No',
        type: 'number',
      },
      Role: {
        title: 'Role',
        type: 'string',
      },
      Modules: {
        title: 'Modules',
        type: 'string',
      },
      Permission: {
        title: 'Permission',
        type: 'string',
      },
    },
  };

  sources = [];
  showForm: false;

  constructor() { }

  ngOnInit(): void {
  }

  addUserrole(frm) {
    frm.markAllAsTouched();
    if (frm.valid) {
      this.useroles.push(this.userole);
      this.source.load(this.useroles);
      this.showForm = false;
      this.userole = {};
    }
  }

  editUser(data) {
    console.log(data);
  }

  onDeleteConfirm(e) {

  }

  customEvent(e) {
    console.log(e);
  }

}
