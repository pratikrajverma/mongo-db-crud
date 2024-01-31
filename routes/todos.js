const express  = require("express");
const router = express.Router();

//import controller
const {createTodo} = require("../controllers/createTodo");
const {getTodo,getTodoID} = require("../controllers/getTodo");  //yaha velue ko destructing kar rahe he
const {updateTodo} = require("../controllers/updateTodo");
const {deleteTodo} = require("../controllers/deleteTodo");

 

//define APi routes
router.post("/createTodo", createTodo);
router.get("/getTodo",  getTodo);
router.get("/getTodo/:id",  getTodoID);   //yaha user getTodo path ke sath apna data ka id bhi dega jo use fetch karna he databae se
router.put("/updateTodo/:id", updateTodo); 
router.delete("/deleteTodo/:id", deleteTodo);
 
module.exports = router;