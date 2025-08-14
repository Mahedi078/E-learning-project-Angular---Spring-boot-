import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormArray } from '@angular/forms';
import { QuizService } from '../service/quiz.service';

@Component({
  selector: 'app-quiz-create',
  templateUrl: './quiz-create.component.html',
  styleUrls: ['./quiz-create.component.css']
})
export class QuizCreateComponent {
  quizForm: FormGroup;

  constructor(private fb: FormBuilder, private quizService: QuizService) {
    this.quizForm = this.fb.group({
      title: ['', Validators.required],
      description: [''],
      questions: this.fb.array([this.createQuestion()])
    });
  }

  get questions() {
    return this.quizForm.get('questions') as FormArray;
  }

  createQuestion(): FormGroup {
    return this.fb.group({
      questionText: ['', Validators.required],
      optionA: ['', Validators.required],
      optionB: ['', Validators.required],
      optionC: ['', Validators.required],
      optionD: ['', Validators.required],
      correctOption: ['', Validators.required]
    });
  }

  addQuestion() {
    this.questions.push(this.createQuestion());
  }

  removeQuestion(index: number) {
    this.questions.removeAt(index);
  }

  onSubmit() {
    if (this.quizForm.valid) {
      this.quizService.createQuiz(this.quizForm.value).subscribe(() => {
        alert('Quiz created successfully!');
        this.quizForm.reset();
        this.questions.clear();
        this.addQuestion(); // add one blank question again
      });
    }
  }
}

