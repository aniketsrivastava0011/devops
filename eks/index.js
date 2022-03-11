const express = require('express')
const app = express()
const port = process.env.PORT || 5000 ;
const config = require('config')
console.log(config);

app.get('/', (req, res) => {
<<<<<<< HEAD
  res.send('Hello World')
=======
  res.send('CICD for EKS-Test_Run')
>>>>>>> c1eb79d550bff45eeec3561e7ad3c96eb66cc059
})

app.get('/status', (req, res) => {
    res.send('ok')
  })


app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})
