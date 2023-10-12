**Question 12:**
Assuming you have a Python script, what Python library or module would you typically use to interact with a PostgreSQL database, and how would you import it in your code?

To interact with a PostgreSQL database in Python, you would typically use the `psycopg2` library. You can import it into your code using:

```python
import psycopg2
```

**Question 13:**
What are the basic steps involved in connecting to a PostgreSQL database from Python?

The basic steps for connecting to a PostgreSQL database from Python are as follows:

1. Import the `psycopg2` library.
2. Establish a connection to the database using connection parameters like hostname, database name, username, and password.
3. Create a cursor object for executing SQL queries within the connection.
4. Perform database operations, such as querying, inserting, updating, or deleting data.
5. Commit the transaction (if applicable) to save changes to the database.
6. Close the cursor and the database connection when done.

**Question 14:**
Can you provide a sample Python code snippet for establishing a connection to a PostgreSQL database?

Here's a sample Python code snippet to establish a connection to a PostgreSQL database:

```python
import psycopg2

# Define the connection parameters
db_params = {
    'host': 'your_host',
    'database': 'your_database',
    'user': 'your_username',
    'password': 'your_password'
}

# Establish a connection
connection = psycopg2.connect(**db_params)

# Create a cursor
cursor = connection.cursor()

# Perform database operations here

# Close the cursor and connection when done
cursor.close()
connection.close()
```

**Question 15:**
In Python, how would you execute an SQL INSERT statement to add data to a PostgreSQL database, and what is the typical method or function used for this task?

To execute an SQL INSERT statement in Python using `psycopg2`, you can use the `execute()` method of the cursor object. Here's an example:

```python
# Sample INSERT statement
insert_query = "INSERT INTO your_table (column1, column2) VALUES (%s, %s)"

# Data to be inserted
data = ('value1', 'value2')

# Execute the INSERT statement
cursor.execute(insert_query, data)

# Commit the transaction to save the changes to the database
connection.commit()
```

This code inserts data into the specified table using a prepared statement and then commits the transaction to save the changes to the database.
