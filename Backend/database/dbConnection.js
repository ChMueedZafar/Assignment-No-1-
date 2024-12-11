import mongoose from "mongoose";

const dbConnection = () => {
    mongoose.connect(process.env.MONGO_URI,
        {
            dbName:"Resturantweb",
        }
    )

    .then((data) => {
        console.log(`Database connected successfully`);
    })
    .catch((err) => {
        console.log(`some error occured while connecting to database ${err}`);
    });
};

export default dbConnection;

