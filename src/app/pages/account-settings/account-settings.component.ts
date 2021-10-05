import { Component, OnInit } from '@angular/core';
import { SettingService } from '../../services/setting.service';

@Component({
  selector: 'app-account-settings',
  templateUrl: './account-settings.component.html',
  styles: [],
})
export class AccountSettingsComponent implements OnInit {
  linkTheme = document.querySelector('#theme');

  constructor(private settingService: SettingService) {}

  ngOnInit(): void {
    this.settingService.checkCurrenTheme();
  }

  chageTheme(theme: string) {
    this.settingService.chageTheme(theme);
  }
}
