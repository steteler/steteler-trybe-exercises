USE sakila;

-- requirement 1 // requisito 1
SELECT
	a.actor_id,
	a.first_name,
	a.last_name,
	fa.film_id
FROM actor AS a
INNER JOIN film_actor AS fa
ON a.actor_id = fa.actor_id;

-- requirement 2 // requisito 2
SELECT
	s.first_name,
	s.last_name,
	s.address_id,
    a.address
FROM staff AS s
INNER JOIN address AS a
ON s.address_id = a.address_id;

-- requirement 3 // requisito 3
SELECT
	c.customer_id,
	c.first_name,
	c.last_name,
	c.email,
    c.address_id,
    a.address
FROM customer AS c
INNER JOIN address AS a
ON c.address_id = a.address_id
ORDER BY first_name 
DESC LIMIT 100;

-- requirement 4 // requisito 4
SELECT
	c.first_name,
    c.last_name,
    c.email,
    c.address_id,
    a.address,
    a.district
FROM customer AS c
INNER JOIN address AS a
ON c.address_id = a.address_id
WHERE a.district = 'California' AND first_name LIKE '%rene%';

-- requirement 5 // requisito 5
SELECT
	c.first_name,
    COUNT(a.address)
FROM customer AS c
INNER JOIN address AS a
ON c.address_id = a.address_id
WHERE c.active = 1
GROUP BY c.customer_id
ORDER BY c.first_name DESC;

-- requirement 6 // requisito 6
SELECT
	s.first_name,
    s.last_name,
	AVG(p.amount) AS 'average_payment'
FROM staff AS s
INNER JOIN payment AS p
ON s.staff_id = p.staff_id
WHERE YEAR(p.payment_date) = '2006'
GROUP BY s.staff_id;

-- requirement 7 // requisito 7
SELECT
	a.actor_id,
    a.first_name,
    a.last_name,
    f.film_id,
    f.title
FROM actor AS a
INNER JOIN film_actor AS fa
ON a.actor_id = fa.actor_id 
INNER JOIN film AS f
ON f.film_id = fa.film_id;
