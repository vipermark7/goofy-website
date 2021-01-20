let app = require('express');

app.use("/counter", (req, res) => {
  // counter will 
  res.sendFile(`${__dirname}/counter.js`)
})
