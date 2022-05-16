import axios from 'axios';
const URL="https://api.foursquare.com/v3/places/search?"
const URL_BYID = "https://api.foursquare.com/v3/places/"

export const getPlace = async(city:string) =>{ 
  const options = {
    method: 'GET',
    headers: {
      Accept: 'application/json',
      Authorization: ' fsq3Z3orSWSRhpZgaafrcEHHNUvRYXGkQssKMmAV5mREHc8='
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
        Authorization: ' fsq3Z3orSWSRhpZgaafrcEHHNUvRYXGkQssKMmAV5mREHc8='
          }
      }
  
      let response = await axios.get(`${URL_BYID}${id}`, options)
      return response.data
  }

  export const getPlacePhotos = async(id:string | undefined) =>{ 
    const options = {
      method: 'GET',
      headers: {
        Accept: 'application/json',
        Authorization: ' fsq3Z3orSWSRhpZgaafrcEHHNUvRYXGkQssKMmAV5mREHc8='
          }
      }
  
      let response = await axios.get(`${URL_BYID}${id}/photos?limit=4`, options)
      return response.data
  }
  

  export const getWordPlace = async(city:string,word:string) =>{ 
    const options = {
      method: 'GET',
      headers: {
        Accept: 'application/json',
        Authorization: ' fsq3Z3orSWSRhpZgaafrcEHHNUvRYXGkQssKMmAV5mREHc8='
          }
      }
  
      let response = await axios.get(`${URL}query=${word}&near=${city}&limit=50`, options)
      return response.data
    }