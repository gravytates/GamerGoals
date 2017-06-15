import { Pipe, PipeTransform } from '@angular/core';
import { Project } from './project.model';

@Pipe({
  name: 'genre',
  pure: false
})
export class GenrePipe implements PipeTransform {

  transform(input: Project[], filterCondition) {
    var output: Project[] = [];
    switch(filterCondition){
      case "rpg":
        return input.filter(function(project){
          return project.genre === "rpg";
        });
      case "Life-simulation":
        return input.filter(function(project){
          return project.genre === "Life-simulation";
        });
      case "shooter":
        return input.filter(function(project){
          return project.genre === "shooter";
        });
      case "sports":
        return input.filter(function(project){
          return project.genre === "sports";
        });
      case "platformer":
        return input.filter(function(project){
          return project.genre === "platformer";
        });
      case "rts":
        return input.filter(function(project){
          return project.genre === "rts";
        });
      default:
        return input;
    }
  }
}
