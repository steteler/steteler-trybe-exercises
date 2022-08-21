USE sakila;

-- requirement 1 // requisito 1
SELECT active, COUNT(active)
FROM customer
GROUP BY active;

-- requirement 2 // requisito 2
SELECT store_id, active, COUNT(active)
FROM customer
GROUP BY store_id, active;

-- requirement 3 // requisito 3
SELECT AVG(rental_duration) AS avg_rental_duration, rating
FROM film
GROUP BY rating
ORDER BY avg_rental_duration DESC;

-- requirement 4 // requisito 4
SELECT district, COUNT(district) AS 'district_amount'
FROM address
GROUP BY district
ORDER BY district_amount DESC;