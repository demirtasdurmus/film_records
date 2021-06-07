const mongoose = require ("mongoose");
mongoose.connect('mongodb://localhost:27017/movieApp', {useNewUrlParser: true, useUnifiedTopology: true})
    .then (() => {
        console.log("Connected to DB");
    })
    .catch ((err) => {
        console.log("There is a problem with connection!!!");
        console.log(err);
    });

const productSchema = new mongoose.Schema({
    name : {
        type: String,
        required: true
    },
    price: {
        type: Number,
        required: true
    }
});

const Product = mongoose.model("Product", productSchema);

const bike = new Product ({
    name: "Mountain Bike",
    price: 599
})

bike.save()
    .then ((data) => {
        console.log("Success");
        console.log(data);
    })
    .catch((err)=> {
        console.log("Problem");
        console.log(err);
    })