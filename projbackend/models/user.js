const mongoose = require("mongoose");
const {v1: uuidv1} = require("uuid")
const crypto = require("crypto");

const userSchema = new mongoose.Schema({
    name:{
        type: String,
        required: true,
        trim: true,
        maxlength: 25
    },
    email:{
        type: String,
        trim: true,
        required: true
    },
    encryPassword: {
        type: String,
        required: true
    },
    salt: "",
    isAdmin: {
        type: Number,
        default: 0
    },
    address: {
        type: String,
        trim: true
    },
    listItem:{
        type: Array,
        default: []
    },
    downloads: {
        type: Array,
        default: []
    },
    purchasedSubscription: {
        type: Number,
        default: 0
    }
}, {timestamps: true})

//virtuals

userSchema.virtual('password')
    .set(function(password){
        this._password = password;
        this.salt = uuidv1();
        this.encryPassword = this.securePassword(password);
    })
    .get(function(){
        return this._password;
    })

userSchema.methods = {

    authenticate: function(plainPassword){
        return this.encryPassword === this.securePassword(plainPassword);
    },

    securePassword: function(plainPassword){
        if(!plainPassword){
            return "";
        }

        try {
            return crypto.createHmac('sha256', this.salt)
            .update(plainPassword)
            .digest('hex');
        } catch (error) {
            return "";
        }  
    }
}


module.exports = mongoose.model("User", userSchema);