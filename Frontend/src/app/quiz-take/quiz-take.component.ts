import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Quiz } from '../model/quiz.model';
import { QuizService } from '../service/quiz.service';

@Component({
  selector: 'app-quiz-take',
  templateUrl: './quiz-take.component.html',
  styleUrls: ['./quiz-take.component.css']
})
export class QuizTakeComponent implements OnInit {
  quiz!: Quiz;
  answers: { [questionId: number]: string } = {};
  result: string = '';

  constructor(private route: ActivatedRoute, private quizService: QuizService) {}

  ngOnInit(): void {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.quizService.getQuiz(id).subscribe(data => this.quiz = data);
  }

  submit(): void {
    this.quizService.submitQuiz(this.quiz.id, this.answers).subscribe(response => {
      this.result = response;
    });
  }
}
