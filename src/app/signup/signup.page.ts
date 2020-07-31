import { Component, OnInit } from '@angular/core';
import {  NavController } from '@ionic/angular';
@Component({
  selector: 'app-signup',
  templateUrl: './signup.page.html',
  styleUrls: ['./signup.page.scss'],
})
export class SignupPage implements OnInit {

  constructor(private navCtrl: NavController) { }

  ngOnInit() {
  }

  passwordShown : boolean = false;
 passwordType: string ='password';


  public togglePassword(){
    if (this.passwordShown){
      this.passwordShown =false;
      this.passwordType='password';
     
     
    }else{
      this.passwordShown =true;
      this.passwordType='password';
      
    }
  }

  backPage(){
    this.navCtrl.back();
  }

}


