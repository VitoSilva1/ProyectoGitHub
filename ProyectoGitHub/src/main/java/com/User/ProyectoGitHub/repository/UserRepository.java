package com.User.ProyectoGitHub.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.User.ProyectoGitHub.model.Usuario;

public interface UserRepository extends JpaRepository<Usuario, Long> {

}
