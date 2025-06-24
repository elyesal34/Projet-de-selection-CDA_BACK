const express = require('express');
const router = express.Router();
const jokeController = require('../controllers/jokeController');

/**
 * @swagger
 * /blagues:
 *   post:
 *     summary: Ajouter une blague
 *     responses:
 *       201:
 *         description: Blague ajoutée avec succès
 */
router.post('/blagues', jokeController.addJoke);

/**
 * @swagger
 * /blagues:
 *   get:
 *     summary: Récupérer toutes les blagues
 *     responses:
 *       200:
 *         description: Liste de toutes les blagues
 */
router.get('/blagues', jokeController.getAllJokes);

/**
 * @swagger
 * /blagues/random:
 *   get:
 *     summary: Récupérer une blague aléatoire
 *     responses:
 *       200:
 *         description: Une blague aléatoire
 */
router.get('/blagues/random', jokeController.getRandomJoke);

/**
 * @swagger
 * /blagues/{id}:
 *   get:
 *     summary: Récupérer une blague par son ID
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         description: ID de la blague à récupérer
 *         schema:
 *           type: integer
 *     responses:
 *       200:
 *         description: Blague trouvée
 *       404:
 *         description: Blague non trouvée
 */
router.get('/blagues/:id', jokeController.getJokeById);

/**
 * @swagger
 * /blagues/{id}:
 *   put:
 *     summary: Mettre à jour une blague par son ID
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         description: ID de la blague à mettre à jour
 *         schema:
 *           type: integer
 *     responses:
 *       200:
 *         description: Blague mise à jour avec succès
 *       404:
 *         description: Blague non trouvée
 */
router.put('/blagues/:id', jokeController.updateJoke);

/**
 * @swagger
 * /blagues/{id}:
 *   delete:
 *     summary: Supprimer une blague par son ID
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         description: ID de la blague à supprimer
 *         schema:
 *           type: integer
 *     responses:
 *       200:
 *         description: Blague supprimée avec succès
 *       404:
 *         description: Blague non trouvée
 */
router.delete('/blagues/:id', jokeController.deleteJoke);

module.exports = router;
