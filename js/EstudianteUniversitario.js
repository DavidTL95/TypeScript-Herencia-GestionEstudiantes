"use strict";
class EstudianteUniversitario extends Estudiante {
    //CONSTRUCTOR.
    constructor(newNombre, newEdad, newNumeroEstudiante, newCarrera) {
        super(newNombre, newEdad, newNumeroEstudiante);
        this.carrera = newCarrera;
    }
    //MÉTODOS.
    mostrarInformacion() {
        super.mostrarInformacion();
        console.log(this.carrera);
    }
}
