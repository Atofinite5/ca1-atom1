const express = require("express");
const bodyParser = require("body-parser");

const app = express();
app.use(bodyParser.json());

app.post("/signup", (req, res) => {
    const { username, email, password, dob } = req.body;

    if (!username) return res.status(400).json({ error: "Username cannot be empty" });
    if (!email) return res.status(400).json({ error: "Email cannot be empty" });
    if (!password || password.length < 8 || password.length > 16) {
        return res.status(400).json({ error: "Password length should be greater than 8 or less than or equal to 16" });
    }

    res.status(200).json({ message: "Signup successful!" });
});

app.listen(3000, () => console.log("Server running on port 3000"));