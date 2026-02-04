export async function getServicios() {
    const response = await fetch("http://localhost:5142/api/Servicios");
    if (!response.ok) throw new Error("Error al cargar servicios");
    return response.json();
}

export async function crearServicio(payload) {
    const res = await fetch("http://localhost:5142/api/Servicios", {
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

const BASE_URL = "http://localhost:5142/api/Servicios";

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