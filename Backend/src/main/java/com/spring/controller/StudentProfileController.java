package com.spring.controller;

import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;

import com.spring.dao.StudentProfileRepository;
import com.spring.model.StudentProfile;

@RestController
@RequestMapping("/api/students")
@CrossOrigin(origins = "*")
public class StudentProfileController {

    @Autowired
    private StudentProfileRepository studentRepo;

    // Auto-create profile if not exists
    @GetMapping("/auto-create/{email}")
    public ResponseEntity<?> autoCreateProfileIfNotExist(@PathVariable String email) {
        Optional<StudentProfile> existing = studentRepo.findByEmail(email);
        if (!existing.isPresent()) {
            StudentProfile newProfile = new StudentProfile();
            newProfile.setEmail(email);
            newProfile.setName("New Student");
            newProfile.setAge(0);
            newProfile.setCourse("Unknown");
            newProfile.setImage(null); // if using byte[] image
            studentRepo.save(newProfile);
        }
        return ResponseEntity.ok("Profile ready");
    }

    // Get profile by email
    @GetMapping("/{email}")
    public ResponseEntity<?> getStudent(@PathVariable String email) {
        Optional<StudentProfile> student = studentRepo.findByEmail(email);
        if (student.isPresent()) {
            return ResponseEntity.ok(student.get());
        } else {
            return ResponseEntity.status(HttpStatus.NOT_FOUND).body("Student not found");
        }
    }

    // Create profile with JSON (no image)
    @PostMapping("/create")
    public ResponseEntity<?> createProfile(@RequestBody StudentProfile profile) {
        Optional<StudentProfile> existing = studentRepo.findByEmail(profile.getEmail());
        if (existing.isPresent()) {
            return ResponseEntity.status(HttpStatus.CONFLICT).body("Profile already exists");
        }
        studentRepo.save(profile);
        return ResponseEntity.ok("Profile created");
    }

    // Create profile with image (multipart)
    @PostMapping("/create-with-image")
    public ResponseEntity<?> createProfileWithImage(
            @RequestParam("email") String email,
            @RequestParam("name") String name,
            @RequestParam("age") int age,
            @RequestParam("course") String course,
            @RequestParam(value = "image", required = false) MultipartFile imageFile) {

        Optional<StudentProfile> existing = studentRepo.findByEmail(email);
        if (existing.isPresent()) {
            return ResponseEntity.status(HttpStatus.CONFLICT).body("Profile already exists");
        }

        try {
            StudentProfile profile = new StudentProfile();
            profile.setEmail(email);
            profile.setName(name);
            profile.setAge(age);
            profile.setCourse(course);
            if (imageFile != null && !imageFile.isEmpty()) {
                profile.setImage(imageFile.getBytes());
            }
            studentRepo.save(profile);
            return ResponseEntity.ok("Profile created with image");
        } catch (Exception e) {
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).body("Failed: " + e.getMessage());
        }
    }

    // Update profile with JSON (no image)
    @PutMapping("/update")
    public ResponseEntity<?> updateProfile(@RequestBody StudentProfile student) {
        Optional<StudentProfile> existingProfile = studentRepo.findByEmail(student.getEmail());
        if (existingProfile.isPresent()) {
            StudentProfile existing = existingProfile.get();
            existing.setName(student.getName());
            existing.setAge(student.getAge());
            existing.setCourse(student.getCourse());
            studentRepo.save(existing);
            return ResponseEntity.ok("Profile updated");
        }
        return ResponseEntity.status(HttpStatus.NOT_FOUND).body("Student not found");
    }

    // Update profile with image (multipart)
    @PutMapping("/update-with-image")
    public ResponseEntity<?> updateProfileWithImage(
            @RequestParam("email") String email,
            @RequestParam("name") String name,
            @RequestParam("age") int age,
            @RequestParam("course") String course,
            @RequestParam(value = "image", required = false) MultipartFile imageFile) {

        Optional<StudentProfile> optional = studentRepo.findByEmail(email);
        if (!optional.isPresent()) {
            return ResponseEntity.status(HttpStatus.NOT_FOUND).body("Student not found");
        }

        try {
            StudentProfile student = optional.get();
            student.setName(name);
            student.setAge(age);
            student.setCourse(course);
            if (imageFile != null && !imageFile.isEmpty()) {
                student.setImage(imageFile.getBytes());
            }
            studentRepo.save(student);
            return ResponseEntity.ok("Profile updated with image");
        } catch (Exception e) {
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).body("Failed to update");
        }
    }

    // Fetch image from DB
    @GetMapping("/image/{email}")
    public ResponseEntity<byte[]> getImage(@PathVariable String email) {
        Optional<StudentProfile> student = studentRepo.findByEmail(email);
        if (student.isPresent() && student.get().getImage() != null) {
            return ResponseEntity.ok()
                    .contentType(MediaType.IMAGE_JPEG)
                    .body(student.get().getImage());
        }
        return ResponseEntity.notFound().build();
    }
}
