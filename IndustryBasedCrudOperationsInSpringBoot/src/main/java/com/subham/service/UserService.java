package com.subham.service;

import java.util.List;

import org.springframework.stereotype.Service;

import com.subham.dao.SubhamRepository;
import com.subham.model.Users;

import lombok.RequiredArgsConstructor;

@RequiredArgsConstructor
@Service
public class UserService {

	private final SubhamRepository subhamRepository;

//	public UserService(SubhamRepository subhamRepository) {
//
//		this.subhamRepository = subhamRepository;
//	}

	public List<Users> findAllUsersService() {

		return subhamRepository.findAll();
	}

	public Users findByID(Long id) {

		return subhamRepository.findById(id)
				.orElseThrow(() -> new RuntimeException("User with id: " + id + " not found"));
	}

	public Users saveUser(Users user) {

		return subhamRepository.save(user);

	}

	public Users updateUserService(Long id, Users updatedUser) {
		Users updateUser = subhamRepository.findById(id)
				.orElseThrow(() -> new RuntimeException("User with id " + id + " not found"));

		updateUser.setName(updatedUser.getName());

		updateUser.setEmail(updatedUser.getEmail());

		return subhamRepository.save(updateUser);

	}

	public String deleteUsersService(Long id) {

		Users deletingUser = subhamRepository.findById(id)
				.orElseThrow(() -> new RuntimeException("User with id " + id + " not found"));

		subhamRepository.delete(deletingUser);

		String message = "User id deleted with id :" + id;

		return message;

	}

}
