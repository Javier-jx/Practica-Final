import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';

@Injectable({

  providedIn: 'root'
})
export class FirebaseServiceService {

  constructor(
    private firestore: AngularFirestore
  ) { }

  getClientes(){
    return this.firestore.collection("clientes").snapshotChanges();
      }
      createCliente(cliente:any){
        return this.firestore.collection("clientes").add(cliente);
      }
      updateCliente(id:any,cliente:any){
        return  this.firestore.collection("clientes").doc(id).update(cliente);
      }
      deleteCliente(id:any){
        return  this.firestore.collection("clientes").doc(id).delete();
      }

  }

