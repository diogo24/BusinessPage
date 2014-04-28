function controllers(params){
    var mongoose = params.mongoose;
    var Business = mongoose.model('Business');

    controllers.index = function(req, res){
      res.render('index', { title: 'Express' });
    };

    controllers.business = function (req, res) {
        Business.find({}).exec(function (err, business) {
            res.render('business', {
                page: 'business',
                title: 'Business',
                business:business
            });
        });
    };

    return controllers;
};

module.exports = controllers;