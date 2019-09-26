import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';

@Injectable({
  providedIn: 'root'
})
export class FirestoreService {

  constructor(private firestore: AngularFirestore) { }

  // Create new element 'cat'
  public create(data:any){
    return this.firestore.collection('cats').add(data);
  }

  // Get a element 'cat'
  public getById(id:string){
    return this.firestore.collection('cats').doc(id).snapshotChanges();
  }

  // Get all elements 'cats
  public getAll(){
    return this.firestore.collection('cats').snapshotChanges();
  }

  public update(id:string, data:any){
    return this.firestore.collection('cats').doc(id).set(data);
  }
}
