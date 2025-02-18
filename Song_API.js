import express from "express";

const app = express();
const PORT = 3000;

app.use(express.json());

let info =
    {
        Carnet: "202200048",
        artist: "Christian Samuel Brán Mazariegos",
    }

// Endpoint para metodo get
app.get("/songs", (req, res) => {
    res.json(info);
});
// Iniciar server

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});