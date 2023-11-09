import {useEffect, useState} from "react";
import getAllAgendas from './../services/agendas/getAll'

function UseAgendas(){
    const [agendas, setAgendas] = useState([])
    const [loading, setLoading]= useState(false)

    useEffect(() => {
      setLoading(true)
      getAllAgendas()
      .then(data => {
        const {agendas} =data
        if (agendas) {
            setAgendas(agendas)
        }

      })
      .finally(()=>{
        setLoading(false)
      })   
    }, [])
    return {agendas, loading}
}


export default UseAgendas
