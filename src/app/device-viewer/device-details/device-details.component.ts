import {  Component, Input, Output, EventEmitter, OnInit, OnChanges, SimpleChanges } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { DeviceAndSettings, DeviceAndSettingsAnalyzed } from 'src/app/models/device-and-settings.model';
import { IncomingData } from 'src/app/models/incoming-data.model';
import { ApiUrls } from 'src/app/api-url';

@Component({
  selector: 'app-device-details',
  templateUrl: './device-details.component.html',
  styleUrl: './device-details.component.css',
})
export class DeviceDetailsComponent implements OnChanges { 

  @Input() device! : DeviceAndSettingsAnalyzed;
  @Output() deleteEmitter = new EventEmitter();
  @Output() newDataSentEmitter = new EventEmitter();



  isEmulateSendingDataOpen = false;

  constructor(private http: HttpClient){

  }

  dataToSend: Array<number> = [];
  
  ngOnChanges(changes: SimpleChanges): void {
    if(this.device){
      this.dataToSend =  new Array<number>(this.device.dataAnnotations.length).fill(0);
    }
  }




  toggleSimulateData()
  {
    this.isEmulateSendingDataOpen = !this.isEmulateSendingDataOpen;
  }

  delete(){
    this.http.delete<Array<DeviceAndSettings>>(`${ApiUrls.interface}/settings/${this.device.id}`).subscribe(x => {
      this.deleteEmitter.emit();
  });

  }

  toggleEmulateData(){
    this.isEmulateSendingDataOpen = !this.isEmulateSendingDataOpen;
  }

  executeSendingData(){

    const data: IncomingData = { deviceId: this.device.id!, data: this.dataToSend };
    this.http.post(`${ApiUrls.dataCollector}/dataintake`, data).subscribe(x => {
        this.newDataSentEmitter.emit();
    });

  }

}
