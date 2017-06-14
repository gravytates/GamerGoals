import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Project } from '../project.model';
import { ProjectService } from '../project.service';
import { FirebaseListObservable } from 'angularfire2/database';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  providers: [ProjectService]
})
export class HomeComponent implements OnInit {
  projects: FirebaseListObservable<any[]>

  constructor(private router: Router, private projectService: ProjectService) { }

  ngOnInit() {
    this.projects = this.projectService.getProjects();
  }

}
