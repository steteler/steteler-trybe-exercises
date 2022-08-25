CREATE DATABASE IF NOT EXISTS normalization;

USE normalization;

DROP TABLE IF EXISTS funcionario;

CREATE TABLE funcionario(
	funcionario_id TINYINT AUTO_INCREMENT PRIMARY KEY,
    nome VARCHAR(45) NOT NULL,
    sobrenome VARCHAR(45) NOT NULL,
    contato VARCHAR(45) NOT NULL,
    telefone VARCHAR(45) NOT NULL,
    data_cadastro DATE NOT NULL
);

INSERT INTO funcionario (nome, sobrenome, contato, telefone, data_cadastro) VALUES('Joseph', 'Rodrigues', 'jo@gmail.com', '(35)998552-1445', '2020-05-05 08:50:25');
INSERT INTO funcionario (nome, sobrenome, contato, telefone, data_cadastro) VALUES('André', 'Freeman', 'andre1990@gmail.com', '(47)99522-4996', '2020-02-05 00:00:00');
INSERT INTO funcionario (nome, sobrenome, contato, telefone, data_cadastro) VALUES('Cíntia', 'Duval', 'cindy@outlook.com', '(33)99855-4669', '2020-05-05 10:55:35');
INSERT INTO funcionario (nome, sobrenome, contato, telefone, data_cadastro) VALUES('Fernanda', 'Mendes', 'fernandamendes@yahoo.com', '(33)99200-1556', '2020-05-05 11:45:40');

CREATE TABLE setor(
  setor_id TINYINT AUTO_INCREMENT PRIMARY KEY,
  nome VARCHAR(45) NOT NULL
);

INSERT INTO setor(nome) VALUES('Administração');
INSERT INTO setor(nome) VALUES ('Vendas');
INSERT INTO setor(nome) VALUES('Operacional');
INSERT INTO setor(nome) VALUES('Estratégico');
INSERT INTO setor(nome) VALUES('Marketing');

CREATE TABLE funcionario_setor(
	funcionario_id TINYINT NOT NULL,
	setor_id TINYINT NOT NULL,
	FOREIGN KEY (funcionario_id) REFERENCES funcionario(funcionario_id),
	FOREIGN KEY (setor_id) REFERENCES setor(setor_id)
);

INSERT INTO funcionario_setor (funcionario_id, setor_id) VALUES(1, 1);
INSERT INTO funcionario_setor (funcionario_id, setor_id) VALUES(1, 2);
INSERT INTO funcionario_setor (funcionario_id, setor_id) VALUES(2, 3);
INSERT INTO funcionario_setor (funcionario_id, setor_id) VALUES(4, 4);
INSERT INTO funcionario_setor (funcionario_id, setor_id) VALUES(4, 2);
INSERT INTO funcionario_setor (funcionario_id, setor_id) VALUES(5, 5);