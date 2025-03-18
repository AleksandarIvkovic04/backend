import { AppDataScource } from "./db"
import express from 'express'
import morgan from 'morgan'




const app = express()
app.use(express.json())
app.use(morgan('short'))



AppDataScource.initialize()
.then(()=>{
 const  port = process.env.SERVER_PORT || 3000
 console.log('connected to database')
app.listen(port,()=>console.log('listening on port ${port}'))

})
.catch(e=>console.log(e))