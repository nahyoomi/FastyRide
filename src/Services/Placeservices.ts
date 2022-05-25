
export const filtered = (array:any,id:any) => {
     return array.find((element:any) => element.fsq_id === id)
} 
  
export const compareWish = (Localarray:any, places:any) => {
  places.filter((item:any)=>{
        const id = item.fsq_id
        const placeFilter = Localarray.filter((element:any) => {
            id ===element.fsq_id
        })
        return placeFilter
  })
  
}
