export interface PlaceInterface {
  fsq_id: string,
  categories: [
    {
      id: number,
      name: string,
      icon: {
        prefix: string,
        suffix: string
      }
    }
  ],
  description: string,
  geocodes: {
    main: {
      latitude: number,
      longitude: number
    }
  },
  hours: {
    is_local_holiday: boolean,
    open_now: boolean,
    seasonal: []
  },
  location: {
    address: string,
    census_block: number,
    country: string,
    cross_street: string,
    dma: string,
    formatted_address: string,
    locality: string,
    neighborhood: [
      string
    ],
    postcode: string,
    region: string
  },
  name: string,
  photos: [
    {
      id: string,
      created_at:string,
      prefix: string,
      suffix: string,
      width: number,
      height: number
    },
    {
      id: string,
      created_at: string,
      prefix: string,
      suffix: string,
      width: number,
      height: number
    },
    {
      id: string,
      created_at:string,
      prefix: string,
      suffix: string,
      width: number,
      height: number
    },
    {
      id: string,
      created_at: string,
      prefix: string,
      suffix:string,
      width: number,
      height: number
    },
    {
      id: string,
      created_at: string,
      prefix: string,
      suffix: string,
      width: number,
      height: number
    }
  ],
  rating: number,
  tel: string,
  tips: [
    {
      created_at: string,
      text: string
    },
    {
      created_at: string,
      text: string
    },
    {
      created_at: string,
      text: string
    },
    {
      created_at: string,
      text: string
    },
    {
      created_at: string,
      text:string
    }
  ],
  website: string
}

  export interface IFormInput {
    location: string;
    word: string
  }

  export interface Props {
    setPlace:React.Dispatch<React.SetStateAction<PlaceInterface[]>>
  }
  export interface PropsCard {
    places: PlaceInterface[],
  }