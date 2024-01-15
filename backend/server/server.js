const express= require("express");
const bodyParser = require('body-parser');
const mysql= require("mysql");
const cors =require("cors");

const app =express()
app.use(cors())
app.use(bodyParser.json());
app.use(express.json())

const db=mysql.createConnection({
    host:"localhost",
    user:"root",
    password:"root",
    database:"Timetabler"
})

// app.get('/', (req,res)=>{
//     return res.json("from backend");
// })
app.post('/department', (req, res) => {
    const { dpt_id,dpt_name } = req.body;
    const sql = 'INSERT INTO Department (department_id, department_name) VALUES (?, ?)';
  db.query(sql, [dpt_id, dpt_name], (err, result) => {
    if (err) {
            console.error('MySQL query error:', err);
            res.status(500).send(`Internal Server Error: ${err.message}`);
  
          } else {
            console.log('Data inserted successfully');
            res.status(200).send('Data inserted successfully');
          }
  });

  
  
    // Assuming you have a table named 'formData' in your database
    
    // console.log(req.body)
    // // const sql = "INSERT INTO `Department`(`department_id`,`department_name` ) VALUES ( '" +  values + "' , 3 )";
    // const sql = "INSERT INTO `Department`(`department_id`,`department_name` ) VALUES(?)"; 
    // const values=[
    //   req.body.department_id,
    //   req.body.department_name
    // ]
    // db.query(sql, [values], (err, result) => {
      
    //     if (err) {
    //       console.error('MySQL query error:', err);
    //       res.status(500).send(`Internal Server Error: ${err.message}`);

    //     } else {
    //       console.log('Data inserted successfully');
    //       res.status(200).send('Data inserted successfully');
    //     }
    //   });
})
// app.get('/department',(req,res)=>{
//     const sql="SELECT * FROM Department";
//     db.query(sql,(err,data)=>{
//         if(err)return res.json(err)
//         return res.json(data)
//     })
// }
// )
app.post('/course', (req, res) => {
  const { c_id,c_name,dpt_id } = req.body;
  const sql = 'INSERT INTO Course (course_id, course_name,department_id) VALUES (?, ?, ?)';
db.query(sql, [c_id, c_name,dpt_id], (err, result) => {
  if (err) {
          console.error('MySQL query error:', err);
          res.status(500).send(`Internal Server Error: ${err.message}`);

        } else {
          console.log('Data inserted successfully');
          res.status(200).send('Data inserted successfully');
        }
});
})
app.post('/lecturer', (req, res) => {
  const { lecturer_id,first_name,last_name,user_name,phone_number,email_address } = req.body;
  const sql = 'INSERT INTO Lecturer (lecturer_id,first_name,last_name,user_name,phone_number,email_address) VALUES (?, ?, ?,?,?,?)';
db.query(sql, [lecturer_id,first_name,last_name,user_name,phone_number,email_address], (err, result) => {
  if (err) {
          console.error('MySQL query error:', err);
          res.status(500).send(`Internal Server Error: ${err.message}`);

        } else {
          console.log('Data inserted successfully');
          res.status(200).send('Data inserted successfully');
        }
});
})

app.post('/unit', (req, res) => {
  const { unit_code,unit_name,lecturer_id } = req.body;
  const sql = 'INSERT INTO Unit (unit_code,unit_name,lecturer_id) VALUES (?, ?, ?)';
db.query(sql, [unit_code,unit_name,lecturer_id], (err, result) => {
  if (err) {
          console.error('MySQL query error:', err);
          res.status(500).send(`Internal Server Error: ${err.message}`);

        } else {
          console.log('Data inserted successfully');
          res.status(200).send('Data inserted successfully');
        }
});
})

app.listen(8081,()=>{
    console.log("listening");
})