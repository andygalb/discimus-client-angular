import {Component, OnInit} from '@angular/core';
import {DataService} from '../data.service';
import {ActivatedRoute, NavigationEnd, Router} from '@angular/router';
import {Course, Question, Sequence} from '../models/modelInterfaces';
import {UserService} from '../user.service';

@Component({
  selector: 'app-course',
  templateUrl: './course.component.html',
  styleUrls: ['./course.component.css']
})
export class CourseComponent implements OnInit {

  id: String;
  course: Course;
  sequence: Sequence;
  question: Question;

  navigationSubscription;

  constructor(private dataService: DataService, private userService: UserService, private route: ActivatedRoute, private router: Router) {

    // TODO This is a hack to get sidelinks to navigate when the courseID changes.
    /*this.navigationSubscription = this.router.events.subscribe((e: any) => {
      if (e instanceof NavigationEnd) {
        window.scrollTo(0, 0);
      }
    });*/
  }


  ngOnInit() {

    this.id = this.route.snapshot.paramMap.get('id');
    this.getCourse(this.id);
  }

  getCourse(id: String) {
    this.dataService.getCourse(id)
      .subscribe((course) => {
        console.log(course);
        this.course = course;
        this.userService.currentCourse = course;
        this.userService.setCurrentCourse(course);
        console.log('Current course set as:');
        console.log(course);
      });
  }

}
