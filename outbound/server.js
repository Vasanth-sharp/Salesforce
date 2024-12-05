const express=require("express")
const xml2js=require("xml2js")
const bodyparser=require("body-parser")
const cors=require('cors')
const app=express()

app.use(cors())
app.use(bodyparser.text({type:"application/xml"}))

app.listen(4000,()=>console.log("I am listening..."))

app.post("/api/xml",(req,res)=>{
    const xmlData=req.body;

    xml2js.parseString(xmlData,(err,result)=>{
        if(err) return res.status(400).send("Invalid xml");

        console.log(result)

        res.status(200).send("XML received")
    })
})

