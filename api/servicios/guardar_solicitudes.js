var express = require("express");
var router = express.Router();

var ParkingRequest = require("../modelo/modelo_solicitud_parqueo");
const { request } = require("express");

router.post("/solicitud_parqueo/guardar", function (req, res) {
  var SaveRequests = new ParkingRequest({
    _id: new mongoose.Types.ObjectId(),
    ownersName: req.body.ownersName,
    usersId: req.body.usersId,
    email: req.body.email,
    dateOfBirth: req.body.email,
    parkingName: req.body.email,
    address: req.body.address,
    shoppingCenter: req.body.shoppingCenter,
  });

  SaveRequests.save()
    .then(function (result) {
      res.json(result);
    })
    .catch(function (error) {
      console.log(error);
    });
});

module.exports = router;
