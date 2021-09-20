import { Component, OnInit } from '@angular/core';
//import firebase auth plugins
import { AngularFireAuth } from '@angular/fire/auth';
//import firestore database
import { AngularFirestore } from '@angular/fire/firestore';
//for back navigation
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-insertrecord',
  templateUrl: './insertrecord.page.html',
  styleUrls: ['./insertrecord.page.scss'],
})
export class InsertrecordPage implements OnInit {

  constructor(private firestore: AngularFirestore,
    private navController: NavController) { }

  ngOnInit() {
  }

  data:any={};//object variable for record entry

  //prepare data & call the function to insert record
  trycreaterecord(){
    //check login
  	this.createEntry(this.data)//call function createEntry
  		.then(_=>{
  			alert("Aktiviti baru masjid berjaya disimpan");
  			//this.data.acname="";
  			//this.data.acpic="";
  		}, err=>{
  			console.log("ERROR", err);
  		});

      //navigate back
      this.navController.back();
  }//trycreaterecord

  //save record to firestore collection
  createEntry(entry)
      {
        //return this.firestore.collection('activities').add(entry);
        return new Promise((resolve,reject)=>{
    
          //firebase.database().ref('activities/'+post_key+'/')
          this.firestore.collection('aktivitimasjid').add(entry)
          .then(resp=>{
            resolve("OK");//record successfully added to root firebase
          },err=>{
            reject(err);//record failed to insert
          })
    
        })
      }//end create entry

}
