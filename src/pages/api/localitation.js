export default async function handler(req, res) {
    // Obtener la IP del usuario
    const ip = req.headers['x-forwarded-for'] || req.socket.remoteAddress;

    try {
        // Llamada a la API de geolocalización sin registro
        const response = await fetch(`https://ipinfo.io/${ip}/json`);
        const data = await response.json();

        // Verifica si la respuesta tiene los datos correctos
        if (data.error) {
            return res.status(400).json({ error: 'Error al obtener la ubicación' });
        }

        console.log("Información de ubicación obtenida:", {
            country: data.country,
            city: data.city,
            region: data.region,
            postal_code: data.postal,
            location: data.loc,  // Latitud y Longitud (en formato "lat,long")
            timezone: data.timezone,
        });
        
        // Retornar los datos más precisos de la ubicación
        res.status(200).json({
            country: data.country,  // País
            city: data.city,  // Ciudad
            region: data.region,  // Región o estado
            postal_code: data.postal,  // Código Postal
            location: data.loc,  // Latitud y Longitud (en formato "lat,long")
            timezone: data.timezone,  // Zona horaria
        });
    } catch (error) {
        // En caso de error, retornar un error en la respuesta
        res.status(500).json({ error: 'Error al obtener la ubicación' });
    }
}
