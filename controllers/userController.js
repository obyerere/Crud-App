
var User = require('../models').User;

async function createUser(req, res, next) {
	
	let user = await User.create({
		name: req.body.fullname,
		age: req.body.age,
		department: req.body.department,
		role: req.body.role,
		status: req.body.status
	});

	if(user){
		res.redirect('/')
	}else{
		res.redirect('/create')
	}
}

module.exports = {
	createUser: createUser,
}