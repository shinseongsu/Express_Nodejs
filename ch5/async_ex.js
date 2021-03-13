const models = require('./models');

async function getProducts() {
    
    try {
        const product1 = await models.Products.findByPk(2);
        console.log(product1.dataValues.id);
    } catch (err) {
        console.log(err);
    }
};

getProducts();