function models(params) {
    var mongoose = params.mongoose;

    var Schema = mongoose.Schema,
    ObjectId = mongoose.Schema.ObjectId;

    var Business = new Schema({
        name: { type: String, required: true }
        , description: String
    });

    mongoose.model('Business', Business);
};

module.exports = models;