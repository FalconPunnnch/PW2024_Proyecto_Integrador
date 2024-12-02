import Product from '../models/product.js';
import ProductCategory from '../models/productCategory.js';
import ProductService from '../services/productService.js';

const findByCategory = async (req, res) => {
    try {
        const { category } = req.params;
        const products = await Product.findAll({
            include: [
                {
                    model: ProductCategory,
                    where: { name: category }, 
                    attributes: ['name'],
                },
            ],
            attributes: ['name', 'imageUrl', 'code', 'stock', 'pricePEN'], 
        });

        const result = products.map(product => ({
            categoria: product.ProductCategory.name,
            producto: product.name,
            imageUrl: product.imageUrl,
            code: product.code,
            stock: product.stock,
            pricePEN: product.pricePEN, 
        }));

        return res.status(200).json(result);
    } catch (error) {
        return res.status(500).json({ message: error.message });
    }
};

const findAll = async (req, res) => {
    try {
        const results = await Product.findAll({
            include: [
                {
                    model: ProductCategory,
                    attributes: ['name'], 
                },
            ],
        });

        const products = results.map((product) => ({
            id: product.id,
            name: product.name,
            code: product.code,
            stock: product.stock,
            pricePEN: product.pricePEN, 
            description: product.description,
            imageUrl: product.imageUrl,
            category: product.ProductCategory ? product.ProductCategory.name : null,
        }));

        return res.status(200).json(products);
    } catch (error) {
        return res.status(500).json({ message: error.message });
    }
};

const findOne = async (req, res) => {
    try {
        const { id } = req.params;
        const result = await Product.findByPk(id, {
            include: [
                {
                    model: ProductCategory,
                    attributes: ['name'], 
                },
            ],
        });

        if (!result) {
            return res.status(404).json({ message: 'Product not found' });
        }

        const product = {
            id: result.id,
            name: result.name,
            code: result.code,
            stock: result.stock,
            pricePEN: result.pricePEN, 
            description: result.description,
            imageUrl: result.imageUrl,
            category: result.ProductCategory ? result.ProductCategory.name : null, 
        };

        return res.status(200).json(product);
    } catch (error) {
        return res.status(500).json({ message: error.message });
    }
};

const create = async (req, res) => {
    try {
        const { code, name, description, category_id, pricePEN, stock, imageUrl } = req.body;

        if (!code || !name || !category_id || !pricePEN || stock === undefined) {
            return res.status(400).json({ message: 'Todos los campos son obligatorios' });
        }

        const categoryExists = await ProductCategory.findByPk(category_id);
        if (!categoryExists) {
            return res.status(400).json({ message: 'La categoría seleccionada no existe' });
        }

        const newProduct = await Product.create({
            code,
            name,
            description,
            category_id,
            pricePEN,
            stock,
            imageUrl,
        });

        return res.status(201).json(newProduct);
    } catch (error) {
        return res.status(500).json({ message: error.message });
    }
};

const update = async (req, res) => {
    try {
        const { id } = req.params;
        const { priceUSD, ...data } = req.body; 
        const product = await ProductService.update(id, data);
        return res.status(200).json(product);
    } catch (error) {
        return res.status(400).json({ message: error.message });
    }
};

const remove = async (req, res) => {
    try {
        const { id } = req.params;
        await ProductService.remove(id);
        return res.status(200).json({ message: 'Product deleted successfully' });
    } catch (error) {
        return res.status(500).json({ message: error.message });
    }
};

export default { findAll, findOne, create, update, remove, findByCategory };
