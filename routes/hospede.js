const express = require('express');
const router = express.Router();
const db = require('../db');

// GET /hospede - listar todos
router.get('/', (req, res) => {
  db.query('SELECT * FROM hospede', (err, results) => {
    if (err) return res.status(500).json({ erro: 'Erro ao buscar hóspedes', detalhe: err.message });
    res.json(results);
  });
});

// GET /hospede/:id - buscar um
router.get('/:id', (req, res) => {
  db.query('SELECT * FROM hospede WHERE id = ?', [req.params.id], (err, results) => {
    if (err) return res.status(500).json({ erro: 'Erro ao buscar hóspede', detalhe: err.message });
    if (results.length === 0) return res.status(404).json({ erro: 'Hóspede não encontrado' });
    res.json(results[0]);
  });
});

// POST /hospede - criar
router.post('/', (req, res) => {
  const { nome, documento, telefone } = req.body;
  if (!nome || !documento || !telefone) {
    return res.status(400).json({ erro: 'Informe nome, documento e telefone' });
  }
  db.query(
    'INSERT INTO hospede (nome, documento, telefone) VALUES (?, ?, ?)',
    [nome, documento, telefone],
    (err, result) => {
      if (err) return res.status(500).json({ erro: 'Erro ao cadastrar hóspede', detalhe: err.message });
      res.status(201).json({ id: result.insertId, nome, documento, telefone });
    }
  );
});

// PUT /hospede/:id - atualizar
router.put('/:id', (req, res) => {
  const { nome, documento, telefone } = req.body;
  if (!nome || !documento || !telefone) {
    return res.status(400).json({ erro: 'Informe nome, documento e telefone' });
  }
  db.query(
    'UPDATE hospede SET nome = ?, documento = ?, telefone = ? WHERE id = ?',
    [nome, documento, telefone, req.params.id],
    (err, result) => {
      if (err) return res.status(500).json({ erro: 'Erro ao atualizar hóspede', detalhe: err.message });
      if (result.affectedRows === 0) return res.status(404).json({ erro: 'Hóspede não encontrado' });
      res.json({ id: Number(req.params.id), nome, documento, telefone });
    }
  );
});

// DELETE /hospede/:id - remover
router.delete('/:id', (req, res) => {
  db.query('DELETE FROM hospede WHERE id = ?', [req.params.id], (err, result) => {
    if (err) return res.status(500).json({ erro: 'Erro ao excluir hóspede', detalhe: err.message });
    if (result.affectedRows === 0) return res.status(404).json({ erro: 'Hóspede não encontrado' });
    res.json({ mensagem: 'Hóspede excluído com sucesso' });
  });
});

module.exports = router;
