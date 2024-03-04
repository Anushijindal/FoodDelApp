import { createSlice } from "@reduxjs/toolkit";

const dataSlice=createSlice({
    name:'data',
    initialState:{
        listInfoData:null,
        groceryMenuList:null,
        groceryListItems:null,
        itemFilterId:null,
        itemMenuName:null,
        index:null,
        showItems:true
    },
    reducers:{
        addListInfoData(state,action){
        state.listInfoData=action.payload;
        },
        removeListInfoData(state){
            state.listInfoData.length=0;
        },
        addGroceryMenuList(state,action){
            state.groceryMenuList=action.payload;
        },
        addGroceryListItems(state,action){
            state.groceryListItems=action.payload;
        },
        removeGroceryListItems(state){
            state.groceryListItems=null;
        },
        addItemFilterId(state,action){
            state.itemFilterId=action.payload;
        },
        addItemMenuName(state,action){
            state.itemMenuName=action.payload;
        },
        addIndex(state,action){
            state.index=action.payload;
        },
        changeShowItems(state,action){
            state.showItems=!state.showItems;
        }
    }

})
export const {addListInfoData,removeListInfoData,addGroceryMenuList,addGroceryListItems,removeGroceryListItems,addItemFilterId,addItemMenuName,addIndex,changeShowItems} = dataSlice.actions;
export default dataSlice.reducer;