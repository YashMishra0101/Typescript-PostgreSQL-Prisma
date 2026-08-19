import express from "express";
import dotenv from "dotenv";
import { Pool } from "pg";

dotenv.config();

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extend: true }));

const pool = new Pool({
  user: process.env.DB_USER || "postgres",
  host: process.env.DB_HOST || "localhost",
  database: process.DB_NAME || "employee_management",
  password: process.env.PASSWORD,
  port: process.env.DB_PORT || 5432,
});

app.get("/api/employees", async (req, res) => {
  try {
    const dept = req.query.dept;
    /*
     Use req.query when the data comes after ? in the URL.

     http://localhost:8000/api/employees?dept=Engineering

     ? = query string separator or query delimiter. It tells the server that query parameters are starting now.

     dept=Engineering 
     dept = query parameter name/key
     Engineering = query parameter value

     Use req.params for values that are part of the route path, usually to identify one specific resource, like /api/employees/14. Use req.query for values after ?, usually for filtering, sorting, searching, or pagination, like /api/employees?dept=Engineering. Technically strings can also be used in path params, but industry practice is: path = which resource, query = what filter/options.
    */
  
    let result;
    if (dept) {
      result = await pool.query(
        "SELECT * FROM EMPLOYEES WHERE DEPT =$1 ORDER BY emp_id ASC",
        [dept],
      );
    } else {
      result = await pool.query("SELECT * FROM EMPLOYEES ORDER BY emp_id ASC");
    }

    res.json({
      success: true,
      data: result.rows,
      count: result.rowCount,
    });
  } catch (error) {
    console.log("Error fetching employees", error);
    res.status(500).json({
      success: false,
      message: "Error fething employees",
      error: error.message,
    });
  }
});

app.get("/api/employees/:id", async (req, res) => {
  console.log(req.params); //Use req.params when the value is part of the route path
  try {
    const employeeID = req.params.id;
    const result = await pool.query("SELECT * FROM EMPLOYEES WHERE emp_id=$1", [
      employeeID,
    ]); //$1 is a placeholder used by PostgreSQL when we send values separately from the SQL query, so $1 = first value from the array.

    res.json({
      success: true,
      data: result.rows,
      count: result.rowCount,
    });
  } catch (error) {
    console.log("Error fetching employees", error);

    res.status(500).json({
      success: false,
      message: "Error fething employees",
      error: error.message,
    });
  }
});

app.post("/api/employess", async (req, res) => {
  try {
    const { fname, lname, email, dept, salary, hire_date } = req.body;

    const result = await pool.query(
      `INSERT INTO EMPLOYEES (fname,lname,email,dept,salary,hire_date) VALUES ($1, $2, $3, $4, $5, $6) RETURNING *`,
      [fname, lname, email, dept, salary, hire_date],
    );

    res.status(201).json({
      success: true,
      message: "Employee created successfully",
      data: result.rows[0],
    });
  } catch (error) {
    console.log("Error creating employee", error);

    res.status(500).json({
      success: false,
      message: "Error creating employee",
      error: error.message,
    });
  }
});

pool.connect((err, client, release) => {
  if (err) {
    console.log(`❌ Error connecting to the database : ${err.stack}`);
  } else {
    console.log(`✅ Connected to the PostgreSQL database`);
    release();
  }
});

app.listen(process.env.PORT, () => {
  console.log(`Server is running on port number : ${process.env.PORT}`);
}); //app.listen() starts the Express server and listens for incoming requests on a specified port

/*

---Why we are using app.use(express.json()) ?

The client sends data in the form of a JSON string — '{"name":"yash", "role":"fullstack"}' but Express cannot directly handle this raw string. That's why we use express.json(). With the help of express.json(), Express can parse the client's JSON data and attach it to req.body as a JavaScript object, which we then access using req.body.(So express.json() convert JSON string data into Javascript Object : '{"name":"yash", "role":"fullstack"}' -> {name:"yash",role:"fullstack"}')

This exists because HTTP is a text-based protocol. Everything traveling over the network is text. You cannot send an actual JavaScript object over HTTP it doesn't exist outside of JavaScript's memory. So the client converts the object into a string (called serialization), sends it over the network, and then Express converts it back into a JavaScript object using express.json()  (called deserialization or parsing).


---Why we are using express.urlencoded({extend:true}) ?

express.urlencoded({ extended: true }) is middleware used to parse incoming requests where the data is sent in URL-encoded format, which is the default format used by traditional HTML forms when submitted without JavaScript. When a form is submitted, the browser sends data as a plain string like 'name=Yash&role=fullstack', and without this middleware, Express cannot read it — req.body would be undefined. With express.urlencoded(), Express parses this string and converts it into a JavaScript object and attaches it to req.body, the same way express.json() does. (so express.urlencoded() converts URL-encoded string data into a JavaScript object: 'name=Yash&role=fullstack' → { name: "Yash", role: "fullstack" })

Note : When an HTML form is submitted, the browser does not send the data in JSON format. Instead, it sends the data as a plain string in URL-encoded format — for example, 'name=Yash&role=fullstack'. This is just key-value pairs joined with &, with no curly braces or JSON structure at all. This is a different string format than JSON, which is why a separate middleware, express.urlencoded(), is needed to parse it — express.json() cannot read this format, since it's built specifically to parse JSON strings. That's the core distinction: both are strings coming over HTTP, but two different string formats, needing two different parsers.

The extended: true option allows the middleware to parse nested objects and arrays, not just flat key-value pairs. With extended: false, only simple flat data is supported.

In modern apps using React, Next.js, or any frontend that sends data using fetch or axios with JSON, this middleware usually isn't needed since data arrives as JSON, not URL-encoded. But it's still commonly added as a safety net to support form submissions or third-party services that may still send URL-encoded data.


--What's the use of release ();

pool.connect()
     ↓
borrow a connection
     ↓
use/check the connection
     ↓
release()
     ↓
connection goes back to the pool

release() returns the borrowed database connection back to the connection pool so it can be reused by other requests.
*/
