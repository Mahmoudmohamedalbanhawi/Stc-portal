import { Component, OnDestroy, OnInit } from '@angular/core';
import { Article } from '../../../core/Interface/articles';
import { Subscription } from 'rxjs';
import { HomeService } from '../../../core/services/home.service';

@Component({
  selector: 'stc-followed-topics',
  templateUrl: './followed-topics.component.html',
  styleUrl: './followed-topics.component.scss'
})
export class FollowedTopicsComponent implements OnInit , OnDestroy {
  constructor(private topic:HomeService){}
  errmessage:string = ``
  followedTopics:Article[] = [];
  answersByTopic:Article[][] = [];
  sub!:Subscription;
  ngOnInit(): void {
    this.sub = this.topic.fetchTopics().subscribe(
      {
        next:data=>{this.followedTopics = data
          this.answerarticle();
          console.log(`answertopics`,this.answersByTopic)
          console.log(`followed topics`, this.followedTopics)
        },
        error:err=>{this.errmessage = `something went wrong pls try again`}
      }
    )
  }
  ngOnDestroy(): void {
    this.sub.unsubscribe();
  }
  answerarticle(){
    const remainingarticles = this.followedTopics.slice(1);
    for(let i=0 ; i < remainingarticles.length ; i+=2){
      this.answersByTopic.push(remainingarticles.slice(i , i+2))
    }
  }
  
}
