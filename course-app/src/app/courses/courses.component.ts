import { CourseService } from './../course.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.css']
})
export class CoursesComponent implements OnInit {

  title : string = 'Available Training';
  trainingName : string = "Javascript Advance"
  courses;

  isActive = false;

    constructor(courseService: CourseService) {
        this.courses = courseService.getCourses()
    }

  ngOnInit() {
  }

  addCourses($event){
    this.trainingName = $event.target.value
    console.log('course Added',$event, $event.target.value, this.trainingName)
    // console.log('add clicked',this.trainingName);
  }

  add(course){
    console.log('Training Name', course);
  }
}
