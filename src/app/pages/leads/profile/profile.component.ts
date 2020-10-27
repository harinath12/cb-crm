import { Component, OnInit } from '@angular/core';
import { NbComponentShape, NbComponentSize, NbComponentStatus } from '@nebular/theme';

@Component({
  selector: 'ngx-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {
  statuses: NbComponentStatus[] = [ 'primary', 'success', 'info', 'warning', 'danger' ];
  shapes: NbComponentShape[] = [ 'rectangle', 'semi-round', 'round' ];
  sizes: NbComponentSize[] = [ 'tiny', 'small', 'medium', 'large', 'giant' ];
  profile: any = {};
  profileForm: any = {};
  profiles: {};
  showForm: false;

  constructor() { }

  ngOnInit(): void {
  }

  updateProfile(frm) {
    frm.markAllAsTouched();
    if (frm.valid) {
      // this.profiles.push(this.profile);
      this.showForm = false;
      this.profiles = {};
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
