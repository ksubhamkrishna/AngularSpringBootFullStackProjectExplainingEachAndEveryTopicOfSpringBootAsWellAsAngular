package com.example.security;

import java.security.Key;
import java.util.Date;
import java.util.HashMap;
import java.util.Map;

import io.jsonwebtoken.Jwts;
import io.jsonwebtoken.SignatureAlgorithm;
import io.jsonwebtoken.security.Keys;

public class JwtUtil {

	private static final String SECRET = "mysupersecretkeymysupersecretkey";

	public static final Key key = Keys.hmacShaKeyFor(SECRET.getBytes());

	public static String generateToken(String email, String role) {

		Map<String, String> claims = new HashMap<>();

		claims.put("role", role);

		return Jwts.builder().setClaims(claims).setSubject(email).setIssuedAt(new Date())
				.setExpiration(new Date(System.currentTimeMillis() + 200 * 60 * 60))
				.signWith(key, SignatureAlgorithm.HS256).compact();
	}

}