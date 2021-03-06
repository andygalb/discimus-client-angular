import {Component, Input, OnInit} from '@angular/core';
import {IQuestion} from '../../models/modelInterfaces';
import {UserService} from '../../user.service';

@Component({
  selector: 'app-sequence-navigator',
  templateUrl: './sequence-navigator.component.html',
  styleUrls: ['./sequence-navigator.component.css']
})
export class SequenceNavigatorComponent implements OnInit {

  questionsToShow: IQuestion[];
  @Input() questions: IQuestion[];

  constructor(private userService: UserService) {
  }

  ngOnInit() {
    console.log(this.userService.getCurrentSequence());
    this.questionsToShow = this.userService.getCurrentQuestions();
  }

  scroll(id) {
    console.log('Scrolling to' + id);
    const el = document.getElementById(id);
    console.log(el);
    el.scrollIntoView({behavior: 'smooth', block: 'end', inline: 'nearest'});
  }

}
