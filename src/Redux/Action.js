const GetAllContacts=()=>{
return {
    type:"GET_ALL_CONTACTS"
}
}
export default GetAllContacts;
export const AddContacts=(contacts)=>{
    return {
        type:"ADD_CONTACTS",
        payload:contacts
    }
    }
export const EditContactsList=(contacts,id)=>{
    return{
        type:"EDIT_CONTACTS",
        payload:contacts,id
    }
} 
export const DeleteContactsList=(id)=>{
    return{
        type:"DELETE_CONTACTS",id
    }
}
export const getSingleContact=(index)=>{
return {
    type:"GET_SINGLE_CONTACT",
    index,
}
}