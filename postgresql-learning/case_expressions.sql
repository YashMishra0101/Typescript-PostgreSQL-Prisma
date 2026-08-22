-- CASE expression is used to implement conditional logic in PostgreSQL, similar to if-else in programming languages.

-- Alias means a temporary name given to a column, table or expression, in the query result. (In the below example: ORDER_STATUS)

-- CASE is used to start a conditional expression and END is used to end the CASE expression.


CREATE TABLE orders(
    order_id SERIAL PRIMARY KEY,
    customer_name VARCHAR(100) NOT NULL,
    total_amount NUMERIC(10,2) NOT NULL,
    payment_status VARCHAR(20) NOT NULL,
    delivery_status VARCHAR(20) NOT NULL
);


INSERT INTO orders
(customer_name, total_amount, payment_status, delivery_status)
VALUES
('Rahul Sharma', 2499.00, 'paid', 'delivered'),
('Priya Verma', 1599.00, 'paid', 'shipped'),
('Aman Kumar', 3299.00, 'paid', 'processing'),
('Neha Singh', 999.00, 'pending', 'processing'),
('Rohit Gupta', 4999.00, 'failed', 'cancelled'),
('Ananya Patel', 1899.00, 'paid', 'delivered');


SELECT
    order_id,
    customer_name,
    total_amount,
    CASE
        WHEN payment_status = 'failed' THEN 'PAYMENT FAILED'
        WHEN delivery_status = 'cancelled' THEN 'ORDER CANCELLED'
        WHEN delivery_status = 'delivered' THEN 'COMPLETED'
        WHEN delivery_status = 'shipped' THEN 'ON THE WAY'
        WHEN payment_status = 'pending' THEN 'PAYMENT PENDING'
        ELSE 'PROCESSING'
    END AS order_status
FROM orders;