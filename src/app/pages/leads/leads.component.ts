import { Component, OnInit } from '@angular/core';
import { ApiService } from 'app/shared/service/api.service';
import { LocalDataSource } from 'ng2-smart-table';



@Component({
  selector: 'ngx-leads',
  templateUrl: './leads.component.html',
  styleUrls: ['./leads.component.scss']
})
export class LeadsComponent implements OnInit {
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
      id: {
        title: 'Lead Info',
        type: 'number',
      },
      name: {
        title: 'Creater Info',
        type: 'string',
      },
      email: {
        title: 'Customer Info',
        type: 'string',
      },
      age: {
        title: 'Product Details',
        type: 'string',
      },
      stage: {
        title: 'Current Stage',
        type: 'string',
      },
    },
  };

  source: LocalDataSource = new LocalDataSource();

 constructor(public apiService: ApiService) {
  }

  onDeleteConfirm(event): void {
    if (window.confirm('Are you sure you want to delete?')) {
      event.confirm.resolve();
    } else {
      event.confirm.reject();
    }
  }

  ngOnInit(): void {
    this.apiService.getLeads().subscribe(res => {
    this.source.load(res.data);
    });
  }

}




