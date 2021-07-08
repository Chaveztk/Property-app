const express = require('express');
const app = express();


const path = require('path');
const publicPath = path.join(__dirname, '..', 'Property-App/');
app.use(express.static(publicPath));


const port = process.env.PORT || 3000;

app.get('*', (req, res) => {
   res.sendFile(path.join(publicPath, 'public', 'index.html'));
});


app.use(express.static(publicPath));


app.listen(port, () => {
   console.log(`Server is up on port ${port}!`);
});
