import { Injectable } from '@angular/core';

import { AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument  } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

export interface Item { name: string; }


@Injectable({
  providedIn: 'root'
})
export class ConexionService {

  private itemDoc: AngularFirestoreCollection <Item>;
  item: Observable<Item[]>;

  private itemDocc: AngularFirestoreDocument<Item>;

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

  agregarItem(item: Item) {
    this.itemDoc.add(item);
  }

  eliminarItem(item){
    this.itemDocc = this.afs.doc<Item>('items/'+item.id);
    this.itemDocc.delete();
  }

}
