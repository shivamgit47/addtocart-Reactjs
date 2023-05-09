
const reducer=(state,action)=>{
        if(action.type === "REMOVE_ITEM")
        {
          return {
                ...state,
                item : state.item.filter((curElem)=>{
                        return curElem.id !== action.payload;
                }),
          };
        }
        if(action.type === "CLEAR_ITEM")
        {
                return{...state,item : []};
        }
        if(action.type === "INCREMENT")
        {
                let updatedCart = state.item.map((curElem)=> 
                {
                        if(curElem.id === action.payload)
                        {
                        return{...curElem,quantity : curElem.quantity +1};
                        }
                        return curElem;
                });
                return{...state,item : updatedCart}
        }
        if(action.type === "DECREMENT")
        {
                let updatedCart = state.item.map((curElem)=> 
                {
                        if(curElem.id === action.payload)
                        {
                                if(curElem.quantity=== 0)
                                {
                                        return{...curElem}
                                }
                                else
                                {
                                return{...curElem,quantity : curElem.quantity-1};
                                }
                        }
                        return curElem;
                })
                // .filter((curElem)=>
                // {
                //        return curElem.quantity !==0; 
                // });
                return{...state,item : updatedCart}
        }

        if(action.type === "GET_TOTAL" || action.type === "GET_AMOUNT")
        {
                let { totalItem,totalAmount } = state.item.reduce((accum,curVal) => {
                        let { quantity ,price } = curVal;
                        accum.totalItem+= quantity;
                        accum.totalAmount+=quantity*price;
                        return accum;
                },
                {
                        totalItem : 0,
                        totalAmount : 0
                }
                );
                return {...state,totalItem,totalAmount}
        }
        
        return state;
};
export default reducer;