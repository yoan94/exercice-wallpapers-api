const express = require('express');
const { ObjectId } = require('mongodb');
const { Wallpapers } = require('./database');

const router = express.Router();

router.get('/', (req, res) => {
  res.send({
    hello: 'Hello World !',
  });
});

/**
 * Route qui retourne les données d'un Wallpapers depuis un id
 * Exemple de route:
 *  - /api/wallpapers/6081af8c3845792d907ea5d1
 */
router.get('/api/wallpapers/:id', (req, res, next) => {
  const id = ObjectId(req.params.id);

  Wallpapers()
    .findOne({ _id: id })
    .then((wallpaper) => {
      if (!wallpaper) {
        return next('Wallpaper not found.');
      }
      res.send({ wallpaper });
    })
    .catch(next);
});

/**
 * Route qui retourne 10 wallpapers
 * Exemple de route:
 *  - /api/wallpapers
 *  - /api/wallpapers?page=2
 *  - /api/wallpapers?page=10
 */
// router.get('/api/wallpapers', (req, res, next) => { ... });

/**
 * Route qui permet d'afficher tous les wallpapers associés à un tag
 * Exemple de route:
 *  - /api/wallpapers/tag/forest
 *  - /api/wallpapers/tag/cat
 */
// router.get('/api/wallpapers/tag/:tag', (req, res, next) => { ... });

module.exports = router;
