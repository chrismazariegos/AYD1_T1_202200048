import express from "express";

const app = express();
const PORT = 3000;

app.use(express.json());

let songs = [
    {
        title: "Save your tears",
        artist: "The Weekend",
        album: "The Highlights"
    },
    {
        title: "Love me",
        artist: "RealestK",
        album: "Dreams 2 Reality"
    },
    {
        title: "ALOH ALOH",
        artist: "Kapo",
        album: "Tu OG Favorito"
    },
]

app.post("/songs", (req, res) => {
    const {title, artist, album} = req.body;
    if(!title || !artist || !album) {
        return res.status(400).json({ error: "El título y el artista son obligatorios." }); // Mensaje de error 400 (Bad Request)
    }

    const newSong = {
        title,
        artist,
        album,
    };

    songs.push(newSong);
    res.status(201).json(newSong); // Cancion creada con estado 201 (creado)
});
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