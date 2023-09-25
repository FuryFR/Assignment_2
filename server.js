const express = require('express');
const app = express();
const port = process.env.PORT || 3000;


app.use(express.static('public'));


app.get('/api/endpoint', (req, res) => {
    const argument = req.query.arg;
    const responseData = generateResponse(argument);
    res.json(responseData);
});

function generateResponse(argument) {
    let response = {};

    if (argument === 'data1') {
        response = { message: 'Response for Data 1' };
    } else if (argument === 'data2') {
        response = { message: 'Response for Data 2' };
    } else {
        response = { message: 'Invalid argument' };
    }

    return response;
}

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
