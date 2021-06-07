import express from "express";
import PostMessage from "../model/postmessage.js";
import { writeFile } from "fs";
const router = express.Router();
router.get("/", (req, res) => {
  res.send("THIS WORK");
});

//Post request
router.post("/", async (req, res) => {
  const post = req.body;

  const newPost = new PostMessage(post);

  if (newPost.storageMedium == "localFiles") {
    let users = JSON.stringify(newPost);

    writeFile("../Users/user.txt", users, { flag: "a+" }, (err, result) => {
      if (err) {
        console.log(err);
        return;
      }
      console.log(result);
    });
  } else {
    try {
      await newPost.save();

      res.status(201).json(newPost);
    } catch (error) {
      res.status(409).json({ message: error.message });
    }
  }
});

export default router;
