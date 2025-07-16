const express = require('express')
const app = express()
const cors = require('cors')
const dotenv = require('dotenv');
dotenv.config();
require('./config/db.js')();

app.use(express.json());
app.use(cors())

// routes
app.use("/user", require('./routes/User.routes.js'))
app.use("/contact", require('./routes/ContactUs.routes.js'))

const PORT = process.env.PORT || 3006
app.listen(PORT, () => console.log("Server start at port " + PORT))
