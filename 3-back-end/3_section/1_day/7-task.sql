USE sakila;

-- requirement 1 // requisito 1

SELECT
    rating,
    AVG(length) AS 'average_duration'
FROM film
GROUP BY rating
HAVING
    average_duration BETWEEN 115.0 AND 121.50
ORDER BY average_duration DESC;

-- requirement 2 // requisito 2

SELECT
    rating,
    SUM(replacement_cost) AS 'total_replacement_cost'
FROM film
GROUP by rating
HAVING
    total_replacement_cost > 3950.50
ORDER BY
    total_replacement_cost;