import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useSelector } from 'react-redux'
import { config } from '../config'

const Tasks = () => {
    const token = useSelector( state => state.login.token )
    const userId = useSelector( state => state.login.user._id)

    axios.defaults.headers.common['Authorization'] = `Bearer ${token}`;

    useEffect(() =>{
        console.log()
        const getTasks = async () => {
            const res = await axios.get(`${config.baseUrl}/tasks`)
            console.log('dados', res.data)
            setTasks(res.data)
        }
        getTasks()
    }, [])


    const [ input, setInput ] = useState('')
    const [ tasks, setTasks ] = useState([])

    const removeTask = async (index, id) => {
        try {
            await axios.delete(`${config.baseUrl}/tasks/${id}`)
            const newTasksList = [...tasks]
            newTasksList.splice(index, 1)

            setTasks( newTasksList )
        }
        catch (err) {
            console.log(err)
        }
    }

    const addTask = async (newTask) => {
        let data = {
            description: newTask,
        }

        try{
            const taskAdded = await axios.post(`${config.baseUrl}/tasks`, {data})

            setTasks( prevState => {
                return [
                    ...prevState,
                    taskAdded.data
                ]
            })
        }
        catch (err) {
            console.log(err)
        }
        
    }

    const TasksList = tasks.map( (task, index) => {
        return (
            <li class="list-group-item d-flex justify-content-between align-items-center">
                { task.description }
                <button type="button" class="btn btn-danger" onClick={ () => removeTask(index, task._id)}> Remove </button>
            </li>
        )
    })

    
    return (
        <div className="container">
            <h1>Tasks</h1>
            <div className="input-group mb-3">
                <div className="input-group-prepend">
                    <span className="input-group-text" id="basic-addon1">Task Name</span>
                </div>
                <input onChange={ e => setInput(e.target.value) } value={ input } type="text" className="form-control" placeholder="Username" aria-label="Username" aria-describedby="basic-addon1" />
                <button className="btn btn-primary"onClick={ () => addTask(input) }>Add task</button>
            </div>
            
            <ul class="list-group">
                {TasksList}
            </ul>
        </div>
    )
}

export default Tasks