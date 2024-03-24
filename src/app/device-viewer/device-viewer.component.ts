import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { DeviceAndSettings, DeviceAndSettingsAnalyzed } from '../models/device-and-settings.model';
import { ApiUrls } from '../api-url';

@Component({
  selector: 'app-device-viewer',
  templateUrl: './device-viewer.component.html',
  styleUrls: ['./device-viewer.component.css']
})
export class DeviceViewerComponent implements OnInit {

  constructor(private http: HttpClient){}

  devices: Array<DeviceAndSettingsAnalyzed> = [];
  selectedDevice : DeviceAndSettingsAnalyzed | undefined = undefined;
  newDeviceAddition = false;

  ngOnInit(): void {
    this.getNewDevices();
  }
  cngOnInit(): void {
    this.getNewDevices();
  }
  
  getNewDevices(){
    this.http.get<Array<DeviceAndSettingsAnalyzed>>(`${ApiUrls.interface}/settings`).subscribe(x => {
      this.devices = x;
  });
  }

  toggleNewDeviceAddition() {
    this.newDeviceAddition = !this.newDeviceAddition;
  }

  created() {
    this.newDeviceAddition = false;
    this.getNewDevices();
  }

  deleted(){
    this.selectedDevice = undefined;
    this.getNewDevices();
  }

  newDataSent(){
    //force reinit TODO change to use changedetector
    this.selectedDevice = undefined;
    this.getNewDevices();
  }
  

  setSelection(dev : DeviceAndSettingsAnalyzed){
    //force reinit
    this.selectedDevice = undefined;
    this.selectedDevice = dev;
  }

}
