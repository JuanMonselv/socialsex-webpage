const express = require("express");
const app = express();

const authRoute = require("./routes/auth");
const postRoute = require("./routes/posts");
const userRoute = require("./routes/users");

const multer = require('multer');
const path = require("path");

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    try {
      cb(null, "public/images")
    } catch (err) {
      console.log(err);
    }
  },
  filename: (req, file, cb) => {
    try {
      cb(null, file.originalname);

      //Show the file name in the console
      console.log(file.originalname);
    } catch (err) {
      console.log(err);
    }
  }
})

const upload = multer({ storage });

//Route to upload files (just images)
app.post("/api/upload", upload.single("file"), (req, res) => {
  try {
    return res.status(200).json("File uploaded successfully")
  } catch (err) {
    console.log(err);
  }
})

const cors = require('cors');
const dotenv = require("dotenv");
const helmet = require("helmet");
const morgan = require("morgan");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");

dotenv.config();

// Middleware
app.use(express.json());
app.use(helmet());
app.use(morgan("common"));

app.use(cors());

// Database connection
mongoose.connect(
  process.env.MONGO_URL,
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  },
  (error) => {
    if (error) console.log(error);
    else console.log("Connected to MongoDB");
  }
);

app.use("/images", express.static(path.join(__dirname, "public/images")))

app.use(bodyParser.json());

// Routes
app.use("/api/auth", authRoute);
app.use("/api/users", userRoute);
app.use("/api/posts", postRoute);

//Backend port
app.listen(4000, () => {
  console.log("Backend running on port 4000");
});
