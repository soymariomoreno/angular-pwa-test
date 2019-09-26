import { Component, OnInit } from '@angular/core';
import { FirestoreService } from '../services/firestore/firestore.service';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-cats',
  templateUrl: './cats.component.html',
  styleUrls: ['./cats.component.css']
})
export class CatsComponent implements OnInit {

  public cats : any = [];
  public status : boolean = true;

  public catForm = new FormGroup({
    name: new FormControl('', Validators.required),
    url: new FormControl('', Validators.required),
    id: new FormControl('')
  });

  constructor(private firestoreService: FirestoreService) {    console.log(this.catForm);
  }

  ngOnInit() {
    this.firestoreService.getAll().subscribe((snapshop:any) => {
      this.cats = [];
      snapshop.forEach((item: any) => {
        this.cats.push({
          id: item.payload.doc.id,
          data: item.payload.doc.data()
        });
      })
    })
  }

  save(){
    console.log(this.catForm);
  }

}
