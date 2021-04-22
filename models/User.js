const { Schema, model } = require('mongoose'),

const UserSchema = new Schema({

    userName: {
        type: String,
        unique: true,
        trim: true,
        required: 'username is Required'
    },

    email: {
        type: String,
        required: 'email is required',
        unique: true,
        match: [/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/, 'Please enter a valid email address' ]
    },
    // Array of _id values referencing the Thought model
    thoughts: [
        {
            type: Schema.Types.ObjectId,
            ref: 'Thought'
        }
    ],
    // Array of _id values referencing the User model(self-reference)
    friends: [
        {
            type: Schema.Types.ObjectId,
            ref: 'User'
        }
    ]

},

{
    toJson: {
        virtuals: true,
        getters: true
    },
    // prevents virtuals from crating duplicated of _id as `id`
    id: false
}

);

// It creates a virtual called friendCount that retrieves the length of the user's friends array field on query.
UserSchema.virtual('userCount').get(function() {
    return this.user.length;
});

const User = model('User', UserSchema);

module.exports = User;