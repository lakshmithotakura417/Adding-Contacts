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
  