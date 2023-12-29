import { Schema, model, models } from "mongoose";
import bcrypt from 'bcrypt';

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
        },
    },
}, {timestamps: true});

userSchema.post('validate', function (user) {
     const notHashedPassword = user.password;
     const salt = genSaltSync(10);
     user.password = bcrypt.hashSync(notHashedPassword, salt);
});

export const User = models?.User || model('User', userSchema);
export default User;