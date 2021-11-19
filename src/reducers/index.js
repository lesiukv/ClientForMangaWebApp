import { combineReducers } from "redux";
import posts from "./posts.js";
import pages from "./pages.js";
import topic from "./topics.js";
import postdetails from "./postdetails";
import comments from "./comments";
import auth from "./auth";
import profiles from "./profiles";
import favorites from "./favorites";

export default combineReducers({
  posts,
  pages,
  topic,
  postdetails,
  comments,
  auth,
  profiles,
  favorites
});
