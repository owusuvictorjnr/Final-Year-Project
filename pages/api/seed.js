import Product from "@/models/Product";
import User from "@/models/User";
import data from "@/utils/data";
import db from "@/utils/db";

const handler = async (req, res) => {
  try {
    await db.connect();
    // Clear existing data in the User and Product collections
    await User.deleteMany();
    await Product.deleteMany();

    // Insert users and products from your data.js
    await User.insertMany(data.users);
    await Product.insertMany(data.products);

    // Disconnect from the database
    await db.disconnect();

    // Send success response
    res.status(200).send({ message: "Seeded successfully" });
  } catch (error) {
    await db.disconnect();
    res
      .status(500)
      .send({ message: "Error seeding data", error: error.message });
  }
};

export default handler;
