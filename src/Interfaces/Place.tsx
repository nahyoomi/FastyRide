export interface PlaceInterface {
    "fsq_id": string
    "categories": [
      {
        "id": number
        "name": string
        "icon": {
          "prefix": string
          "suffix":string
        }
      }
    ],
    "chains": [],
    "distance": number
    "geocodes": {
      "main": {
        "latitude": number
        "longitude": number
      }
    },
    "link": string
    "location": {
      "address": string
      "admin_region":string
      "country":string
      "cross_street": string
      "formatted_address": string
      "locality": string
      "postcode": string
      "region": string
    },
    "name": string
    "related_places": {},
    "timezone": string
  }

  export interface IFormInput {
    location: string;
    word: string
  }

  export interface Props {
  /*   city:string,
    setCity:React.Dispatch<React.SetStateAction<string>>, */
    setPlace:React.Dispatch<React.SetStateAction<PlaceInterface[]>>
  }
  export interface PropsCard {
    places: PlaceInterface[],
  }