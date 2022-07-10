/** Install express and cors */
const express = require('express');
const app = express();
app.use(express.urlencoded({extended: true}));
app.use(express.json());
const cors = require('cors');
app.use(cors());


/**Install dotenv */
const dotenv = require('dotenv').config();
const port = process.env.PORT || 3124;

/**Install mongoose */
const mongoose = require('mongoose');
const dbOptions = {dbName: 'todoPractice1'};
const dbUri = process.env.DBURI;
mongoose.connect(dbUri, dbOptions).then(
    () => {
        console.log(`Now connected to MongoDB`);
    }
)

/**Install and use router */
app.use(express.Router(), require('./routes/router'));


app.listen(port, () => console.log(`Server started on port ${port}`));