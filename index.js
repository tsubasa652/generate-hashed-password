const bcrypt = require("bcrypt")
const express = require('express')
const app = express()
app.use(express.json())
app.use(express.urlencoded({extended: true}))
app.use(express.static("static"))

app.post("/generate", (req, res)=>{
    try{
        const password = req.body?.password
        if(!password) {
            res.status(400).send()
            return
        }
        const hashedPassword = bcrypt.hashSync(password, 10)
        res.json({
            hashedPassword
        })
    }catch(e){
        console.log(e)
        res.status(500).send()
    }
})

app.listen(3000)

module.exports = app