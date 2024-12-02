import Product from '../models/product.js';
import ProductCategory from '../models/productCategory.js';

const findAll = async () => {
    return await Product.findAll({
        include: [
            {
                model: ProductCategory,
                attributes: ['name'],
            },
        ],
    });
};

const findOne = async (id) => {
    return await Product.findByPk(id, {
        include: [
            {
                model: ProductCategory,
                attributes: ['name'],
            },
        ],
    });
};

const create = async (data) => {
    const { category_id } = data;

    const categoryExists = await ProductCategory.findByPk(category_id);
    if (!categoryExists) {
        throw new Error('La categoría proporcionada no existe');
    }

    return await Product.create(data);
};

const update = async (id, data) => {
    const product = await Product.findByPk(id);
    if (!product) throw new Error('Producto no encontrado');

    if (data.category_id) {
        const categoryExists = await ProductCategory.findByPk(data.category_id);
        if (!categoryExists) {
            throw new Error('La categoría proporcionada no existe');
        }
    }

    await product.update(data);
    return product;
};

const remove = async (id) => {
    const product = await Product.findByPk(id);
    if (!product) throw new Error('Producto no encontrado');

    await product.destroy();
    return true;
};

const findByCategory = async (categoryName) => {
    return await Product.findAll({
        include: [
            {
                model: ProductCategory,
                where: { name: categoryName },
                attributes: ['name'],
            },
        ],
        attributes: ['id', 'name', 'imageUrl', 'code', 'stock', 'pricePEN', 'description'],
    });
};

export default { findAll, findOne, create, update, remove, findByCategory };
