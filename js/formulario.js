document.getElementById('formulario').addEventListener('submit', function(event) {
    event.preventDefault();
    const dato1 = document.getElementById('dato1').value;
    const dato2 = document.getElementById('dato2').value;
    const dato3 = document.getElementById('dato3').value;

    const datos = {
        dato1: dato1,
        dato2: dato2,
        dato3: dato3
    };

    document.getElementById('resultado').value = JSON.stringify(datos, null, 2);
});

document.getElementById('guardar').addEventListener('click', function() {
    try {
        const datos = JSON.parse(document.getElementById('resultado').value);
        document.getElementById('dato1').value = datos.dato1;
        document.getElementById('dato2').value = datos.dato2;
        document.getElementById('dato3').value = datos.dato3;
    } catch (e) {
        alert("Datos incompletos");
    }
});