import mongoose from 'mongoose';


const connectMongoDB = async () => {
  try {
    mongoose.connect(process.env.MONGODB_URI);
    console.log('connection created!');
  } catch (error) {
    console.log(error);
  }
}

export default connectMongoDB;