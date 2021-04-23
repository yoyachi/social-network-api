const { Schema, model, Types } = require('mongoose');
const dateFormat = require('../utils/dateFormat');
//const { schema } = require('./User');

const ReactionSchema = new Schema(
    {   // ser custom id to avoid confusion with parent comment _id
        reactionId: {
            type: Schema.Types.ObjectId,
            default: () => Types.ObjectId()
        },

        reactionBody: {
            type: String,
            required: 'Reaction is Required',
            minlength: 1,
            maxlength: 280
        },

        userName: {
            type: String,
            required: 'Username is Required'
        },

        createdAt: {
            type: Date,
            default: Date.now,
            get: createdAtVal => dateFormat(createdAtVal)
        }
    },

    {
        toJSON: {
            getters: true
        }
    }

);

const ThoughtSchema = new Schema(
    {
        thoughtText: {
            type: String,
            required: 'Thought is Required'
            minlength: 1,
            maxlength: 280
        },

        createdAt: {
            type: Date,
            default: Date.now,
            get: createdAtVal => dateFormat(createdAtVal)
        },

        userName: {
            type: String,
            required: 'User name is Required'
            //the user that created this thought
            ref: 'User'
        },
        // like replays
        reactions: [ReactionSchema],
    },

    {
        toJSON: {
            virtuals: true,
            getters: true
        },
        id: false
    }
);

// get total count of friends on retrieval
ThoughtSchema.virtual('replyCount').get(function () {
    return this.replies.length;
});

const Thought = model('Thought', ThoughtSchema);

module.exports = Thought;



