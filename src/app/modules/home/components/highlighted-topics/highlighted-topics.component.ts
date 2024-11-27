import { Component, Input } from '@angular/core';
import { Article } from '../../../core/Interface/articles';

@Component({
  selector: 'stc-highlighted-topics',
  templateUrl: './highlighted-topics.component.html',
  styleUrl: './highlighted-topics.component.scss'
})
export class HighlightedTopicsComponent {
@Input() followedTopics!:any;

}
