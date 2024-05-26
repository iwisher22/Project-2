import mongoose from "mongoose";

const dbConnect = () => {
	mongoose
		.connect(process.env.MONGO_URI)
		.then(() => {
			console.log(`server connected`);
		})
		.catch(() => {
			console.log(error);
		});
};

export default dbConnect;
