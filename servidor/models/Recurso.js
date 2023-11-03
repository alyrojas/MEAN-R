const mongoose = require('mongoose');

const RecursoSchema = mongoose.Schema({
    nombreRecurso: {
        type: String,
    },
    descripcion: {
        type: String,
    },
    cantidad: {
        type: String,
    },
    marca: {
        type: String,
    },
    categoria: {
        type: String,
    },
    estatus: {
        type: String,
    },
    fechaCreacion: {
        type: Date,
        default: Date.now()
    },

});

module.exports = mongoose.model('Recurso', RecursoSchema);