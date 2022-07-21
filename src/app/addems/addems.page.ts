import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { Camera, CameraOptions } from '@ionic-native/camera/ngx';
import { FileChooser } from '@ionic-native/file-chooser/ngx';
import { ActionSheetController, LoadingController, ModalController, ToastController } from '@ionic/angular';
import { AlertService } from '../services/alert/alert.service';
import { AuthenticationService } from '../services/authentication/authentication.service';
import { toUnicode } from 'punycode';
import { Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { ConfirmComponent } from '../confirm/confirm.component';
import { ErrorComponent } from '../err-popup/err-popup.component';
declare var faceapi;
@Component({
  selector: 'app-addems',
  templateUrl: './addems.page.html',
  styleUrls: ['./addems.page.scss'],
})
export class AddemsPage implements OnInit {
  @ViewChild('registerImage', { static: false }) registerImage: ElementRef;
  Isform1: any = false;
  Isform2: any = false;

  public form = {
    empName: '',
    fatherName: '',
    mobNumber: '',
    empDob: '',
    gender: '',
    martialStatus: '',
    address: '',
    location: '',
    pincode: '',
    nomineeName: '',
    nomineeRelationType: '',

    empType: '',
    empContractorName: '',
    reportingNumber: '',

    panNumber: '',
    aadharNumber: '',
    uidPfNumber: '',
    esiNumber: '',
    addressProcessImage: '',

    empImage: '',
  }
  public response: any;
  RegisterList: any = [];
  base64Image:any;

  constructor(
    public actionSheetController: ActionSheetController,
    public camera: Camera,
    public filechooser: FileChooser,
    public loadingController: LoadingController,
    public alert: AlertService,
    public authService: AuthenticationService,
    private router: Router,
    public httpClient: HttpClient, public toastController: ToastController,
    private modalController: ModalController
  ) {

  }



  ngOnInit() {
  }
  next() {
    this.Isform1 = true;
  }

  async loadActionSheet() {
    let buttons: any = [{
      text: 'Camera',
      role: 'destructive',
      icon: 'camera',
      handler: () => {
        this.capture();
      }
    }, {
      text: 'Cancel',
      icon: 'close',
      role: 'cancel',
      handler: () => {
        console.log('Cancel clicked');
      }
    }];

  }

  async capture() {
    const options: CameraOptions = {
      quality: 20,
      destinationType: this.camera.DestinationType.DATA_URL,
      encodingType: this.camera.EncodingType.JPEG,
      mediaType: this.camera.MediaType.PICTURE,
      correctOrientation: true
      // allowEdit: true
    }
    const imageData = await this.camera.getPicture(options);
    this.form.empImage = imageData;
    this.base64Image = `data:image/jpeg;base64,${imageData}`;
    return this.form.empImage;

  }



  register() {
    let body: any = {};
    body = this.form;
    this.httpClient.post('http://15.207.71.113:3000/login/register', body).subscribe(data => {
      if (data != null) {
        console.log("Registered Successfully");
        // this.presentToast();
        this.goToConfirmComponent();
      } else {
        console.log("Something Went Wrong");
        this.goToNonConfirmcomponent('Something Went Wrong','cancel');
        this.presentToast1();
      }
    });
  }

  async presentToast() {
    const toast = await this.toastController.create({
      message: 'Registered Successfully',
      duration: 2000,
    });
    toast.present();
  }

  async goToConfirmComponent() {
    const modal = await this.modalController.create({
      component: ConfirmComponent,
      cssClass: 'ConfirmComponent',
      componentProps: {
        message: 'Registered Successfully',
      }
    });
    modal.onDidDismiss().then(data => {
      if (data.data != null) {

      }
    });
    return await modal.present();
  }


  
  async presentToast1() {
    const toast = await this.toastController.create({
      message: 'Something Went Wrong',
      duration: 2000,
    });
    toast.present();
  }

  async goToNonConfirmcomponent(data,type) {
    const modal = await this.modalController.create({
      component: ErrorComponent,
      cssClass: 'ConfirmComponent',
      componentProps: {
        message:data,
        type: type
      }
    });
    modal.onDidDismiss().then(data => {
      if (data.data != null) {

      }
    });
    return await modal.present();
  }
}
