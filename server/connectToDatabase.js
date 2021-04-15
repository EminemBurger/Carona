const mongoose = require('mongoose')
const dotenv = require('dotenv');

dotenv.config();

const connectToDatabase = async () => {
    try {
        await mongoose.connect(
            process.env.mongoURI ,
            {
                useCreateIndex: true,
                useFindAndModify: true,
                useUnifiedTopology: true,
                useNewUrlParser: true
            }
        )
        console.log('Database is Connected!');
    } catch (error) {
        console.log(error);
        process.exit(1);
    }
}

module.exports = connectToDatabase;