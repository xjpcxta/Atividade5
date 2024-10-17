const express = require('express');
const app = express();
const path = require('path');

app.use(express.urlencoded({ extended: true }));

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(express.static(path.join(__dirname, 'public')));

app.get('/', (req, res) => {
    res.render('index', { error: null });
});

app.post('/dados', (req, res) => {
    const { nome, endereco, telefone, data } = req.body;

    if (!nome || !endereco || !telefone || !data) {
        res.render('index', { error: 'Todos os campos devem ser preenchidos.' });
    } else {
        res.render('dados', { nome, endereco, telefone, data });
    }
});

const PORT = 3000;
app.listen(PORT, () => {
    console.log(`Servidor rodando na porta ${PORT}`);
});
