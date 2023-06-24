import React from "react"
const initialState={
    contacts:[
        {
            id:1,
            fname:"lakshmi",
            phone:12345,
            email:"lakshmithotakura66@gmail.com"
        }
    ]
}

const ContactsReducer=(state=initialState,action)=>{

switch(action.type){
    case "GET_ALL_CONTACTS":
       return {...state}
    case "ADD_CONTACTS":{
        let contacts=[...state.contacts];
          contacts.push(action.payload)
       return {...state,contacts:contacts}
    }
    default:
        return state
}
}
export default ContactsReducer;