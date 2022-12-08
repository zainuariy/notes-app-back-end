/* eslint-disable linebreak-style */
/* eslint-disable indent */
/* eslint-disable linebreak-style */
/* eslint-disable semi */
/* eslint-disable eol-last */
/* eslint-disable linebreak-style */
const {
    addNoteHandler,
    getAllNotesHandler,
    getNoteByIdHandler,
    editNotesByIdHandler,
    deleteNotesByIdHandler,
} = require('./handler');

const routes = [
    {
        method: 'POST',
        path: '/notes',
        handler: addNoteHandler,
    },
    {
        method: 'GET',
        path: '/notes',
        handler: getAllNotesHandler,
    },
    {
        method: 'GET',
        path: '/notes/{id}',
        handler: getNoteByIdHandler,
    },
    {
        method: 'PUT',
        path: '/notes/{id}',
        handler: editNotesByIdHandler,
    },
    {
        method: 'DELETE',
        path: '/notes/{id}',
        handler: deleteNotesByIdHandler,
    },
];

module.exports = routes;