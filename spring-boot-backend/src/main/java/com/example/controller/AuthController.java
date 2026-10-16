
package com.example.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestHeader;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.example.entity.User;
import com.example.service.AuthService;

@RestController
@RequestMapping("/auth")
@CrossOrigin(origins = { "http://localhost:3000", "http://localhost:4200" })
public class AuthController {

	@Autowired
	private AuthService service;

	@PostMapping("/login")
	public ResponseEntity<?> login(@RequestBody User user) {

		return new ResponseEntity<>(service.login(user), HttpStatus.OK);
	}

	@GetMapping("/user-type")
	public ResponseEntity<List<User>> typeofUser(@RequestHeader("Authorization") String authHeader) {

		String token = authHeader.substring(7);

		return new ResponseEntity<>(service.userLoggedIn(token), HttpStatus.OK);
	}

	@PostMapping("/login/new-user")
	public ResponseEntity<?> loginNewuser(@RequestBody User user) {

		return new ResponseEntity<>(service.saveUser(user), HttpStatus.CREATED);

	}
}
