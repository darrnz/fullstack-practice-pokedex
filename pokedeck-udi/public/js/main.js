// main.js
console.log('PokéDeck UDI - Boilerplate listo.');

// TODO: aquí podrían:
// - Probar llamada a /api/health
// - Mostrar un mensaje dinámico en la página de inicio

async function checkApi() {
    try {
        const res = await fetch('/api/health');
        const data = await res.json();
        console.log('API health:', data);
    } catch (err) {
        console.error('Error al conectar con la API:', err);
    }
}

checkApi();
