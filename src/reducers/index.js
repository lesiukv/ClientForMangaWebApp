import { combineReducers } from "redux";
import posts from "./posts.js";
import pages from "./pages.js";
import topics from "./topics.js";

export default combineReducers({
  posts,
  pages,
  topics
});
