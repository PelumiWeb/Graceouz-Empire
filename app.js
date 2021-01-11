const express = require('express')
const app = express()


// app.set("view engine", "ejs");
app.use(express.static("public"))


const port = process.env.PORT || 3030

app.get('/', (req, res) => {
    res.render("home")
})

app.listen(port, () => {
    console.log(`app is running at ${port}`)
})