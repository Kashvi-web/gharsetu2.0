if (process.env.NODE_ENV != "production") {
	require("dotenv").config();
}
const mongoose = require("mongoose");
const initData = require("./data.js");
const Listing = require("../models/listing.js");

// const MONGO_URL = "mongodb://127.0.0.1:27017/wanderlust";
const DB_URL = process.env.ATLASDB_URL;
main()
	.then(() => {
		console.log("connected to DB");
	})
	.catch((err) => console.log(err));

async function main() {
	//   await mongoose.connect(MONGO_URL);
	await mongoose.connect(DB_URL);
}

let categoryAll = [
	"Beachfront",
	"Cabins",
	"Omg",
	"Lake",
	"Design",
	"Amazing Pools",
	"Farms",
	"Amazing Views",
	"Lakefront",
	"Treehouse",
	"Tropical",
	"National Parks",
	"Casties",
	"Luxe",
];

const initDB = async () => {
	await Listing.deleteMany({});
	initData.data = initData.data.map((obj) => ({
		...obj,
		owner: "67b61a5b349c0f7bfc8ab8c6",
		price: obj.price * 25,
		category: [
			`${categoryAll[Math.floor(Math.random() * 22)]}`,
			`${categoryAll[Math.floor(Math.random() * 22)]}`,
		],
	}));
	await Listing.insertMany(initData.data);
	console.log("data was initialized");
};
initDB();

