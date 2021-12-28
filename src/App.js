import React from "react";
import {useFormik} from 'formik'
// TODO: import useFormik from formik library

function App() {
  const formik = useFormik({
    initialValues: {
      name: '',
      password: '',
    },

  onSubmit: values =>{
    console.log("Submitting");
    console.log('form', values);
  },


  validate: values => {
    let errors = {};
    if(!values.username) errors.username = "Username should be an email";
    if(!values.password) errors.password = "Field Required";
    return errors;
   }
  });


  // TODO: add a const called formik assigned to useFormik()
  return (
    <div>
      < form onSubmit={formik.handleSubmit}>
      <div>Username</div>
      <input name="username" type="text" placeholder="Jess@gmail.com" onChange={formik.handleChange} value={formik.values.username}/>
        {formik.errors.username ? <div style={{color:'red'}}>{formik.errors.username}</div>: null} 
        <div>Password</div>
        <input name="password" type="text" onChange={formik.handleChange} value={formik.values.password}/>
        {formik.errors.password? <div style={{color:'red'}}>{formik.errors.password}</div>: null}
        <div><br></br></div>
        <div><input type="checkbox"/> Remember me</div>
       <button type="submit">Submit</button>

      </form>
    </div>
  );
}

export default App;
