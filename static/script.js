async function resolverTSP() {
    const coordenadas = {
        'Jiloyork': [19.916012, -99.580580],
        'Toluca': [19.289165, -99.655697],
        'Atlacomulco': [19.799520, -99.873844],
        'Guadalajara': [20.677754472859146, -103.34625354877137],
        'Monterrey': [25.69161110159454, -100.321838480256],
        'QuintanaRoo': [21.163111924844458, -86.80231502121464],
        'Michohacan': [19.701400113725654, -101.20829680213464],
        'Aguascalientes': [21.87641043660486, -102.26438663286967],
        'CDMX': [19.432713075976878, -99.13318344772986],
        'QRO': [20.59719437542255, -100.38667040246602]
    };

    const respuesta = await fetch('/tsp', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({ coordenadas })
    });

    const datos = await respuesta.json();
    document.getElementById('resultado').innerHTML = `
        <p><strong>Ruta encontrada:</strong> ${datos.ruta.join(' → ')}</p>
        <p><strong>Distancia total:</strong> ${datos.distancia_total.toFixed(2)}</p>
    `;
}
