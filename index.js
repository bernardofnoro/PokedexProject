const express = require("express");
const path = require("path");

const app = express();
const port = process.env.PORT || 3000;
let message = "";
const pokedex = [{
  numero:"001",
  nome:"Bulbassaur",
  tipo: "Plant",
  image:"https://assets.pokemon.com/assets/cms2/img/pokedex/detail/001.png",
  descricao:"There is a plant seed on its back right from the day this Pokémon is born. The seed slowly grows larger.",
  altura:"0.7 m",
  peso:"6.9 kg",
  categoria:"Seed",
  habilidade:"Overgrow"
  },


  {numero:"004",
  nome:"Charmander",
  tipo: "Fire",
  image:"https://assets.pokemon.com/assets/cms2/img/pokedex/detail/004.png",
  descricao:"It has a preference for hot things. When it rains, steam is said to spout from the tip of its tail.",
  altura:"0.6 m",
  peso:"8.5 kg",
  categoria:"Lizard",
  habilidade:"Blaze"
  },

  {numero:"007",
  nome:"Squirtle",
  tipo: "Water",
  image:"https://assets.pokemon.com/assets/cms2/img/pokedex/detail/007.png",
  descricao:"When it retracts its long neck into its shell, it squirts out water with vigorous force.",
  altura:"0.5 m",
  peso:"9 kg",
  categoria:"Tiny turtle",
  habilidade:"Torrent"
  }
]
app.use(express.urlencoded());
app.set("view engine", "ejs");
app.use(express.static(path.join(__dirname, "public")));

app.get("/", (req, res) => {
  setTimeout(() => {
    message = "";
  }, 1000);

  res.render("index", {
    pokedex,
    message,
  });
});


app.get("/cadastro" , function(req,res){
  res.render("cadastro")
});
app.post("/novopokemon", (req, res) => {
  const newpokemon = req.body;
  pokedex.push(newpokemon);
  message = "Novo Pokemon adicionado com sucesso!";
  res.redirect("/");
});


app.get("/detalhes/:id", (req, res) => {
  const id = req.params.id;
  const pokemon = pokedex[id];
  res.render("detalhes", {
    pokemon,
  });
});






app.listen(port, ()=> console.log(`Server running on http://localhost:${port}`));