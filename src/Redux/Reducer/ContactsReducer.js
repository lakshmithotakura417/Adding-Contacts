import React from "react"
const initialState={
    contacts:[
        {
            id:1,
            fname:"lakshmi",
            phone:12345,
            email:"lakshmithotakura66@gmail.com"
        }
    ],
    contact:{}
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
    case "EDIT_CONTACTS":{
        let contacts=[...state.contacts];
          contacts[action.id]=action.payload;
       return {...state,contacts:contacts}
    }
    case "DELETE_CONTACTS":{
        let contacts=[...state.contacts];
          contacts.splice(action.id,1)
       return {...state,contacts:contacts}
    }
    case "GET_SINGLE_CONTACT":{
        return {...state,contact:{...state.contacts[action.index],id:action.index}}
    }
    default:
        return state
}
}
export default ContactsReducer;