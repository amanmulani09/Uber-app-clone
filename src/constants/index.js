
export const SuggestionsData = [
    {
        id:'1',
        isPromo:true,
        imageSrc:require('../assets/car.png'),
        footerText:'Trip',
        navigatePath:'Services' 
    },
    {
        id:'2',
        isPromo:false,
        imageSrc:require('../assets/intercity.png'),
        footerText:'Intercity',
        navigatePath:'Home'
    },
    {
        id:'3',
        isPromo:true,
        imageSrc:require('../assets/Rentals.png'),
        footerText:'Rentals',
        navigatePath:'Activity'
    },
    {
        id:'4',
        isPromo:false,
        imageSrc:require('../assets/Package.png'),
        footerText:'Package',
        navigatePath:'Account'
    }
];
export const homeSliderData = [

    {
        id:"1",
        title:"You have multiple promos",
        ctaText:"Terms Apply",
        sideImgSrc:require('../assets/promo.jpeg'),
        navigationPath:"Promos",
        cardThemes:{
            bg:'#006a50',
            color:'white'
        }
    },
    {
        id:"2",
        title:"Uber Moto-go your way",
        ctaText:"Try now",
        sideImgSrc:require('../assets/ubermoto.jpeg'),
        navigationPath:"Location",
        cardThemes:{
            bg:'yellow',
            color:'black'
        }
    },
    {
        id:"3",
        title:"Ready? Then let's roll.",
        ctaText:"Ride with Uber",
        sideImgSrc:require('../assets/ridewithuber.jpeg'),
        navigatePath:"Location",
        cardThemes:{
            bg:'red',
            color:'white'
        }
    }
]

// service section data 
export const servicesData = [

    {
        id:'1',
        isPromo:true,
        imageSrc:require('../assets/Rentals.png'),
        footerText:'Rentals',
        navigatePath:'Activity'
    },
    {
        id:'2',
        isPromo:false,
        imageSrc:require('../assets/Package.png'),
        footerText:'Package',
        navigatePath:'Account'
    },
    {
        id:'3',
        isPromo:false,
        imageSrc:require('../assets/group.png'),
        footerText:'Group ride',
        navigatePath:'Account'
    },
    {
        id:'4',
        isPromo:false,
        imageSrc:require('../assets/booking.png'),
        footerText:'Reserve',
        navigatePath:'Account'
    }
];
export const servicesHeroData = [

    {
        id:'1',
        isPromo:true,
        imageSrc:require('../assets/car.png'),
        footerText:'Trip',
        navigatePath:'Services' 
    },
    {
        id:'2',
        isPromo:false,
        imageSrc:require('../assets/intercity.png'),
        footerText:'Intercity',
        navigatePath:'Home'
    },
];


// activity section data 

export const recentActivityCard = {
    id:'1',
    imageSrc:require(''),
    tripDate:'20 Jan',
    tripTime:'2:25 pm',
    tripFees:124.00,
    ctaActions:[
        {
            icon:require(''),
            ctaText:'Rate',
            navigatePath:'rate'
        },
        {
            icon:require(''),
            ctaText:'Rebook',
            navigatePath:'Rebook'
        }
    ]
};

export const tripesData = [
    {
        id:'1',
        tripVehicleType:'auto',
        tripDestination:'Velotio Technologies Pvt Ltd.',
        tripTime: '20 Jan . 10:33 am',
        isCancelled:true
    }
]