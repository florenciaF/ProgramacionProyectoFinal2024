import { Field, Form, Formik } from 'formik'
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2'
import { useContext } from 'react';
import { UserContext } from '../context/UserContext';

export const Login = () => {

  const navigate = useNavigate();

  const initialValues = {
    email:'',
    password:''
  }

  const { setUser } = useContext(UserContext);


  const handleForm = async(values) => {
    try {
      const response = await axios.post('http://localhost:5000/auth/login', values)

      const { access_token , role, idUser } = response.data
      console.log(response.data)
 
      // Guardar el token en localStorage
      localStorage.setItem('access_token', access_token);

      Swal.fire({
        icon: 'success',
        title: 'Logueo exitoso',
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
      console.log('estoy en catch')
      Swal.fire({
        icon: 'error',
        title: 'Error de autenticación',
        showConfirmButton: false,
        timer: 1800
      })
    }
  }


  return (
    <div>
      <div className="news_section layout_padding">
        <div className="container">
          <div className="d-flex  justify-content-center">
            <h1 className="services_text custom_main">Inicio de sesión</h1>
          </div>
        </div>
      </div>
      <div className='row justify-content-center'> 
        <div className='col-md-6'>
          <Formik 
              initialValues={initialValues}
              onSubmit={handleForm}
          > 
            <Form>
              <div className="mb-3">
                <label htmlFor="exampleFormControlInput1" className="form-label">Correo </label>
                <Field 
                    type="email" 
                    className="form-control" 
                    id="exampleFormControlInput1" 
                    placeholder="name@example.com"
                    name='email'
                />
              </div>
              <div className="mb-3">
                <label htmlFor="exampleFormControlInput1" className="form-label">Contraseña</label>
                <Field 
                  type="password" 
                  className="form-control" 
                  id="floatingPassword" 
                  placeholder="Password" 
                  name='password'
                />
              </div>
              <button className="btn btn-primary w-100 py-2" type="submit">Iniciar sesión</button>
            </Form>
          </Formik>
        </div>
      </div> 
    </div>
  )
}
