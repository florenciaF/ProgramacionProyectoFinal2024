
import { useContext, useEffect, useState, useCallback  } from 'react';
import { UserContext } from '../context/UserContext';
import axios from 'axios';
import Swal from 'sweetalert2'

export const MyAttendances = () => {

    const { user } = useContext(UserContext);

    const userId = user.id

    //asistencias
    const [attendances, setAttendances] = useState([]);

  
    const fetchMyAttendances = useCallback(async () => {
        try {
            const response = await axios.get(`http://localhost:5000/attendance/${userId}`);
            console.log('Info', response.data);
            setAttendances(response.data);
        } catch (error) {
            console.error(error);
        }
    }, [userId]);
    //fetchMyAttendances solo se recree si userId cambia
    

    useEffect(() => {
        fetchMyAttendances();
    }, [fetchMyAttendances]);
    //La función fetchMyAttendances se vuelve a recrear en cada render

    const onDeleteAttendance = async (attendanceId) => {
       
        try {
            await axios.delete(`http://localhost:5000/attendance/${attendanceId}`);

            Swal.fire({
                icon: 'success',
                title: 'Eliminado correctamente',
                showConfirmButton: false,
                timer: 1800
              })
            fetchMyAttendances();
        } catch (error) {
            console.error(error);
        }
    };



    return (
        <>
        <h2>Asistencias confirmadas a eventos</h2>
        <div className='row'>
            <div className='col-md-4'>
                <table className="table">
                    <thead>
                        <tr>
                            <th scope="col">Id evento</th>
                            <th scope="col">Nombre del evento</th>
                            <th scope="col">Descripción</th>
                        </tr>
                    </thead>
                    <tbody>
                            {
                                attendances.map(attendance => (
                                    <tr key={attendance.id}>
                                        <td>{attendance.id}</td>
                                        <td>{attendance.name}</td>
                                        <td>{attendance.description}</td>
                                        <td> 
                                            <button type="button" className="btn btn-danger"  onClick={() => onDeleteAttendance(attendance.id)}> Anular asistencia </button>
                                        </td>
                                    </tr>
                                ))
                            }                                         
                    </tbody>
                </table>
            </div>
        </div>

        </>
    )
}
