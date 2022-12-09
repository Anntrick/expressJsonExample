const fs = require('fs')

const taskData = require('../taskData.json')

const TaskController = {}

TaskController.getAll = (req, res) => {
    try{
        res.send(taskData)
    } catch(e){
        res.send(e)
    }
}

TaskController.getById = (req, res) => {
    try {
        res.send(taskData[req.params.id])
    } catch(e) {
        res.send(e)
    }
}

TaskController.editTask = (req, res) => {
    try { 
        let taskToChange = taskData[req.params.id]
       
        if(taskToChange != null) {
            taskData[req.params.id].name = req.body.name
            taskData[req.params.id].description = req.body.description
            taskData[req.params.id].user = req.body.user
            taskData[req.params.id].date = req.body.date
            
            fs.writeFile("./taskData.json", 
                        JSON.stringify(taskData),
                        (error) => {
                            if (error) {
                                console.log(error)
                            }
                        })
            res.send("Task updated successfully")
        }
        res.send("Task not updated")
    } catch(e) {
        res.send(e)
    }
}

TaskController.newTask = (req, res) => {
    try{
        let id = Math.round(Math.random() * 1000000000)
        taskData[id] = { 
                    name: req.body.name,
                    description: req.body.description,
                    user: req.body.user,
                    date: req.body.date
        }
        fs.writeFile("./taskData.json", 
        JSON.stringify(taskData),
        (error) => {
            if (error) {
                console.log(error)
            }
        })
        res.send("Task created successfully")
    } catch(e) {
        res.send(e)
    }
}
TaskController.deleteTask = (req, res) => {
    try{
        delete taskData[req.params.id]
        fs.writeFile("./taskData.json", 
        JSON.stringify(taskData),
        (error) => {
            if (error) {
                console.log(error)
            }
        })
        res.send("Task deleted successfully")
    } catch(e) {
        res.send(e)
    }
}

module.exports = TaskController