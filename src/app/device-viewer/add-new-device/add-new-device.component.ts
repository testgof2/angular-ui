import { Component, EventEmitter, Output } from '@angular/core';
import { DeviceAndSettings  } from '../../models/device-and-settings.model'
import { HttpClient } from '@angular/common/http';
import { ApiUrls } from 'src/app/api-url';

@Component({
  selector: 'app-add-new-device',
  templateUrl: './add-new-device.component.html',
  styleUrls: ['./add-new-device.component.css']
})
export class AddNewDeviceComponent {

  constructor(private http: HttpClient){}

  model: DeviceAndSettings = {  id: undefined, name: "", dataAnnotations: [], latestData: [] };
  @Output() created = new EventEmitter();

  addNewDataAnnotation(){
    this.model.dataAnnotations.push({ name: "", unit: "" })
  }

  addNewDevice() {
    this.http.post(`${ApiUrls.interface}/settings`, this.model).subscribe(_ => {
      this.created.emit();
    });

  }
}
