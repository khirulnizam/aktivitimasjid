//tab2.page.ts
import { Component } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page {
  email:any;
  password:any;
  message:any;

  constructor(private afAuth: AngularFireAuth) {}

  cubalogin() {
        this.login()
          .then(res => {
            console.log(res);
            this.message= "Berjaya login";
            alert("Berjaya login");
            //this.navCtrl.navigateForward('/dashboard');
          }, err => {
            this.message= err.message;
            alert("Tidak berjaya login");
          })
    //alert (this.message);
  }//end cubalogin
   
    
  //tambah fungsi
  login() {
        return new Promise<any>((resolve, reject) => {
      //authenticating with email & password
          this.afAuth.signInWithEmailAndPassword(this.email, this.password)
            .then(
              res => resolve(res),  //successful
              err => resolve(err)
        )  //rejected
        })
  }//end cubalogin
    

}
