import { Component, Input, OnInit } from '@angular/core';
// import { Project } from '../project.model';
import { ProjectService } from '../project.service';


@Component({
  selector: 'app-edit-project',
  templateUrl: './edit-project.component.html',
  styleUrls: ['./edit-project.component.css'],
  providers: [ProjectService]
})
export class EditProjectComponent implements OnInit {
  @Input() selectedProject;
  formButton = true;
  editForm = null;

  constructor(private projectService: ProjectService) { }

  ngOnInit() {
  }

  showForm(){
    this.editForm = true;
    this.formButton = null;
  }

  beginUpdatingProject(project){
    console.log(project.minimumGoal);

    console.log(project)
    this.projectService.editProject(project);
    this.editForm = null;
    this.formButton = true;
  }
}
