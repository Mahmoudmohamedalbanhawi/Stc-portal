import { Component, Input } from '@angular/core';
import { Article } from '../../../core/Interface/articles';

@Component({
  selector: 'stc-question-details',
  templateUrl: './question-details.component.html',
  styleUrl: './question-details.component.scss'
})
export class QuestionDetailsComponent {
  @Input() answerstopic!:Article;
  @Input() answer: boolean = false;
}
