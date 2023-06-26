
class Estudiante extends Persona{
    //ATRIBUTOS.
    private numeroEstudiante : number;
    //CONSTRUCTOR.
    constructor(newNombre : string, newEdad : number, newNumeroEstudiante : number){
        super(newNombre, newEdad);
        this.numeroEstudiante = newNumeroEstudiante;
    }
    //MÉTODOS.
    mostrarInformacion(): void {
        super.mostrarInformacion()
        console.log(this.numeroEstudiante);
    }
}