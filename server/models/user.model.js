import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, 'Full Name is required'],
    trim: true,
  },
  email: {
    type: String,
    required: [true, 'Email address is required'],
    unique: true,
    lowercase: true,
    trim: true,
  },
  password: {
    type: String,
    required: function () {
      return !this.isOAuth;
    },
    minlength: 6,
  },
  isOAuth: {
    type: Boolean,
    default: false,
  },
  oauthProvider: {
    type: String, // e.g., 'google', 'facebook'
    enum: ['google', 'facebook', null],
    default: null,
  },
  role: {
    type: String,
    enum: ['user', 'doctor', 'admin'],
    default: 'user',
  },
  profilePic: {
    type: String, // URL or local path
    default: '',
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
  refreshToken: {
    type: String,
    default: null,
  },
  // Optional extra info for mental health app
  bio: {
    type: String,
    maxlength: 300,
  },
  age: {
    type: Number,
    min: 5,
    max: 120,
  },
  gender: {
    type: String,
    enum: ['Male', 'Female', 'Other'],
  },
});

const UserModel = mongoose.model('User', userSchema);
export default UserModel