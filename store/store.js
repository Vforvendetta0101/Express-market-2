import  create from 'zustand'

export const useStore = create (
    (set) => ({
        //cart
        cart : {
            products: []
        },
        //add Product in cart

        addProduct: (data) =>
        set((state) =>({
            cart: {
                products: [...state.cart.products,data]
            }
        })),

        // Remove Product 
        removeProduct: (index)=>
        set((state)=>({
            cart: {
                products: state.cart.products.filter((_,i)=> i != index)
            }
        })),

        resetCart: () => 
        set(() => ({
            cart: {
                products: [],
            }
        }))
    })
)