import { Component } from '@angular/core';
import { User } from 'src/app/shared/interfaces/user';
import { UserInfoService } from 'src/app/shared/services/user-info.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent {
  user : User;
  constructor(private userInfoService : UserInfoService) {
    this.user = userInfoService.getUser();
  }

  onMainEditClick() {
    alert('Вы кликнули на редактирование главной информации.')
  }

  onAdditionalClick() {
    alert('Вы кликнули на редактирование дополнительной информации.')
  }
}
