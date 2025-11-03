package com.User.ProyectoGitHub.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.User.ProyectoGitHub.model.Usuario;
import com.User.ProyectoGitHub.repository.UserRepository;

import jakarta.transaction.Transactional;

@Service
@Transactional
public class UserService {
    @Autowired
    private UserRepository userRepository;

    public List<Usuario> findAll() {
        return userRepository.findAll();
    }

    public Usuario findById(long id) {
        return userRepository.findById(id).get();

    }

    public Usuario save(Usuario usuario) {
        return userRepository.save(usuario);
    }

    public void delete(Long id) {
        userRepository.deleteById(id);
    }

}
