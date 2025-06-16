// require('dotenv').config(); // Load env vars

const express = require("express");
const mongoose = require('mongoose');
const cors = require("cors");
const EmployeeModel = require('./models/Employee');

const PORT = process.env.PORT || 3001;
const app = express();

app.use(express.json());
app.use(cors());

mongoose.connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true
});
app.get('/', (req, res) => {
    res.send('API is running ✅');
});
app.post('/login', (req, res) => {
    const { email, password } = req.body;
    EmployeeModel.findOne({ email })
        .then(user => {
            if (user) {
                if (user.password === password) {
                    res.json("Success");
                } else {
                    res.json("The password is incorrect");
                }
            } else {
                res.json("No record existed");
            }
        });
});

app.post('/register', (req, res) => {
    EmployeeModel.create(req.body)
        .then(employees => res.json(employees))
        .catch(err => res.json(err));
});

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
