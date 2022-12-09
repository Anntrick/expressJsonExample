

const UserController = {}

UserController.getAll = (req, res) => {
    try{
        res.status(200).send("Todos los users")
    } catch(e){
        res.status(500).send(e)
    }
}

module.exports = UserController