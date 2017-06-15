import { Pipe, PipeTransform } from '@angular/core';
import { Project } from './project.model';

@Pipe({
  name: 'platform',
  pure: false
})
export class PlatformPipe implements PipeTransform {

  transform(input: Project[], filterCondition) {
    var output: Project[] = [];
    if (input != null) {
      switch(filterCondition){
        case "PC":
          return input.filter(function(project){
            return project.platform === "PC";
          });
        case "PlayStation":
          return input.filter(function(project){
            return project.platform === "PlayStation";
          });
        case "XBox":
          return input.filter(function(project){
            return project.platform === "XBox";
          });
        case "Mobile":
          return input.filter(function(project){
            return project.platform === "Mobile";
          });
        default:
          return input;
      }
    }
  }
}
