package com.example.service;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.entity.User;
import com.example.repository.UserRepository;
import com.example.security.JwtUtil;

import io.jsonwebtoken.Claims;
import io.jsonwebtoken.Jwts;

@Service
public class AuthService {

	@Autowired
	private UserRepository repository;

	public String login(User request) {

		if (request.getEmail() == null || request.getPassword() == null) {
			return "Email or Password is missing";
		}

		Optional<User> user = repository.findByEmail(request.getEmail());

		if (user.isPresent()) {

			User dbUser = user.get();

			if (dbUser.getEmail().equals(request.getEmail()) && dbUser.getPassword().equals(request.getPassword())) {

				return JwtUtil.generateToken(dbUser.getEmail(), dbUser.getRole());
			}
		}

		return "Invalid Credentials";
	}

	public List<User> userLoggedIn(String token) {

		Claims claims = Jwts.parserBuilder().setSigningKey(JwtUtil.key).build().parseClaimsJws(token).getBody();

		String role = claims.get("role", String.class);

		if (role.equalsIgnoreCase("admin")) {

			List<User> adminUser = repository.findAllUsersBasedOnRole(role);

			return adminUser;

		} else {
			List<User> simpleUser = repository.findAllUsersBasedOnRole(role);

			return simpleUser;
		}

	}

	public User saveUser(User user) {

		repository.save(user);

		return user;
	}
}