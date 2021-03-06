export default class TravelService {
  static availableTravelMarkers = [
    /**
     * africa
     */
    // morocco
    {
      title: 'Tangier, Morocco',
      lat: 35.7595,
      lng: -5.834,
    },
    {
      title: 'Marrakech, Morocco',
      lat: 31.6295,
      lng: -7.9811,
    },
    {
      title: 'Casablanca, Morocco',
      lat: 33.5731,
      lng: -7.5898,
    },
    {
      title: 'Imlil, Morocco',
      lat: 31.1377,
      lng: -7.9198,
    },
    // zimbabwe
    {
      title: 'Harare, Zimbabwe',
      lat: -17.8216,
      lng: 31.0492,
    },
    {
      title: 'Victoria Falls, Zimbabwe',
      lat: -17.9316,
      lng: 25.8302,
    },
    {
      title: 'Hwange National Park, Zimbabwe',
      lat: -19.1241,
      lng: 26.5926,
    },
    {
      title: 'Bulawayo, Zimbabwe',
      lat: -20.1457,
      lng: 28.5873,
    },
    {
      title: 'Gweru, Zimbabwe',
      lat: -19.4657,
      lng: 29.8124,
    },
    {
      title: 'Matapos, Zimbabwe',
      lat: -20.3797,
      lng: 28.5083,
    },
    /**
     * asia
     */
    // australia
    {
      title: 'Sydney, Australia',
      lat: -33.8688,
      lng: 151.2093,
    },
    {
      title: 'Melbourne, Australia',
      lat: -37.8136,
      lng: 144.9631,
    },
    // brunei
    {
      title: 'Bandar Seri Begawan, Brunei',
      lat: 4.9031,
      lng: 114.9398,
    },
    // china
    {
      title: 'Beijing, China',
      lat: 39.9042,
      lng: 116.4074,
    },
    {
      title: 'Badaling, China',
      lat: 40.3598,
      lng: 116.02,
    },
    {
      title: 'Shanghai, China',
      lat: 31.2304,
      lng: 121.4737,
    },
    {
      title: 'Shanghai, China',
      lat: 31.2304,
      lng: 121.4737,
    },
    {
      title: 'Hong Kong',
      lat: 22.3964,
      lng: 114.1095,
    },
    {
      title: 'Nanning, China',
      lat: 22.817,
      lng: 108.3665,
    },
    {
      title: 'Guangzhou, China',
      lat: 23.1291,
      lng: 113.2644,
    },
    {
      title: 'Hangzhou, China',
      lat: 30.2741,
      lng: 120.1551,
    },
    // india
    {
      title: 'Mumbai, India',
      lat: 19.076,
      lng: 72.8777,
    },
    {
      title: 'New Delhi, India',
      lat: 28.6139,
      lng: 77.209,
    },
    {
      title: 'Jaipur, India',
      lat: 26.9124,
      lng: 75.7873,
    },
    {
      title: 'Agra, India',
      lat: 27.1767,
      lng: 78.0081,
    },
    {
      title: 'Jaisalmer, India',
      lat: 26.9157,
      lng: 70.9083,
    },
    {
      title: 'Kolkata, India',
      lat: 22.5726,
      lng: 88.3639,
    },
    {
      title: 'Bengaluru, India',
      lat: 12.9716,
      lng: 77.5946,
    },
    {
      title: 'Chennai, India',
      lat: 13.0827,
      lng: 80.2707,
    },
    {
      title: 'Thai Desert, India',
      lat: 27.4695,
      lng: 70.6217,
    },
    // indonesia
    {
      title: 'Jakarta, Indonesia',
      lat: -6.1745,
      lng: 106.8227,
    },
    {
      title: 'Yogyakarta, Indonesia',
      lat: -7.7956,
      lng: 110.3695,
    },
    {
      title: 'Prambanan, Indonesia',
      lat: -7.752,
      lng: 110.4915,
    },
    {
      title: 'Borobudur, Indonesia',
      lat: -7.6079,
      lng: 110.2038,
    },
    // japan
    {
      title: 'Tokyo, Japan',
      lat: 35.6833,
      lng: 139.6833,
    },
    {
      title: 'Kyoto, Japan',
      lat: 35.0117,
      lng: 135.7683,
    },
    {
      title: 'Mount Fuji, Japan',
      lat: 35.358,
      lng: 138.731,
    },
    {
      title: 'Hakone, Japan',
      lat: 35.1833,
      lng: 139.0333,
    },
    {
      title: 'Nikko, Japan',
      lat: 36.7199,
      lng: 139.6982,
    },
    // malaysia
    {
      title: 'Kuala Lumpur, Malaysia',
      lat: 3.139,
      lng: 101.6869,
    },
    // new zealand
    {
      title: 'Auckland, New Zealand',
      lat: -36.8485,
      lng: 174.7633,
    },
    {
      title: 'Wellington, New Zealand',
      lat: -41.2865,
      lng: 174.7762,
    },
    //  {
    //      title: 'Dunedin, New Zealand',
    //      lat: -45.8788,
    //      lng: 170.5028
    //  },
    //  {
    //      title: 'Christchurch, New Zealand',
    //      lat: -43.5321,
    //      lng: 172.6362
    //  },
    {
      title: 'Picton, New Zealand',
      lat: -41.2906,
      lng: 174.001,
    },
    // philippines
    {
      title: 'Manila, Philippines',
      lat: 14.5995,
      lng: 120.9842,
    },
    {
      title: 'Banaue, Philippines',
      lat: 16.9496,
      lng: 121.1023,
    },
    {
      title: 'Batad Rice Terraces, Philippines',
      lat: 16.9348,
      lng: 121.1352,
    },
    {
      title: 'Hapao Rice Terraces, Philippines',
      lat: 16.8614,
      lng: 120.9704,
    },
    // singapore
    {
      title: 'Singapore',
      lat: 1.3521,
      lng: 103.8198,
    },
    // south korea
    {
      title: 'Seoul, South Korea',
      lat: 37.5665,
      lng: 126.978,
    },
    {
      title: 'Busan, South Korea',
      lat: 35.1796,
      lng: 129.0756,
    },
    // sri lanka
    {
      title: 'Colombo, Sri Lanka',
      lat: 6.9271,
      lng: 79.8612,
    },
    {
      title: 'Kandy, Sri Lanka',
      lat: 7.2906,
      lng: 80.6337,
    },
    {
      title: 'Galle, Sri Lanka',
      lat: 6.0535,
      lng: 80.221,
    },
    // thailand
    {
      title: 'Bangkok, Thailand',
      lat: 13.7563,
      lng: 100.5018,
    },
    {
      title: 'Chiang Mai, Thailand',
      lat: 18.7061,
      lng: 98.9817,
    },
    {
      title: 'Chiang Rai, Thailand',
      lat: 19.9071,
      lng: 99.831,
    },
    {
      title: 'Ayutthaya, Thailand',
      lat: 14.3692,
      lng: 100.5877,
    },
    {
      title: 'Surat Thani, Thailand',
      lat: 9.1339,
      lng: 99.3267,
    },
    {
      title: 'Ko Samui, Thailand',
      lat: 9.512,
      lng: 100.0136,
    },
    {
      title: 'Mae Sai, Thailand',
      lat: 20.4314,
      lng: 99.885,
    },
    {
      title: 'Krabi, Thailand',
      lat: 8.0863,
      lng: 98.9063,
    },
    // vietnam
    {
      title: 'Hanoi, Vietnam',
      lat: 21.0278,
      lng: 105.8342,
    },
    {
      title: 'Saigon, Vietnam',
      lat: 10.8231,
      lng: 106.6297,
    },
    {
      title: 'Hue, Vietnam',
      lat: 16.4498,
      lng: 107.5624,
    },
    {
      title: 'Da Nang, Vietnam',
      lat: 16.0544,
      lng: 108.2022,
    },
    /**
     * europe
     */
    // austria
    {
      title: 'Innsbruck, Austria',
      lat: 47.2667,
      lng: 11.3833,
    },
    {
      title: 'Bludenz, Austria',
      lat: 47.1333,
      lng: 9.8167,
    },
    {
      title: 'Vienna, Austria',
      lat: 48.2082,
      lng: 16.3738,
    },
    {
      title: 'Salzburg, Austria',
      lat: 47.8095,
      lng: 13.055,
    },
    // belgium
    {
      title: 'Brussels, Belgium',
      lat: 50.8503,
      lng: 4.3517,
    },
    {
      title: 'Bruges, Belgium',
      lat: 51.2093,
      lng: 3.2247,
    },
    // bulgaria
    {
      title: 'Sofia, Bulgaria',
      lat: 42.6977,
      lng: 23.3219,
    },
    {
      title: 'Veliko Tarnovo, Bulgaria',
      lat: 43.0757,
      lng: 25.6172,
    },
    {
      title: 'Buzludzha, Bulgaria',
      lat: 42.7333,
      lng: 25.4,
    },
    {
      title: 'Etar, Bulgaria',
      lat: 42.8035,
      lng: 25.3492,
    },
    // croatia
    {
      title: 'Zagreb, Croatia',
      lat: 45.815,
      lng: 15.9819,
    },
    // czech republic
    {
      title: 'Prague, Czech Republic',
      lat: 50.0833,
      lng: 14.4167,
    },
    // denmark
    {
      title: 'Copenhagen, Denmark',
      lat: 55.6761,
      lng: 12.5683,
    },
    // england
    {
      title: 'London, England',
      lat: 51.5072,
      lng: -0.1275,
    },
    {
      title: 'York, England',
      lat: 53.9583,
      lng: -1.0803,
    },
    {
      title: 'Stratford-upon-Avon, England',
      lat: 52.19,
      lng: -1.71,
    },
    {
      title: 'Thirsk, England',
      lat: 54.2327,
      lng: -1.342,
    },
    {
      title: 'Sheffield, England',
      lat: 53.3836,
      lng: -1.4669,
    },
    {
      title: 'The Cotswolds, England',
      lat: 51.791,
      lng: -2.0077,
    },
    // estonia
    {
      title: 'Tallinn, Estonia',
      lat: 59.437,
      lng: 24.7536,
    },
    // finland
    {
      title: 'Helsinki, Finland',
      lat: 60.1699,
      lng: 24.9384,
    },
    // france
    {
      title: 'Paris, France',
      lat: 48.8567,
      lng: 2.3508,
    },
    {
      title: 'Colmar, France',
      lat: 48.0817,
      lng: 7.3556,
    },
    {
      title: 'Menton, France',
      lat: 43.775,
      lng: 7.5,
    },
    {
      title: 'Èze, France',
      lat: 43.7286,
      lng: 7.3617,
    },
    {
      title: 'Nice, France',
      lat: 43.7034,
      lng: 7.2663,
    },
    {
      title: 'Versailles, France',
      lat: 48.8044,
      lng: 2.1232,
    },
    // germany
    {
      title: 'Trier, Germany',
      lat: 49.75,
      lng: 6.6333,
    },
    {
      title: 'Cologne, Germany',
      lat: 50.9364,
      lng: 6.9528,
    },
    {
      title: 'Berlin, Germany',
      lat: 52.5167,
      lng: 13.3833,
    },
    {
      title: 'Munich, Germany',
      lat: 48.1351,
      lng: 11.582,
    },
    {
      title: 'Neuschwanstein Castle, Germany',
      lat: 47.5576,
      lng: 10.7498,
    },
    {
      title: 'Frankfurt, Germany',
      lat: 50.1109,
      lng: 8.6821,
    },
    // gibraltar
    {
      title: 'Gibraltar',
      lat: 36.1408,
      lng: -5.3536,
    },
    // greece
    {
      title: 'Athens, Greece',
      lat: 37.9838,
      lng: 23.7275,
    },
    {
      title: 'Thessaloniki, Greece',
      lat: 40.6401,
      lng: 22.9444,
    },
    // hungary
    {
      title: 'Budapest, Hungary',
      lat: 47.4925,
      lng: 19.0514,
    },
    // iceland
    {
      title: 'Reykjavik, Iceland',
      lat: 64.1333,
      lng: -21.9333,
    },
    {
      title: 'Thingvellir, Iceland',
      lat: 64.2581,
      lng: -21.125,
    },
    {
      title: 'Gullfoss, Iceland',
      lat: 64.3261,
      lng: -20.1211,
    },
    {
      title: 'Geysir, Iceland',
      lat: 64.3109,
      lng: -20.3038,
    },
    {
      title: 'Langjökull Glacier, Iceland',
      lat: 64.75,
      lng: -19.9831,
    },
    // ireland
    {
      title: 'Glenveagh National Park, Ireland',
      lat: 55.0167,
      lng: -8.05,
    },
    {
      title: 'Cliffs of Moher, Ireland',
      lat: 52.9361,
      lng: -9.4708,
    },
    {
      title: 'Connemara, Ireland',
      lat: 53.5384,
      lng: -9.8875,
    },
    {
      title: 'Galway, Ireland',
      lat: 53.2719,
      lng: -9.0489,
    },
    {
      title: 'Dublin, Ireland',
      lat: 53.3478,
      lng: -6.2597,
    },
    {
      title: 'Glendalough, Ireland',
      lat: 53.012,
      lng: -6.3298,
    },
    {
      title: 'Waterford, Ireland',
      lat: 52.2593,
      lng: -7.1101,
    },
    {
      title: 'Cork, Ireland',
      lat: 51.8969,
      lng: -8.4863,
    },
    {
      title: 'Killarney, Ireland',
      lat: 52.0599,
      lng: -9.504,
    },
    {
      title: 'Ring of Kerry, Ireland',
      lat: 51.8295,
      lng: -10.1745,
    },
    {
      title: 'Limerick, Ireland',
      lat: 52.668,
      lng: -8.6305,
    },
    {
      title: 'Trim, Ireland',
      lat: 53.5524,
      lng: -6.7866,
    },
    {
      title: 'Blanchardstown, Ireland',
      lat: 53.3842,
      lng: -6.376,
    },
    {
      title: 'Howth, Ireland',
      lat: 53.3786,
      lng: -6.057,
    },
    {
      title: 'Malahide, Ireland',
      lat: 53.4509,
      lng: -6.1501,
    },
    {
      title: 'Glencar Lough, Ireland',
      lat: 54.3388,
      lng: -8.3858,
    },
    {
      title: 'Mullaghmore, Ireland',
      lat: 54.4655,
      lng: -8.4495,
    },
    {
      title: 'Rosses Point, Ireland',
      lat: 54.3048,
      lng: -8.564,
    },
    {
      title: 'Blarney, Ireland',
      lat: 51.9338,
      lng: -8.5612,
    },
    {
      title: 'Powerscourt Demesne, Ireland',
      lat: 53.1867,
      lng: -6.1962,
    },
    {
      title: 'Tonelagee, Ireland',
      lat: 53.0531,
      lng: -6.3817,
    },
    {
      title: 'Bray, Ireland',
      lat: 53.2009,
      lng: -6.1111,
    },
    {
      title: 'Greystones, Ireland',
      lat: 53.1491,
      lng: -6.0793,
    },
    {
      title: 'Slane, Ireland',
      lat: 53.7086,
      lng: -6.5437,
    },
    {
      title: 'Newgrange, Ireland',
      lat: 53.6947,
      lng: -6.4755,
    },
    // italy
    {
      title: 'Domodossola, Italy',
      lat: 46.1167,
      lng: 8.2833,
    },
    {
      title: 'Milan, Italy',
      lat: 45.4667,
      lng: 9.1833,
    },
    {
      title: 'Ventimiglia, Italy',
      lat: 43.7903,
      lng: 7.6083,
    },
    {
      title: 'Apricale, Italy',
      lat: 43.8833,
      lng: 7.6667,
    },
    {
      title: 'Isolabona, Italy',
      lat: 43.8833,
      lng: 7.6333,
    },
    {
      title: 'Cervo, Italy',
      lat: 43.9167,
      lng: 8.1167,
    },
    {
      title: 'Turin, Italy',
      lat: 45.0703,
      lng: 7.6869,
    },
    {
      title: 'Venice, Italy',
      lat: 45.4408,
      lng: 12.3155,
    },
    {
      title: 'Florence, Italy',
      lat: 43.7696,
      lng: 11.2558,
    },
    {
      title: 'Pisa, Italy',
      lat: 43.7228,
      lng: 10.4017,
    },
    {
      title: 'Rome, Italy',
      lat: 41.9028,
      lng: 12.4964,
    },
    {
      title: 'Naples, Italy',
      lat: 40.8518,
      lng: 14.2681,
    },
    {
      title: 'Pompeii, Italy',
      lat: 40.7462,
      lng: 14.4989,
    },
    {
      title: 'Bologna, Italy',
      lat: 44.4949,
      lng: 11.3426,
    },
    {
      title: 'Verona, Italy',
      lat: 45.4384,
      lng: 10.9916,
    },
    {
      title: 'Rimini, Italy',
      lat: 44.0678,
      lng: 12.5695,
    },
    // {
    //     title: 'Palermo, Italy',
    //     lat: 38.1157,
    //     lng: 13.3615
    // },
    // {
    //     title: 'Messina, Italy',
    //     lat: 38.1937,
    //     lng: 15.5542
    // },
    // {
    //     title: 'Catania, Italy',
    //     lat: 37.5079,
    //     lng: 15.0830
    // },
    // {
    //     title: 'Syracuse, Italy',
    //     lat: 37.0755,
    //     lng: 15.2866
    // },
    // {
    //     title: 'Pozzallo, Italy',
    //     lat: 36.7299,
    //     lng: 14.8491
    // },
    // latvia
    {
      title: 'Riga, Latvia',
      lat: 56.9496,
      lng: 24.1052,
    },
    // liechtenstein
    {
      title: 'Liechtenstein',
      lat: 47.166,
      lng: 9.5554,
    },
    // lithuania
    {
      title: 'Vilnius, Lithuania',
      lat: 54.6872,
      lng: 25.2797,
    },
    // luxembourg
    {
      title: 'Luxembourg City, Luxembourg',
      lat: 49.6,
      lng: 6.1167,
    },
    // malta
    // {
    //     title: 'Valleta, Malta',
    //     lat: 35.8989,
    //     lng: 14.5146
    // },
    // monaco
    {
      title: 'Monaco',
      lat: 43.7328,
      lng: 7.4197,
    },
    // netherlands
    {
      title: 'Amsterdam, Netherlands',
      lat: 52.3667,
      lng: 4.9,
    },
    // northern ireland
    {
      title: 'Ness Country Park, Northern Ireland',
      lat: 54.9381,
      lng: -7.1882,
    },
    {
      title: "Giant's Causeway, Northern Ireland",
      lat: 55.2408,
      lng: -6.5117,
    },
    {
      title: 'Carrick-a-Rede Rope Bridge, Northern Ireland',
      lat: 55.24,
      lng: -6.331,
    },
    // norway
    {
      title: 'Stavanger, Norway',
      lat: 58.9633,
      lng: 5.7189,
    },
    {
      title: 'Lysebotn, Norway',
      lat: 59.055,
      lng: 6.6494,
    },
    {
      title: 'Preikestolen, Norway',
      lat: 58.9861,
      lng: 6.1886,
    },
    {
      title: 'Oslo, Norway',
      lat: 59.9139,
      lng: 10.7522,
    },
    // poland
    {
      title: 'Warsaw, Poland',
      lat: 52.2297,
      lng: 21.0122,
    },
    {
      title: 'Krakow, Poland',
      lat: 50.0647,
      lng: 19.945,
    },
    // portugal
    {
      title: 'Lisbon, Portugal',
      lat: 38.7139,
      lng: -9.1394,
    },
    {
      title: 'Sintra, Portugal',
      lat: 38.7992,
      lng: -9.3883,
    },
    // romania
    {
      title: 'Bucharest, Romania',
      lat: 44.4268,
      lng: 26.1025,
    },
    // russia
    {
      title: 'St. Petersburg, Russia',
      lat: 59.9343,
      lng: 30.3351,
    },
    {
      title: 'Moscow, Russia',
      lat: 55.7558,
      lng: 37.6173,
    },
    // san marino
    {
      title: 'San Marino',
      lat: 43.9424,
      lng: 12.4578,
    },
    // scotland
    {
      title: 'Glasgow, Scotland',
      lat: 55.8642,
      lng: -4.2518,
    },
    {
      title: 'Loch Ness, Scotland',
      lat: 57.3229,
      lng: -4.4244,
    },
    {
      title: 'Glen Brittle, Scotland',
      lat: 57.25,
      lng: -6.2833,
    },
    {
      title: 'Edinburgh, Scotland',
      lat: 55.9533,
      lng: -3.1883,
    },
    {
      title: 'Stirling, Scotland',
      lat: 56.1165,
      lng: -3.9369,
    },
    {
      title: 'Kyleakin, Scotland',
      lat: 57.2725,
      lng: -5.7288,
    },
    {
      title: 'Glencoe, Scotland',
      lat: 56.6826,
      lng: -5.1023,
    },
    {
      title: 'Quiraing, Scotland',
      lat: 57.6436,
      lng: -6.2653,
    },
    {
      title: 'Old Man of Storr, Scotland',
      lat: 57.5071,
      lng: -6.1831,
    },
    {
      title: 'Kylerhea, Scotland',
      lat: 57.2239,
      lng: -5.6715,
    },
    {
      title: 'Dunvegan, Scotland',
      lat: 57.4366,
      lng: -6.5814,
    },
    {
      title: "Ben A'an, Scotland",
      lat: 56.2431,
      lng: -4.4202,
    },
    {
      title: 'Ben Nevis, Scotland',
      lat: 56.7969,
      lng: -5.0036,
    },
    // serbia
    {
      title: 'Belgrade, Serbia',
      lat: 44.7866,
      lng: 20.4489,
    },
    // spain
    {
      title: 'Barcelona, Spain',
      lat: 41.3851,
      lng: 2.1734,
    },
    {
      title: 'Madrid, Spain',
      lat: 40.4168,
      lng: -3.7038,
    },
    // slovakia
    {
      title: 'Bratislava, Slovakia',
      lat: 48.1439,
      lng: 17.1097,
    },
    // slovenia
    {
      title: 'Ljubljana, Slovenia',
      lat: 46.0556,
      lng: 14.5083,
    },
    {
      title: 'Postojna, Slovenia',
      lat: 45.7759,
      lng: 14.2137,
    },
    {
      title: 'Škocjan Caves, Slovenia',
      lat: 45.6622,
      lng: 13.9883,
    },
    {
      title: 'Piran, Slovenia',
      lat: 45.5284,
      lng: 13.5684,
    },
    {
      title: 'Triglav National Park, Slovenia',
      lat: 46.3333,
      lng: 13.7667,
    },
    {
      title: 'Bled, Slovenia',
      lat: 46.3688,
      lng: 14.114,
    },
    // sweden
    {
      title: 'Stockholm, Sweden',
      lat: 59.3294,
      lng: 18.0686,
    },
    // switzerland
    {
      title: 'Chur, Switzerland',
      lat: 46.85,
      lng: 9.5333,
    },
    {
      title: 'Locarno, Switzerland',
      lat: 46.1667,
      lng: 8.8,
    },
    {
      title: 'Bellinzona, Switzerland',
      lat: 46.2,
      lng: 9.0167,
    },
    {
      title: 'Zurich, Switzerland',
      lat: 47.3769,
      lng: 8.5417,
    },
    {
      title: 'Bern, Switzerland',
      lat: 46.948,
      lng: 7.4474,
    },
    {
      title: 'Neuchatel, Switzerland',
      lat: 46.99,
      lng: 6.9293,
    },
    {
      title: 'Basel, Switzerland',
      lat: 47.5596,
      lng: 7.5886,
    },
    // ukraine
    {
      title: 'Kiev, Ukraine',
      lat: 50.4501,
      lng: 30.5234,
    },
    {
      title: 'Lviv, Ukraine',
      lat: 49.8397,
      lng: 24.0297,
    },
    // vatican city
    {
      title: 'Vatican City',
      lat: 41.9029,
      lng: 12.4534,
    },
    /**
     * middle east
     */
    // cyprus
    {
      title: 'Nicosia, Cyprus',
      lat: 35.1856,
      lng: 33.3823,
    },
    {
      title: 'Paphos, Cyprus',
      lat: 34.772,
      lng: 32.4297,
    },
    {
      title: 'Limassol, Cyprus',
      lat: 34.707,
      lng: 33.0226,
    },
    {
      title: 'Larnaca, Cyprus',
      lat: 34.9003,
      lng: 33.6232,
    },
    {
      title: 'Koilani, Cyprus',
      lat: 34.8438,
      lng: 32.8606,
    },
    {
      title: 'Omodos, Cyprus',
      lat: 34.8493,
      lng: 32.8099,
    },
    // egypt
    {
      title: 'Cairo, Egypt',
      lat: 30.0444,
      lng: 31.2357,
    },
    {
      title: 'Giza, Egypt',
      lat: 30.0131,
      lng: 31.2089,
    },
    {
      title: 'Alexandria, Egypt',
      lat: 31.2001,
      lng: 29.9187,
    },
    {
      title: 'Dahshur, Egypt',
      lat: 29.7932,
      lng: 31.2463,
    },
    // israel
    {
      title: 'Tel Aviv, Israel',
      lat: 32.0853,
      lng: 34.7818,
    },
    {
      title: 'Jerusalem, Israel',
      lat: 31.7683,
      lng: 35.2137,
    },
    {
      title: 'Jaffa, Israel',
      lat: 32.0494,
      lng: 34.7584,
    },
    {
      title: 'Ein Bokek, Israel',
      lat: 31.2002,
      lng: 35.3625,
    },
    {
      title: 'Ein Gedi, Israel',
      lat: 31.4664,
      lng: 35.388,
    },
    // palestine
    {
      title: 'Bethlehem, Palestine',
      lat: 31.7057,
      lng: 35.2006,
    },
    {
      title: 'Jericho, Palestine',
      lat: 31.8711,
      lng: 35.4441,
    },
    // turkey
    {
      title: 'Istanbul, Turkey',
      lat: 41.0082,
      lng: 28.9784,
    },
    // united arab emirates
    {
      title: 'Dubai, United Arab Emirates',
      lat: 25.2048,
      lng: 55.2708,
    },
    {
      title: 'Abu Dhabi, United Arab Emirates',
      lat: 24.4539,
      lng: 54.3773,
    },
    /**
     * north america
     */
    // canada
    {
      title: 'Toronto, Ontario, Canada',
      lat: 43.7,
      lng: -79.4,
    },
    {
      title: 'Niagara Falls, Ontario, Canada',
      lat: 43.1167,
      lng: -79.0667,
    },
    {
      title: 'Algonquin Provincial Park, Ontario, Canada',
      lat: 45.8372,
      lng: -78.3791,
    },
    {
      title: 'Montreal, Quebec, Canada',
      lat: 45.5017,
      lng: -73.5673,
    },
    {
      title: 'Barrie, Ontario, Canada',
      lat: 44.3894,
      lng: -79.6903,
    },
    {
      title: 'Vancouver, British Columbia, Canada',
      lat: 49.2827,
      lng: -123.1207,
    },
    {
      title: 'Nanaimo, British Columbia, Canada',
      lat: 49.1659,
      lng: -123.9401,
    },
    // mexico
    {
      title: 'Costa Maya, Mexico',
      lat: 18.714,
      lng: -87.709,
    },
    {
      title: 'Cozumel, Mexico',
      lat: 20.4167,
      lng: -86.9167,
    },
    // usa
    {
      title: 'Isle Royale National Park, Michigan, USA',
      lat: 48.1,
      lng: -88.55,
    },
    {
      title: 'Orlando, Florida, USA',
      lat: 28.4158,
      lng: -81.2989,
    },
    {
      title: 'Birchwood, Wisconsin, USA',
      lat: 45.7258,
      lng: -91.6089,
    },
    {
      title: 'Madison, Wisconsin, USA',
      lat: 43.0667,
      lng: -89.4,
    },
    {
      title: 'Chicago, Illinois, USA',
      lat: 41.8369,
      lng: -87.6847,
    },
    {
      title: 'Charlotte, North Carolina, USA',
      lat: 35.2269,
      lng: -80.8433,
    },
    {
      title: 'Indianapolis, Indiana, USA',
      lat: 39.791,
      lng: -86.148,
    },
    {
      title: 'Baltimore, Maryland, USA',
      lat: 39.2833,
      lng: -76.6167,
    },
    {
      title: 'Washington D.C., USA',
      lat: 38.9047,
      lng: -77.0164,
    },
    {
      title: 'St. Louis, Missouri, USA',
      lat: 38.6272,
      lng: -90.1978,
    },
    {
      title: 'San Francisco, California, USA',
      lat: 37.7833,
      lng: -122.4167,
    },
    {
      title: 'San Louis Obispo, California, USA',
      lat: 35.2742,
      lng: -120.6631,
    },
    {
      title: 'Muir Woods National Monument, California, USA',
      lat: 37.8919,
      lng: -122.5708,
    },
    {
      title: 'Portland, Oregon, USA',
      lat: 45.52,
      lng: -122.6819,
    },
    {
      title: 'Los Angeles, California, USA',
      lat: 34.05,
      lng: -118.25,
    },
    {
      title: 'Milwaukee, Wisconsin, USA',
      lat: 43.05,
      lng: -87.95,
    },
    {
      title: 'Rochester, Minnesota, USA',
      lat: 44.0234,
      lng: -92.463,
    },
    {
      title: 'Kauai, Hawaii, USA',
      lat: 22.0833,
      lng: -159.5,
    },
    {
      title: 'Maui, Hawaii, USA',
      lat: 20.8,
      lng: -156.3333,
    },
    {
      title: 'Platteville, Wisconsin, USA',
      lat: 42.7371,
      lng: -90.4775,
    },
    {
      title: 'Rockford, Illinois, USA',
      lat: 42.2594,
      lng: -89.0644,
    },
    {
      title: 'Eau Claire, Wisconsin, USA',
      lat: 44.8167,
      lng: -91.5,
    },
    {
      title: 'Appleton, Wisconsin, USA',
      lat: 44.2667,
      lng: -88.4,
    },
    {
      title: 'Duluth, Minnesota, USA',
      lat: 46.8,
      lng: -92.1,
    },
    {
      title: 'Superior, Wisconsin, USA',
      lat: 46.7069,
      lng: -92.0853,
    },
    {
      title: 'Albert Lea, Minnesota, USA',
      lat: 43.6479,
      lng: -93.3688,
    },
    {
      title: 'La Crosse, Wisconsin, USA',
      lat: 43.8133,
      lng: -91.2331,
    },
    {
      title: 'Bella Vista, Arkansas, USA',
      lat: 36.4689,
      lng: -94.2686,
    },
    {
      title: 'Kansas City, Missouri, USA',
      lat: 39.0997,
      lng: -94.5783,
    },
    {
      title: 'Dubuque, Iowa, USA',
      lat: 42.5043,
      lng: -90.6869,
    },
    {
      title: 'Minocqua, Wisconsin, USA',
      lat: 45.8714,
      lng: -89.7111,
    },
    {
      title: 'Grand Canyon, Arizona, USA',
      lat: 36.1,
      lng: -112.1,
    },
    {
      title: 'Sedona, Arizona, USA',
      lat: 34.86,
      lng: -111.7892,
    },
    {
      title: 'Erie, Pennsylvania, USA',
      lat: 42.1296,
      lng: -80.0852,
    },
    {
      title: 'Minneapolis, Minnesota, USA',
      lat: 44.9778,
      lng: -93.265,
    },
    {
      title: 'Bentonville, Arkansas, USA',
      lat: 36.3667,
      lng: -94.2133,
    },
    {
      title: 'Grinnell, Iowa, USA',
      lat: 41.7436,
      lng: -92.7247,
    },
    {
      title: 'Vero Beach, Florida, USA',
      lat: 27.65,
      lng: -80.3833,
    },
    {
      title: 'Lawrence, Kansas, USA',
      lat: 38.9717,
      lng: -95.2353,
    },
    {
      title: 'Bowling Green, Kentucky, USA',
      lat: 36.9817,
      lng: -86.4444,
    },
    {
      title: 'Detroit, Michigan, USA',
      lat: 42.3314,
      lng: -83.0458,
    },
    {
      title: 'Inwood, Iowa, USA',
      lat: 43.3072,
      lng: -96.432,
    },
    {
      title: 'New York, New York, USA',
      lat: 40.7128,
      lng: -74.0059,
    },
    {
      title: 'Boston, Massachusetts, USA',
      lat: 42.3601,
      lng: -71.0589,
    },
    {
      title: 'Winona, Minnesota, USA',
      lat: 44.0554,
      lng: -91.6664,
    },
    {
      title: 'Clover, South Carolina, USA',
      lat: 35.1112,
      lng: -81.2265,
    },
    {
      title: 'Newton, North Carolina, USA',
      lat: 35.6699,
      lng: -81.2215,
    },
    {
      title: 'Louisville, Kentucky, USA',
      lat: 38.2527,
      lng: -85.7585,
    },
    {
      title: 'Tampa, Florida, USA',
      lat: 27.9506,
      lng: -82.4572,
    },
    {
      title: 'Wisconsin Dells, Wisconsin, USA',
      lat: 43.6275,
      lng: -89.771,
    },
    {
      title: 'Milton, Wisconsin, USA',
      lat: 42.7756,
      lng: -88.944,
    },
    {
      title: 'Iola, Wisconsin, USA',
      lat: 44.508,
      lng: -89.1307,
    },
    {
      title: 'Asheville, North Carolina, USA',
      lat: 35.5951,
      lng: -82.5515,
    },
    {
      title: 'Racine, Wisconsin, USA',
      lat: 42.7261,
      lng: -87.7829,
    },
    {
      title: 'Oconomowoc, Wisconsin, USA',
      lat: 43.1117,
      lng: -88.4993,
    },
    {
      title: 'Pewaukee, Wisconsin, USA',
      lat: 43.0542,
      lng: -88.2169,
    },
    {
      title: 'Mazomanie, Wisconsin, USA',
      lat: 43.1767,
      lng: -89.7948,
    },
    {
      title: 'Oregon, Wisconsin, USA',
      lat: 42.9261,
      lng: -89.3846,
    },
    {
      title: 'Kansasville, Wisconsin, USA',
      lat: 42.6825,
      lng: -88.1104,
    },
    {
      title: 'Pardeeville, Wisconsin, USA',
      lat: 43.5378,
      lng: -89.3001,
    },
    {
      title: 'Wonewoc, Wisconsin, USA',
      lat: 43.6528,
      lng: -90.2235,
    },
    {
      title: 'Wausau, Wisconsin, USA',
      lat: 44.9591,
      lng: -89.6301,
    },
    {
      title: 'Slide Rock State Park, Arizona, USA',
      lat: 34.9434,
      lng: -111.7529,
    },
    {
      title: 'Buffalo, New York, USA',
      lat: 42.8864,
      lng: -78.8784,
    },
    {
      title: 'Annapolis, Maryland, USA',
      lat: 38.9784,
      lng: -76.4922,
    },
    {
      title: 'Arlington, Virginia, USA',
      lat: 38.8783,
      lng: -77.0687,
    },
    {
      title: 'Juneau, Alaska, USA',
      lat: 58.3019,
      lng: -134.4197,
    },
    {
      title: 'Skagway, Alaska, USA',
      lat: 59.4554,
      lng: -135.3153,
    },
    {
      title: 'Ketchikan, Alaska, USA',
      lat: 55.3422,
      lng: -131.6461,
    },
    {
      title: 'Anchorage, Alaska, USA',
      lat: 61.2181,
      lng: -149.9003,
    },
    {
      title: 'Seattle, Washington, USA',
      lat: 47.6062,
      lng: -122.3321,
    },
    {
      title: 'Corbin, Kentucky, USA',
      lat: 36.9487,
      lng: -84.0969,
    },
    /**
     * south america
     */
    // argetina
    // {
    //     title: 'Cordoba, Argentina',
    //     lat: -31.4201,
    //     lng: -64.1888
    // },
    // {
    //     title: 'Mendoza, Argentina',
    //     lat: -32.8895,
    //     lng: -68.8458
    // },
    // {
    //     title: 'Cosquín, Argentina',
    //     lat: -31.2468,
    //     lng: -64.4704
    // },
    // chile
    // {
    //     title: 'Santiago, Chile',
    //     lat: -33.4489,
    //     lng: -70.6693
    // },
    // {
    //     title: 'Valparaíso, Chile',
    //     lat: -33.0472,
    //     lng: -71.6127
    // },
  ];
}
