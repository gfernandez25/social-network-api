const {Schema, model} = require('mongoose');
const userSchema = new Schema({
    username: {
        type: String,
        required: true,
        unique: true,
        trim: true,
    },
    email: {
        type: String,
        required: true,
        unique: true,
        validate: {
            validator: function (v) {
                return /\w+@\w+.\w+/.test(v);
            },
            message: props => `${props.value} is not a valid email!`
        },
    },
    thoughts: {
        // Array of _id values referencing the Thought model
        type: []

    },
    friends: {
        // Array of _id values referencing the User model (self-reference)
        type: [],
    }
}, {
    toJSON: {
        virtuals: true,
        getters: true
    },
    // prevents virtuals from creating duplicate of _id as `id`
    id: false

})

// Create a virtual called friendCount that retrieves the length of the user's friends array field on query.
userSchema.virtual("friendCount")
    .get(function () {
        return this.friends.length
    })


module.exports = model('users', userSchema);


