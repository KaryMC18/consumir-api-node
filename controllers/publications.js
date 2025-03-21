const axios = require("axios");
const BASE_URL = "https://ejercicio-apirest-nodejs.onrender.com/api/publication";

// Obtener todas las publicaciones
async function getAllPublications() {
    try {
        const res = await axios.get(BASE_URL);
        console.log("Todas las publicaciones:", res.data);
    } catch (error) {
        console.error("Error al obtener publicaciones:", error.message);
    }
}

// Obtener una publicación por ID
async function getPublicationById(id) {
    try {
        const res = await axios.get(`${BASE_URL}/${id}`);
        console.log(`Publicación con ID ${id}:`, res.data);
    } catch (error) {
        console.error("Error al obtener publicación por ID:", error.message);
    }
}

// Crear una publicación
async function createPublication(author, title, content) {
    try {
        const res = await axios.post(BASE_URL, { author, title, content });
        console.log("Publicación creada:", res.data);
        return res.data._id; // retorna el ID si quieres usarlo
    } catch (error) {
        console.error("Error al crear publicación:", error.message);
    }
}

// Actualizar una publicación
async function updatePublication(id, title, content) {
    try {
        const res = await axios.put(`${BASE_URL}/${id}`, { title, content });
        console.log("Publicación actualizada:", res.data);
    } catch (error) {
        console.error("Error al actualizar publicación:", error.message);
    }
}

// Borrar una publicación
async function deletePublication(id) {
    try {
        const res = await axios.delete(`${BASE_URL}/${id}`);
        console.log("Publicación eliminada:", res.data);
    } catch (error) {
        console.error("Error al eliminar publicación:", error.message);
    }
}

// Agregar comentario
async function addComment(idPub, user, content) {
    try {
        const res = await axios.post(`${BASE_URL}/${idPub}/comment`, { user, content });
        console.log("Comentario agregado:", res.data);
        return res.data._id;
    } catch (error) {
        console.error(" Error al agregar comentario:", error.message);
    }
}

// Obtener comentarios
async function getComments(idPub) {
    try {
        const res = await axios.get(`${BASE_URL}/${idPub}/comments`);
        console.log(" Comentarios:", res.data);
    } catch (error) {
        console.error("Error al obtener comentarios:", error.message);
    }
}

// Editar comentario
async function updateComment(idPub, idComment, contenido) {
    try {
        const res = await axios.put(`${BASE_URL}/${idPub}/comment/${idComment}`, { contenido });
        console.log("Comentario actualizado:", res.data);
    } catch (error) {
        console.error("Error al actualizar comentario:", error.message);
    }
}

// Eliminar comentario
async function deleteComment(idPub, idComment) {
    try {
        const res = await axios.delete(`${BASE_URL}/${idPub}/comment/${idComment}`);
        console.log(" Comentario eliminado:", res.data);
    } catch (error) {
        console.error(" Error al eliminar comentario:", error.message);
    }
}

// Actualizar likes
async function updateLikes(idPub, idComment, increment) {
    try {
        const res = await axios.patch(`${BASE_URL}/${idPub}/comment/${idComment}/like`, { increment });
        console.log(" Likes actualizados:", res.data);
    } catch (error) {
        console.error(" Error al actualizar likes:", error.message);
    }
}

// Obtener publicaciones populares
async function getPopularPublications() {
    try {
        const res = await axios.get(`${BASE_URL}/trends/popular`);
        console.log("Publicaciones populares:", res.data);
    } catch (error) {
        console.error("Error al obtener publicaciones populares:", error.message);
    }
}

module.exports = {
    getAllPublications,
    getPublicationById,
    createPublication,
    updatePublication,
    deletePublication,
    addComment,
    getComments,
    updateComment,
    deleteComment,
    updateLikes,
    getPopularPublications
};
