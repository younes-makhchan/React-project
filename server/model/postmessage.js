import mongoose from "mongoose";
const postSchema = mongoose.Schema({
  firstName: String,
  lastName: String,
  field3: String,
  field4: String,
  field5: String,
  field6: String,
  storageMedium: String,
});

const PostMessage = mongoose.model("Postmessage", postSchema);
export default PostMessage;
