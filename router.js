
var controller = require('./controller');
module.exports = function(app) {
	
	
	app.get('/questions', controller.questionsAction);
	app.get('/questions/:id', controller.questionAction);
}