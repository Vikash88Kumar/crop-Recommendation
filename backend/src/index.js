import dotenv from "dotenv";
import connect from "./db/index.js";
import {app} from "./app.js";


dotenv.config({
    path: "./.env",
});

const PORT = process.env.PORT || 8000;

const startServer = async () => {
  try {
    await connect();

    const server = app.listen(PORT, () => {
      console.log(`Server running on http://localhost:${PORT}`);
    });

  } catch (err) {
    console.error("Failed to start server:", err);
    process.exit(1);
  }
};

startServer();