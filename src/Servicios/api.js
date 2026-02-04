export async function getServicios() {
    const response = await fetch("https://backendprueba-hwcs.onrender.com");
    if (!response.ok) throw new Error("Error al cargar servicios");
    return response.json();
}

export async function crearServicio(payload) {
    const res = await fetch("https://backendprueba-hwcs.onrender.com", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(payload),
    });

    if (!res.ok) {
        const msg = await res.text();
        throw new Error(msg || "Error creando servicio");
    }

    return res.json();
}

const BASE_URL = "https://backendprueba-hwcs.onrender.com";

export async function actualizarServicio(id, payload) {
    const res = await fetch(`${BASE_URL}/${id}`, {
    method: "PUT",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(payload),
    });

    if (!res.ok) {
    const msg = await res.text();
    throw new Error(msg || "Error actualizando servicio");
    }

    return res.json();
}