var express = require('express');
var router = express.Router();

//Import the indexController
var indexController = require('../controllers/indexController')

/* GET: show the homepage 1.e localhost:300/ */
router.get('/', indexController.readUsers);

//DELETE USER: connects with the deleteUser function defined in the controllers/indexController
router.get('/delete/:userId', indexController.deleteUser);

//GET EDIT USER PAGE: connects with the showEditForm function defined in the controllers/indexController
router.get('/edit/:userId', indexController.showEditForm);

//EDIT USER: connects with the editUser function defined in the controllers/indexController
router.post('/edituser/:userId', indexController.editUser);

module.exports = router;
