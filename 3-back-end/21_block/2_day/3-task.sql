USE pixar;

-- requirement 1 // requisito 1 
SELECT
    m.title,
    b.domestic_sales,
    b.international_sales
FROM movies AS m
INNER JOIN boxoffice AS b
ON b.movie_id = m.id;

-- requirement 2 // requisito 2
SELECT
    m.title,
    (b.domestic_sales + b.international_sales) AS "Vendas"
FROM movies AS m
INNER JOIN boxoffice AS b
ON b.movie_id = m.id
WHERE b.international_sales > b.domestic_sales;
    
-- requirement 3 // requisito 3
SELECT
    m.title,
    b.rating
FROM movies AS m
INNER JOIN boxoffice AS b
ON b.movie_id = m.id
ORDER BY b.rating DESC;

-- requirement 4 // requisito 4
SELECT
    t.name,
    t.location,
    m.title,
    m.director,
    m.year,
    m.length_minutes
FROM theater AS t
LEFT JOIN movies AS m
ON t.id = m.theater_id
ORDER BY t.name;

-- requirement 5 // requisito 5
SELECT
    t.id,
    t.name,
    t.location,
    m.title,
    m.director,
    m.year,
    m.length_minutes
FROM theater AS t
RIGHT JOIN movies AS m
ON t.id = m.theater_id
ORDER BY t.name;

-- requirement 6 // requisito 6
SELECT
    m.id,
    m.title,
    m.director,
    m.year,
    m.length_minutes,
    m.theater_id
FROM movies AS m
INNER JOIN boxoffice AS b
ON b.movie_id = m.id
WHERE b.rating > 8 AND m.theater_id IS NOT NULL;