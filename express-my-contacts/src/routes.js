const { Router } = require('express');
const ContactsController = require('./app/controllers/ContactsController');
const CategoryController = require('./app/controllers/CategoryController');

const router = Router();

router.get('/contacts',ContactsController.index);
router.get('/contacts/:id', ContactsController.show);
router.delete('/contacts/:id', ContactsController.delete);
router.post('/contacts', ContactsController.store);
router.put('/contacts/:id', ContactsController.update);

router.get('/categories', CategoryController.index);
router.post('/categories', CategoryController.store);
router.delete('/categories/:id', CategoryController.delete);
router.put('/categories/:id', CategoryController.update);


module.exports = router;
