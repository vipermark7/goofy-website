let app = require('express');

app.use("/counter", (req, res) => { 
  res.sendFile(`${__dirname}/counter.js`)
})
app.use("/tragedy", (req, res) => {
  res.sendFile(`${__dirname}/tragedy.html`)
})

