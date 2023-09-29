const mongoose = require('mongoose');

const imagesSchema = new mongoose.Schema({
    name: { type: String, required: true },
    imgUrl: { type: String, required: true }
}, {
    timestamps: true
});

imagesSchema.methods.setImgUrl = function setImgUrl(filename) {
    console.log(filename);
    this.imgUrl = `http://localhost:3000/public/${filename}`
}

const Images = mongoose.model('Images', imagesSchema);

module.exports = Images;
