import create from 'zustand'
 
const  SHOP_ITEMS_URL="https://fakestoreapi.com/products"
export const useStore = create(set => ({

  shopItems: [],
  fetch: async () => {
    
    const response = await fetch(SHOP_ITEMS_URL)
    const results =await response.json()
    set({ shopItems: results })
    return results;
   // console.log("ZUSTNAD FETCH",results)
  },
  removeAll: () => set({ shopItems: []})
  
}))