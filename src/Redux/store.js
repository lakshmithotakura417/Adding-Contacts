import { createStore } from "redux";
import ContactsReducer from "./Reducer/ContactsReducer";
const store=createStore(ContactsReducer);
export default store;