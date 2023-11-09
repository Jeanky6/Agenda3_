import React from "react";
import { Spinner, Table } from 'react-bootstrap'
import UseAgendas from "../../hooks/UseAgendas";

function List(){
    const { agendas, loading} = UseAgendas()

    if(loading) return <Spinner/>
    return (
        <Table striped bordered hover>
            <thead>
                <th>Date</th>
                <th>Hour Start</th>
                <th>Hour End</th>
                <th>User</th>
                <th>Place</th> 
                <th>Status</th>
            </thead>
            <tbody>
                {agendas.map(({id,date, hour_start,hour_end,user,place, status }) => (
                    <tr key={`agenda-row-${id}`}>
                
                <td>{date}</td>
                <td>{hour_start}</td>
                <td>{hour_end}</td>
                <td>{user}</td>
                <td>{place}</td>
                <td>{status ? 'Active': 'Inactive'}</td>
                </tr>
                ))}
            </tbody>
        </Table> 
    );
}

export default List