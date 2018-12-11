const party = [{
    host: "Laurie", 
    date: "12/23/2018", 
    time: "12:00", 
    location: "VFW", 
    number: "10"
}]



const express = require('express')

const app = express()
app.use(express.json())

const PORT = 8080

app.listen(PORT, () => console.log(`listening on port ${PORT}`))

app.get('/api/party', (req, res)=> {
    res.status(200).send(party)

})

//app.put('/api/party', (req, res) => {
 //   party[0]= {host: req.body.host, 
  //  team: req.body.team,
  //  location: req.body.location,
  //  date: req.body.team,
 //   number: req.body.number,
 //  }
 //  res.status(200).send(party)
//})
//app.post('/api/party', (req, res) => {
  //  party[0]= {host: req.body.host, 
  //  team: req.body.team,
  //  location: req.body.location,
   /// date: req.body.team,
  //  number: req.body.number,
 //  }
 //  res.status(200).send(party)
//})
//app.delete('/api/party', (req, res) => {
 //   party[0]= {host: req.body.host, 
  //  team: req.body.team,
 //   location: req.body.location,
  //  date: req.body.team,
  //  number: req.body.number,
 //  }
 //  res.status(200).send(party)
//})
