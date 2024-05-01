const express = require("express");
const router = express.Router();

const { register } = require("../controllers/Auth");
const { login } = require("../controllers/authLogin");
const { authorize, admin, student } = require("../middleware/authorize");
const { addNotice } = require("../controllers/addNotice");
const { allNotice } = require("../controllers/allNotice");
const { userCount } = require("../controllers/userCount");
const { getUser } = require("../controllers/getUser");
const { deleteUser } = require("../controllers/deleteUser");
const { getEvent } = require("../controllers/getCalender");
const { calenderModel } = require("../controllers/addCalender");
const { deleteEvent } = require("../controllers/deleteEvent");
const { editUser } = require("../controllers/editUser");
const { batchModel } = require("../controllers/addBatch");
const { editBatch } = require("../controllers/getBatch");
const { getBatch } = require("../controllers/getBatch");
const { deleteBatch } = require("../controllers/getBatch");

router.post("/register", register);
router.post("/login", login);
router.post("/addnotice", addNotice);
router.post("/addevent", calenderModel);

router.get("/allnotice", allNotice);
router.get("/getusers", getUser);
router.get("/getbatch", getBatch);
router.delete("/deleteuser/:id", deleteUser);
router.delete("/deletevent/:id", deleteEvent);
router.delete("/deletbatch/:id", deleteBatch);
router.put("/edituser/:id", editUser);
router.put("/editbatch/:id", editBatch);
router.get("/count", userCount);
router.get("/getevent", getEvent);
router.post("/addbatch", batchModel);

router.get("/test", authorize, (req, res) => {
  res.json({ message: "User route testing is successful" });
});

router.get("/admin", authorize, admin, (req, res) => {
  res.json({ message: "Admin route testing is successful" });
});

router.get("/student", authorize, student, (req, res) => {
  res.json({ message: "Student route testing is successful" });
});

module.exports = router;
