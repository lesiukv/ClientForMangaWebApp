import { combineReducers } from "redux";
import posts from "./posts.js";
import pages from "./pages.js";
import topic from "./topics.js";
import postdetails from "./postdetails";

export default combineReducers({
  posts,
  pages,
  topic,
  postdetails
});
