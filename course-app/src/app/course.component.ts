import { CourseService } from './course.service';
import { Component } from "@angular/core";

@Component({
    selector : 'course',
    template : `<h3>Training Title : {{title}}<h3>
                <ul>
                    <li *ngFor="let course of courses">{{course}}</li>
                </ul>
                `,
})
export class CourseComponent {
    title = 'Available Training';
    courses;
    constructor(courseService : CourseService){
        this.courses = courseService.getCourses()
    }

    ngOnInit(){
        console.log('Component did mount called custom')
    }
}