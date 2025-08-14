import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Quiz } from '../model/quiz.model';

@Injectable({
  providedIn: 'root'
})
export class QuizService {
  private baseUrl = 'http://localhost:8080/api/quizzes';

  constructor(private http: HttpClient) {}

  getAllQuizzes(): Observable<Quiz[]> {
    return this.http.get<Quiz[]>(this.baseUrl);
  }

  getQuiz(id: number): Observable<Quiz> {
    return this.http.get<Quiz>(`${this.baseUrl}/${id}`);
  }

  submitQuiz(id: number, answers: { [questionId: number]: string }): Observable<string> {
    return this.http.post(`${this.baseUrl}/${id}/submit`, answers, { responseType: 'text' });
  }

  // ✅ Implemented correctly
 createQuiz(value: any): Observable<string> {
  return this.http.post(this.baseUrl, value, { responseType: 'text' });
}

}
