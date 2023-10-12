**Question 5:**
How would you write a SQL query to retrieve all columns from a table named "employees"?

```
SELECT * FROM employees;
```

**Question 6:**
You have a table named "orders" with columns "order_id," "customer_id," and "order_date." Write a SQL query to retrieve the "order_id" and "order_date" of all orders placed by a specific customer with a known "customer_id."

```
SELECT order_id, order_date FROM orders WHERE customer_id = 'specific_id';
```

**Question 7:**
In a table named "products," there are columns "product_id," "product_name," and "price." Write a SQL query to retrieve the product with the highest price.

```
SELECT * FROM products ORDER BY price DESC;
```

**Question 8:**
Suppose you have two tables, "students" and "courses," with a many-to-many relationship. How would you write a SQL query to retrieve a list of students who have enrolled in a specific course with a known course ID?

Inner join

```
SELECT students.student_name
FROM students
JOIN student_course ON students.student_id = student_course.student_id
WHERE student_course.course_id = 'known_course_id';

```

**Question 9:**
Suppose you have a table named "employees" with columns "employee_id," "employee_name," and "manager_id," where "manager_id" indicates the manager for each employee. How would you write a SQL query to retrieve the names of employees along with the names of their respective managers?

```
SELECT e.employee_name AS employee, m.employee_name AS manager
FROM employees e
LEFT JOIN employees m ON e.manager_id = m.employee_id;

```

**Question 10:**
Suppose you have a table named "sales" with columns "order_id," "product_id," "quantity_sold," and "sale_date." How would you write a SQL query to calculate the total quantity sold for each product, sorted in descending order of total quantity?

```
SELECT product_id, SUM(quantity_sold) AS total_quantity_sold
FROM sales
GROUP BY product_id
ORDER BY total_quantity_sold DESC;
```

**Question 11:**
You have a table named "orders" with columns "order_id," "order_date," and "customer_id." Additionally, you have another table named "customers" with columns "customer_id" and "customer_name." Write a SQL query to retrieve the customer names and the count of orders each customer has placed. Ensure that the result includes all customers, even those who haven't placed any orders.

```
SELECT c.customer_name, COUNT(o.order_id) AS order_count
FROM customers c
LEFT JOIN orders o ON c.customer_id = o.customer_id
GROUP BY c.customer_name
```
