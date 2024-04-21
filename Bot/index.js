import express from 'express'
import { runBot } from './bot.js'
const app = express()

runBot()
app.listen(process.env.PORT || 4000, () => {
    console.log("server is  running " + (process.env.PORT || 4000))
})