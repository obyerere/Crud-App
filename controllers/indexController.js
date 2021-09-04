var User = require('../models').User;

// FInd all the users stored in the database
async function readUsers(req, res, next) {
	//create a variable called user to store the inform
	//await the findAll request
	let users = await User.findAll({raw: true});

	//render the index view and pass the user as an object
	res.render('index', {users: users});
}

async function deleteUser(req, res, next) {
	//delete a specific user where the ID matches what was passed from the url: Rember req.params is for url and req.body is for form submissions
	let users = await User.destroy({
		where: {
			id: req.params.userId
		}
	});

	//redirect the user to the app.use('/')
	res.redirect('/')
}

// Displays the edit user form
async function showEditForm(req, res, next) {
	let user = await User.findOne({
		where: {
			id: req.params.userId
		}
	})
	res.render('edit', {user: user})
}

//Handle the edit form submission
async function editUser(req, res, next) {
	//Get the user id that is passed on the url
	let userId = req.params.userId;
	
	//Create a user object
	let userObject = {
		name: req.body.fullname,
		age: req.body.age,
		department: req.body.department,
		role: req.body.role,
		status: req.body.status
	}

	//use the USER MODEL to update the user record
	let user = await User.update(userObject, {
		where: {
			id: userId
		}
	} );

	res.redirect("/")
}

//Export all the functions by making them available to the routes file that need them - (routes/index.js)
module.exports = {
	readUsers: readUsers,
	deleteUser: deleteUser,
	showEditForm: showEditForm,
	editUser: editUser
}