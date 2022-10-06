USE sakila;

-- requirement 1 // requisito 1
INSERT INTO staff (first_name, last_name, address_id, email, store_id, active, username, password)
VALUES ('João', 'Kikuti', 2, 'kikutigamer@gmail.com', 1, 1, 'kikuti', '123');

-- requirement 2 // requisito 2
INSERT INTO staff (first_name, last_name, address_id, email, store_id, active, username, password)
VALUES 
	('João', 'Kikuti', 2, 'kikutigamer@gmail.com', 1, 1, 'kikuti', '123'), 
    ('Ruth', 'Pereira', 2, 'ruthsla@gmail.com', 1, 1, 'ruth', '123');

-- requirement 3 // requisito 3
INSERT INTO actor (first_name, last_name)
SELECT first_name, last_name
FROM customer
ORDER BY first_name
LIMIT 5;

-- requirement 4 // requisito 4
INSERT INTO sakila.category (name)
VALUES
    ('Sci-Fi'),
    ('Fantasy'),
    ('Biography');

-- requirement 5 // requisito 5
INSERT INTO sakila.store (manager_staff_id, address_id)
VALUES (3, 3);