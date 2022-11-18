
import './App.css';
import {useFormik} from 'formik';
import validation from './validation';

function SignUp() {
  const { handleSubmit, handleChange, handleBlur, values, errors, touched } = useFormik({
    initialValues:{
      email:"",
      name:"",
      surname:"",
      comment:"", 
    },

    onSubmit : (values,{resetForm}) => {
      console.log(values);
      resetForm({values:""})
    },
    
    validationSchema:validation,
  });


  return (
    <div className='back'>
  
        <form onSubmit={handleSubmit}>
        <h1>Hello🐢</h1>

        <div className='inputArea'>
        <label htmlFor="email">Email</label>
        <input
         
          name="email"
          onChange={handleChange}
          onBlur={handleBlur}
          value={values.email}
          
        />
        {errors.email && touched.email ? <div className='error'>{errors.email}</div> : <div className='nonetext'>a</div>}
        </div>

        <div className='inputArea'>
        <label htmlFor="name">Name</label>
        <input
          
          name="name"
          onChange={handleChange}
          onBlur={handleBlur}
          value={values.name}
          
        />
        {errors.name && touched.name ? <div className='error'>{errors.name}</div> : <div className='nonetext'>a</div>}
        </div>

        <div className='inputArea'>
        <label htmlFor="surname">Surname</label>
        <input
          
          name="surname"
          onChange={handleChange}
          onBlur={handleBlur}
          value={values.surname}
          
        />
        {errors.surname && touched.surname ? <div className='error'>{errors.surname}</div> : <div className='nonetext'>a</div>}
        </div>

        <div className='inputArea'>
        <label htmlFor="comment">Comment</label>

        <input
          type="text"
          name="comment"
          onChange={handleChange}
          onBlur={handleBlur}
          value={values.comment}
          
        />
        {errors.comment && touched.comment ? <div className='error'>{errors.comment}</div> : <div className='nonetext'>a</div>}
        </div>

        
        
        <button  type="submit" >Submit</button>
        <br />
        <br />
        
        
      </form>
      
    
  </div>
  );
}

export default SignUp;