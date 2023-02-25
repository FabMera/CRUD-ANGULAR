import { Injectable } from '@angular/core';
//importamos los modulo de firebase
import {AngularFirestore} from '@angular/fire/compat/firestore';
import { Post } from './post.model';


@Injectable({
  providedIn: 'root'
})

export class PostService {

  constructor(private angularFirestore:AngularFirestore) { }

  //Metodos pára el Crud
  /* Todos los documentos */

  getPosts(){
    return this.angularFirestore
          .collection("posts")
          .snapshotChanges()
  }
/* Un solo documento por id */
  getPostById(id){
    return this.angularFirestore
          .collection("posts")
          .doc(id)
          .valueChanges()
  }
  createPost(post:Post,id){
      return new Promise<any> ((resolve,reject)=>{
        this.angularFirestore
        .collection("posts")
        .add(post)
        .then((response)=>{
          console.log(response)
        },
        (error)=>{
          reject(error)
        }
        )
      })
  }
  updatePost(post:Post,id){
      return this.angularFirestore
      .collection("posts")
      .doc(id)
      .update({title:post.title,content:post.content,author:post.author})
  }
  deletePost(post){
      return this.angularFirestore
      .collection("posts")
      .doc(post.id)
      .delete()
  }
}
