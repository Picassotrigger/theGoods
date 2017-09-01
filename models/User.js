const mongoose = require("mongoose");
// const Schema = mongoose.Schema;
const { Schema } = mongoose;        // This means the same thing as line 2 - see 'destructuring'



const userSchema = new Schema({
  googleID: String
});


mongoose.model('users', userSchema);
