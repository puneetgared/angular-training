import { CourseService } from './course.service';
import { Component } from "@angular/core";

@Component({
    selector: 'course',
    template: `<div class="input-group">
                    <div class="row">
                         <label>Add Training:</label>
                        <input type="text" class="form-control" [value]="defaultTrainingName">
                        <button class="btn btn-primary">Add</button>
                    </div>
                </div>
                    <h3>Training Title : {{title}}<h3>
                   <!-- <h3 [textContent]="title"><h3> -->
                    <ul>
                        <li *ngFor="let course of courses">{{course}}</li>
                    </ul>
                `,
})
export class CourseComponent {
    title = 'Available Training';
    defaultTrainingName = "Javascript"
    courses;


    constructor(courseService: CourseService) {
        this.courses = courseService.getCourses()
    }
}