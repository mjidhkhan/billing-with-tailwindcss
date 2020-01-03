  let data= ()=>{
    return {
      popularDestinations: [
        {
          city: 'Toronto',
          averagePrice: 120,
          propertyCount: 76,
          imageUrl: '/img/toronto.jpg',
          imageAlt: 'Toronto skyline',
        },
        {
          city: 'Malibu',
          averagePrice: 215,
          propertyCount: 43,
          imageUrl: '/img/malibu.jpg',
          imageAlt: 'Cliff in Malibu',
        },
        {
          city: 'Chicago',
          averagePrice: 130,
          propertyCount: 115,
          imageUrl: '/img/chicago.jpg',
          imageAlt: 'Chicago skyline',
        },
        {
          city: 'Seattle',
          averagePrice: 135,
          propertyCount: 63,
          imageUrl: '/img/seattle.jpg',
          imageAlt: 'Seattle skyline',
        },
        {
          city: 'Colorado',
          averagePrice: 85,
          propertyCount: 47,
          imageUrl: '/img/colorado.jpg',
          imageAlt: 'Lake in Colorado',
        },
        {
          city: 'Miami',
          averagePrice: 115,
          propertyCount: 86,
          imageUrl: '/img/miami.jpg',
          imageAlt: 'Beach in Miami',
        },
      ],
      popularProperties: [
        {
          id: 1,
          imageUrl: 'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
          imageAlt: 'Modern home in city center',
          beds: 3,
          baths: 2,
          title: "Modern home in city center",
          priceInCents: 190000,
          formattedPrice: "$1,900.00",
          reviewCount: 60,
          rating: 4,
        },
        {
          id: 2,
          imageUrl: 'https://images.unsplash.com/photo-1564013799919-ab600027ffc6?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60',
          imageAlt: 'Modern home in city center',
          beds: 3,
          baths: 2,
          title: "Modern home in city center",
          priceInCents: 220000,
          formattedPrice: "$2,200.00",
          reviewCount: 80,
          rating: 4,
        },
        {
          id: 3,
          imageUrl: 'https://images.unsplash.com/photo-1475855581690-80accde3ae2b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60',
          imageAlt: 'Modern home in country side',
          beds: 3,
          baths: 2,
          title: "Modern home in country side",
          priceInCents: 130000,
          formattedPrice: "$1,300.00",
          reviewCount: 40,
          rating: 4,
        },
        {
          id: 4,
          imageUrl: 'https://images.unsplash.com/photo-1480074568708-e7b720bb3f09?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60',
          imageAlt: 'Modern home in natural resort',
          beds: 3,
          baths: 2,
          title: "Modern home in natural resort",
          priceInCents: 140000,
          formattedPrice: "$1,300.00",
          reviewCount: 34,
          rating: 3,
        }
      ],
      popularReviews: [
        {
          id: 1,
          property: 'Modern home in city center',
          imageUrl: 'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
          text: 'Modern home in city center',
          reviewCount: 35,
          rating: 4,
        },
        {
          id: 2,
          property: 'Modern home in town',
          imageUrl: 'https://images.unsplash.com/photo-1564013799919-ab600027ffc6?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60',
          text: 'Modern home in city center',
          reviewCount: 39,
          rating: 4,
          
        },
        {
          id: 3,
           property: 'Modern home in country side',
          imageUrl: 'https://images.unsplash.com/photo-1475855581690-80accde3ae2b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60',
          text: 'Modern home in country side',
          reviewCount: 34,
          rating: 3,
          
        },
        {
          id: 4,
          property: 'Modern home in natural resort',
          imageUrl: 'https://images.unsplash.com/photo-1480074568708-e7b720bb3f09?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60',
          text: 'Modern home in natural resort',
          reviewCount: 34,
          rating: 3,
         
        }
      ],
    }
  }


var PropertyData= data()
  export default {
    PropertyData,
}

