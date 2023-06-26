
class EstudianteUniversitario extends Estudiante{
    //ATRIBUTOS.
        private carrera : string;
    //CONSTRUCTOR.
        constructor(newNombre : string, newEdad : number, newNumeroEstudiante : number, newCarrera : string) {
            super(newNombre, newEdad, newNumeroEstudiante);
            this.carrera = newCarrera;
        }
    //MÉTODOS.
    mostrarInformacion(): void {
        super.mostrarInformacion();
        console.log(this.carrera);
    }
}