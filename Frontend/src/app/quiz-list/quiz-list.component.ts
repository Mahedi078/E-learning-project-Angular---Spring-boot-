import { Component, OnInit } from '@angular/core';
import { Quiz } from '../model/quiz.model';
import { Router } from '@angular/router';
import { QuizService } from '../service/quiz.service';

@Component({
  selector: 'app-quiz-list',
  templateUrl: './quiz-list.component.html',
  styleUrls: ['./quiz-list.component.css']
})
export class QuizListComponent implements OnInit {
  quizzes: Quiz[] = [];

  constructor(private quizService: QuizService, private router: Router) {}

  ngOnInit(): void {
    this.quizService.getAllQuizzes().subscribe(data => this.quizzes = data);
  }

  takeQuiz(id: number) {
    this.router.navigate(['/student/quiz', id]);
  }
}

