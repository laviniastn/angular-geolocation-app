import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { GeolocationInfo } from 'src/app/model/geolocation-info';
import { GeolocationService } from 'src/app/service/geolocation.service';

@Component({
  selector: 'app-dialog-confirm',
  templateUrl: './dialog-confirm.component.html',
  styleUrls: ['./dialog-confirm.component.css'],
})
export class DialogConfirmComponent implements OnInit {
  geoInfo: GeolocationInfo | undefined;
  currentIp: string = '';
  cancelButtonText = '';

  constructor(
    @Inject(MAT_DIALOG_DATA) private data: any,
    public geolocationService: GeolocationService
  ) {
    this.geoInfo = {} as GeolocationInfo;

    if (data) {
      this.currentIp = data.currentIp || this.currentIp;
      if (data.buttonText) {
        this.cancelButtonText = data.buttonText.cancel || this.cancelButtonText;
      }
    }
  }

  ngOnInit(): void {
    this.geolocationService
      .getInfo(this.currentIp)
      .subscribe((response: any) => {
        this.geoInfo = response;
      });
  }
}
