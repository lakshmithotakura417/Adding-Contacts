import React,{useEffect} from 'react';
import { connect } from 'react-redux';
import GetAllContacts, { getSingleContact ,DeleteContactsList} from '../Redux/Action';
import EditContacts from './EditContacts';
const Contacts=({contacts,getAllContacts,getSingleContact,contact,deleteContact})=>{
    useEffect(()=>{
        getAllContacts()
    },[]);
    const deleteHandler=(index)=>{
      const confirm=window.confirm("are you shure to delete this contact");
      if(confirm){
        
        deleteContact(index)
      }
    }
return(
<>
  <div className='container d-flex flex-row justify-content-between mt-3'>
        <h1>contacts</h1>
        <button type="button" className='btn btn-primary' data-toggle="modal" data-target="#exampleModalCenter">+Edit Contacts</button>
  </div>
  <div className='container'>
    {contacts.length ===0 && <h2 className="text-danger text-center">no contacts found</h2>}
    {contacts.length >0 &&<table className="table">
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
          {contacts.map((contact,index)=>{
            return <>
              <tr key={index}>
                <th >{index+1}</th>
                <td>{contact.fname}</td>
                <td>{contact.phone}</td>
                <td>{contact.email}</td>
                <td>
                  <button type='button' className='btn btn-primary'data-toggle="modal" data-target="#exampleModalCenter" onClick={()=>getSingleContact(index)}>Edit</button>&nbsp;
                  <button type="button" className='btn btn-danger' onClick={()=>deleteHandler(index)}>Delete</button>
                </td>
              </tr>
            
            </>
          })} 
      </tbody>
    </table>}
  </div>
  
  <div className="modal fade" id="exampleModalCenter" tabIndex="-1" role="dialog" aria-labelledby="exampleModalCenterTitle" aria-hidden="true">
    <div className="modal-dialog modal-dialog-centered" role="document">
      <EditContacts editContact={contact}/>
    </div>
  </div>
</>
)
}
const mapStateToProps=(state)=>{
return {
  contacts:state.contacts,
  contact:state.contact
}
}
const mapDispatchToProps=(dispatch)=>{
  return{
    getAllContacts:()=>dispatch(GetAllContacts()),
    getSingleContact:(index)=>dispatch(getSingleContact(index)),
    deleteContact:(index)=>dispatch(DeleteContactsList(index))
  }
}
export default connect(mapStateToProps,mapDispatchToProps)(Contacts);