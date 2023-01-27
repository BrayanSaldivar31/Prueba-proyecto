var userModel = require('./userModel');

module.exports.getDataFromDBService = () => {
    return new Promise(function checkURL(resolve, reject) {
        userModel.find({}, function returnData(error, result) {
            if (error) {
                reject(false);
            } else {
                resolve(result);
            }
        });
    });
}

module.exports.createUserDBService = (userDetails) => {
    return new Promise(function myfn(resolve, reject) {
        var userModelData = new userModel();

        userModelData.UserId = userDetails.UserId;
        userModelData.UserName = userDetails.UserName;
        userModelData.Date = userDetails.Date;
        userModelData.PunchIn = userDetails.PunchIn;
        userModelData.PunchOut = userDetails.PunchOut;

        userModelData.save(function resultHandle(error, result) {
            if (error) {
                reject(false);
            } else {
                resolve(true);
            }
        });
    });
}

module.exports.updateUserDBService = (id, userDetails) => {
    console.log(userDetails);
    return new Promise(function myfn(resolve, reject){
        userModel.findByIdAndUpdate(id, userDetails, function returnData(error, result) {
            if (error) {
                reject(false);
            } else {
                resolve(result);
            }
        });
    });
}

module.exports.deleteUserDBService = (id) => {
    return new Promise(function myfn(resolve, reject) {
        userModel.findByIdAndDelete(id, function returnData(error, result) {
            if (error) {
                reject(false)
            } else {
                resolve(result)
            }
        });
    });
}