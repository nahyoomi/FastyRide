import axios from 'axios';
const URL="https://api.foursquare.com/v3/places/search?fields=rating%2Ctips%2Cprice%2Cphotos%2Chours%2Ctel%2Cwebsite%2Cemail%2Cfsq_id%2Cname%2Cgeocodes%2Clocation%2Ccategories%2Cdescription&"
const URL_BYID = "https://api.foursquare.com/v3/places/"

export const getPlace = async(city:string) =>{ 
  const options = {
    method: 'GET',
    headers: {
      Accept: 'application/json',
      Authorization: 'fsq3TY1q58bnDc/7bQdBoSS30psmEmbkSGxnQyxAudv0ouA='
        }
    }

    let response = await axios.get(`${URL}near=${city}&limit=50`, options)
    return response.data
  }

  export const getPlaceById = async(id:string | undefined) =>{ 
    const options = {
      method: 'GET',
      headers: {
        Accept: 'application/json',
        Authorization: 'fsq3TY1q58bnDc/7bQdBoSS30psmEmbkSGxnQyxAudv0ouA='
          }
      }
  
      let response = await axios.get(`${URL_BYID}${id}?fields=rating%2Ctips%2Cprice%2Cphotos%2Chours%2Ctel%2Cwebsite%2Cemail%2Cfsq_id%2Cname%2Cgeocodes%2Clocation%2Ccategories%2Cdescription`, options)
      return response.data
  }



  export const getWordPlace = async(city:string,word:string) =>{ 
    const options = {
      method: 'GET',
      headers: {
        Accept: 'application/json',
        Authorization: 'fsq3TY1q58bnDc/7bQdBoSS30psmEmbkSGxnQyxAudv0ouA='
          }
      }
  
      let response = await axios.get(`${URL}query=${word}&near=${city}&limit=50`, options)
      return response.data
    }

    export const getPlaceBestRate = async(city:string,word:string) =>{ 
      const options = {
        method: 'GET',
        headers: {
          Accept: 'application/json',
          Authorization: 'fsq3TY1q58bnDc/7bQdBoSS30psmEmbkSGxnQyxAudv0ouA='
            }
        }
    
        let response = await axios.get(`${URL}query=${word}&near=${city}&sort=RATING&limit=50`, options)
        return response.data
    }