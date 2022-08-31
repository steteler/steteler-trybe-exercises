USE hr;

-- requirement 1 // requisito 1

SELECT
    e.first_name,
    m.first_name
FROM employees AS e
    INNER JOIN employees AS m ON e.manager_id = m.employee_id
WHERE
    e.department_id <> m.department_id;

-- requirement 2 // requisito 2

SELECT
    m.first_name,
    m.last_name,
    COUNT(*)
FROM employees AS m
    INNER JOIN employees AS e ON e.manager_id = m.employee_id
GROUP BY m.employee_id;