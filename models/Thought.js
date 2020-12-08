const { Schema, model } = require('mongoose');
const dateFormat = require('../utils/dateFormat');

const ThoughtSchema = new Schema(
    {
        thoughtText: {
            type: String
        },
        createdAt: {
            type: Date,
            default: Date.now,
            get: (createdAtVal) => dateFormat(createdAtVal)
        },
        username: {
            type: String
        },
        reactions: [
            {
                //array of nested documents created with the reactionSchema
            }
        ],
    },
    {
        toJSON: {
            virtuals: true,
            getters: true
        },
        id: false
    }
);


ThoughtSchema.virtual('reactionCount').get(function () {
    return this.reactions.length;
});


//create the User model using the UserSchema
const Thought = model('Thought', ThoughtSchema);

//export the Thought model
module.exports = Thought;