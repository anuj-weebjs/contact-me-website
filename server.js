const express = require('express');
const path = require('node:path');
const app = express();
const port = 4001;
const root = __dirname;

app.use('/', express.static('public/home'))

app.get('/', (req, res) =>{
    res.sendFile(`${root}/public/home/index.html`);
});
app.listen(port, ()=>{
    console.log(`Server Started On Port ${port} vist http://localhost:${port}`);
})
