import { Injectable } from '@angular/core';

import { AngularFirestore, AngularFirestoreCollection  } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

export interface Item { name: string; }


@Injectable({
  providedIn: 'root'
})
export class ConexionService {

  private itemDoc: AngularFirestoreCollection <Item>;
  item: Observable<Item[]>;

  constructor(private afs: AngularFirestore) { 
    this.itemDoc = afs.collection<Item>('items');
    this.item = this.itemDoc.snapshotChanges().pipe(
      map(actions => actions.map(a => {
        const data = a.payload.doc.data() as Item;
        const id = a.payload.doc.id;
        return { id, ...data };
      }))
    );
  }

  listaItem(){
    return this.item;
  }
}
