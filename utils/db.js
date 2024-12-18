import mongoose from "mongoose";

const connection = {};

async function connect() {
  if (connection.isConnected) {
    console.log("Already connected");
    return;
  }

  // Check if there's an existing connection
  if (mongoose.connections.length > 0) {
    connection.isConnected = mongoose.connections[0].readyState;
    if (connection.isConnected === 1) {
      console.log("Use previous connection");
      return;
    }
    await mongoose.disconnect();
  }

  // New connection with additional error handling
  try {
    const db = await mongoose.connect(process.env.MONGODB_URI);
    console.log("New connection established");
    connection.isConnected = db.connections[0].readyState;
  } catch (error) {
    console.error("Failed to connect to MongoDB", error);
  }
}

async function disconnect() {
  if (connection.isConnected) {
    if (process.env.NODE_ENV === "production") {
      await mongoose.disconnect();
      connection.isConnected = false;
      console.log("Disconnected from MongoDB in production");
    } else {
      console.log("Not disconnected in development");
    }
  }
}

function convertDocToObj(doc) {
  doc._id = doc._id.toString();
  doc.createdAt = doc.createdAt.toString();
  doc.updatedAt = doc.updatedAt.toString();
  return doc;
}

const db = { connect, disconnect, convertDocToObj };
export default db;
