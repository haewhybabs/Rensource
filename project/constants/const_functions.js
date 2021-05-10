import {ADD_TO_CART,REMOVE_FROM_CART,UPDATE_QUANTITY,CLEAR_CART} from './const_strings';
export function addToCartAction({ id, name, price, qty, description, image }) {
    return {
        type: ADD_TO_CART,
        payload: {
            id,
            name,
            price,
            description,
            qty,
            image
        }
    }
}
export function removeFromCartAction({ id }) {
    return {
        type: REMOVE_FROM_CART,
        payload: {
            id
        }
    }
}

export function clearCartAction({ }) {
    return {
        type: CLEAR_CART,
        payload: {
        }
    }
}

export function updateQuantityCartAction({ id,name, price, qty, description, image }) {
    return {
        type: UPDATE_QUANTITY,
        payload: {
            id,
            name,
            price,
            description,
            qty,
            image
        }
    }
}