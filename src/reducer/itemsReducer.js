export const itemsReducer = (state = [], action) => {
  switch (action.type) {

    case 'addProductCart':
      return [
        ...state,
        {
          product: action.payload,
          quantity: 1,
        },
      ];

    case 'updateQuantityProductCart':
      return state.map(i => {
        if (i.action.payload.id === action.payload.id) {
          i.quantity += 1;
        }
        return i;
      });

    case 'deleteProductCart':
      return [...state.filter(i => i.product.id !== action.payload)];

    default:
      return state;
  }
}