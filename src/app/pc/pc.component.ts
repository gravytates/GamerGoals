import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Project } from '../project.model';
import { ProjectService } from '../project.service';
import { FirebaseListObservable } from 'angularfire2/database';

@Component({
  selector: 'app-pc',
  templateUrl: './pc.component.html',
  styleUrls: ['./pc.component.css'],
  providers: [ProjectService]
})
export class PCComponent implements OnInit {
  projects: FirebaseListObservable<any[]>
  currentRoute: string = this.router.url;


  constructor(private router: Router, private projectService: ProjectService) { }

  ngOnInit() {
    this.projects = this.projectService.getProjects();
  }

  goToDetail(selectedProject){
    this.router.navigate(['projects', selectedProject.$key]);
  }

  filterBy: string = "all"

  onChange(menuOption) {
    this.filterBy = menuOption;
  }

  filterPlat: string = "PC"
}
