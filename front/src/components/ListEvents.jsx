import React, { useState, useEffect, useContext, useCallback } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import Swal from 'sweetalert2'
import { UserContext } from '../context/UserContext';

export const ListEvents = () => { 

    const { user } = useContext(UserContext);

    const navigate = useNavigate();

    const [events, setEvents] = useState([]);
 
    //almaceno los valores que se muestran en la ventana modal
    const [editedEvent, setEditedEvent] = useState({ id: 0, name: '', description: '', lecturer:'', link:'' });

 
    // const fetchEvent = useCallback(async () => {
    //     console.log('Valor del token:', user.token); 
    //     try {
    //         const response = await axios.get('http://localhost:5000/events', {
    //             headers: {
    //                 Authorization: `Bearer ${user.token}`
    //             }
    //         });
    //         setEvents(response.data);
    //     } catch (error) {
    //         console.error(error);
    //     }
    // }, [user.token]);
    
    // useEffect(() => {
    //     fetchEvent();
    // }, [fetchEvent]);

    useEffect(() => {
        fetchEvent();
      }, []); 
    
    


    const fetchEvent = async () => {
        try {
            const response = await axios.get('http://localhost:5000/events');
            setEvents(response.data);
        } catch (error) {
            console.error(error);
        }
    };


    //Editar evento

    //Carga los "valores" del evento en la ventana modal (name, description, lecturer)
    const onEditEvent = (event) => {
        setEditedEvent(event);
    };
    
    // Actualiza los campos que se editaron dentro de la ventana modal
    //[e.target.name] es nombre del campo que sufrio un cambio 
    // e.target.value es valor ingresado por el usuario. 
    const handleInputChange = (e) => {
        console.log('valor de e.target.name', e.target.name)
        console.log('valor de e.target.value', e.target.value)
        setEditedEvent({ ...editedEvent, [e.target.name]: e.target.value });
    };


    //Envia al back la nueva actualizacion
    const handleUpdateEvent = async () => {

        try {
          await axios.put(`http://localhost:5000/event/${editedEvent.id}`, editedEvent);
          fetchEvent();
          setEditedEvent({ id: 0, name: '', description: '', lecturer:'', link:''});
          Swal.fire({
            icon: 'success',
            title: 'Editado correctamente',
            showConfirmButton: false,
            timer: 1800
          })
          navigate('/listEvents')
        } catch (error) {
          console.error(error);
        }
    };


    //Eliminar evento
    const onDeleteEvent = async (eventId) => {
    
        const token = localStorage.getItem('access_token');
        console.log('valor del token en onDeleteEvent', token)

        if (!token) {
            throw new Error('Error: Necesitas un token para realizar esta acción.');
        }
        try {
            await axios.delete(`http://localhost:5000/event/${eventId}`, {
                headers: {
                    Authorization: `Bearer ${token}` // Incluye el token en el encabezado
                }
            });
            Swal.fire({
                icon: 'success',
                title: 'Eliminado correctamente',
                showConfirmButton: false,
                timer: 1800
            })
            fetchEvent();
        } catch (error) {
            console.error(error);
        }
    };



    // Asistir a un evento 
    const onAddAttendance = async (eventId) => {

        const values = { 
            userId:user.id,
            eventId:eventId    
        }

        try {
            const response = await axios.post('http://localhost:5000/attendances', values)
            console.log(response.data)
           
            // cuando el usuario aplica al evento cambia el estado
            setEvents(prevEvents => 
                prevEvents.map(event => 
                    event.id === eventId ? { ...event, status: 'applied' } : event
                )
            );

            Swal.fire({
                icon: 'success',
                title: 'Asistencia confirmada',
                showConfirmButton: false,
                timer: 1800
            })
            navigate('/listEvents')
        } catch (error) {
            if (error.response) {
                Swal.fire({
                    icon: 'error',
                    title: 'Ya aplicaste a este evento'
                });
            } else {
                console.error(error);
            }
        }
    };


    return (
        <div>
            <div className='row'>
                <div className='col-md-6'>
                    <table className="table">
                        <thead>
                            <tr>
                                <th scope="col"></th>
                                <th scope="col">Nombre del evento</th>
                                <th scope="col">Descripción</th>
                                <th scope="col">Disertante</th>
                                <th scope="col">Link</th>
                                <th scope="col"></th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                events.map(event => (
                                    <tr key={event.id}>
                                        <td>{event.id}</td>
                                        <td>{event.name}</td>
                                        <td>{event.description}</td>
                                        <td>{event.lecturer}</td>
                                        <td>{event.link}</td>
                                        {
                                            // usuario común solo puede postularse a una invitacion
                                            user.role === '2' ? ( 
                                                <div>
                                                    <td> 
                                                        {/* <button type="button" className="btn btn-success" onClick={() => onAddAttendance(event.id)} > Aplicar </button> */}
                                                        {
                                                            event.status === 'applied' ? (
                                                                <button className="btn btn-secondary" disabled>Aplicado</button>
                                                            ) : (
                                                                <button className="btn btn-success" onClick={() => onAddAttendance(event.id)}>Aplicar</button>
                                                            )
                                                        }
                                                    </td>
                                                    
                                                </div>
                                            // admin puede editar y eliminar
                                            ):(
                                                <div>
                                                    <td> 
                                                        <button type="button" className="btn btn-warning" data-bs-toggle="modal" data-bs-target="#editEventModal" onClick={() => onEditEvent(event)}> Editar </button>
                                                    </td>
                                                    <td> 
                                                        <button type="button" className="btn btn-danger"  onClick={() => onDeleteEvent(event.id)}>Eliminar</button>
                                                    </td>  
                                                </div>
                                            )
                                        }
                                    </tr>
                                ))
                            }  
             
                        </tbody>
                    </table>
                </div>
            </div>

            <div className="modal fade" id="editEventModal"  aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div className="modal-dialog">
                    <div className="modal-content">
                    <div className="modal-header">
                        <h1 className="modal-title fs-5" id="exampleModalLabel">Editar Evento</h1>
                        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                    <div className="modal-body">
                        <div className='row'>
                            <div className='col-md-4'>
                                <label>Nombre del evento</label><br></br>
                                <input
                                    type="text"
                                    name="name"
                                    value={editedEvent.name}
                                    onChange={handleInputChange}
                                />
                            </div>
                            <div className='col-md-2'></div>
                            <div className='col-md-4'>
                                <label>Descripción</label><br></br>
                                <input
                                    type="text"
                                    name="description"
                                    value={editedEvent.description}
                                    onChange={handleInputChange}
                                    placeholder="Descripción"
                                />
                            </div>
                            <div className='col-md-2'></div>
                            <div className='col-md-4'>
                                <label>Disertante</label><br></br>
                                <input
                                    type="text"
                                    name="lecturer"
                                    value={editedEvent.lecturer}
                                    onChange={handleInputChange}
                                    placeholder="Disertante"
                                />
                            </div>
                            <div className='col-md-4'>
                                <label>Link</label><br></br>
                                <input
                                    type="text"
                                    name="link"
                                    value={editedEvent.link}
                                    onChange={handleInputChange}
                                    placeholder="Link"
                                />
                            </div>
                        </div>
                    </div>
                    <div className="modal-footer">
                        <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Cancelar</button>
                        <button type="button" className="btn btn-success" data-bs-dismiss="modal" onClick={handleUpdateEvent}> Editar </button>
                    </div>
                    </div>
                </div>
            </div> 
        </div>
    )
}
