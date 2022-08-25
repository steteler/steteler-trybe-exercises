CREATE DATABASE IF NOT EXISTS zoologico;

USE zoologico;
    
CREATE TABLE animal(
	animal_id TINYINT PRIMARY KEY AUTO_INCREMENT,
	nome VARCHAR(45) NOT NULL,
	especie VARCHAR(45) NOT NULL,
	sexo VARCHAR(45) NOT NULL,
	idade TINYINT NOT NULL,
	localizacao VARCHAR(45) NOT NULL
);
    
CREATE TABLE gerente(
	gerente_id TINYINT PRIMARY KEY AUTO_INCREMENT,
	nome VARCHAR(45) NOT NULL
);
    
CREATE TABLE cuidador(
	cuidador_id TINYINT PRIMARY KEY AUTO_INCREMENT,
	nome VARCHAR(45) NOT NULL,
	gerente_id TINYINT NOT NULL,
	FOREIGN KEY (gerente_id) REFERENCES gerente (gerente_id)
);
    
CREATE TABLE animal_cuidador(
	animal_id TINYINT,
	cuidador_id TINYINT,
	CONSTRAINT PRIMARY KEY(animal_id, cuidador_id),
	FOREIGN KEY (animal_id) REFERENCES animal (animal_id),
	FOREIGN KEY (cuidador_id) REFERENCES cuidador (cuidador_id)
);
    
    