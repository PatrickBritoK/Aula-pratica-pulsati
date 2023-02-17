const { createAutor, getAutor, updateAutor, deleteAutor } = require('./controller/autorController');
const { createEditora, getEditora, updateEditora, deleteEditora} = require('./controller/editoraController');
const { createLivro, getLivro, updateLivro, deleteLivro } = require('./controller/livroController');

const express = require('express');
const app = express();
app.use(express.json());

app.post('/Autor', createAutor);
app.get('/AutorId/:codigo', getAutor);
app.update('/AutorAtt/:codigo', updateAutor);
app.delete('/AutorDelete/:codigo', deleteAutor);

app.post('/Editora', createEditora);
app.get('/EditoraId/:codigo', getEditora);
app.update('/EdtioraAtt/:codigo', updateEditora);
app.delete('/EditoraDelete/:codigo', deleteEditora);

app.post('/Livro', createLivro);
app.get('/LivroId/:codigo', getLivro);
app.update('/LivroAtt/:codigo', updateLivro);
app.delete('/LivroDelete/:codigo', deleteLivro);

app.listen(8000);