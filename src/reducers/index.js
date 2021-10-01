import { combineReducers } from "redux";
import posts from "./posts.js";
import pages from "./pages.js";

export default combineReducers({
  posts,
  pages
});
