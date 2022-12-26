const router = require("express").Router();

const { verifyTokenAndAdmin } = require("../middleware/verifyToken");
const Course = require("../models/Course");

router.post("/course", verifyTokenAndAdmin, async (req, res) => {
    try {
      const course = await Course.create(req.body);
      res.send("Course Created Successfully....!");
    } catch (err) {
      res.status(401).send(err)
    }
  });



  router.get("/course", async (req, res) => {
    try {
      const allCourses = await Course.find();

      res.status(200).send(allCourses);

    } catch (err) {
      res.status(401).send(err);
    }
  });



  router.delete("/course:id", async (req, res) => {
    const { id } = req.params;
    try {
      const course = await Course.deleteOne({ _id: id });
      res.send("Course Deleted Succesfilly....!");
    } catch (e) {
      res.status(404).send(e);
    }
  });


  



module.exports = router;