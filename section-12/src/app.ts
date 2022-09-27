//lodash only works with JavaScript
/*import _ from 'lodash';
console.log(_.shuffle([1, 2, 3]));*/

import "reflect-metadata";
import { validate } from 'class-validator';
import { plainToInstance } from "class-transformer";
import { Product } from "./product.model";

const products = [
    {title: 'A Carpet', price: 29.99},
    {title: 'A Book', price: 10.99}
];

const newProd = new Product('', -5.99);
validate(newProd).then(errors => {
    if (errors.length > 0) {
        console.log('Validation Errors!.');
        console.log(errors);
    } else {
        console.log(newProd.getInformation())
    }
});

const loadedProducts = plainToInstance(Product, products);

for (const prod of loadedProducts) {
    console.log(prod.getInformation());
}

//const p1 = new Product('A Book', 12.99);
//console.log(p1.getInformation());