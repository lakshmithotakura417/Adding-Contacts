import React,{useEffect} from 'react';
import { connect } from 'react-redux';
import GetAllContacts from '../Redux/Action';
const Contacts=({contacts,getAllContacts})=>{
    useEffect(()=>{
        getAllContacts()
    },[])
return(
    <>
    <div className='container d-flex flex-row justify-content-between mt-3'>
        <h1>contacts</h1>
        <button type="button" className='btn btn-primary'>+Edit Contacts</button>
    </div>
    <div className='container'>
    <table class="table">
  <thead>
    <tr>
      <th >Id</th>
      <th >First</th>
      <th >Last</th>
      <th >Handle</th>
      <th>Actions</th>
    </tr>
  </thead>
  <tbody>
   {contacts.map((contact,index)=>{
    return <>
     <tr>
      <th >{index+1}</th>
      <td>{contact.firstname}</td>
      <td>{contact.lastname}</td>
      <td>{contact.mailid}</td>
      <td>
        <button type='button' className='btn btn-primary'>Edit</button>&nbsp;
        <button type="button" className='btn btn-danger'>Delete</button>
      </td>
    </tr>
    
    </>
   })} 
  </tbody>
</table>
    </div>
    </>
)
}
const mapStateToProps=(state)=>{
return {
  contacts:state.contacts
}
}
const mapDispatchToProps=(dispatch)=>{
  return{
    getAllContacts:()=>dispatch(GetAllContacts())
  }
}
export default connect(mapStateToProps,mapDispatchToProps)(Contacts);