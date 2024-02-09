
const expresss= require('express');
const { newStudentView, getNewStudent, editNewStudentView, deleteStudent, deletePost } = require('../controllers/post.controller');
const router = expresss.Router();

router.get("/", getNewStudent);
//router.get("/", (req, res) => {
//   res.json({ message: "Voici les Donées Get" });
//});
//test get

router.post("/", newStudentView);      //set

router.put("/:id", editNewStudentView);
//router.put("/:id", (req, res) => {
  //  res.json({messageId : req.params.id});
//});
//base put

router.delete("/:id", deleteStudent);

//router.delete("/:id", (req, res) => {  
  //   res.json({ message : "Student suppimé id : "+req.params.id});
//});
// student + id supprimer


module.exports = router;