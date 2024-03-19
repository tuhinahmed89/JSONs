export default {
	name: 'ESPACIO The Jewel of Waikiki', // official name of the hotel // string
	type: 'Hotel', // must be either 'Hotel' or 'Resort' // string
	homepage: 'https://www.espaciowaikiki.com', // url of the homepage of the hotel // url
	slogan: 'Sanctuary in the City', // slogan or tagline of the hotel // string
	description: 'ESPACIO The Jewel of Waikiki is an Omotenashi-inspired ultra-luxury hotel on Waikiki Beach with nine suites on nine floors. It is the only hotel in Hawaii to be awarded the prestigious Forbes five-star ratings for the hotel and its onsite fine dining restaurant, Mugen, the AAA five diamond designation, and to be named Condé Nast Travelers’ #1 hotel in Hawaii.', // string

	petsAllowedTrueFalse: 'false', // must be either 'true' or 'false' // boolean
	totalRoomCount: 9, // total numbers of bookable rooms // number
	priceRange: '$$$$', // must be either '$', '$$', '$$$', or '$$$$' // string
	amenitiesArr: [
		{
			name: 'Round-trip luxury airport transportation',
			url: 'https://www.espaciowaikiki.com/experience',
		},
		{
			name: 'Exclusive car service within Waikiki',
			url: 'https://www.espaciowaikiki.com/experience',
		},
		{
			name: 'Car rental',
			url: 'https://www.espaciowaikiki.com/experience',
		},
		{
			name: 'Daily continental breakfast at Mugen',
			url: 'https://www.espaciowaikiki.com/experience',
		},
		{
			name: '$100 dining credit for Mugen',
			url: 'https://www.espaciowaikiki.com/experience',
		},
		{
			name: 'Private Chef Experience',
			url: 'https://www.espaciowaikiki.com/private-chef-experience',
		},
		{
			name: 'Butler services',
			url: 'https://www.espaciowaikiki.com/experience',
		},
		{
			name: 'Concierge services',
			url: 'https://www.espaciowaikiki.com/experience',
		},
		{
			name: 'Poolside refreshment service',
			url: 'https://www.espaciowaikiki.com/experience',
		},
		{
			name: 'Rooftop infinity swimming pool, whirlpool, and sundeck',
			url: 'https://www.espaciowaikiki.com/experience',
		},
		{
			name: 'Gourmet rooftop barbecue station',
			url: 'https://www.espaciowaikiki.com/experience',
		},
		{
			name: 'The ESPACIO Spa',
			url: 'https://www.espaciowaikiki.com/experience',
		},
		{
			name: 'Grocery delivery',
			url: 'https://www.espaciowaikiki.com/experience',
		},
		{
			name: 'Use of beach towels, chairs, and umbrellas',
			url: 'https://www.espaciowaikiki.com/experience',
		},
		{
			name: 'In-suite dining',
			url: 'https://www.espaciowaikiki.com/experience',
		},
		{
			name: 'WiFi internet access throughout hotel',
			url: 'https://www.espaciowaikiki.com/experience',
		},
		{
			name: 'Smoke-free property',
			url: 'https://www.espaciowaikiki.com/experience',
		},
		{
			name: 'Complimentary admission to Bishop Museum and Honolulu Museum of Art',
			url: 'https://www.espaciowaikiki.com/experience',
		},
		{
			name: 'Accessibility',
			url: 'https://www.espaciowaikiki.com/experience/#accessibility',
		}
	],
	roomGroupsArr: [
		{
			roomType: 'Penthouse Diamond Suite', // room name/type // string
			numberOfRooms: 1, // total number of rooms for this item // number
		},
		{
			roomType: 'Oceanfront Suites',
			numberOfRooms: 2,
		},
		{
			roomType: 'Ocean View Suites',
			numberOfRooms: 3,
		},
		{
			roomType: 'Beach View Suites',
			numberOfRooms: 3,
		}
	],
	paymentAccepted: ['Credit Card', 'Debit Card'], // array of payment methods accepted // array
	availableLanguage: ['English', 'Japanese', 'Korean', 'Filipino', 'Chinese'], // array of languages spoken by the hotel staff // array
	checkInTime: '16:00', // datetime
	checkOutTime: '11:00', // datetime
	imageArr: [
		{
			caption: 'The front entrance to ESPACIO The Jewel of Waikiki',
			url: 'https://www.espaciowaikiki.com/wp-content/uploads/2023/07/exterior-lobby-01.jpg',
		},
		{
			caption: 'The front entrance to ESPACIO The Jewel of Waikiki',
			url: 'https://www.espaciowaikiki.com/wp-content/uploads/2021/07/espacio-the-jewel-of-waikiki-livewall-entrance-890x593-1.jpg',
		},
		{
			caption: 'Rooftop view overlooking Waikiki Beach',
			url: 'https://www.espaciowaikiki.com/wp-content/uploads/2023/07/exterior-lobby-05.jpg ',
		},
		{
			caption: 'ESPACIO rooftop deck at sunset',
			url: 'https://www.espaciowaikiki.com/wp-content/uploads/2021/07/exterior-lobby-07.jpg',
		},
		{
			caption: 'Spacious living room',
			url: 'https://www.espaciowaikiki.com/wp-content/uploads/2021/06/ESPACIO-suite-living-room-sapphire-890x593-1.jpg',
		},
		{
			caption: 'furnished balcony',
			url: 'https://www.espaciowaikiki.com/wp-content/uploads/2021/06/ESPACIO-suite-balcony-seating-890x593-1.jpg',
		},
		{
			caption: 'In-suite dry sauna.',
			url: 'https://www.espaciowaikiki.com/wp-content/uploads/2023/07/suites-03.jpg',
		},
		{
			caption: 'private balcony',
			url: 'https://www.espaciowaikiki.com/wp-content/uploads/2023/07/suites-04.jpg',
		},
		{
			caption: 'in-suite dining',
			url: 'https://www.espaciowaikiki.com/wp-content/uploads/2023/07/suites-07.jpg',
		},
		{
			caption: 'Avocado Toast at Mugen',
			url: 'http://www.espaciowaikiki.com/wp-content/uploads/2023/09/Mugen-Avocado-Toast.jpg',
		},
		{
			caption: 'Lobster Eggs Benedict',
			url: 'http://www.espaciowaikiki.com/wp-content/uploads/2023/09/Mugen-Lobster-Eggs-Benedict-800x533-1.jpg',
		}
	],
	logoUrl: 'https://www.espaciowaikiki.com/app/images/logo-primary.svg', // url of the logo of the hotel (pulled from the website homepage) // url
	copyrightUrl: 'https://www.aquaaston.com/about-us/terms-of-use', // primary url of the terms/conditions/copyright information
	facebookUrl: 'https://www.facebook.com/espaciowaikiki', // url of the facebook page of the hotel // url
	twitterUrl: 'https://twitter.com/espaciowaikiki', // url of the twitter page of the hotel // url
	instagramUrl: 'https://www.instagram.com/espaciowaikiki', // url of the instagram page of the hotel // url
	linkedinUrl: 'https://www.linkedin.com/showcase/espacio-waikiki/about/', // url of the linkedin page of the hotel // url
	contact: {
		phone: '1.808.377.2246', // main phone number of the hotel // string
		email: 'espaciores@espaciowaikiki.com', // main email address of the hotel // string
	},
	location: {
		street: '2452 Kalakaua Avenue', // street address of the hotel // string
		city: 'Honolulu', // city of the hotel // string
		state: 'HI', // state of the hotel (2 letter abbreviation) // string
		zip: '96815', // zip code of the hotel // string
		country: 'USA', // country of the hotel (2-3 letter abbreviation) // string
	},
	rating: {
		value: 4.5, // average rating value of the hotel // number
		count: 50, // total number of ratings // number
	},
	roomsArr: [
		{
			type: 'Suite', // string -> HotelRoom or Suite
			name: 'Penthouse Diamond Suite', // string
			url: 'https://www.espaciowaikiki.com/luxury-suites/penthouse-suite', // url
			bookUrl: 'https://be.synxis.com/?_gl=1*14vla6b*_ga*ODg4NDE1MTA1LjE3MTA2MjU2MTk.*_ga_LB2BH67VHZ*MTcxMDgwMDMwNi42LjAuMTcxMDgwMDMwNi4wLjAuMA..&adult=1&arrive=2024-03-19&chain=24447&child=0&currency=USD&depart=2024-03-22&hotel=40404&level=hotel&locale=en-US&rooms=1&src=AWB.reserve.nav', // url
			tourUrl: 'https://www.espaciowaikiki.com/take-a-virtual-tour/', // url where a guest can tour or book a tour to the room // url
			petsAllowedTrueOrFalse: 'false', // boolean
			description: 'With breathtaking panoramic views, the luxurious oceanfront Diamond Penthouse Suite at ESPACIO provides the ultimate world-class experience. Indulge in the exclusive bespoke amenities and curated experiences provided for penthouse guests only.', // string
			maxOccupancy: 6, // number
			checkInTime: '16:00', // datetime
			checkOutTime: '11:00', // datetime
			bedCount: 3, // number
			bedType: 'King Beds + Sofa Bed', // string
			smokingBoolean: false, // boolean
			images: [
				{
					caption: 'Penthouse Diamond Suite balcony with panoramic ocean views', // string
					url: 'https://www.espaciowaikiki.com/wp-content/uploads/2023/08/pent3.jpg', // url
				},
				{
					caption: 'Epic views from the Penthouse Diamond Suite master bedroom', // string
					url: 'https://www.espaciowaikiki.com/wp-content/uploads/2019/12/hero-2bph.jpg', // url
				}
			],
			roomAmenitiesArr: [

				{
					name: 'Round-trip luxury airport transportation', // string
					url: 'https://www.espaciowaikiki.com/luxury-suites/penthouse-suite', // url
				},
				{
					name: 'Exclusive car service within Waikiki',
					url: 'https://www.espaciowaikiki.com/luxury-suites/penthouse-suite',
				},
				{
					name: 'Car rental',
					url: 'https://www.espaciowaikiki.com/luxury-suites/penthouse-suite',
				},
				{
					name: 'Daily continental breakfast at Mugen', // string
					url: 'https://www.espaciowaikiki.com/luxury-suites/penthouse-suite', // url
				},
				{
					name: '$100 dining credit at Mugen', // string
					url: 'https://www.espaciowaikiki.com/luxury-suites/penthouse-suite', // url
				},
				{
					name: 'Private elevator and entryway', // string
					url: 'https://www.espaciowaikiki.com/luxury-suites/penthouse-suite', // url
				},
				{
					name: 'Expansive furnished balcony', // string
					url: 'https://www.espaciowaikiki.com/luxury-suites/penthouse-suite', // url
				},
				{
					name: 'Private Jacuzzi® on balcony', // string
					url: 'https://www.espaciowaikiki.com/luxury-suites/penthouse-suite', // url
				},
				{
					name: 'Daily housekeeping and laundry services', // string
					url: 'https://www.espaciowaikiki.com/luxury-suites/penthouse-suite', // url
				},
				{
					name: "Fully equipped chef's kitchen", // string
					url: 'https://www.espaciowaikiki.com/luxury-suites/penthouse-suite', // url
				},
				{
					name: 'Three and a half bathrooms with TOTO washlets', // string
					url: 'https://www.espaciowaikiki.com/luxury-suites/penthouse-suite', // url
				},
				{
					name: 'Deep soaking tub and separate glassed shower', // string
					url: 'https://www.espaciowaikiki.com/luxury-suites/penthouse-suite', // url
				},
				{
					name: 'Dry sauna', // string
					url: 'https://www.espaciowaikiki.com/luxury-suites/penthouse-suite', // url
				},
				{
					name: 'Accessibility', // string
					url: 'https://www.espaciowaikiki.com/luxury-suites/penthouse-suite', // url
				}
			]
		},
		{
			type: 'Suite', // string -> HotelRoom or Suite
			name: 'Oceanfront Sapphire Suite', // string
			url: 'https://www.espaciowaikiki.com/luxury-suites/oceanfront-sapphire-suite-two-bedrooms', // url
			bookUrl: 'https://be.synxis.com/?hotel=40404&level=hotel&locale=en-US&room=B2S&src=AWB.2BROV.schema', // url
			tourUrl: 'https://www.espaciowaikiki.com/take-a-virtual-tour/', // url where a guest can tour or book a tour to the room // url
			petsAllowedTrueOrFalse: false, // boolean
			description: 'Occupying the 12th floor of ESPACIO, this oceanfront suite allows guests to take in panoramic views of the Pacific Ocean from an expansive private balcony, or through floor-to-ceiling  windows in the spacious living area.', // string
			maxOccupancy: 6, // number
			checkInTime: '16:00', // datetime
			checkOutTime: '11:00', // datetime
			bedCount: 3, // number
			bedType: 'King Beds + Sofa Bed', // string
			smokingBoolean: false, // boolean
			images: [
				{
					caption: 'Spacious living room in the Oceanfront Sapphire Suite overlooking the ocean', // string
					url: 'https://www.espaciowaikiki.com/app/images/luxury-suites/suite-slider-saphire-living-area-1.jpg', // url
				},
				{
					caption: 'Gourmet kitchen in the Oceanfront Sapphire Suite', // string
					url: 'https://www.espaciowaikiki.com/wp-content/uploads/2023/08/suite-slider-saphire-kitchen-2.jpg', // url
				}
			],
			roomAmenitiesArr: [
				{
					name: 'Round-trip luxury airport transportation', // string
					url: 'https://www.espaciowaikiki.com/luxury-suites/oceanfront-sapphire-suite-two-bedrooms/', // url
				},
				{
					name: 'Exclusive car service within Waikiki',
					url: 'https://www.espaciowaikiki.com/luxury-suites/oceanfront-sapphire-suite-two-bedrooms/',
				},
				{
					name: 'Car rental',
					url: 'https://www.espaciowaikiki.com/luxury-suites/oceanfront-sapphire-suite-two-bedrooms/',
				},
				{
					name: 'Daily continental breakfast at Mugen', // string
					url: 'https://www.espaciowaikiki.com/luxury-suites/oceanfront-sapphire-suite-two-bedrooms/', // url
				},
				{
					name: '$100 dining credit at Mugen', // string
					url: 'https://www.espaciowaikiki.com/luxury-suites/oceanfront-sapphire-suite-two-bedrooms/', // url
				},
				{
					name: 'Private elevator and entryway', // string
					url: 'https://www.espaciowaikiki.com/luxury-suites/oceanfront-sapphire-suite-two-bedrooms/', // url
				},
				{
					name: 'Expansive furnished balcony', // string
					url: 'https://www.espaciowaikiki.com/luxury-suites/oceanfront-sapphire-suite-two-bedrooms/', // url
				},
				{
					name: 'Private Jacuzzi® on balcony', // string
					url: 'https://www.espaciowaikiki.com/luxury-suites/oceanfront-sapphire-suite-two-bedrooms/', // url
				},
				{
					name: 'Daily housekeeping and laundry services', // string
					url: 'https://www.espaciowaikiki.com/luxury-suites/oceanfront-sapphire-suite-two-bedrooms/', // url
				},
				{
					name: "Fully equipped chef's kitchen", // string
					url: 'https://www.espaciowaikiki.com/luxury-suites/oceanfront-sapphire-suite-two-bedrooms/', // url
				},
				{
					name: 'Three and a half bathrooms with TOTO washlets', // string
					url: 'https://www.espaciowaikiki.com/luxury-suites/oceanfront-sapphire-suite-two-bedrooms/', // url
				},
				{
					name: 'Deep soaking tub and separate glassed shower', // string
					url: 'https://www.espaciowaikiki.com/luxury-suites/oceanfront-sapphire-suite-two-bedrooms/', // url
				},
				{
					name: 'Dry sauna', // string
					url: 'https://www.espaciowaikiki.com/luxury-suites/oceanfront-sapphire-suite-two-bedrooms/', // url
				},
				{
					name: 'Accessibility', // string
					url: 'https://www.espaciowaikiki.com/luxury-suites/oceanfront-sapphire-suite-two-bedrooms/', // url
				}
			]
		},
		{
			type: 'Suite', // string -> HotelRoom or Suite
			name: 'Oceanfront Azul Suite', // string
			url: 'https://www.espaciowaikiki.com/luxury-suites/oceanfront-azul-suite-three-bedrooms/', // url
			bookUrl: 'https://be.synxis.com/?hotel=40404&level=hotel&locale=en-US&room=A3S&src=AWB.3BROV.schema', // url
			tourUrl: 'https://www.espaciowaikiki.com/take-a-virtual-tour/', // url where a guest can tour or book a tour to the room // url
			petsAllowedTrueOrFalse: false, // boolean
			description: 'The Azul Suite on the 11th floor commands panoramic views from an expansive private balcony that features a Jacuzzi® and outdoor daybed. Thoughtful amenities include a modern designer kitchen, TOTO Washlets and dry sauna.', // string
			maxOccupancy: 6, // number
			checkInTime: '16:00', // datetime
			checkOutTime: '11:00', // datetime
			bedCount: 3, // number
			bedType: 'King Beds', // string
			smokingBoolean: false, // boolean
			images: [
				{
					caption: 'Spacious living room in the Oceanfront Azul Suite overlooking the ocean', // string
					url: 'https://www.espaciowaikiki.com/app/images/luxury-suites/suite-slider-saphire-living-area-2.jpg', // url
				},
				{
					caption: 'The Oceanfront Azul Suite features a private balcony with a Jacuzzi®', // string
					url: 'https://www.espaciowaikiki.com/wp-content/uploads/2023/08/suite-slider-saphire-balcony-jacuzzi.jpeg', // url
				}
			],
			roomAmenitiesArr: [
				{
					name: 'Round-trip luxury airport transportation', // string
					url: 'https://www.espaciowaikiki.com/luxury-suites/oceanfront-azul-suite-three-bedrooms/', // url
				},
				{
					name: 'Exclusive car service within Waikiki',
					url: 'https://www.espaciowaikiki.com/luxury-suites/oceanfront-azul-suite-three-bedrooms/',
				},
				{
					name: 'Car rental',
					url: 'https://www.espaciowaikiki.com/luxury-suites/oceanfront-azul-suite-three-bedrooms/',
				},
				{
					name: 'Daily continental breakfast at Mugen', // string
					url: 'https://www.espaciowaikiki.com/luxury-suites/oceanfront-azul-suite-three-bedrooms/', // url
				},
				{
					name: '$100 dining credit at Mugen', // string
					url: 'https://www.espaciowaikiki.com/luxury-suites/oceanfront-azul-suite-three-bedrooms/', // url
				},
				{
					name: 'Private elevator and entryway', // string
					url: 'https://www.espaciowaikiki.com/luxury-suites/oceanfront-azul-suite-three-bedrooms/', // url
				},
				{
					name: 'Expansive furnished balcony', // string
					url: 'https://www.espaciowaikiki.com/luxury-suites/oceanfront-azul-suite-three-bedrooms/', // url
				},
				{
					name: 'Private Jacuzzi® on balcony', // string
					url: 'https://www.espaciowaikiki.com/luxury-suites/oceanfront-azul-suite-three-bedrooms/', // url
				},
				{
					name: 'Daily housekeeping and laundry services', // string
					url: 'https://www.espaciowaikiki.com/luxury-suites/oceanfront-azul-suite-three-bedrooms/', // url
				},
				{
					name: "Fully equipped chef's kitchen", // string
					url: 'https://www.espaciowaikiki.com/luxury-suites/oceanfront-azul-suite-three-bedrooms/', // url
				},
				{
					name: 'Three and a half bathrooms with TOTO washlets', // string
					url: 'https://www.espaciowaikiki.com/luxury-suites/oceanfront-azul-suite-three-bedrooms/', // url
				},
				{
					name: 'Deep soaking tub and separate glassed shower', // string
					url: 'https://www.espaciowaikiki.com/luxury-suites/oceanfront-azul-suite-three-bedrooms/', // url
				},
				{
					name: 'Dry sauna', // string
					url: 'https://www.espaciowaikiki.com/luxury-suites/oceanfront-azul-suite-three-bedrooms/', // url
				},
				{
					name: 'Accessibility', // string
					url: 'https://www.espaciowaikiki.com/luxury-suites/oceanfront-azul-suite-three-bedrooms/', // url
				}
			]
		},
		{
			type: 'Suite', // string -> HotelRoom or Suite
			name: 'Ocean View Emerald Suite', // string
			url: 'https://www.espaciowaikiki.com/luxury-suites/luxury-suite-premium-view-two-bedrooms/', // url
			bookUrl: 'https://be.synxis.com/?hotel=40404&level=hotel&locale=en-US&room=C2S&src=AWB.2BLSV.schema', // url
			tourUrl: 'https://www.espaciowaikiki.com/take-a-virtual-tour/', // url where a guest can tour or book a tour to the room // url
			petsAllowedTrueOrFalse: false, // boolean
			description: 'Occupying the 10th floor of ESPACIO, the Emerald suite offers panoramic views of the Pacific Ocean from an expansive private balcony, or through floor-to-ceiling windows in the spacious living area.', // string
			maxOccupancy: 6, // number
			checkInTime: '16:00', // datetime
			checkOutTime: '11:00', // datetime
			bedCount: 3, // number
			bedType: 'King Beds + Sofa Bed', // string
			smokingBoolean: false, // boolean
			images: [
				{
					caption: 'Spacious dining and living area in the Emerald Suite', // string
					url: 'https://www.espaciowaikiki.com/wp-content/uploads/2022/04/ESPACIO-THE-JEWEL-OF-WAIKIKI-Luxury-Green-Suite-Premium-View-Living-Room-3000X2000-scaled.jpg', // url
				},
				{
					caption: 'The Emerald Suite features a private balcony with a Jacuzzi®', // string
					url: 'https://www.espaciowaikiki.com/wp-content/uploads/2022/04/ESPACIO-THE-JEWEL-OF-WAIKIKI-Luxury-Green-Suite-Premium-Jacuzzi-Green-Robe-3000X2000-scaled.jpg', // url
				}
			],
			roomAmenitiesArr: [

				{
					name: 'Round-trip luxury airport transportation', // string
					url: 'https://www.espaciowaikiki.com/luxury-suites/luxury-suite-premium-view-two-bedrooms/', // url
				},
				{
					name: 'Exclusive car service within Waikiki',
					url: 'https://www.espaciowaikiki.com/luxury-suites/luxury-suite-premium-view-two-bedrooms/',
				},
				{
					name: 'Car rental',
					url: 'https://www.espaciowaikiki.com/luxury-suites/luxury-suite-premium-view-two-bedrooms/',
				},
				{
					name: 'Daily continental breakfast at Mugen', // string
					url: 'https://www.espaciowaikiki.com/luxury-suites/luxury-suite-premium-view-two-bedrooms/', // url
				},
				{
					name: '$100 dining credit at Mugen', // string
					url: 'https://www.espaciowaikiki.com/luxury-suites/luxury-suite-premium-view-two-bedrooms/', // url
				},
				{
					name: 'Private elevator and entryway', // string
					url: 'https://www.espaciowaikiki.com/luxury-suites/luxury-suite-premium-view-two-bedrooms/', // url
				},
				{
					name: 'Expansive furnished balcony', // string
					url: 'https://www.espaciowaikiki.com/luxury-suites/luxury-suite-premium-view-two-bedrooms/', // url
				},
				{
					name: 'Private Jacuzzi® on balcony', // string
					url: 'https://www.espaciowaikiki.com/luxury-suites/luxury-suite-premium-view-two-bedrooms/', // url
				},
				{
					name: 'Daily housekeeping and laundry services', // string
					url: 'https://www.espaciowaikiki.com/luxury-suites/luxury-suite-premium-view-two-bedrooms/', // url
				},
				{
					name: "Fully equipped chef's kitchen", // string
					url: 'https://www.espaciowaikiki.com/luxury-suites/luxury-suite-premium-view-two-bedrooms/', // url
				},
				{
					name: 'Three and a half bathrooms with TOTO washlets', // string
					url: 'https://www.espaciowaikiki.com/luxury-suites/luxury-suite-premium-view-two-bedrooms/', // url
				},
				{
					name: 'Deep soaking tub and separate glassed shower', // string
					url: 'https://www.espaciowaikiki.com/luxury-suites/luxury-suite-premium-view-two-bedrooms/', // url
				},
				{
					name: 'Dry sauna', // string
					url: 'https://www.espaciowaikiki.com/luxury-suites/luxury-suite-premium-view-two-bedrooms/', // url
				},
				{
					name: 'Accessibility', // string
					url: 'https://www.espaciowaikiki.com/luxury-suites/luxury-suite-premium-view-two-bedrooms/', // url
				}
			]
		},
		{
			type: 'Suite', // string -> HotelRoom or Suite
			name: 'Ocean View Peridot Suite', // string
			url: 'https://www.espaciowaikiki.com/luxury-suites/ocean-view-peridot-suite-three-bedrooms/', // url
			bookUrl: 'https://be.synxis.com/?hotel=40404&level=hotel&locale=en-US&room=B3S&src=AWB.3BLSV.schema', // url
			tourUrl: 'https://www.espaciowaikiki.com/take-a-virtual-tour/', // url where a guest can tour or book a tour to the room // url
			petsAllowedTrueOrFalse: false, // boolean
			description: 'This suite offers stunning ocean views from an expansive private balcony that features a Jacuzzi® and outdoor daybed. Thoughtful amenities include a modern designer kitchen, TOTO Washlets, dry sauna, and smart home technology.', // string
			maxOccupancy: 6, // number
			checkInTime: '16:00', // datetime
			checkOutTime: '11:00', // datetime
			bedCount: 3, // number
			bedType: 'King Beds', // string
			smokingBoolean: false, // boolean
			images: [
				{
					caption: 'Perodit Suite dining and living area', // string
					url: 'https://www.espaciowaikiki.com/wp-content/uploads/2022/04/ESPACIO-THE-JEWEL-OF-WAIKIKI-Luxury-Green-Suite-Premium-View-Living-Room-3000X2000-scaled.jpg', // url
				},
				{
					caption: 'Savor ocean views from the Peridot Suite master bedroom', // string
					url: 'https://www.espaciowaikiki.com/app/images/luxury-suites/suite-slider-jade-master-bedroom.jpg', // url
				}
			],
			roomAmenitiesArr: [
				{
					name: 'Round-trip luxury airport transportation', // string
					url: 'https://www.espaciowaikiki.com/luxury-suites/ocean-view-peridot-suite-three-bedrooms/', // url
				},
				{
					name: 'Exclusive car service within Waikiki',
					url: 'https://www.espaciowaikiki.com/luxury-suites/ocean-view-peridot-suite-three-bedrooms/',
				},
				{
					name: 'Car rental',
					url: 'https://www.espaciowaikiki.com/luxury-suites/ocean-view-peridot-suite-three-bedrooms/',
				},
				{
					name: 'Daily continental breakfast at Mugen', // string
					url: 'https://www.espaciowaikiki.com/luxury-suites/ocean-view-peridot-suite-three-bedrooms/', // url
				},
				{
					name: '$100 dining credit at Mugen', // string
					url: 'https://www.espaciowaikiki.com/luxury-suites/ocean-view-peridot-suite-three-bedrooms/', // url
				},
				{
					name: 'Private elevator and entryway', // string
					url: 'https://www.espaciowaikiki.com/luxury-suites/ocean-view-peridot-suite-three-bedrooms/', // url
				},
				{
					name: 'Expansive furnished balcony', // string
					url: 'https://www.espaciowaikiki.com/luxury-suites/ocean-view-peridot-suite-three-bedrooms/', // url
				},
				{
					name: 'Private Jacuzzi® on balcony', // string
					url: 'https://www.espaciowaikiki.com/luxury-suites/ocean-view-peridot-suite-three-bedrooms/', // url
				},
				{
					name: 'Daily housekeeping and laundry services', // string
					url: 'https://www.espaciowaikiki.com/luxury-suites/ocean-view-peridot-suite-three-bedrooms/', // url
				},
				{
					name: "Fully equipped chef's kitchen", // string
					url: 'https://www.espaciowaikiki.com/luxury-suites/ocean-view-peridot-suite-three-bedrooms/', // url
				},
				{
					name: 'Three and a half bathrooms with TOTO washlets', // string
					url: 'https://www.espaciowaikiki.com/luxury-suites/ocean-view-peridot-suite-three-bedrooms/', // url
				},
				{
					name: 'Deep soaking tub and separate glassed shower', // string
					url: 'https://www.espaciowaikiki.com/luxury-suites/ocean-view-peridot-suite-three-bedrooms/', // url
				},
				{
					name: 'Dry sauna', // string
					url: 'https://www.espaciowaikiki.com/luxury-suites/ocean-view-peridot-suite-three-bedrooms/', // url
				},
				{
					name: 'Accessibility', // string
					url: 'https://www.espaciowaikiki.com/luxury-suites/ocean-view-peridot-suite-three-bedrooms/', // url
				}
			],
		},
		{
			type: 'Suite', // string -> HotelRoom or Suite
			name: 'Ocean View Jade Suite', // string
			url: 'https://www.espaciowaikiki.com/luxury-suites/luxury-suite-premium-view-three-bedrooms/', // url
			bookUrl: 'https://be.synxis.com/?hotel=40404&level=hotel&locale=en-US&room=C3S&src=AWB.3BLSVJ.schema', // url
			tourUrl: 'https://www.espaciowaikiki.com/take-a-virtual-tour/', // url where a guest can tour or book a tour to the room // url
			petsAllowedTrueOrFalse: 'false', // boolean
			description: 'This suite offers premium ocean views from an expansive private balcony that features a Jacuzzi® and outdoor daybed. Thoughtful amenities include a modern designer kitchen, TOTO Washlets, dry sauna, and smart home technology.', // string
			maxOccupancy: 6, // number
			checkInTime: '16:00', // datetime
			checkOutTime: '11:00', // datetime
			bedCount: 3, // number
			bedType: 'King Beds', // string
			smokingBoolean: 'false', // boolean
			images: [
				{
					caption: 'Savor ocean views from the Jade Suite master bedroom', // string
					url: 'https://www.espaciowaikiki.com/app/images/luxury-suites/suite-slider-jade-master-bedroom.jpg', // url
				},
				{
					caption: 'Gourmet kitchen in the Jade Suite', // string
					url: 'https://www.espaciowaikiki.com/app/images/luxury-suites/suite-slider-jade-kitchen-2.jpg', // url
				}
			],
			roomAmenitiesArr: [
				{
					name: 'Round-trip luxury airport transportation', // string
					url: 'https://www.espaciowaikiki.com/luxury-suites/luxury-suite-premium-view-three-bedrooms/', // url
				},
				{
					name: 'Exclusive car service within Waikiki',
					url: 'https://www.espaciowaikiki.com/luxury-suites/luxury-suite-premium-view-three-bedrooms/',
				},
				{
					name: 'Car rental',
					url: 'https://www.espaciowaikiki.com/luxury-suites/luxury-suite-premium-view-three-bedrooms/',
				},
				{
					name: 'Daily continental breakfast at Mugen', // string
					url: 'https://www.espaciowaikiki.com/luxury-suites/luxury-suite-premium-view-three-bedrooms/', // url
				},
				{
					name: '$100 dining credit at Mugen', // string
					url: 'https://www.espaciowaikiki.com/luxury-suites/luxury-suite-premium-view-three-bedrooms/', // url
				},
				{
					name: 'Private elevator and entryway', // string
					url: 'https://www.espaciowaikiki.com/luxury-suites/luxury-suite-premium-view-three-bedrooms/', // url
				},
				{
					name: 'Expansive furnished balcony', // string
					url: 'https://www.espaciowaikiki.com/luxury-suites/luxury-suite-premium-view-three-bedrooms/', // url
				},
				{
					name: 'Private Jacuzzi® on balcony', // string
					url: 'https://www.espaciowaikiki.com/luxury-suites/luxury-suite-premium-view-three-bedrooms/', // url
				},
				{
					name: 'Daily housekeeping and laundry services', // string
					url: 'https://www.espaciowaikiki.com/luxury-suites/luxury-suite-premium-view-three-bedrooms/', // url
				},
				{
					name: "Fully equipped chef's kitchen", // string
					url: 'https://www.espaciowaikiki.com/luxury-suites/luxury-suite-premium-view-three-bedrooms/', // url
				},
				{
					name: 'Three and a half bathrooms with TOTO washlets', // string
					url: 'https://www.espaciowaikiki.com/luxury-suites/luxury-suite-premium-view-three-bedrooms/', // url
				},
				{
					name: 'Deep soaking tub and separate glassed shower', // string
					url: 'https://www.espaciowaikiki.com/luxury-suites/luxury-suite-premium-view-three-bedrooms/', // url
				},
				{
					name: 'Dry sauna', // string
					url: 'https://www.espaciowaikiki.com/luxury-suites/luxury-suite-premium-view-three-bedrooms/', // url
				},
				{
					name: 'Accessibility', // string
					url: 'https://www.espaciowaikiki.com/luxury-suites/luxury-suite-premium-view-three-bedrooms/', // url
				}
			],
		},
		{
			type: 'Suites', // string -> HotelRoom or Suite
			name: 'Beach View Ruby Suite', // string
			url: 'https://www.espaciowaikiki.com/luxury-suites/luxury-suite-two-bedroom/', // url
			bookUrl: 'https://be.synxis.com/?hotel=40404&level=hotel&locale=en-US&room=D2S&src=AWB.2BLS.schema', // url
			tourUrl: 'https://www.espaciowaikiki.com/take-a-virtual-tour/', // url where a guest can tour or book a tour to the room // url
			petsAllowedTrueOrFalse: 'false', // boolean
			description: 'This elegant beach view suite includes a den for the traveler who wants to trade in their office for a view. Unwind in the Jacuzzi® on the spacious and private balcony overlooking Waikiki Beach or spread out and relax in the expansive living area while gazing through floor-to-ceiling windows of a golden Hawaiian sunset.', // string
			maxOccupancy: 6, // number
			checkInTime: '16:00', // datetime
			checkOutTime: '11:00', // datetime
			bedCount: 2, // number
			bedType: 'King Beds + Sofa Bed', // string
			smokingBoolean: 'false', // boolean
			images: [
				{
					caption: 'Beach views from the Ruby Suite', // string
					url: 'https://www.espaciowaikiki.com/app/images/luxury-suites/suite-slider-coral-master-bedroom-balcony-view.jpg', // url
				},
				{
					caption: 'Spacious dining and living area in the Ruby Suite', // string
					url: 'https://www.espaciowaikiki.com/app/images/luxury-suites/suite-slider-coral-living-area-1.jpg', // url
				}
			],
			roomAmenitiesArr: [
				{
					name: 'Round-trip luxury airport transportation', // string
					url: 'https://www.espaciowaikiki.com/luxury-suites/luxury-suite-two-bedroom/', // url
				},
				{
					name: 'Exclusive car service within Waikiki',
					url: 'https://www.espaciowaikiki.com/luxury-suites/luxury-suite-two-bedroom/',
				},
				{
					name: 'Car rental',
					url: 'https://www.espaciowaikiki.com/luxury-suites/luxury-suite-two-bedroom/',
				},
				{
					name: 'Daily continental breakfast at Mugen', // string
					url: 'https://www.espaciowaikiki.com/luxury-suites/luxury-suite-two-bedroom/', // url
				},
				{
					name: '$100 dining credit at Mugen', // string
					url: 'https://www.espaciowaikiki.com/luxury-suites/luxury-suite-two-bedroom/', // url
				},
				{
					name: 'Private elevator and entryway', // string
					url: 'https://www.espaciowaikiki.com/luxury-suites/luxury-suite-two-bedroom/', // url
				},
				{
					name: 'Expansive furnished balcony', // string
					url: 'https://www.espaciowaikiki.com/luxury-suites/luxury-suite-two-bedroom/', // url
				},
				{
					name: 'Private Jacuzzi® on balcony', // string
					url: 'https://www.espaciowaikiki.com/luxury-suites/luxury-suite-two-bedroom/', // url
				},
				{
					name: 'Daily housekeeping and laundry services', // string
					url: 'https://www.espaciowaikiki.com/luxury-suites/luxury-suite-two-bedroom/', // url
				},
				{
					name: "Fully equipped chef's kitchen", // string
					url: 'https://www.espaciowaikiki.com/luxury-suites/luxury-suite-two-bedroom/', // url
				},
				{
					name: 'Three and a half bathrooms with TOTO washlets', // string
					url: 'https://www.espaciowaikiki.com/luxury-suites/luxury-suite-two-bedroom/', // url
				},
				{
					name: 'Deep soaking tub and separate glassed shower', // string
					url: 'https://www.espaciowaikiki.com/luxury-suites/luxury-suite-two-bedroom/', // url
				},
				{
					name: 'Dry sauna', // string
					url: 'https://www.espaciowaikiki.com/luxury-suites/luxury-suite-two-bedroom/', // url
				},
				{
					name: 'Accessibility', // string
					url: 'https://www.espaciowaikiki.com/luxury-suites/luxury-suite-two-bedroom/', // url
				},
			],
		},
		{
			type: 'Suite', // string -> HotelRoom or Suite
			name: 'Beach View Garnet Suite', // string
			url: 'https://www.espaciowaikiki.com/luxury-suites/luxury-suite-three-bedroom/', // url
			bookUrl: 'https://be.synxis.com/?hotel=40404&level=hotel&locale=en-US&room=D3S&src=AWB.3BLS.schema', // url
			tourUrl: 'https://www.espaciowaikiki.com/take-a-virtual-tour/', // url where a guest can tour or book a tour to the room // url
			petsAllowedTrueOrFalse: 'false', // boolean
			description: 'Spread out in spacious and effortlessly contemporary comfort, just steps from Waikiki Beach. Complete with a modern designer kitchen, TOTO Washlets, and an expansive private balcony that includes a Jacuzzi®.', // string
			maxOccupancy: 6, // number
			checkInTime: '16:00', // datetime
			checkOutTime: '11:00', // datetime
			bedCount: 3, // number
			bedType: 'King Beds', // string
			smokingBoolean: 'false', // boolean
			images: [
				{
					caption: 'Beach views from the Garnet Suite', // string
					url: 'https://www.espaciowaikiki.com/app/images/luxury-suites/suite-slider-coral-master-bedroom-balcony-view.jpg', // url
				},
				{
					caption: 'Savor beach views from the Garnet Suite master bedroom', // string
					url: 'https://www.espaciowaikiki.com/wp-content/uploads/2023/08/suite-slider-coral-master-bedroom-1.jpeg', // url
				}
			],
			roomAmenitiesArr: [
				{
					name: 'Round-trip luxury airport transportation', // string
					url: 'https://www.espaciowaikiki.com/luxury-suites/luxury-suite-three-bedroom/', // url
				},
				{
					name: 'Exclusive car service within Waikiki',
					url: 'https://www.espaciowaikiki.com/luxury-suites/luxury-suite-three-bedroom/',
				},
				{
					name: 'Car rental',
					url: 'https://www.espaciowaikiki.com/luxury-suites/luxury-suite-three-bedroom/',
				},
				{
					name: 'Daily continental breakfast at Mugen', // string
					url: 'https://www.espaciowaikiki.com/luxury-suites/luxury-suite-three-bedroom/', // url
				},
				{
					name: '$100 dining credit at Mugen', // string
					url: 'https://www.espaciowaikiki.com/luxury-suites/luxury-suite-three-bedroom/', // url
				},
				{
					name: 'Private elevator and entryway', // string
					url: 'https://www.espaciowaikiki.com/luxury-suites/luxury-suite-three-bedroom/', // url
				},
				{
					name: 'Expansive furnished balcony', // string
					url: 'https://www.espaciowaikiki.com/luxury-suites/luxury-suite-three-bedroom/', // url
				},
				{
					name: 'Private Jacuzzi® on balcony', // string
					url: 'https://www.espaciowaikiki.com/luxury-suites/luxury-suite-three-bedroom/', // url
				},
				{
					name: 'Daily housekeeping and laundry services', // string
					url: 'https://www.espaciowaikiki.com/luxury-suites/luxury-suite-three-bedroom/', // url
				},
				{
					name: "Fully equipped chef's kitchen", // string
					url: 'https://www.espaciowaikiki.com/luxury-suites/luxury-suite-three-bedroom/', // url
				},
				{
					name: 'Three and a half bathrooms with TOTO washlets', // string
					url: 'https://www.espaciowaikiki.com/luxury-suites/luxury-suite-three-bedroom/', // url
				},
				{
					name: 'Deep soaking tub and separate glassed shower', // string
					url: 'https://www.espaciowaikiki.com/luxury-suites/luxury-suite-three-bedroom/', // url
				},
				{
					name: 'Dry sauna', // string
					url: 'https://www.espaciowaikiki.com/luxury-suites/luxury-suite-three-bedroom/', // url
				},
				{
					name: 'Accessibility', // string
					url: 'https://www.espaciowaikiki.com/luxury-suites/luxury-suite-three-bedroom/', // url
				}
			],
		},
		{
			type: 'Suite', // string -> HotelRoom or Suite
			name: 'Beach View Coral Accessible Suite', // string
			url: 'https://www.espaciowaikiki.com/luxury-suites/luxury-suite-three-bedroom-accessible/', // url
			bookUrl: 'https://be.synxis.com/?hotel=40404&level=hotel&locale=en-US&room=E3S&src=AWB.3BLSA.schema', // url
			tourUrl: 'https://www.espaciowaikiki.com/take-a-virtual-tour/', // url where a guest can tour or book a tour to the room // url
			petsAllowedTrueOrFalse: 'false', // boolean
			description: 'ESPACIO offers a mobility accessible suite designed for maximum comfort and the utmost privacy. This suite with views of world-famous Waikiki Beach and iconic Banyan Tree, is furnished with TDD equipment, an accessible roll-in shower, and smart home technology.', // string
			maxOccupancy: 6, // number
			checkInTime: '16:00', // datetime
			checkOutTime: '11:00', // datetime
			bedCount: 3, // number
			bedType: 'King Beds', // string
			smokingBoolean: 'false', // boolean
			images: [
				{
					caption: 'Beach views from the Coral Suite', // string
					url: 'https://www.espaciowaikiki.com/app/images/luxury-suites/suite-slider-coral-master-bedroom-balcony-view.jpg', // url
				},
				{
					caption: 'Spacious dining and living area in the Coral Suite', // string
					url: 'https://www.espaciowaikiki.com/app/images/luxury-suites/suite-slider-coral-living-area-1.jpg', // url
				}
			],
			roomAmenitiesArr: [
				{
					name: 'Accessibility', // string
					url: 'https://www.espaciowaikiki.com/luxury-suites/luxury-suite-three-bedroom-accessible/', // url
				},
				{
					name: 'Accessible Roll-in Shower', // string
					url: 'https://www.espaciowaikiki.com/luxury-suites/luxury-suite-three-bedroom-accessible/', // url
				},
				{
					name: 'Round-trip luxury airport transportation', // string
					url: 'https://www.espaciowaikiki.com/luxury-suites/luxury-suite-three-bedroom-accessible/', // url
				},
				{
					name: 'Exclusive car service within Waikiki',
					url: 'https://www.espaciowaikiki.com/luxury-suites/luxury-suite-three-bedroom-accessible/',
				},
				{
					name: 'Car rental',
					url: 'https://www.espaciowaikiki.com/luxury-suites/luxury-suite-three-bedroom-accessible/',
				},
				{
					name: 'Daily continental breakfast at Mugen', // string
					url: 'https://www.espaciowaikiki.com/luxury-suites/luxury-suite-three-bedroom-accessible/', // url
				},
				{
					name: '$100 dining credit at Mugen', // string
					url: 'https://www.espaciowaikiki.com/luxury-suites/luxury-suite-three-bedroom-accessible/', // url
				},
				{
					name: 'Private elevator and entryway', // string
					url: 'https://www.espaciowaikiki.com/luxury-suites/luxury-suite-three-bedroom-accessible/', // url
				},
				{
					name: 'Expansive furnished balcony', // string
					url: 'https://www.espaciowaikiki.com/luxury-suites/luxury-suite-three-bedroom-accessible/', // url
				},
				{
					name: 'Private Jacuzzi® on balcony', // string
					url: 'https://www.espaciowaikiki.com/luxury-suites/luxury-suite-three-bedroom-accessible/', // url
				},
				{
					name: 'Daily housekeeping and laundry services', // string
					url: 'https://www.espaciowaikiki.com/luxury-suites/luxury-suite-three-bedroom-accessible/', // url
				},
				{
					name: "Fully equipped chef's kitchen", // string
					url: 'https://www.espaciowaikiki.com/luxury-suites/luxury-suite-three-bedroom-accessible/', // url
				},
				{
					name: 'Three and a half bathrooms with TOTO washlets', // string
					url: 'https://www.espaciowaikiki.com/luxury-suites/luxury-suite-three-bedroom-accessible/', // url
				},
				{
					name: 'Deep soaking tub and separate glassed shower', // string
					url: 'https://www.espaciowaikiki.com/luxury-suites/luxury-suite-three-bedroom-accessible/', // url
				}
			],
		}
	],
}
