import { Injectable } from '@angular/core';
import { Project } from './project.model';
import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database';

@Injectable()
export class ProjectService {
  projects: FirebaseListObservable<any[]>

  constructor(private database: AngularFireDatabase) {
    this.projects = database.list('projects');
  }

  getProjects(){
    return this.projects;
  }

  getProjectById(projectId: string){
    return this.database.object('projects/' + projectId);
  }

  donateMoney(localProject){
    var firebaseProject = this.getProjectById(localProject.$key);
    firebaseProject.update({
      currentAmount: localProject.currentAmount
    });
  }

  // updateAlbum(localUpdatedAlbum){
  //   var albumEntryInFirebase = this.getAlbumById(localUpdatedAlbum.$key);
  //   albumEntryInFirebase.update({
  //     title: localUpdatedAlbum.title,
  //     artist: localUpdatedAlbum.artist,
  //     description: localUpdatedAlbum.description
  //   });
  //
  // }

}
