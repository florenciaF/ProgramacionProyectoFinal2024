import { Field, Form, Formik } from 'formik'
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2'
import { useContext } from 'react';
import { UserContext } from '../context/UserContext';


export const Register = () => {

  const navigate = useNavigate();

  const initialValues = {
    name: '',
    email:'',
    password: ''
  } 

  const {setUser} = useContext(UserContext);

  const handleRegister = async( values) => {
      try {
          const response = await axios.post('http://localhost:5000/auth/register', values)
          console.log(response.data) 

          const {role, idUser} = response.data //variable que proviene del back
          console.log('role', role)
          console.log('idUser', idUser)

          Swal.fire({
            icon: 'success',
            title: 'Registro exitoso',
            showConfirmButton: false,
            timer: 1800
          })
          setUser({
            logged:true,
            role: role,
            id:idUser
          })
          navigate('/panel')
      } catch (error) {
        console.log(error)
      }
  }

  return (
    <div>
    <div className="news_section layout_padding">
      <div className="container">
        <div className="d-flex  justify-content-center">
          <h1 className="services_text custom_main">Registro</h1>
        </div>
      </div>
    </div>
    <div className='row justify-content-center'> 
      <div className='col-md-6'>
       <Formik
        initialValues={initialValues}
        onSubmit={handleRegister}
       >
          <Form>
            <div className="mb-3">
            <label htmlFor="exampleFormControlInput1" className="form-label">Nombre </label>
              <Field 
                  type="text" 
                  className="form-control" 
                  id="exampleFormControlInput1" 
                  placeholder="Florencia"
                  name='name'
              />
            </div>
            <div className="mb-3">
              <label htmlFor="exampleFormControlInput1" className="form-label">Email </label>
                <Field 
                    type="email" 
                    className="form-control" 
                    id="exampleFormControlInput1" 
                    placeholder="name@example.com"
                    name='email'
                />
            </div>
            <div className="mb-3">
              <label htmlFor="exampleFormControlInput1" className="form-label"> Contraseña</label>
              <Field 
                type="password" 
                className="form-control" 
                id="exampleFormControlInput1"  
                placeholder="Password" 
                name='password'
              />
            </div>
            <button className="btn btn-primary w-100 py-2" type="submit" onClick={handleRegister}>Registro</button>
          </Form>
       </Formik>
      </div>
    </div> 
    </div>
  )
}
