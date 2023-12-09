// console.log("hola soy un mensaje")
const express = required("express")
const cors = required ("cors")

const app = express();

app.use(express.urlencoded({extended: true}))
app.use(express.json())

app.use(cors())

app.listen(3000, (err) => {
    if(err) console.log("an error ocurred")
    console.log("server running on port 3000")
})