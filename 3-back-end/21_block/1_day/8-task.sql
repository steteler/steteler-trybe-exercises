USE hr;

-- requirement 1 // requisito 1
SELECT MAX(salary)
FROM employees;

-- requirement 2 // requisito 2
SELECT
	MAX(salary) - MIN(salary)
FROM employees;

-- requirement 3 // requisito 3
SELECT 
	job_id,
    AVG(salary) AS 'average_salary'
FROM employees
GROUP BY job_id
ORDER BY average_salary DESC;

-- requirement 4 // requisito 4
SELECT SUM(salary)
FROM employees;

-- requirement 5 // requisito 5
SELECT 
	ROUND(MAX(salary), 2),
    ROUND(MIN(salary), 2),
    ROUND(SUM(salary), 2),
	ROUND(AVG(salary), 2)
FROM employees;

-- requirement 6 // requisito 6
SELECT 
	job_id,
    COUNT(job_id)
FROM employees
WHERE job_id = 'it_prog';

-- requirement 7 // requisito 7
SELECT 
	job_id,
    SUM(salary)
FROM employees
GROUP BY job_id;

-- requirement 8 // requisito 8
SELECT 
	job_id,
    SUM(salary)
FROM employees
GROUP BY job_id
HAVING job_id = 'it_prog';

-- requirement 9 // requisito 9
SELECT 
	job_id,
    AVG(salary)
FROM employees
GROUP BY job_id
HAVING job_id <> 'it_prog'
ORDER BY job_id DESC;

-- requirement 10 // requisito 10
SELECT
	department_id,
	AVG(salary), 
	COUNT(department_id) AS 'number_employees'
FROM employees
GROUP BY department_id
HAVING number_employees > 10;

-- requirement 11 // requisito 11
SET SQL_SAFE_UPDATES = 0;

UPDATE employees
SET phone_number = REPLACE(phone_number, '515', '777')
WHERE phone_number LIKE '515%';

SET SQL_SAFE_UPDATES = 1;

-- requirement 12 // requisito 12
SELECT *
FROM employees
WHERE CHAR_LENGTH(first_name) >= 8;

-- requirement 13 // requisito 13
SELECT 
	employee_id,
    first_name,
    YEAR(hire_date)
FROM employees;

-- requirement 14 // requisito 14
SELECT 
	employee_id,
    first_name,
	DAY(hire_date)
FROM employees;

-- requirement 15 // requisito 15
SELECT 
	employee_id,
    first_name,
	MONTH(hire_date)
FROM employees;

-- requirement 16 // requisito 16
SELECT UCASE(CONCAT(first_name, ' ', last_name))
FROM employees;

-- requirement 17 // requisito 17
SELECT 
	last_name,
    first_name,
    hire_date
FROM employees
WHERE hire_date BETWEEN '1987-07-01' AND '1987-07-31';

-- requirement 18 // requisito 18
SELECT
	first_name,
	last_name,
	DATEDIFF(CURRENT_DATE() , hire_date)
FROM employees;