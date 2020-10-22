import { Component, OnInit } from '@angular/core';
import { NbComponentShape, NbComponentSize, NbComponentStatus } from '@nebular/theme';

@Component({
  selector: 'ngx-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss']
})
export class UserComponent implements OnInit {

  user:any = {};
  userForm: any = {};
  users = [];
  sources = [];
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

  constructor() { }

  ngOnInit(): void {
  }

  addUser(frm){
    if (frm.valid) {
      this.users.push(this.user);
    }
  }

  onDeleteConfirm(e){

  }
}
