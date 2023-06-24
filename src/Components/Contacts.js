import React,{useEffect} from 'react';
import { connect } from 'react-redux';
import GetAllContacts from '../Redux/Action';
import EditContacts from './EditContacts';
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
    <table className="table">
      <thead>
        <tr>
          <th >Id</th>
          <th >Name</th>
          <th >Phone</th>
          <th >Email</th>
          <th>Actions</th>
        </tr>
      </thead>
      <tbody>
          {contacts.length>0 && contacts.map((contact,index)=>{
            return <>
            <tr>
              <th >{index+1}</th>
              <td>{contact.fname}</td>
              <td>{contact.phone}</td>
              <td>{contact.email}</td>
              <td>
                <button type='button' className='btn btn-primary' data-toggle="modal" data-target="#exampleModalCenter">Edit</button>&nbsp;
                <button type="button" className='btn btn-danger'>Delete</button>
              </td>
            </tr>
            
            </>
          })} 
      </tbody>
    </table>
  </div>
  
  <div className="modal fade" id="exampleModalCenter" tabIndex="-1" role="dialog" aria-labelledby="exampleModalCenterTitle" aria-hidden="true">
    <div className="modal-dialog modal-dialog-centered" role="document">
      <EditContacts/>
    </div>
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