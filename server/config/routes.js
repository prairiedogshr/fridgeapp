const userController = require('../users/userController.js');
const houseController = require('../houses/houseController.js');

module.exports = (app, express) => {
	app.post('/api/users/signin', userController.signin);
	// app.get('/api/users/:id', userController.getUser);
	// app.get('/api/houses/:house', houseController.getHouse);
	// app.post('/api/users/:id', userController.createUser);
	// app.post('/api/houses/:id', houseController.createHouse);
	// app.put('/users/:id', userController.updateUser);
	// app.put('/houses/:id', houseController.updateHouse);
}