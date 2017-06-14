import { Component, OnInit } from '@angular/core';
import { Project } from '../project.model';
import { FirebaseObjectObservable } from 'angularfire2/database';
import { ActivatedRoute, Params } from '@angular/router';
import { Location } from '@angular/common';
import { ProjectService } from '../project.service';
import { FirebaseListObservable } from 'angularfire2/database';

@Component({
  selector: 'app-project-detail',
  templateUrl: './project-detail.component.html',
  styleUrls: ['./project-detail.component.css'],
  providers: [ProjectService]
})
export class ProjectDetailComponent implements OnInit {
  projectId: string;
  projectToDisplay;
  projects: FirebaseListObservable<any[]>;

  constructor(
    private route: ActivatedRoute,
    private location: Location,
    private projectService: ProjectService
  ) {}

  ngOnInit() {
    this.projects = this.projectService.getProjects();
    this.route.params.forEach((urlParameters) => {
      this.projectId = urlParameters['id'];
    });
    this.projectToDisplay = this.projectService.getProjectById(this.projectId);
  }

  // donateMoney(donateAmount){
  //   console.log(this.projectToDisplay, donateAmount);
  // }
  // <label>Donate to this Project</label>
  // <input type="number" #donate>
  // <button (click)="donateMoney(selectedProject, donate.value); donate.value='';">Donate</button>
}
