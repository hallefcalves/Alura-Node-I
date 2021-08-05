const Atendimeto = require('../models/atendimentos')

module.exports = app => {
    app.get('/atendimentos', (req, res) => res.send
    ('Você está na rota de atendimento e está realizando um get'));

    app.post('/atendimentos', (req, res) => {
        
        const atendimento = req.body

        Atendimeto.adiciona(atendimento)
        res.send('Post atendimento');

    })
}