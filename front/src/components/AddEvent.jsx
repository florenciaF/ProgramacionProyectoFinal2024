import axios from 'axios';
import { Field, Form, Formik } from 'formik'
import { useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2'

export const AddEvent = () => {
    const navigate = useNavigate();

    const initialValues = {
        name: '',
        description: '',
        lecturer: '',
        link:''
    }

    const handleSubmit = async( values) => {
        
        try {
            const response = await axios.post('http://localhost:5000/events', values)
            console.log(response.data)
            Swal.fire({
                icon: 'success',
                title: 'Agregado correctamente',
                showConfirmButton: false,
                timer: 1800
            })
            navigate('/panel')
        } catch (error) {
            console.log(error)
        }
    }
    return (
        <div>
            <div className='row justify-content-center'> 
            <div className='col-md-6'>
            <h1>Crear evento</h1>
            <Formik
                initialValues={initialValues}
                onSubmit={handleSubmit}
            >
                <Form> 
                    <div className="mb-3">
                        <label for="exampleFormControlInput1" class="form-label">Nombre evento </label>
                        <Field 
                        type="text" 
                        className="form-control" 
                        id="floatingName" 
                        placeholder="Nombre evento" 
                        name='name'
                        />
                    </div>
                    <div className="mb-3">
                        <label for="exampleFormControlInput1" class="form-label">Descripción del evento</label>
                        <Field 
                        type="text" 
                        className="form-control" 
                        id="floatingInput" 
                        placeholder="Descripción"
                        name='description'
                        />
                    </div>
                    <div className="mb-3">
                        <label for="exampleFormControlInput1" class="form-label">Disertante</label>
                        <Field 
                        type="text" 
                        className="form-control" 
                        id="floatingInput" 
                        placeholder="Categoría"
                        name='lecturer'
                        />
                    </div>
                    <div className="mb-3">
                        <label for="exampleFormControlInput1" class="form-label">Link</label>
                        <Field 
                        type="text" 
                        className="form-control" 
                        id="floatingInput" 
                        placeholder="Link"
                        name='link'
                        />
                    </div>
                    <button className="btn btn-primary w-100 py-2" type="submit" onClick={handleSubmit}>Agregar evento</button>
                </Form>
            </Formik>
            </div>
        </div> 
    </div>
  )
}
