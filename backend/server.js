const express = require('express');
const cors = require('cors');

const app = express();
const PORT = process.env.PORT || 3000;

app.use(cors());
app.use(express.json());

const quotes = [
    {
        id: 1,
        text: "Simplicity is the soul of efficiency.",
        author: "Austin Freeman"
    },
    {
        id: 2,
        text: "Make it work, make it right, make it fast.",
        author: "Kent Beck"
    }
];

app.get('/api/quotes/random', (req, res) => {
    const randomIndex = Math.floor(Math.random() * quotes.length);
    res.json(quotes[randomIndex]);
});

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});