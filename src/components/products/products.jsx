import React from 'react'
import {Grid} from '@material-ui/core'
import Product from './product/Product'

const products = [
    {id:1, name:'shoes', description:'running Shoes.',price:"$50"},
    {id:2, name:'macbook', description:'Apple macbook.', price:"$32"},
    {id:3, name:'iphone', description:'Iphone mobile.', price:"$10"}
];

const Products = () =>{
    return(
        <main>
        <Grid container justifyContent="center" spacing={4}>
            {
                products.map((product)=>(
                    <Grid item key={product.id} xs={12} sm={6} md={4} lg={3}>
                        <Product product={product} />
                        </Grid>
                ))
            }
        </Grid>
    </main>
    )
}

export default Products