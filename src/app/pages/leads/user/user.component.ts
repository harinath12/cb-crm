import { Component, OnInit } from '@angular/core';
import { LocalDataSource } from 'ng2-smart-table';

@Component({
  selector: 'ngx-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss']
})
export class UserComponent implements OnInit {

  user: any = {};
  userForm: any = {};
  users = [];
  source: LocalDataSource = new LocalDataSource();
  settings = {
    actions: {
      custom: [
        {
          name: 'editAction',
          title: '<i class="nb-edit"></i>',
        },
        {
          name: 'deleteAction',
          title: '<i class="nb-trash"></i>',
        },
      ],
      add: false,
      edit: false,
      delete: false,
      position: 'right',
    },
    columns: {
      id: {
        title: 'Si.No',
        type: 'number',
      },
      name: {
        title: 'Name',
        type: 'string',
      },
      email: {
        title: 'Email',
        type: 'string',
      },
      dob: {
        title: 'DOB',
        type: 'string',
      },
      role: {
        title: 'Role',
        type: 'string',
      }
    },
  };
  showForm = false;

  constructor() { }

  ngOnInit(): void {
    this.source.load(this.users);
  }

  addUser(frm) {
    frm.markAllAsTouched();
    if (frm.valid) {
      this.users.push(this.user);
      this.source.load(this.users);
      this.showForm = false;
      this.user = {};
    }
  }

  editUser(data){
    this.user = data;
    this.showForm = true;
  }

  onDeleteConfirm(e){
    
  }

  customEvent(e){
    if(e.action == 'editAction'){
      this.editUser(e.data);
    }
  }
}
