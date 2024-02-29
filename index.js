
let alumnos = [];


document.getElementById('altaAlumnoForm').addEventListener('submit', function(event) {
    event.preventDefault();
    const nombre = document.getElementById('nombre').value;
    const apellidos = document.getElementById('apellidos').value;
    const edad = document.getElementById('edad').value;
    const nuevoAlumno = { nombre, apellidos, edad, materiasInscritas: [], calificaciones: [] };
    alumnos.push(nuevoAlumno);
    actualizarSelects();
    document.getElementById('altaAlumnoForm').reset();
});


function actualizarSelects() {
    const alumnosSelect = document.getElementById('alumnosSelect');
    const alumnosCalificacionesSelect = document.getElementById('alumnosCalificacionesSelect');
    const gruposSelect = document.getElementById('gruposSelect');
    alumnosSelect.innerHTML = '';
    alumnosCalificacionesSelect.innerHTML = '';
    gruposSelect.innerHTML = '';
    alumnos.forEach((alumno, index) => {
        const option = document.createElement('option');
        option.text = `${alumno.nombre} ${alumno.apellidos}`;
        option.value = index;
        alumnosSelect.add(option);
        const optionCalif = document.createElement('option');
        optionCalif.text = `${alumno.nombre} ${alumno.apellidos}`;
        optionCalif.value = index;
        alumnosCalificacionesSelect.add(optionCalif);
    });
    // Agregar grupos a selector
    // ...
}


function inscribirAlumno() {
    const alumnoIndex = document.getElementById('alumnosSelect').value;
    const materia = prompt('Ingrese la materia a inscribir:');
    alumnos[alumnoIndex].materiasInscritas.push(materia);
   
}


function asignarCalificacion() {
    const alumnoIndex = document.getElementById('alumnosCalificacionesSelect').value;
    const calificacion = parseFloat(document.getElementById('calificacion').value);
    alumnos[alumnoIndex].calificaciones.push(calificacion);

}


function crearGrupo() {
    const grupo = prompt('Ingrese el nombre del grupo:');
    const alumnosSeleccionados = [];
    
}

