const {
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
} = require('./controllers/publications');

(async () => {
    // 1. Crear publicación
    const idPub = await createPublication("Jose Mendez", "Publicación de prueba", "Este es el contenido inicial");
    if (!idPub) return;

    // 2. Obtener todas las publicaciones
    await getAllPublications();

    // 3. Obtener publicación por ID
    await getPublicationById(idPub);

    // 4. Agregar un comentario
    const idComment = await addComment(idPub, "UsuarioDemo", "Este es un comentario de prueba");
    if (!idComment) return;

    // 5. Obtener comentarios de la publicación
    await getComments(idPub);

    // 6. Actualizar comentario
    await updateComment(idPub, idComment, "Comentario actualizado por Gabriel");

    // 7. Actualizar likes del comentario (incrementar y luego disminuir)
    await updateLikes(idPub, idComment, true);  // +1
    await updateLikes(idPub, idComment, false); //  -1 (solo si hay al menos 1)

    // 8. Obtener publicaciones populares
    await getPopularPublications();

    // 9. Eliminar comentario
    await deleteComment(idPub, idComment);

    // 10. Eliminar publicación
    await deletePublication(idPub);
})();

