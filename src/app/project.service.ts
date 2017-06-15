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

  editProject(anythingProject){
    var firebaseProjectToEdit = this.getProjectById(anythingProject.$key);
    firebaseProjectToEdit.update({title: anythingProject.title,
      author: anythingProject.author,
      description: anythingProject.description,
      minimumGoal: anythingProject.minimumGoal,
      goalUse: anythingProject.goalUse,
      rewards: anythingProject.rewards,
      platform: anythingProject.platform,
      genre: anythingProject.genre,
      image: anythingProject.image,
      currentAmount: anythingProject.currentAmount
    });
  }

  donateMoney(localProject){
    var firebaseProject = this.getProjectById(localProject.$key);
    firebaseProject.update({
      currentAmount: localProject.currentAmount
    });
  }

  addProject(newProject: Project){
    this.projects.push(newProject);
  }



  deleteProject(localProject){
    var firebaseProjectToDelete = this.getProjectById(localProject.$key);
    firebaseProjectToDelete.remove();
  }

}
