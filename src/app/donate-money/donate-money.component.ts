import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Project } from '../project.model';
import { ProjectService } from '../project.service';
import { FirebaseListObservable } from 'angularfire2/database';

@Component({
  selector: 'app-donate-money',
  templateUrl: './donate-money.component.html',
  styleUrls: ['./donate-money.component.css']
})
export class DonateMoneyComponent implements OnInit {
  @Input() selectedProject;
  projects: FirebaseListObservable<any[]>

  constructor() {}

  ngOnInit() {
  }

}
