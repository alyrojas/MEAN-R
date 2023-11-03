const recurso = require("../models/recurso.js");
const Recurso = require("../models/recurso.js");

exports.crearRecurso = async (req, res) => {
    try {
        let recurso;

        // Creamos nuestro rol
        recurso = new Recurso(req.body);

        await recurso.save();
        res.send(recurso);
        
    } catch (error) {
        console.log(error);
        res.status(500).send('Hubo un error');
    }
}

exports.obtenerRecursos = async (req, res) => {

    try {
        const recurso = await Recurso.find();
        res.json(recurso)
        
    } catch (error) {
        console.log(error);
        res.status(500).send('Hubo un error');
    }

}

exports.actualizarRecurso = async (req, res) => {

    try {
        const { nombreRecurso, descripcion, cantidad, marca, categoria, estatus } = req.body;
        let recurso = await Recurso.findById(req.params.id);

        if(!recurso) {
            res.status(404).json({ msg: 'No existe' })
        }

        recurso.nombreRecurso = nombreRecurso;
        recurso.descripcion = descripcion;
        recurso.cantidad = cantidad;
        recurso.marca = marca;
        recurso.categoria = categoria;
        recurso.cantidad = cantidad;
        recurso.estatus = estatus;
        
        recurso = await Recurso.findOneAndUpdate({ _id: req.params.id },recurso, { new: true} )
        res.json(recurso);

    } catch (error) {
        console.log(error);
        res.status(500).send('Hubo un error');
    }
}

exports.obtenerRecursoID = async (req,res) => {

    try {
        let recurso = await Recurso.findById(req.params.id);

        if(!recurso){
            res.status(404).json({msg: 'Recurso inexistente'})
        }
        
        res.json(recurso);

    } catch (error) {
        console.log(error);
        res.status(500).send('Hubo un error');
    }
}

exports.eliminarRecurso = async (req,res) => {

    try {
        let recurso = await Recurso.findById(req.params.id);

        if(!recurso){
            res.status(404).json({msg: 'Recurso inexistente'})
        }
        
        await Recurso.findOneAndRemove({ _id: req.params.id })
        res.json({msg: 'Recurso eliminado con exito'});

    } catch (error) {
        console.log(error);
        res.status(500).send('Hubo un error');
    }
}

