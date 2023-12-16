import { Schema, model } from "mongoose";

const userSchema = new Schema({
     email: {type: String, required: true, unique: true},
     password: {
          type: String, 
          required: true, 
           validate:pass => {
                if (!pass?.length || pass.length < 5){
                    new Error('Password must be at least 5 characters');
                    return false; 
          } 
           }
}
}, {timestamps: true});

const User = models?.User || model('User', userSchema);
export default User;