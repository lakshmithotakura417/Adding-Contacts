import React ,{useState,useRef,useEffect}from 'react'
import  { AddContacts, EditContactsList } from '../Redux/Action';
import {connect} from 'react-redux'
function EditContacts({addContacts,editContact,editContacts}) {
  const closeRef=useRef();
  const [contacts,setContacts]=useState({
    fname:"",
    phone:"",
    email:""
  });
  const {fname,phone,email}=contacts;
  useEffect(()=>{
    setContacts(editContact)
    },[editContact])

  const changeHandler=(e)=>{
    setContacts({...contacts,[e.target.name]:e.target.value})
  }

 const handleClick=()=>{
  if(contacts.id !==null && contacts.id !== undefined){
    editContacts(contacts,contacts.id)
  }else{
  addContacts(contacts);
  }
  setContacts({
    fname:"",
    phone:"",
    email:""
  })
  closeRef.current.click();
 }

  return (
   <>
       <div className="modal-content">
        <div className="modal-header">
          <h5 className="modal-title" id="exampleModalLongTitle">Edit Data</h5>
          <button type="button" ref={closeRef}className="close" data-dismiss="modal" aria-label="Close">
            <span aria-hidden="true">&times;</span>
          </button>
        </div>
        <div className="modal-body">
        <form>
   <div className="form-group">
    <label htmlFor="formGroupExampleInput">Name</label>
    <input type="text" className="form-control" id="formGroupExampleInput"name="fname" onChange={changeHandler} value={fname} placeholder="name"/>
  </div>
  <div className="form-group">
    <label htmlFor="formGroupExampleInput2">Phone Number</label>
    <input type="text" className="form-control" id="formGroupExampleInput2" name="phone" onChange={changeHandler} value={phone} placeholder="phonenumber"/>
  </div>
  <div className="form-group">
    <label htmlFor="formGroupExampleInput2">Email id</label>
    <input type="text" className="form-control" id="formGroupExampleInput2" name="email" value={email} onChange={changeHandler} placeholder="mailid"/>
  </div> 
 
</form>
        </div>
        <div className="modal-footer">
          <button type="button" className="btn btn-secondary" data-dismiss="modal">Cancel</button>
          <button type="button" className="btn btn-primary" onClick={()=>handleClick()} >Submit</button>
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
  //getAllContacts:()=>dispatch(GetAllContacts),
  addContacts:(contacts)=>dispatch(AddContacts(contacts)),
  editContacts:(contacts,id)=>dispatch(EditContactsList(contacts,id))
}
}
export default connect(mapStateToProps,mapDispatchToProps)(EditContacts) 
