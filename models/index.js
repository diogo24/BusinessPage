function models(params) {
    var mongoose = params.mongoose;

    var Schema = mongoose.Schema,
    ObjectId = mongoose.Schema.ObjectId;

    var Transaction = new Schema({
        day: { type: Date, 'default': Date.now }
        , type: String
        , value: { type: Number, 'default': 0}
    });

    mongoose.model('Business', Transaction);
};

module.exports = models;