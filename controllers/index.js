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
                business: business
            });
        });
    };

    controllers.add = function (req, res) {
        var form = req.body;
        var transaction = new Business({
            day: form.day,
            type: form.type,
            value: form.value,
            description: form.description
        });

        transaction.save(function (err) {
            if (err) {
                // update graph, table and summary
                res.redirect(500, "..");
            }
            else {
                res.redirect("..");
            }
        });
    };

    return controllers;
};

module.exports = controllers;