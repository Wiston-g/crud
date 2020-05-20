

const(Schema, model) = require('mongoose');

const NoteSchema = new Schema({
    title:{
        type: string,
        required:true
    }
    descritions:{
        type: string,
        required: true,
    }
},{
    timestamps:true
})

module.exports=model('Note', NoteSchema);