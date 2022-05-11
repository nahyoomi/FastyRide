import axios from 'axios';
const URL="https://api.foursquare.com/v3/places/search?near="

export const getPlace = async(city:string) =>{ 
  const options = {
    method: 'GET',
    headers: {
      Accept: 'application/json',
      Authorization: ' fsq3Z3orSWSRhpZgaafrcEHHNUvRYXGkQssKMmAV5mREHc8='
        }
    }

    let response = await axios.get(`${URL}${city}&limit=50`, options)
    return response.data
  }