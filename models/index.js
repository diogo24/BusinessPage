function models(params) {
    var mongoose = params.mongoose;

    var Schema = mongoose.Schema,
    ObjectId = mongoose.Schema.ObjectId;

    var Transaction = new Schema({
        day: { type: Date }
        , type: String
        , value: { type: Number}
        , description: String
    });

    mongoose.model('Business', Transaction);
};

module.exports = models;