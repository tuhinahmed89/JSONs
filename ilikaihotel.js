
const hotel = {
	config: {
		live: true, // indicates if the schema is live on the website
		features: {
			pageSpecific: true, // if the schema is page-specific as opposed to a single global site-wide schema
			voiceSearch: true, // if the schema is optimized for voice search
			arrays: {
				restaurants: true, // if the schema includes restaurant data
				spas: true, // if the schema includes spa data
				healthClubs: true, // if the schema includes health club data
				rooms: true, // if the schema includes room data
				amenities: true // if the schema includes amenities data
			}
		}
	},

	// the exact name of the hotel
	// be sure to include any letter accents or special characters correctly
	name: "The Global Ambassador Hotel",

	// MUST be either "Hotel" or "Resort"
	type: "Hotel & Resort",

	// the website of the hotel
	// include 'https://' and any subdomain such as 'www' (if applicable)
	// must not end with a '/'
	homepage: "https://www.globalambassadorhotel.com",

	// slogan/motto/tagline of the hotel
	slogan: "Hotel • Restaurants • Wellness",

	// a brief description of the hotel
	description: "Step into a haven of elegance, where cosmopolitan style meets warm service and vibrant culinary experiences. Welcome to The Global Ambassador, a luxury hotel carefully curated for the most discerning travelers and set against the stunning backdrop of Arizona’s Camelback Mountain.",

	// if pets are allowed in the hotel or not
	petsAllowedTrueFalse: "true",

	// total number of rooms that are used as accommodations
	totalRoomCount: "141",

	// is either "$", "$$", "$$$", "$$$$". Pull this info from the official Google business listing
	priceRange: "$$$",

	// array of accepted currencies
	currenciesAccepted: ['USD'],

	// array of accepted payment methods
	paymentAccepted: ['Credit Card', 'Debit Card'],

	// array of languages spoken by the staff
	availableLanguage: ['English'],

	// based on 24 hours time. ex: 14:00
	checkInTime: "16:00",
	checkOutTime: "00:00",

	// rating
	rating: {
		value: 4.4,
		count: 104,
	},

	// contact
	contact: {

		// format: 1-234-567-8910
		phone: "1-480-800-2211",

		email: ""
	},
	
	// location
	location: {
		street: '4360 E Camelback Rd',
		city: 'Phoenix',
		state: 'AZ',
		zip: '85018',
		country: 'USA',
		lat: 33.5215, // latitude coordinates
		long: -111.9868 // longitude coordinates
	},

	// links
	logoUrl: "https://www.globalambassadorhotel.com/images/layout/site-logo-780.png",

	// this is required - every hotel must have a copyright or privacy link
	copyrightUrl: "https://www.globalambassadorhotel.com/privacy-policy",

	// social media URLs
	// no '/' at the end of the URL
	facebookUrl: "https://www.facebook.com/TheGlobalAmbassadorHotel",
	twitterUrl: "null",
	instagramUrl: "https://www.instagram.com/theglobalambassadorhotel",
	linkedinUrl: "null",

	// list of hotel amenities
	amenitiesArr: [
		
		{
			name: "The Spa",
			url: "https://www.globalambassadorhotel.com/health-and-wellness/the-spa",
		},
		{
			name: "Fitness & Pool",
			url: "https://www.globalambassadorhotel.com/health-and-wellness/pool-and-fitness",
		}
		
	],

	// list of hotel images
	imageArr: [
		{
			caption: "Immersed in culture & culinary inpiration",
			url: "https://www.globalambassadorhotel.com/images/content/dining/tiles/dine1.jpg"
		},
		{
			caption: "Immersed in culture & culinary inpiration",
			url: "https://www.globalambassadorhotel.com/images/content/dining/tiles/dine3.jpg"
		},
		{
			caption: "Immersed in culture & culinary inpiration",
			url: "https://www.globalambassadorhotel.com/images/content/dining/tiles/dine2.jpg"
		},
		{
			caption: "Immersed in culture & culinary inpiration",
			url: "https://www.globalambassadorhotel.com/images/content/dining/tiles/dine4.jpg"
		},
		{
			caption: "Immersed in culture & culinary inpiration",
			url: "https://www.globalambassadorhotel.com/images/content/dining/tiles/dine6.jpg"
		},
		{
			caption: "Immersed in culture & culinary inpiration",
			url: "https://www.globalambassadorhotel.com/images/content/dining/tiles/dine5.jpg"
		},
		{
			caption: "Inspiring the spirit of the traveler",
			url: "https://www.globalambassadorhotel.com/images/content/homepagealtrow/Riding_TGA_Lifestyle-38.jpg?06941032605970812"
		},
		{
			caption: "Rising to every occasion",
			url: "https://www.globalambassadorhotel.com/images/content/homepagealtrow/Riding_TGA_OpenHouse-90.jpg?06488751440949685"
		},
		{
			caption: "a new era of wellness begins here",
			url: "https://www.globalambassadorhotel.com/images/content/homepagealtrow/3-br.jpg?03459780893368509"
		},
		{
			caption: "our neighborhood",
			url: "https://www.globalambassadorhotel.com/images/content/homepagealtrow/Riding_TGA_OpenHouse-155.jpg?006747441450546221"
		}
		
	],

	// list of rooms
	roomsArr: [
	
		{
			type: "GuestRoom",
			name: "King",
			url: "https://www.globalambassadorhotel.com/rooms-and-suites/rooms",
			bookUrl: "https://www.globalambassadorhotel.com/rooms-and-suites/rooms",
			tourUrl: "",
			petsAllowedTrueOrFalse: "true",
			description: "Meticulous design and warm luxury are the hallmarks that create a haven of comfort and elegance. Featuring a comfort and elegance in our King Guest Room.",
			maxOccupancy: "4",
			checkInTime: "16:00",
			checkOutTime: "00:00",
			bedCount: "1",
			bedType: "King",
			smokingBoolean: "false",
			bathroomCount: "1",
			roomCount: "",
			
			images: [
				{
					caption: "King",
					url: "https://www.globalambassadorhotel.com/images/content/roomsinfo/2-all-rooms.jpg.jpg?030961835650130665"
				},
				{
					caption: "Bathroom Vanity",
					url: "https://www.globalambassadorhotel.com/images/content/photogallery/Bathroom.jpg?02640859933464863"
				},
				{
					caption: "Mirror",
					url: "https://www.globalambassadorhotel.com/images/content/photogallery/Mirror.jpg?06630503560621452"
				},
				{
					caption: "Room bed",
					url: "https://www.globalambassadorhotel.com/images/content/photogallery/room-bed.jpg?006182985991910539"
				},
				{
					caption: "Rug",
					url: "https://www.globalambassadorhotel.com/images/content/photogallery/room-rug.jpg?08153653035212307"
				},
				{
					caption: "Bathroom Counter",
					url: "https://www.globalambassadorhotel.com/images/content/photogallery/table-decorations.jpg?0614022352133339"
				},
				{
					caption: "Vanity",
					url: "https://www.globalambassadorhotel.com/images/content/photogallery/Vanity.jpg?035000004284384745"
				},
				{
					caption: "Room Chair",
					url: "https://www.globalambassadorhotel.com/images/content/photogallery/room-chair.jpeg?05178901512919472"
				},
				{
					caption: "Room Clock",
					url: "https://www.globalambassadorhotel.com/images/content/photogallery/room-clock.jpeg?04168353658088044"
				},
			],
			roomAmenitiesArr: [

				// In Room dining
				{
					name: "in-room dining",
					url: "https://www.globalambassadorhotel.com/rooms-and-suites/in-room-dining",
				},
			]
		},
		{
			type: "GuestRoom",
			name: "two queens",
			url: "https://www.globalambassadorhotel.com/rooms-and-suites/rooms",
			bookUrl: "https://www.globalambassadorhotel.com/rooms-and-suites/rooms",
			tourUrl: "",
			petsAllowedTrueOrFalse: "true",
			description: "Accept our warm welcome in the Two Queens Guest Room, with a charming Juliet balcony, writing desk, Waterworks bathroom fixtures and a curated collection of Maison Plage books. Designed for comfort and elegance, discover hand-selected art, a lavish in-room bar, Dyson Supersonic Hair Dryer, Frette bathrobe and Byredo Bal d’Afrique products.",
			maxOccupancy: "4",
			checkInTime: "16:00",
			checkOutTime: "00:00",
			bedCount: "2",
			bedType: "Queen",
			smokingBoolean: "false",
			bathroomCount: "1",
			roomCount: "",
			images: [
				{
					caption: "two queens",
					url: "https://www.globalambassadorhotel.com/images/content/roomsinfo/_twoqueens-copy.jpg?06154714514645772"
				},
				{
					caption: "Bathroom Vanity",
					url: "https://www.globalambassadorhotel.com/images/content/photogallery/Bathroom.jpg?02640859933464863"
				},
				{
					caption: "Mirror",
					url: "https://www.globalambassadorhotel.com/images/content/photogallery/Mirror.jpg?06630503560621452"
				},
				{
					caption: "Room bed",
					url: "https://www.globalambassadorhotel.com/images/content/photogallery/room-bed.jpg?006182985991910539"
				},
				{
					caption: "Rug",
					url: "https://www.globalambassadorhotel.com/images/content/photogallery/room-rug.jpg?08153653035212307"
				},
				{
					caption: "Bathroom Counter",
					url: "https://www.globalambassadorhotel.com/images/content/photogallery/table-decorations.jpg?0614022352133339"
				},
				{
					caption: "Vanity",
					url: "https://www.globalambassadorhotel.com/images/content/photogallery/Vanity.jpg?035000004284384745"
				},
				{
					caption: "Room Chair",
					url: "https://www.globalambassadorhotel.com/images/content/photogallery/room-chair.jpeg?05178901512919472"
				},
				{
					caption: "Room Clock",
					url: "https://www.globalambassadorhotel.com/images/content/photogallery/room-clock.jpeg?04168353658088044"
				},
			],
			roomAmenitiesArr: [

				// In Room dining
				{
					name: "in-room dining",
					url: "https://www.globalambassadorhotel.com/rooms-and-suites/in-room-dining",
				},
			]
		},
		{
			type: "GuestRoom",
			name: "camelback king",
			url: "https://www.globalambassadorhotel.com/rooms-and-suites/rooms",
			bookUrl: "https://www.globalambassadorhotel.com/rooms-and-suites/rooms",
			tourUrl: "",
			petsAllowedTrueOrFalse: "true",
			description: "Soak up captivating views of Camelback Mountain from this room, featuring a stylish King bed, Juliet balcony, writing desk and Waterworks bathroom fixtures along with a collection of Maison Plage books and hand-selected art pieces. Enjoy the luxury of a Dyson Supersonic Hair Dryer, a sumptuous Frette bathrobe and Byredo Bal d’Afrique products.": "2",
			checkInTime: "16:00",
			checkOutTime: "00:00",
			bedCount: "1",
			bedType: "King",
			smokingBoolean: "false",
			bathroomCount: "1",
			roomCount: "",
			images: [
				{
					caption: "camelback king",
					url: "https://www.globalambassadorhotel.com/images/content/roomsinfo/2-all-rooms.jpg.jpg?06673277692883823"
				},
				{
					caption: "Bathroom Vanity",
					url: "https://www.globalambassadorhotel.com/images/content/photogallery/Bathroom.jpg?02640859933464863"
				},
				{
					caption: "Mirror",
					url: "https://www.globalambassadorhotel.com/images/content/photogallery/Mirror.jpg?06630503560621452"
				},
				{
					caption: "Room bed",
					url: "https://www.globalambassadorhotel.com/images/content/photogallery/room-bed.jpg?006182985991910539"
				},
				{
					caption: "Rug",
					url: "https://www.globalambassadorhotel.com/images/content/photogallery/room-rug.jpg?08153653035212307"
				},
				{
					caption: "Bathroom Counter",
					url: "https://www.globalambassadorhotel.com/images/content/photogallery/table-decorations.jpg?0614022352133339"
				},
				{
					caption: "Vanity",
					url: "https://www.globalambassadorhotel.com/images/content/photogallery/Vanity.jpg?035000004284384745"
				},
				{
					caption: "Room Chair",
					url: "https://www.globalambassadorhotel.com/images/content/photogallery/room-chair.jpeg?05178901512919472"
				},
				{
					caption: "Room Clock",
					url: "https://www.globalambassadorhotel.com/images/content/photogallery/room-clock.jpeg?04168353658088044"
				},
			],
			roomAmenitiesArr: [

				// In Room dining
				{
					name: "in-room dining",
					url: "https://www.globalambassadorhotel.com/rooms-and-suites/in-room-dining",
				},
			]
		},
		{
			type: "Suite",
			name: "camelback two queens",
			url: "https://www.globalambassadorhotel.com/rooms-and-suites/rooms",
			bookUrl: "https://www.globalambassadorhotel.com/rooms-and-suites/rooms",
			tourUrl: "",
			petsAllowedTrueOrFalse: "true",
			description: "A stunning room in one of the most beautiful hotels in Phoenix, this retreat features two queen beds, a private Juliet balcony overlooking Camelback Mountain, writing desk, Waterworks bathroom features and hand-selected art. You’ll find a Dyson Supersonic Hair Dryer, a Frette bathrobe, a collection of books by Maison Plage, Byredo Bal d’Afrique products.",
			maxOccupancy: "4",
			checkInTime: "16:00",
			checkOutTime: "00:00",
			bedCount: "2",
			bedType: "Queen",
			smokingBoolean: "false",
			images: [
				{
					caption: "camelback two queens",
					url: "https://www.globalambassadorhotel.com/images/content/roomsinfo/_twoqueens-copy.jpg?09079908105073409"
				},
				{
					caption: "Bathroom Vanity",
					url: "https://www.globalambassadorhotel.com/images/content/photogallery/Bathroom.jpg?02640859933464863"
				},
				{
					caption: "Mirror",
					url: "https://www.globalambassadorhotel.com/images/content/photogallery/Mirror.jpg?06630503560621452"
				},
				{
					caption: "Room bed",
					url: "https://www.globalambassadorhotel.com/images/content/photogallery/room-bed.jpg?006182985991910539"
				},
				{
					caption: "Rug",
					url: "https://www.globalambassadorhotel.com/images/content/photogallery/room-rug.jpg?08153653035212307"
				},
				{
					caption: "Bathroom Counter",
					url: "https://www.globalambassadorhotel.com/images/content/photogallery/table-decorations.jpg?0614022352133339"
				},
				{
					caption: "Vanity",
					url: "https://www.globalambassadorhotel.com/images/content/photogallery/Vanity.jpg?035000004284384745"
				},
				{
					caption: "Room Chair",
					url: "https://www.globalambassadorhotel.com/images/content/photogallery/room-chair.jpeg?05178901512919472"
				},
				{
					caption: "Room Clock",
					url: "https://www.globalambassadorhotel.com/images/content/photogallery/room-clock.jpeg?04168353658088044"
				},
			],
			roomAmenitiesArr: [

				// In Room dining
				{
					name: "in-room dining",
					url: "https://www.globalambassadorhotel.com/rooms-and-suites/in-room-dining",
				},
			]
		},
		{
			type: "GuestRoom",
			name: "camelback king with balcony",
			url: "https://www.globalambassadorhotel.com/rooms-and-suites/rooms",
			bookUrl: "https://www.globalambassadorhotel.com/rooms-and-suites/rooms",
			tourUrl: "",
			petsAllowedTrueOrFalse: "true",
			description: "Treat yourself to sweeping Camelback Mountain views from your outdoor patio. Thoughtfully designed, this premium room features hand-picked art pieces and a curated collection of Maison Plage books, a writing desk, lavish in-room bar and Waterworks bathroom features, as well as a Frette bathrobe, Byredo Bal d’Afrique products and Dyson Supersonic Hair Dryer.",
			maxOccupancy: "2",
			checkInTime: "16:00",
			checkOutTime: "00:00",
			bedCount: "1",
			bedType: "King",
			smokingBoolean: "false",
			bathroomCount: "1",
			roomCount: "",
			images: [
				{
					caption: "camelback king with balcony",
					url: "https://www.globalambassadorhotel.com/images/content/roomsinfo/2-all-rooms.jpg.jpg?008061366868527453"
				},
				{
					caption: "Bathroom Vanity",
					url: "https://www.globalambassadorhotel.com/images/content/photogallery/Bathroom.jpg?02640859933464863"
				},
				{
					caption: "Mirror",
					url: "https://www.globalambassadorhotel.com/images/content/photogallery/Mirror.jpg?06630503560621452"
				},
				{
					caption: "Room bed",
					url: "https://www.globalambassadorhotel.com/images/content/photogallery/room-bed.jpg?006182985991910539"
				},
				{
					caption: "Rug",
					url: "https://www.globalambassadorhotel.com/images/content/photogallery/room-rug.jpg?08153653035212307"
				},
				{
					caption: "Bathroom Counter",
					url: "https://www.globalambassadorhotel.com/images/content/photogallery/table-decorations.jpg?0614022352133339"
				},
				{
					caption: "Vanity",
					url: "https://www.globalambassadorhotel.com/images/content/photogallery/Vanity.jpg?035000004284384745"
				},
				{
					caption: "Room Chair",
					url: "https://www.globalambassadorhotel.com/images/content/photogallery/room-chair.jpeg?05178901512919472"
				},
				{
					caption: "Room Clock",
					url: "https://www.globalambassadorhotel.com/images/content/photogallery/room-clock.jpeg?04168353658088044"
				},
			],
			roomAmenitiesArr: [

				// In Room dining
				{
					name: "in-room dining",
					url: "https://www.globalambassadorhotel.com/rooms-and-suites/in-room-dining",
				},
			]
		},
		{
			type: "GuestRoom",
			name: "pool view two queens",
			url: "https://www.globalambassadorhotel.com/rooms-and-suites/rooms",
			bookUrl: "https://www.globalambassadorhotel.com/rooms-and-suites/rooms",
			tourUrl: "",
			petsAllowedTrueOrFalse: "true",
			description: "With two queen beds and a view over the Pink Dolphin Pool, this luxury hotel room features a lavish in-room bar, collection of Maison Plage books and hand-selected art. A Juliet balcony, writing desk and Waterworks bathroom fixtures are accompanied by a Dyson Supersonic Hair Dryer, Frette bathrobe and Byredo Bal d’Afrique products.",
			maxOccupancy: "4",
			checkInTime: "16:00",
			checkOutTime: "00:00",
			bedCount: "2",
			bedType: "Queen",
			smokingBoolean: "false",
			bathroomCount: "1",
			roomCount: "",
			images: [
				{
					caption: "pool view two queens",
					url: "https://www.globalambassadorhotel.com/images/content/roomsinfo/_twoqueens-copy.jpg?008202366152150486"
				},
				{
					caption: "Bathroom Vanity",
					url: "https://www.globalambassadorhotel.com/images/content/photogallery/Bathroom.jpg?02640859933464863"
				},
				{
					caption: "Mirror",
					url: "https://www.globalambassadorhotel.com/images/content/photogallery/Mirror.jpg?06630503560621452"
				},
				{
					caption: "Room bed",
					url: "https://www.globalambassadorhotel.com/images/content/photogallery/room-bed.jpg?006182985991910539"
				},
				{
					caption: "Rug",
					url: "https://www.globalambassadorhotel.com/images/content/photogallery/room-rug.jpg?08153653035212307"
				},
				{
					caption: "Bathroom Counter",
					url: "https://www.globalambassadorhotel.com/images/content/photogallery/table-decorations.jpg?0614022352133339"
				},
				{
					caption: "Vanity",
					url: "https://www.globalambassadorhotel.com/images/content/photogallery/Vanity.jpg?035000004284384745"
				},
				{
					caption: "Room Chair",
					url: "https://www.globalambassadorhotel.com/images/content/photogallery/room-chair.jpeg?05178901512919472"
				},
				{
					caption: "Room Clock",
					url: "https://www.globalambassadorhotel.com/images/content/photogallery/room-clock.jpeg?04168353658088044"
				},
			],
			roomAmenitiesArr: [

				// In Room dining
				{
					name: "in-room dining",
					url: "https://www.globalambassadorhotel.com/rooms-and-suites/in-room-dining",
				},
			]
		},
		{
			"type": "Suite",
			"name": "pool view king",
			"url": "https://www.globalambassadorhotel.com/rooms-and-suites/rooms",
			"bookUrl": "https://www.globalambassadorhotel.com/rooms-and-suites/rooms",
			"tourUrl": "",
			"petsAllowedTrueOrFalse": true,
			"description": "Elevate your stay with a King bed and views of the gleaming Pink Dolphin Pool, alongside meticulously selected features. With a pretty Juliet balcony, writing desk, hand-picked art pieces and a wonderful in-room bar, sink into luxury with a Dyson Supersonic Hair Dryer, Frette bathrobe and Byredo Bal d’Afrique products.",
			"maxOccupancy": "2",
			"checkInTime": "16:00",
			"checkOutTime": "00:00",
			"bedCount": "2",
			"bedType": "King",
			"smokingBoolean": false,
			"images": [
				{
					"caption": "pool view king",
					"url": "https://www.globalambassadorhotel.com/images/content/roomsinfo/2-all-rooms.jpg.jpg?08784981557966307"
				},
				{
					"caption": "Bathroom Vanity",
					"url": "https://www.globalambassadorhotel.com/images/content/photogallery/Bathroom.jpg?02640859933464863"
				},
				{
					"caption": "Mirror",
					"url": "https://www.globalambassadorhotel.com/images/content/photogallery/Mirror.jpg?06630503560621452"
				},
				{
					"caption": "Room bed",
					"url": "https://www.globalambassadorhotel.com/images/content/photogallery/room-bed.jpg?006182985991910539"
				},
				{
					"caption": "Rug",
					"url": "https://www.globalambassadorhotel.com/images/content/photogallery/room-rug.jpg?08153653035212307"
				},
				{
					"caption": "Bathroom Counter",
					"url": "https://www.globalambassadorhotel.com/images/content/photogallery/table-decorations.jpg?0614022352133339"
				},
				{
					"caption": "Vanity",
					"url": "https://www.globalambassadorhotel.com/images/content/photogallery/Vanity.jpg?035000004284384745"
				},
				{
					"caption": "Room Chair",
					"url": "https://www.globalambassadorhotel.com/images/content/photogallery/room-chair.jpeg?05178901512919472"
				},
				{
					"caption": "Room Clock",
					"url": "https://www.globalambassadorhotel.com/images/content/photogallery/room-clock.jpeg?04168353658088044"
				},
			],
			"roomAmenitiesArr": [

				// In Room dining
				{
					"name": "in-room dining",
					"url": "https://www.globalambassadorhotel.com/rooms-and-suites/in-room-dining",
				},
			]
		},
		{
			"type": "Suite",
			"name": "petite camelback suite",
			"url": "https://www.globalambassadorhotel.com/rooms-and-suites/suites",
			"bookUrl": "https://www.globalambassadorhotel.com/rooms-and-suites/suites",
			"tourUrl": "",
			"petsAllowedTrueOrFalse": true,
			"description": "Discover a welcoming retreat that meets the highest standards of accessibility. The furnished outdoor patio offers Camelback Mountain views, there is a writing desk, open shower, double vanity and walk-in closet. This suite features hand-picked art and Maison Plage book collection, with an in-room bar, Dyson Supersonic Hair Dryer, and Frette bathrobe.",
			"maxOccupancy": "2",
			"checkInTime": "16:00",
			"checkOutTime": "00:00",
			"bedCount": "1",
			"bedType": "King",
			"smokingBoolean": false,
			"images": [
				{
					"caption": "petite camelback suite",
					"url": "https://www.globalambassadorhotel.com/images/content/roomsinfo/_bedroom-copy.jpg?047211471303220853"
				},
				{
					"caption": "Bathroom Vanity",
					"url": "https://www.globalambassadorhotel.com/images/content/photogallery/Bathroom.jpg?02640859933464863"
				},
				{
					"caption": "Mirror",
					"url": "https://www.globalambassadorhotel.com/images/content/photogallery/Mirror.jpg?06630503560621452"
				},
				{
					"caption": "Room bed",
					"url": "https://www.globalambassadorhotel.com/images/content/photogallery/room-bed.jpg?006182985991910539"
				},
				{
					"caption": "Rug",
					"url": "https://www.globalambassadorhotel.com/images/content/photogallery/room-rug.jpg?08153653035212307"
				},
				{
					"caption": "Bathroom Counter",
					"url": "https://www.globalambassadorhotel.com/images/content/photogallery/table-decorations.jpg?0614022352133339"
				},
				{
					"caption": "Vanity",
					"url": "https://www.globalambassadorhotel.com/images/content/photogallery/Vanity.jpg?035000004284384745"
				},
				{
					"caption": "Room Chair",
					"url": "https://www.globalambassadorhotel.com/images/content/photogallery/room-chair.jpeg?05178901512919472"
				},
				{
					"caption": "Room Clock",
					"url": "https://www.globalambassadorhotel.com/images/content/photogallery/room-clock.jpeg?04168353658088044"
				},
			],
			"roomAmenitiesArr": [

				// In Room dining
				{
					"name": "in-room dining",
					"url": "https://www.globalambassadorhotel.com/rooms-and-suites/in-room-dining",
				},
			]
		},
		{
			"type": "Suite",
			"name": "petite suite",
			"url": "https://www.globalambassadorhotel.com/rooms-and-suites/suites",
			"bookUrl": "https://www.globalambassadorhotel.com/rooms-and-suites/suites",
			"tourUrl": "",
			"petsAllowedTrueOrFalse": true,
			"description": "Step into an inviting space, with a king bed, furnished outdoor patio, writing desk and shower. With a double vanity and walk-in closet, you’ll also enjoy design elements, including the hand-picked art and collection of Maison Plage books, and the lavish in-room bar, Dyson Supersonic Hair Dryer, and Frette bathrobe.",
			"maxOccupancy": "2",
			"checkInTime": "16:00",
			"checkOutTime": "00:00",
			"bedCount": "1",
			"bedType": "King",
			"smokingBoolean": false,
			"images": [
				{
					"caption": "petite suite",
					"url": "https://www.globalambassadorhotel.com/images/content/roomsinfo/closet-copy.jpg?06915294156413945"
				},
				{
					"caption": "Bathroom Vanity",
					"url": "https://www.globalambassadorhotel.com/images/content/photogallery/Bathroom.jpg?02640859933464863"
				},
				{
					"caption": "Mirror",
					"url": "https://www.globalambassadorhotel.com/images/content/photogallery/Mirror.jpg?06630503560621452"
				},
				{
					"caption": "Room bed",
					"url": "https://www.globalambassadorhotel.com/images/content/photogallery/room-bed.jpg?006182985991910539"
				},
				{
					"caption": "Rug",
					"url": "https://www.globalambassadorhotel.com/images/content/photogallery/room-rug.jpg?08153653035212307"
				},
				{
					"caption": "Bathroom Counter",
					"url": "https://www.globalambassadorhotel.com/images/content/photogallery/table-decorations.jpg?0614022352133339"
				},
				{
					"caption": "Vanity",
					"url": "https://www.globalambassadorhotel.com/images/content/photogallery/Vanity.jpg?035000004284384745"
				},
				{
					"caption": "Room Chair",
					"url": "https://www.globalambassadorhotel.com/images/content/photogallery/room-chair.jpeg?05178901512919472"
				},
				{
					"caption": "Room Clock",
					"url": "https://www.globalambassadorhotel.com/images/content/photogallery/room-clock.jpeg?04168353658088044"
				},
			],
			"roomAmenitiesArr": [

				// In Room dining
				{
					"name": "in-room dining",
					"url": "https://www.globalambassadorhotel.com/rooms-and-suites/in-room-dining",
				},
			]
		},
		{
			"type": "Suite",
			"name": "studio suite",
			"url": "https://www.globalambassadorhotel.com/rooms-and-suites/suites",
			"bookUrl": "https://www.globalambassadorhotel.com/rooms-and-suites/suites",
			"tourUrl": "",
			"petsAllowedTrueOrFalse": true,
			"description": "Sophisticated with a welcoming ambience, this suite combines thoughtful art pieces and a charming patio. Along with the king bed, writing desk, walk-in closet, and dual vanities, there is an in-room bar and Waterworks bathroom fixtures, Byredo Bal d’Afrique products, a curated Maison Plage book collection, Dyson Supersonic Hair Dryer, and luxurious Frette bathrobe.",
			"maxOccupancy": "2",
			"checkInTime": "16:00",
			"checkOutTime": "00:00",
			"bedCount": "1",
			"bedType": "King",
			"smokingBoolean": false,
			"images": [
				{
					"caption": "studio suite",
					"url": "https://www.globalambassadorhotel.com/images/content/roomsinfo/_bedroom-petite.jpg?004689290704173432"
				},
				{
					"caption": "Bathroom Vanity",
					"url": "https://www.globalambassadorhotel.com/images/content/photogallery/Bathroom.jpg?02640859933464863"
				},
				{
					"caption": "Mirror",
					"url": "https://www.globalambassadorhotel.com/images/content/photogallery/Mirror.jpg?06630503560621452"
				},
				{
					"caption": "Room bed",
					"url": "https://www.globalambassadorhotel.com/images/content/photogallery/room-bed.jpg?006182985991910539"
				},
				{
					"caption": "Rug",
					"url": "https://www.globalambassadorhotel.com/images/content/photogallery/room-rug.jpg?08153653035212307"
				},
				{
					"caption": "Bathroom Counter",
					"url": "https://www.globalambassadorhotel.com/images/content/photogallery/table-decorations.jpg?0614022352133339"
				},
				{
					"caption": "Vanity",
					"url": "https://www.globalambassadorhotel.com/images/content/photogallery/Vanity.jpg?035000004284384745"
				},
				{
					"caption": "Room Chair",
					"url": "https://www.globalambassadorhotel.com/images/content/photogallery/room-chair.jpeg?05178901512919472"
				},
				{
					"caption": "Room Clock",
					"url": "https://www.globalambassadorhotel.com/images/content/photogallery/room-clock.jpeg?04168353658088044"
				},
			],
			"roomAmenitiesArr": [

				// In Room dining
				{
					"name": "in-room dining",
					"url": "https://www.globalambassadorhotel.com/rooms-and-suites/in-room-dining",
				},
			]
		},
		{
			"type": "Suite",
			"name": "camelback terrace suite",
			"url": "https://www.globalambassadorhotel.com/rooms-and-suites/suites",
			"bookUrl": "https://www.globalambassadorhotel.com/rooms-and-suites/suites",
			"tourUrl": "",
			"petsAllowedTrueOrFalse": true,
			"description": "Luxury meets incredible vistas in this sophisticated suite. Wake up to Camelback Mountain views from your king bed, enjoy the walk-in closet, freestanding bathtub and shower, double vanity and furnished patio. Hand-picked art and Maison Plage books add creative flair and there are Byredo Bal d’Afrique products, a Frette bathrobe and a Dyson Supersonic Hair Dryer.",
			"maxOccupancy": "2",
			"checkInTime": "16:00",
			"checkOutTime": "00:00",
			"bedCount": "1",
			"bedType": "King",
			"smokingBoolean": false,
			"images": [
				{
					"caption": "camelback terrace suite",
					"url": "https://www.globalambassadorhotel.com/images/content/roomsinfo/_BedroomTerrace.jpg?049487685816008975"
				},
				{
					"caption": "Bathroom Vanity",
					"url": "https://www.globalambassadorhotel.com/images/content/photogallery/Bathroom.jpg?02640859933464863"
				},
				{
					"caption": "Mirror",
					"url": "https://www.globalambassadorhotel.com/images/content/photogallery/Mirror.jpg?06630503560621452"
				},
				{
					"caption": "Room bed",
					"url": "https://www.globalambassadorhotel.com/images/content/photogallery/room-bed.jpg?006182985991910539"
				},
				{
					"caption": "Rug",
					"url": "https://www.globalambassadorhotel.com/images/content/photogallery/room-rug.jpg?08153653035212307"
				},
				{
					"caption": "Bathroom Counter",
					"url": "https://www.globalambassadorhotel.com/images/content/photogallery/table-decorations.jpg?0614022352133339"
				},
				{
					"caption": "Vanity",
					"url": "https://www.globalambassadorhotel.com/images/content/photogallery/Vanity.jpg?035000004284384745"
				},
				{
					"caption": "Room Chair",
					"url": "https://www.globalambassadorhotel.com/images/content/photogallery/room-chair.jpeg?05178901512919472"
				},
				{
					"caption": "Room Clock",
					"url": "https://www.globalambassadorhotel.com/images/content/photogallery/room-clock.jpeg?04168353658088044"
				},
			],
			"roomAmenitiesArr": [

				// In Room dining
				{
					"name": "in-room dining",
					"url": "https://www.globalambassadorhotel.com/rooms-and-suites/in-room-dining",
				},
			]
		},
		{
			"type": "Suite",
			"name": "terrace suite",
			"url": "https://www.globalambassadorhotel.com/rooms-and-suites/suites",
			"bookUrl": "https://www.globalambassadorhotel.com/rooms-and-suites/suites",
			"tourUrl": "",
			"petsAllowedTrueOrFalse": true,
			"description": "A luxurious suite that welcomes you into a haven of sophistication, this suite offers 800 square feet of perfection, with a king bed, walk-in closet, patio and freestanding bathtub and shower. With hand-picked artwork, Maison Plage books, you’ll also enjoy a Byredo Bal d’Afrique products, a Frette bathrobe and a Dyson Supersonic Hair Dryer.",
			"maxOccupancy": "2",
			"checkInTime": "16:00",
			"checkOutTime": "00:00",
			"bedCount": "1",
			"bedType": "King",
			"smokingBoolean": false,
			"images": [
				{
					"caption": "terrace suite",
					"url": "https://www.globalambassadorhotel.com/images/content/roomsinfo/bathroomterrace-copy_.jpg?08246895121505109"
				},
				{
					"caption": "Bathroom Vanity",
					"url": "https://www.globalambassadorhotel.com/images/content/photogallery/Bathroom.jpg?02640859933464863"
				},
				{
					"caption": "Mirror",
					"url": "https://www.globalambassadorhotel.com/images/content/photogallery/Mirror.jpg?06630503560621452"
				},
				{
					"caption": "Room bed",
					"url": "https://www.globalambassadorhotel.com/images/content/photogallery/room-bed.jpg?006182985991910539"
				},
				{
					"caption": "Rug",
					"url": "https://www.globalambassadorhotel.com/images/content/photogallery/room-rug.jpg?08153653035212307"
				},
				{
					"caption": "Bathroom Counter",
					"url": "https://www.globalambassadorhotel.com/images/content/photogallery/table-decorations.jpg?0614022352133339"
				},
				{
					"caption": "Vanity",
					"url": "https://www.globalambassadorhotel.com/images/content/photogallery/Vanity.jpg?035000004284384745"
				},
				{
					"caption": "Room Chair",
					"url": "https://www.globalambassadorhotel.com/images/content/photogallery/room-chair.jpeg?05178901512919472"
				},
				{
					"caption": "Room Clock",
					"url": "https://www.globalambassadorhotel.com/images/content/photogallery/room-clock.jpeg?04168353658088044"
				},
			],
			"roomAmenitiesArr": [

				// In Room dining
				{
					"name": "in-room dining",
					"url": "https://www.globalambassadorhotel.com/rooms-and-suites/in-room-dining",
				},
			]
		},
		{
			"type": "Suite",
			"name": "one bedroom camelback suite",
			"url": "https://www.globalambassadorhotel.com/rooms-and-suites/suites",
			"bookUrl": "https://www.globalambassadorhotel.com/rooms-and-suites/suites",
			"tourUrl": "",
			"petsAllowedTrueOrFalse": true,
			"description": "Wake up to spectacular views of the Camelback Mountain from your king bedroom. Enjoy the open living room with a powder room, walk-in closet, and furnished patio. Amenities also include a freestanding bathtub and shower, Byredo Bal d’Afrique products, a Frette bathrobe and a Dyson Supersonic Hair Dryer, along with Maison Plage books and hand-picked art pieces.",
			"maxOccupancy": "2",
			"checkInTime": "16:00",
			"checkOutTime": "00:00",
			"bedCount": "1",
			"bedType": "King",
			"smokingBoolean": false,
			"images": [
				{
					"caption": "one bedroom camelback suite",
					"url": "https://www.globalambassadorhotel.com/images/content/roomsinfo/_OneBedroom.jpg?04682971312589288"
				},
				{
					"caption": "Bathroom Vanity",
					"url": "https://www.globalambassadorhotel.com/images/content/photogallery/Bathroom.jpg?02640859933464863"
				},
				{
					"caption": "Mirror",
					"url": "https://www.globalambassadorhotel.com/images/content/photogallery/Mirror.jpg?06630503560621452"
				},
				{
					"caption": "Room bed",
					"url": "https://www.globalambassadorhotel.com/images/content/photogallery/room-bed.jpg?006182985991910539"
				},
				{
					"caption": "Rug",
					"url": "https://www.globalambassadorhotel.com/images/content/photogallery/room-rug.jpg?08153653035212307"
				},
				{
					"caption": "Bathroom Counter",
					"url": "https://www.globalambassadorhotel.com/images/content/photogallery/table-decorations.jpg?0614022352133339"
				},
				{
					"caption": "Vanity",
					"url": "https://www.globalambassadorhotel.com/images/content/photogallery/Vanity.jpg?035000004284384745"
				},
				{
					"caption": "Room Chair",
					"url": "https://www.globalambassadorhotel.com/images/content/photogallery/room-chair.jpeg?05178901512919472"
				},
				{
					"caption": "Room Clock",
					"url": "https://www.globalambassadorhotel.com/images/content/photogallery/room-clock.jpeg?04168353658088044"
				},
			],
			"roomAmenitiesArr": [

				// In Room dining
				{
					"name": "in-room dining",
					"url": "https://www.globalambassadorhotel.com/rooms-and-suites/in-room-dining",
				},
			]
		},
		{
			"type": "Suite",
			"name": "one bedroom suite",
			"url": "https://www.globalambassadorhotel.com/rooms-and-suites/suites",
			"bookUrl": "https://www.globalambassadorhotel.com/rooms-and-suites/suites",
			"tourUrl": "",
			"petsAllowedTrueOrFalse": true,
			"description": "Envelop yourself in thoughtful design with this 900 square feet suite. The separate king bedroom and open living room with powder room create a home away from home with a freestanding bath and shower, walk-in closet and furnished patio. There is also an in-room bar and hand-picked art pieces, a luxurious Frette bathrobe and Byredo Bal d’Afrique products.",
			"maxOccupancy": "2",
			"checkInTime": "16:00",
			"checkOutTime": "00:00",
			"bedCount": "1",
			"bedType": "King",
			"smokingBoolean": false,
			"images": [
				{
					"caption": "one bedroom suite",
					"url": "https://www.globalambassadorhotel.com/images/content/roomsinfo/livingroom-copy.jpg?03679424615432654"
				},
				{
					"caption": "Bathroom Vanity",
					"url": "https://www.globalambassadorhotel.com/images/content/photogallery/Bathroom.jpg?02640859933464863"
				},
				{
					"caption": "Mirror",
					"url": "https://www.globalambassadorhotel.com/images/content/photogallery/Mirror.jpg?06630503560621452"
				},
				{
					"caption": "Room bed",
					"url": "https://www.globalambassadorhotel.com/images/content/photogallery/room-bed.jpg?006182985991910539"
				},
				{
					"caption": "Rug",
					"url": "https://www.globalambassadorhotel.com/images/content/photogallery/room-rug.jpg?08153653035212307"
				},
				{
					"caption": "Bathroom Counter",
					"url": "https://www.globalambassadorhotel.com/images/content/photogallery/table-decorations.jpg?0614022352133339"
				},
				{
					"caption": "Vanity",
					"url": "https://www.globalambassadorhotel.com/images/content/photogallery/Vanity.jpg?035000004284384745"
				},
				{
					"caption": "Room Chair",
					"url": "https://www.globalambassadorhotel.com/images/content/photogallery/room-chair.jpeg?05178901512919472"
				},
				{
					"caption": "Room Clock",
					"url": "https://www.globalambassadorhotel.com/images/content/photogallery/room-clock.jpeg?04168353658088044"
				},
			],
			"roomAmenitiesArr": [

				// In Room dining
				{
					"name": "in-room dining",
					"url": "https://www.globalambassadorhotel.com/rooms-and-suites/in-room-dining",
				},
			]
		},
		{
			"type": "Suite",
			"name": "Presidential",
			"url": "https://www.globalambassadorhotel.com/rooms-and-suites/suites",
			"bookUrl": "https://www.globalambassadorhotel.com/rooms-and-suites/suites",
			"tourUrl": "",
			"petsAllowedTrueOrFalse": true,
			"description": "Expanding over 2,000 feet, this sumptuous suite offers unforgettable views of Camelback Mountain and the Phoenix Mountain Preserve. It comes with two furnished patios, a full bar, dining room for entertaining, separate bedroom, powder room and a butler’s pantry. This is where lavish comfort meets effortless sophistication, with the option of connecting a Two Queens Suite.",
			"maxOccupancy": "2",
			"checkInTime": "16:00",
			"checkOutTime": "00:00",
			"bedCount": "1",
			"bedType": "King",
			"smokingBoolean": false,
			"images": [
				{
					"caption": "Presidential",
					"url": "https://www.globalambassadorhotel.com/images/content/roomsinfo/2-all-rooms.jpg.jpg?022089862526375859"
				},
				{
					"caption": "Bathroom Vanity",
					"url": "https://www.globalambassadorhotel.com/images/content/photogallery/Bathroom.jpg?02640859933464863"
				},
				{
					"caption": "Mirror",
					"url": "https://www.globalambassadorhotel.com/images/content/photogallery/Mirror.jpg?06630503560621452"
				},
				{
					"caption": "Room bed",
					"url": "https://www.globalambassadorhotel.com/images/content/photogallery/room-bed.jpg?006182985991910539"
				},
				{
					"caption": "Rug",
					"url": "https://www.globalambassadorhotel.com/images/content/photogallery/room-rug.jpg?08153653035212307"
				},
				{
					"caption": "Bathroom Counter",
					"url": "https://www.globalambassadorhotel.com/images/content/photogallery/table-decorations.jpg?0614022352133339"
				},
				{
					"caption": "Vanity",
					"url": "https://www.globalambassadorhotel.com/images/content/photogallery/Vanity.jpg?035000004284384745"
				},
				{
					"caption": "Room Chair",
					"url": "https://www.globalambassadorhotel.com/images/content/photogallery/room-chair.jpeg?05178901512919472"
				},
				{
					"caption": "Room Clock",
					"url": "https://www.globalambassadorhotel.com/images/content/photogallery/room-clock.jpeg?04168353658088044"
				},
			],
			"roomAmenitiesArr": [

				// In Room dining
				{
					"name": "in-room dining",
					"url": "https://www.globalambassadorhotel.com/rooms-and-suites/in-room-dining",
				},
			]
		},
	],

	// list of restaurants at the hotel
	restaurants: [
		
		{
			
			name: "Pesca Waikiki Beach",
			url: "https://www.ilikaihotel.com/dining/",
			description: "Relax at the edge of Waikiki Beach as you indulge in authentic Mediterranean fare at Pesca Waikiki Beach. Located on the top two floors of the Ilikai Hotel & Luxury Suites, the award-winning restaurant serves a world-class, fine dining menu with unparalleled views of the sea, sky, mountains and city.",

			// the URL of the menu (can be a PDF if applicable)
			menuUrl: "https://www.pescawaikikibeach.com/menu",

			// is either "$", "$$", "$$$", "$$$$". Pull this info from the official Google business listing
			priceRange: "$$$",

			// contact
			contact: {

				phone: "1‑808-777-3100", // format: x-xxx-xxx-xxxx
				email: "info@pescasea.com"
				
			},
			
			// location
			location: {
				street: "1777 Ala Moana Blvd, Sky Floor",
				city: "Honolulu",
				state: "Hi", // 2 letter state code
				zip: "96815",
				country: "USA" ,  
			},
			
			// rating
			rating: {
				value: 3.8,
				count: 322
			},

			// openingHours
			openingHours: [],
			servesCuisine: []
			
		},
		{
			
			name: "Paradise Poke",
			url: "https://www.ilikaihotel.com/dining/",
			description: "Paradise Poke was born from a fisherman’s family wanting to provide the community with fresh, locally sourced fish. This island-style poke spot serves up some of the best Hawaiian poke while sustainably supporting Hawaii’s fishing industry. Just show them your Ilikai Hotel & Luxury Suites room card and receive a 10% discount!",

			// the URL of the menu (can be a PDF if applicable)
			menuUrl: "https://paradisepokenuuanu.com/menu/",

			// is either "$", "$$", "$$$", "$$$$". Pull this info from the official Google business listing
			priceRange: "$$$",

			// contact
			contact: {

				phone: "1‑808-207-3129", // format: x-xxx-xxx-xxxx
				email: "paradisepokehi@gmail.com"
				
			},
			
			// location
			location: {
				street: "1613 Nuuanu Ave #A12",
				city: "Honolulu",
				state: "Hi", // 2 letter state code
				zip: "96817",
				country: "USA" ,  
			},
			
			// rating
			rating: {
				value: 4.7,
				count: 93,
			},

			// openingHours
			openingHours: [],
			servesCuisine: []
			
		}
		{
			
			name: "Hawaiian Aroma Caffé",
			url: "https://www.ilikaihotel.com/dining/",
			description: "Relax and enjoy authentic, high-quality, Italian and Hawaiian coffee at Hawaiian Aroma Caffé located right in our courtyard. Sip premium blend coffees and espresso roasts, or choose from their full line of specialty teas. Hawaiian Aroma Caffé also offers a delicious menu that includes waffles, acai bowls, and panini sandwiches.",

			// the URL of the menu (can be a PDF if applicable)
			menuUrl: "https://www.hawaiianaromacaffe.com/menu",

			// is either "$", "$$", "$$$", "$$$$". Pull this info from the official Google business listing
			priceRange: "$$$",

			// contact
			contact: {

				phone: "1‑808-942-7662", // format: x-xxx-xxx-xxxx
				email: "info@hawaiianaromacaffe.com"
				
			},
			
			// location
			location: {
				street: "1777 Ala Moana Blvd.",
				city: "Honolulu",
				state: "Hi", // 2 letter state code
				zip: "96815",
				country: "USA" ,  

			},
			
			// rating
			rating: {
				value: 3.9,
				count: 167,
			},

			// openingHours
			openingHours: [],
			servesCuisine: []
			
		}
		{
			
			name: "Dave’s Hawaiian Ice Cream",
			url: "https://www.ilikaihotel.com/dining/",
			description: "Indulge in delightful decadence at Dave’s Hawaiian Ice Cream, a cherished institution that has been lavishing guests with its popular scoops for over three decades. Skillfully crafted on Oahu, each of their 50-plus ice cream flavors is a testament to their commitment to freshness and quality. Their exclusive concoctions include the ever-popular Hawaiian mud pie, subtle sophisticated green tea, and tangy tropical pineapple and mango.",

			// the URL of the menu (can be a PDF if applicable)
			menuUrl: "https://www.hawaiianaromacaffe.com/menu",

			// is either "$", "$$", "$$$", "$$$$". Pull this info from the official Google business listing
			priceRange: "$$$",

			// contact
			contact: {

				phone: "1‑808-425-4496", // format: x-xxx-xxx-xxxx
				email: "info@hawaiianaromacaffe.com"
				
			},
			
			// location
			location: {
				street: "1777 Ala Moana Blvd.",
				city: "Honolulu",
				state: "Hi", // 2 letter state code
				zip: "96815",
				country: "USA" ,  

			},
			
			// rating
			rating: {
				value: 4.5,
				count: 200,
			},

			// openingHours
			openingHours: [],
			servesCuisine: []
			
		}
	],

	// list of spas at the hotel
	spas: [
		
		{
			name: "",
			url: "",
			description: "",
		}
		
	],

	// list of health clubs at the hotel
	healthClubs: [
		
		{
			name: "",
			url: "",
			description: "",
		}
		
	],

	reviews: [
		{
			author: "Ramesh D Foodie", // name of the reviewer
			value: "5", // be sure to only include 5 star reviews -> so the value should always be 5
			datePublished: "2024-03-20",
			reviewed: {

				// Tuhin, set the 'type' to 'VacationRental' for all for now
				type: "VacationRental", // expected: 'VacationRental' (can add more functionality later)

				// Tuhin, leave the 'name' empty for now for any reviews
				name: ""
			}
		},
		{
			author: "Abdul Rahman", // name of the reviewer
			value: "5", // be sure to only include 5 star reviews -> so the value should always be 5
			datePublished: "2024-03-05",
			reviewed: {

				// Tuhin, set the 'type' to 'VacationRental' for all for now
				type: "VacationRental", // expected: 'VacationRental' (can add more functionality later)

				// Tuhin, leave the 'name' empty for now for any reviews
				name: ""
			}
		}
	]
	
}
