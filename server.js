//run with type: module
//part of temporary front end
import express from 'express'
import { generateUploadURL } from './s3/s3.js'

const app = express()

app.use(express.static('front'))

// app.get('/s3Url', async (req, res) => {
//   const url = await generateUploadURL()
//   res.send({url})
// })

app.listen(8081, () => console.log("listening on port 8081"))