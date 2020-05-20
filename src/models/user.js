
const {Schema, model} = require ("mongoose");

const userschema = new Schema({
    name:{type:string, require: true},
    email:{ type: string, require: true},
    password: {type: string, require:true}
},{
    timestamps: true
});

userschema.method.encrypassword =async password =>{ 
    const salt = await bcrypt.genSalt(10);
    return awiat = bcrypt.hash(password, salt)
};

    userschema.method.matchPassword = function (password)  {
        await bcrypt.compare(password, this.password);
    }


module.exports = model('user', userschema);
