package com.spring.controller;

import com.spring.model.Quiz;
import com.spring.dao.QuestionRepository;
import com.spring.dao.QuizRepository;
import com.spring.model.Question;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.*;

@RestController
@RequestMapping("/api/quizzes")
@CrossOrigin("*")
public class QuizController {

    @Autowired
    private QuizRepository quizRepository;

    @Autowired
    private QuestionRepository questionRepository;

    // ✅ 1. Get all quizzes
    @GetMapping
    public List<Quiz> getAllQuizzes() {
        return quizRepository.findAll();
    }

    // ✅ 2. Get quiz by ID
    @GetMapping("/{id}")
    public ResponseEntity<Quiz> getQuiz(@PathVariable Long id) {
        Optional<Quiz> optionalQuiz = quizRepository.findById(id);
        if (!optionalQuiz.isPresent()) {
            return ResponseEntity.notFound().build();
        }
        return ResponseEntity.ok(optionalQuiz.get());
    }

    // ✅ 3. Create a new quiz (with questions)
    
    @PostMapping
    public ResponseEntity<?> createQuiz(@RequestBody Quiz quiz) {
        if (quiz.getQuestions() != null) {
            for (Question question : quiz.getQuestions()) {
                question.setQuiz(quiz);
            }
        }

        quizRepository.save(quiz);
        return ResponseEntity.ok("Quiz saved successfully!");
    }


    // ✅ 4. Submit quiz answers
    @PostMapping("/{id}/submit")
    public ResponseEntity<String> submitQuiz(@PathVariable Long id, @RequestBody Map<Long, String> answers) {
        Optional<Quiz> optionalQuiz = quizRepository.findById(id);
        if (!optionalQuiz.isPresent()) {
            return ResponseEntity.notFound().build();
        }

        Quiz quiz = optionalQuiz.get();
        List<Question> questions = quiz.getQuestions();

        int total = questions.size();
        int correct = 0;

        for (Question q : questions) {
            String submittedAnswer = answers.get(q.getId());
            if (submittedAnswer != null && q.getCorrectOption().equalsIgnoreCase(submittedAnswer)) {
                correct++;
            }
        }

        return ResponseEntity.ok("You scored " + correct + " out of " + total);
    }
}
