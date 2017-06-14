import { Component, OnInit } from '@angular/core';
import { Project } from '../project.model';
import { ProjectService } from '../project.service';


@Component({
  selector: 'app-new-project',
  templateUrl: './new-project.component.html',
  styleUrls: ['./new-project.component.css'],
  providers: [ProjectService]
})
export class NewProjectComponent implements OnInit {
  projectForm = null;
  formButton = true;
  constructor(private projectService: ProjectService) { }

  ngOnInit() {
  }

  showForm(){
    this.formButton = null;
    this.projectForm = true;
  }

  submitForm(title: string, author: string, description: string, minimumGoal: string, goalUse: string, rewards: string, platform: string, genre: string, image: string){
    var newProject: Project = new Project(title, author, description, parseInt(minimumGoal), goalUse, rewards, platform, genre, image);
    this.projectService.addProject(newProject);
    this.projectForm = null;
    this.formButton = true;
  }

  finishedAdding(){
  }
}
