import { ADD_TO_CART, REMOVE_FROM_CART,UPDATE_QUANTITY,CLEAR_CART } from '../../constants/const_strings';
export default function cartReducer(state = [], action = {}) {
    switch (action.type) {
        case ADD_TO_CART:
            {
                const product = action.payload;
                const cart = state;
                const existingProductIndex = findProductIndex(cart, product.id);
                const updatedCart = existingProductIndex >= 0 ?
                    updateProductUnits(cart, product) : [...cart, product];
                return updatedCart;
            }
        case REMOVE_FROM_CART:
            {
                return state.filter(cartItem => cartItem.id !== action.payload.id)
            }
        case UPDATE_QUANTITY:
            {
                const product = action.payload;
                const existingProductIndex = findProductIndex(state,product.id);
                state[existingProductIndex] = product;
                return state;
            }
        case CLEAR_CART:
            {
                return [];
            }
    }
    return state
}
/*Get product index from cart with productID*/
const findProductIndex = (cart, productID) => {
    return cart.findIndex(p => p.id === productID)
};
/*Update cart with the product index*/
const updateProductUnits = (cart, product) => {
    const productIndex = findProductIndex(cart, product.id);
    /*Push the entire cart to updatedCart*/
    const updatedCart = [...cart];
    /*Current Product to update*/
    const existingProduct = updatedCart[productIndex];
    const updatedUnitsProduct = {
        ...existingProduct,
        qty:existingProduct.qty+1,
    };
    updatedCart[productIndex] = updatedUnitsProduct;
    return updatedCart;
}