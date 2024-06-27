const mongoose = require("mongoose");

const UserDetailsSchema = new mongoose.Schema(
    {
        name: String,
        address: String,
        phone: Number,
        email: {type: String, unique: true},
        password: String,
        cpassword: String,
    },

    {
        collection: "AccountInfo"
    }
);

const AccountInfo = mongoose.model("AccountInfo", UserDetailsSchema);

module.exports = AccountInfo;