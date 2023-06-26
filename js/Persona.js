"use strict";
// Crea un sistema de gestión de personas y estudiantes utilizando TypeScript. El
// sistema debe permitir almacenar información sobre personas y estudiantes, y realizar
// operaciones específicas para cada tipo.
// 1. Define una clase base llamada `Persona` con las siguientes propiedades: ✅
//     - `nombre` (string): representa el nombre de la persona. ✅
//     - `edad` (number): representa la edad de la persona. ✅
// 2. Crea una clase llamada `Estudiante` que herede de `Persona`. Esta clase debe
// tener una propiedad adicional: ✅
//     - `numeroEstudiante` (string): representa el número de estudiante. ✅
// 3. Crea una clase llamada `EstudianteUniversitario` que herede de `Estudiante`.
// Esta clase debe tener una propiedad adicional: ✅
//     - `carrera` (string): representa la carrera que está estudiando el estudiante
//     universitario. ✅
// 4. Agrega un método `mostrarInformacion()` a cada clase para mostrar por consola
// la información correspondiente. ✅
//     - En el caso de `Persona`, muestra el nombre y la edad. ✅
//     - En el caso de `Estudiante`, muestra el nombre, la edad y el número de
//     estudiante. ✅
//     - En el caso de `EstudianteUniversitario`, muestra el nombre, la edad, el número
//     de estudiante y la carrera. ✅
// 5. Crea instancias de personas, estudiantes y estudiantes universitarios con
// diferentes características y llama al método `mostrarInformacion()` para cada uno
// de ellos. ✅
// Recuerda utilizar TypeScript para declarar los tipos de datos de las propiedades y los
// métodos, así como para realizar las validaciones necesarias.
class Persona {
    //CONSTRUCTOR.
    constructor(newNombre, newEdad) {
        this.nombre = newNombre;
        this.edad = newEdad;
    }
    //MÉTODOS.
    mostrarInformacion() {
        console.log(this.nombre);
        console.log(this.edad);
    }
    ;
}
