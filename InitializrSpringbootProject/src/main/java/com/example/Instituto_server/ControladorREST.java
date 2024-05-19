package com.example.Instituto_server;


import org.springframework.web.bind.annotation.RestController;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/")
public class ControladorREST {
    
    @GetMapping("/{requestedId}")
    private ResponseEntity<String> findById() {
      return ResponseEntity.ok("{}");
   }
}

