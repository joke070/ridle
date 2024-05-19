//1.i import express and axios after you must have installed them

import express from "express";
import axios from "axios";

//2. i created the express app and port 3000

const app = express();
const port = 3000;

//4. here i served my static css files using express.static

app.use(express.static("public"));

//5. finally i used axios to send a http request to the "riddles API" and handle responses

app.get("/", async (req, res) => {

    try { 
        const result = await axios.get("https://riddles-api.vercel.app/random");
        res.render("index.ejs", { riddle: JSON.stringify(result.data.riddle), riddleAnswer: JSON.stringify(result.data.answer) });
    } catch (error) {
        res.render("index.ejs", { riddle: JSON.stringify(result.data.riddle) });
    }    
})

//3. and i added a code to make it listen on port 3000

app.listen(port, ()=> {
    console.log(`server runnin on port: ${port}`)

})
    
