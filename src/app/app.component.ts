import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  private uploadOptions: IgUpload;
  constructor() {
    this.uploadOptions = {
      mode: 'single',
      autostartupload: true,
      progressUrl: 'https://www.igniteui.com/IGUploadStatusHandler.ashx',
      controlId: 'serverID1112'
    };
  }
  showAlert($event) {
    $('#error-message').html($event.ui.errorMessage).stop(true, true).fadeIn(2000).delay(3000).fadeOut(500);
  }
}
