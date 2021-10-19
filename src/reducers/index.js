import { combineReducers } from "redux";
import posts from "./posts.js";
import pages from "./pages.js";
import topic from "./topics.js";

export default combineReducers({
  posts,
  pages,
  topic
});
