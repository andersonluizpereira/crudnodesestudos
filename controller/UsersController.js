var UsersModel = require('../model/UsersModel');
var Promise = require('bluebird');


function UsersController(Model) {
  this.Model = Promise.promisifyAll(Model);
}

UsersController.prototype.create = function(req, res) {
 var _data = req.body;
 
  try {
   this.Model.create(_data);
    res.json("TRUE");
  } catch (error) {
    res.json(error)
  }
    
};

UsersController.prototype.findOne = function(req, res) {
  var _id = req.params._id;

  this.Model.findOneAsync(_id)
    .then(function(result) {
      res.json(result[0] || []);
    })
    .catch(function(err) {
      console.log(err)
    });
};

UsersController.prototype.findAll = function(req, res) {
  this.Model.findAllAsync()
    .then(function(result) {
      res.json(result || []);
    })
    .catch(function(err) {
      console.log(err)
    });
};

UsersController.prototype.update = function(req, res) {
 console.log(req.body);
 var _data = req.body; 

  try {
   this.Model.update(_data);
    res.json("TRUE");
  } catch (error) {
    res.json(error)
  }
 
};


UsersController.prototype.delete = function(req, res) {
    console.log(req.body);
  var _data = req.body; 
  this.Model.delete(_data);
    
    try {
      
      res.json("TRUE");
          
    } catch (error) {
        console.log(error)  
    }

    
    
};

module.exports = new UsersController(UsersModel);
