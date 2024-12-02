import express from 'express';
import ProductController from '../controllers/productController.js';

const router = express.Router();

router.get('/', ProductController.findAll);
router.get('/:id', ProductController.findOne); 
router.post('/', ProductController.create);
router.put('/:id', ProductController.update); 
router.delete('/:id', ProductController.remove);
router.get('/category/:category', ProductController.findByCategory);


export default router;
