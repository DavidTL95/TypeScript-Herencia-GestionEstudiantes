"use strict";
class Estudiante extends Persona {
    //CONSTRUCTOR.
    constructor(newNombre, newEdad, newNumeroEstudiante) {
        super(newNombre, newEdad);
        this.numeroEstudiante = newNumeroEstudiante;
    }
    //MÉTODOS.
    mostrarInformacion() {
        super.mostrarInformacion();
        console.log(this.numeroEstudiante);
    }
}
