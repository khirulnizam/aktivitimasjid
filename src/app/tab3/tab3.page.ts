//tab3.page.ts
import { Component } from '@angular/core';
import { AngularFirestoreCollection, AngularFirestore } from '@angular/fire/firestore';
@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss']
})
export class Tab3Page {

  constructor(
    private firestore: AngularFirestore) {}

    //activities:any;
  activities = [];//hold records
  ngOnInit() {
    //read activities from firestore
    this.readActivities().subscribe(data => {

      this.activities = data.map(e => {
        return {
          id: e.payload.doc.id,
          isEdit: false,
          namaaktiviti: e.payload.doc.data()['namaaktiviti'],
          penceramah: e.payload.doc.data()['penceramah'],
          tarikhaktiviti: e.payload.doc.data()['tarikhaktiviti'],
        };
      })
      console.log(this.activities);
    });//end data.map 
  }//end onInit

    readActivities() {
      //fetch all records
        return this.firestore.collection('aktivitimasjid').snapshotChanges();
    }

}
