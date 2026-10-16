package com.subham.controller;

import java.util.List;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.subham.model.Users;
import com.subham.service.UserService;

import lombok.RequiredArgsConstructor;

@RestController
@RequestMapping("/api/users")
@RequiredArgsConstructor
@CrossOrigin(origins = "http://localhost:4200")
public class UsersController {

	private final UserService userService;

//	public UsersController(UserService userService) {
//		this.userService = userService;
//	}

	@GetMapping
	public ResponseEntity<List<Users>> findAllUsers() {

		List<Users> users = userService.findAllUsersService();

		return new ResponseEntity<>(users, HttpStatus.OK);
	}

	@GetMapping("/{id}")
	public ResponseEntity<Users> findSingleuser(@PathVariable Long id) {

		Users user = userService.findByID(id);

		return new ResponseEntity<>(user, HttpStatus.OK);
	}

	@PostMapping
	public ResponseEntity<Users> saveUsers(@RequestBody Users user) {

		Users savedUser = userService.saveUser(user);

		return new ResponseEntity<>(savedUser, HttpStatus.CREATED);

	}

	@PutMapping("/{id}")
	public ResponseEntity<Users> updateUser(@PathVariable Long id, @RequestBody Users user) {

		
		
		return new ResponseEntity<>(userService.updateUserService(id, user), HttpStatus.OK);
	}

	@DeleteMapping("/{id}")
	public ResponseEntity<String> deleteUsers(@PathVariable Long id) {

		return new ResponseEntity<>(userService.deleteUsersService(id), HttpStatus.OK);
	}

}
