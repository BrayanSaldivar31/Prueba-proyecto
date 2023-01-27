var userService = require('./userService');

var getDataControllerfn = async(req, res) =>{
    var empolyee = await userService.getDataFromDBService();
    res.send({ "status": true, "data": empolyee})
}

var createUserControllerfn = async(req, res) => {
    var status = await userService.createUserDBService(req.body);
    if (status) {
        res.send({"status": true, "message": "Usuario Creado exitosamente"});
    } else {
        res.send({"status": false, "message": "Usuario Creado exitosamente"});
    }
}

var updateUserController = async(req, res) => {
    console.log(req.params.id);
    console.log(req.body);

    var result = await userService.updateUserDBService(req.params.id, req.body);

    if (result) {
        res.send({ "status": true, "message": "Usuario Actualizado papu" });
    } else {
        res.send({ "status": false, "message": "Error FATALITY" });
    }
}

var deleteUserController = async(req, res) => {
    console.log(req.params.id);

    var result = await userService.deleteUserDBService(req.params.id);

    if (result) {
        res.send({ "status": true, "message": "Usuario Eliminado papu" })
    } else {
        res.send({ "status": true, "message": "FATALITY" })
    }
}

module.exports = { getDataControllerfn, createUserControllerfn, updateUserController, deleteUserController };