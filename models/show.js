


// Importa la biblioteca Mongoose
let mongoose = require('mongoose')

// Crea un objeto de esquema (Schema) para el modelo "Show"
let Schema = mongoose.Schema

// Define el esquema "ShowSchema"
let ShowSchema = Schema({
  name: String,              // Un campo "name" de tipo String
  episodes: Number,          // Un campo "episodes" de tipo Number
  cast: [{                   // Un campo "cast" que es una matriz de objetos
    name: String,            // Cada objeto en la matriz tiene un campo "name" de tipo String
    role: String             // Cada objeto en la matriz tiene un campo "role" de tipo String
  }]
})

// Exporta el modelo "Show" basado en el esquema "ShowSchema" y especifica que la colección en MongoDB se llama "show"
module.exports = mongoose.model('Show', ShowSchema, 'show')
