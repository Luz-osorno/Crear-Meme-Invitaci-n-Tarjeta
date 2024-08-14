document.addEventListener('DOMContentLoaded', function () {
    const seleccionarCategoria = document.getElementById('seleccionar-categoria');
    const seleccionarTamano = document.getElementById('seleccionar-tamano');
    const seleccionarColor = document.getElementById('seleccionar-color');
    const opcionesImagenes = document.getElementById('opciones-imagenes');
    const botonGenerar = document.getElementById('boton-generar');

    let imagenSeleccionada = '';

    // Cambiar la imagen seleccionada al hacer clic en una imagen
    opcionesImagenes.addEventListener('click', function (event) {
        if (event.target.tagName === 'IMG') {
            imagenSeleccionada = event.target.src;
            document.querySelectorAll('.imagen-opcion').forEach(img => img.style.borderColor = 'transparent');
            event.target.style.borderColor = '#9b9b9b';
        }
    });

    botonGenerar.addEventListener('click', function () {
        const nombre = document.getElementById('entrada-nombre').value;
        const mensaje = document.getElementById('entrada-mensaje').value;
        const tamanoLetra = seleccionarTamano.value;
        const colorLetra = seleccionarColor.value;

        const areaResultado = document.getElementById('area-resultado');
        areaResultado.innerHTML = `
            <div style="text-align: center;">
                ${imagenSeleccionada ? `<img src="${imagenSeleccionada}" alt="Imagen Seleccionada" style="width: 300px; height: auto;"/>` : ''}
                <h2 style="font-size: ${tamanoLetra}; color: ${colorLetra};">${nombre}</h2>
                <p style="font-size: ${tamanoLetra}; color: ${colorLetra};">${mensaje}</p>
            </div>
        `;
    });
});