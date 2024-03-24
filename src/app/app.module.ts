import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { DeviceViewerComponent } from './device-viewer/device-viewer.component';
import { AddNewDeviceComponent } from './device-viewer/add-new-device/add-new-device.component';
import {MatListModule} from '@angular/material/list';
import {MatButton} from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatInputModule } from '@angular/material/input';
import { DeviceDetailsComponent } from './device-viewer/device-details/device-details.component';

@NgModule({
  declarations: [
    AppComponent,
    DeviceViewerComponent,
    AddNewDeviceComponent,
    DeviceDetailsComponent
  ],
  imports: [
    BrowserModule, 
    HttpClientModule, 
    FormsModule, 
    MatListModule,
    MatButton,
    MatCardModule,
    MatInputModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
