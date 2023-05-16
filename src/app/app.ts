import express, { Application } from 'express'
import cors from 'cors'

const app: Application = express()
//Application route

import userRoute from './modules/user/user.route'

//using cors

app.use(cors());

//parse data
app.use(express.json())
app.use(express.urlencoded({extended:true}))

  //app route

app.use('/api/v1/user', userRoute)


  export default app;