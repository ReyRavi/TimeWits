import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { HttpServiceService } from 'src/app/services/http/http-service.service';
import { AuthenticationService } from 'src/app/services/authentication/authentication.service';
import { ToastService } from 'src/app/services/toast/toast.service';
import { Camera } from '@ionic-native/camera/ngx';
import { IonicStorageModule } from '@ionic/storage';
import { FileChooser } from '@ionic-native/file-chooser/ngx';
import { DatePipe } from '@angular/common';
import { DatePicker } from '@ionic-native/date-picker/ngx';
import { Sim } from '@ionic-native/sim/ngx';
import { Toast } from '@ionic-native/toast/ngx';
import { Network } from '@ionic-native/network/ngx';
import { ConfirmComponent } from './confirm/confirm.component';
import { ErrorComponent } from './err-popup/err-popup.component';


@NgModule({
  declarations: [AppComponent,ConfirmComponent,ErrorComponent],
  entryComponents: [ConfirmComponent,ErrorComponent],
  imports: [BrowserModule,
    IonicModule.forRoot(),
    IonicStorageModule.forRoot(),
    FormsModule,
    HttpClientModule,
    AppRoutingModule],
  providers: [
    StatusBar,
    SplashScreen,
    HttpServiceService,
    AuthenticationService,
    Camera,
    FileChooser,
    ToastService,
    DatePipe,
    DatePicker,
    Sim,
    Toast,
    Network,

    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
