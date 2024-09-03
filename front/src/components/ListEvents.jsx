import React, { useState, useEffect } from 'react';
import axios from 'axios';

export const ListEvents = () => {


    const [events, setEvents] = useState([]);

    useEffect(() => {
        fetchEvent();
      }, []);

      
    const fetchEvent = async () => {
        try {
            const response = await axios.get('http://localhost:5000/events');
            console.log(response)
            setEvents(response.data);
        } catch (error) {
            console.error(error);
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
                                        <td>boton</td>
                                    </tr>
                                ))
                            }  
             
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    )
}
