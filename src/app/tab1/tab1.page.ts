//tab1.page.ts
import { Component } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';


@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {

  constructor(private afAuth: AngularFireAuth
    ) {}

  //tab1.page.ts
  email: any;
  password: any;
  registerUser() {
        return new Promise<any>((resolve, reject) => {
     
          this.afAuth.createUserWithEmailAndPassword(this.email, this.password)
            .then(
              res => resolve(res),
              err => reject(err))
        })
      }
    

}
