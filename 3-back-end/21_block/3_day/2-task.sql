CREATE SCHEMA IF NOT EXISTS Albuns;

USE Albuns;
    
CREATE TABLE artista(
	artista_id TINYINT PRIMARY KEY AUTO_INCREMENT,
	nome VARCHAR(45) NOT NULL
);

CREATE TABLE estilo_musical(
	estilo_id TINYINT PRIMARY KEY AUTO_INCREMENT,
	nome VARCHAR(45) NOT NULL
);
    
CREATE TABLE album(
	album_id TINYINT PRIMARY KEY AUTO_INCREMENT,
	titulo VARCHAR(45) NOT NULL,
	preço TINYINT NOT NULL,
	estilo_id TINYINT NOT NULL,
	artista_id TINYINT NOT NULL,
	FOREIGN KEY (estilo_id) REFERENCES estilo_musical (estilo_id),
	FOREIGN KEY (artista_id) REFERENCES artista (artista_id)
);
    
CREATE TABLE cancao(
	cancao_id TINYINT PRIMARY KEY AUTO_INCREMENT,
	nome VARCHAR(45) NOT NULL,
	album_id TINYINT NOT NULL,
	FOREIGN KEY (album_id) REFERENCES album (album_id)
);