// ===================================================
// WATERPROOFING SERVICES - CITIES, AREAS & KEYWORDS
// Service Area: Within 200 km of Vadodara, Gujarat
// ===================================================

export const BUSINESS_INFO = {
  name: "India Waterproofing",
  phone: "919427456951",
  displayPhone: "+91 94274 56951",
  email: "info@waterproofingvadodara.com",
  whatsapp: "919427456951",
  tagline: "Professional Waterproofing Solutions in Vadodara & Nearby Cities",
  baseCity: "Vadodara",
  state: "Gujarat",
  country: "India",
  domain: "https://waterproofingvadodara.com",
}

// ===================================================
// CITIES & AREAS WITHIN 200 KM OF VADODARA
// ===================================================

export interface CityData {
  name: string
  distanceKm: number
  areas: string[]
}

export const SERVICE_CITIES: CityData[] = [
  {
    name: "Vadodara (Baroda)",
    distanceKm: 0,
    areas: [
      "Alkapuri", "Fatehgunj", "Sayajigunj", "Manjalpur", "Karelibaug",
      "Tandalja", "Akota", "Gotri", "Vasna", "Waghodia Road",
      "Makarpura", "Harni", "Sama", "Subhanpura", "Tarsali",
      "Atladara", "Gorwa", "Old Padra Road", "Race Course", "Ellora Park",
      "Pratap Nagar", "Nizampura", "Bhayli", "Bil", "Sevasi",
      "Kalali", "Danteshwar", "Bajwa", "Gotri", "Laxmipura",
      "Chhani", "Maneja", "Vemali", "Undera", "Warasiya",
    ],
  },
  {
    name: "Ahmedabad",
    distanceKm: 110,
    areas: [
      "Satellite", "Prahlad Nagar", "SG Highway", "Bopal", "Vastrapur",
      "Navrangpura", "Maninagar", "Gota", "Chandkheda", "Motera",
      "Thaltej", "Bodakdev", "Ambawadi", "Paldi", "Naranpura",
      "Sabarmati", "Shahibaug", "Memnagar", "Vejalpur", "South Bopal",
      "Science City", "Shela", "Tragad", "New CG Road", "Ashram Road",
    ],
  },
  {
    name: "Surat",
    distanceKm: 160,
    areas: [
      "Vesu", "Adajan", "Athwa", "Piplod", "Pal",
      "Althan", "City Light", "Katargam", "Varachha", "Udhna",
      "Dumas", "Rander", "Parle Point", "Ghod Dod Road", "Ring Road",
      "Dindoli", "Bhatar", "Majura Gate", "Nanpura", "Sagrampura",
    ],
  },
  {
    name: "Anand",
    distanceKm: 40,
    areas: [
      "Vallabh Vidyanagar", "Vidyanagar", "Karamsad", "Bakrol",
      "Gamdi", "Anand Station Road", "Lambhvel", "Grid Road",
    ],
  },
  {
    name: "Nadiad",
    distanceKm: 50,
    areas: [
      "Nadiad Station Road", "Santram Mandir Road", "Dabhan",
      "Uttarsanda", "Kanjari", "Piplag",
    ],
  },
  {
    name: "Bharuch",
    distanceKm: 75,
    areas: [
      "Bharuch City", "Station Road", "Zadeshwar", "Ankleshwar Road",
      "Bholav", "Dahej Road", "Valia Road",
    ],
  },
  {
    name: "Ankleshwar",
    distanceKm: 90,
    areas: [
      "GIDC Ankleshwar", "Ankleshwar Station", "Panoli",
      "Jageshwar", "Rajpardi",
    ],
  },
  {
    name: "Godhra",
    distanceKm: 65,
    areas: [
      "Godhra City", "Station Road", "Panchmahal",
      "Lunawada Road", "Halol Road",
    ],
  },
  {
    name: "Halol",
    distanceKm: 45,
    areas: [
      "Halol Industrial Area", "Halol Town", "Pavagadh Road",
    ],
  },
  {
    name: "Gandhinagar",
    distanceKm: 130,
    areas: [
      "Sector 1-30", "Infocity", "GIFT City", "Kudasan",
      "Koba", "Chiloda", "Sargasan", "Raysan",
    ],
  },
  {
    name: "Mehsana",
    distanceKm: 170,
    areas: [
      "Mehsana City", "Modhera Road", "Highway Road",
      "Unjha", "Visnagar",
    ],
  },
  {
    name: "Kheda",
    distanceKm: 55,
    areas: [
      "Kheda City", "Thasra", "Kathlal", "Mahudha",
    ],
  },
  {
    name: "Cambay (Khambhat)",
    distanceKm: 60,
    areas: [
      "Khambhat City", "Tarapur", "Petlad Road",
    ],
  },
  {
    name: "Navsari",
    distanceKm: 190,
    areas: [
      "Navsari City", "Dudhia Talav", "Lunsikui", "Eru Road",
    ],
  },
  {
    name: "Valsad",
    distanceKm: 200,
    areas: [
      "Valsad City", "Tithal", "Atul", "Dharampur Road",
    ],
  },
  {
    name: "Dahod",
    distanceKm: 120,
    areas: [
      "Dahod City", "Jhalod Road", "Limkheda",
    ],
  },
  {
    name: "Chhota Udaipur",
    distanceKm: 95,
    areas: [
      "Chhota Udaipur Town", "Bodeli", "Sankheda",
    ],
  },
  {
    name: "Rajpipla",
    distanceKm: 100,
    areas: [
      "Rajpipla Town", "Narmada District",
    ],
  },
  {
    name: "Dabhoi",
    distanceKm: 30,
    areas: [
      "Dabhoi Town", "Dabhoi Fort Area",
    ],
  },
  {
    name: "Padra",
    distanceKm: 15,
    areas: [
      "Padra Town", "Padra Industrial Area",
    ],
  },
  {
    name: "Karjan",
    distanceKm: 25,
    areas: [
      "Karjan Town", "Miyagam",
    ],
  },
  {
    name: "Savli",
    distanceKm: 20,
    areas: [
      "Savli Town", "Savli GIDC",
    ],
  },
  {
    name: "Waghodia",
    distanceKm: 25,
    areas: [
      "Waghodia Town",
    ],
  },
  {
    name: "Sanand",
    distanceKm: 100,
    areas: [
      "Sanand Town", "Sanand GIDC",
    ],
  },
  {
    name: "Kalol",
    distanceKm: 120,
    areas: [
      "Kalol Town", "Kalol GIDC",
    ],
  },
  {
    name: "Petlad",
    distanceKm: 50,
    areas: [
      "Petlad Town", "Sojitra",
    ],
  },
  {
    name: "Umreth",
    distanceKm: 55,
    areas: [
      "Umreth Town",
    ],
  },
  {
    name: "Borsad",
    distanceKm: 60,
    areas: [
      "Borsad Town",
    ],
  },
  {
    name: "Dholka",
    distanceKm: 90,
    areas: [
      "Dholka Town",
    ],
  },
  {
    name: "Himmatnagar",
    distanceKm: 150,
    areas: [
      "Himmatnagar Town", "Idar",
    ],
  },
  {
    name: "Modasa",
    distanceKm: 130,
    areas: [
      "Modasa Town", "Bayad",
    ],
  },
  {
    name: "Patan",
    distanceKm: 180,
    areas: [
      "Patan City", "Siddhpur",
    ],
  },
  {
    name: "Bardoli",
    distanceKm: 140,
    areas: [
      "Bardoli Town", "Mandvi",
    ],
  },
  {
    name: "Vapi",
    distanceKm: 190,
    areas: [
      "Vapi GIDC", "Vapi Town", "Daman Road",
    ],
  },
  {
    name: "Silvassa",
    distanceKm: 170,
    areas: [
      "Silvassa Town", "Dadra & Nagar Haveli",
    ],
  },
  {
    name: "Daman",
    distanceKm: 180,
    areas: [
      "Daman City", "Nani Daman", "Moti Daman",
    ],
  },
  {
    name: "Jambusar",
    distanceKm: 55,
    areas: [
      "Jambusar Town",
    ],
  },
  {
    name: "Dahej",
    distanceKm: 80,
    areas: [
      "Dahej Port Area", "Dahej SEZ",
    ],
  },
]

// ===================================================
// 50+ SEO KEYWORDS FOR WATERPROOFING BUSINESS
// ===================================================

export const SEO_KEYWORDS = {
  // Primary Keywords
  primary: [
    "waterproofing services in Vadodara",
    "waterproofing contractor Vadodara",
    "waterproofing company Vadodara",
    "best waterproofing in Vadodara",
    "waterproofing solutions Vadodara",
    "waterproofing specialist Vadodara",
    "waterproofing near me",
    "waterproofing Gujarat",
  ],

  // Service-Specific Keywords
  serviceSpecific: [
    "terrace waterproofing Vadodara",
    "roof waterproofing Vadodara",
    "basement waterproofing Vadodara",
    "bathroom waterproofing Vadodara",
    "wall waterproofing Vadodara",
    "exterior wall waterproofing Vadodara",
    "tank waterproofing Vadodara",
    "swimming pool waterproofing Vadodara",
    "foundation waterproofing Vadodara",
    "balcony waterproofing Vadodara",
    "slab waterproofing Vadodara",
    "concrete waterproofing Vadodara",
    "injection grouting Vadodara",
    "crack filling waterproofing Vadodara",
    "dampness treatment Vadodara",
    "seepage treatment Vadodara",
    "water leakage repair Vadodara",
    "leakage solution Vadodara",
    "anti-seepage treatment Vadodara",
    "moisture proofing Vadodara",
  ],

  // Material/Method Keywords
  materialMethod: [
    "Dr Fixit waterproofing Vadodara",
    "STP waterproofing Vadodara",
    "bitumen waterproofing Vadodara",
    "membrane waterproofing Vadodara",
    "polyurethane waterproofing Vadodara",
    "epoxy waterproofing Vadodara",
    "cementitious waterproofing Vadodara",
    "elastomeric waterproofing Vadodara",
    "APP membrane waterproofing",
    "liquid waterproofing membrane Vadodara",
    "crystalline waterproofing Vadodara",
    "acrylic waterproofing coating Vadodara",
  ],

  // Property Type Keywords
  propertyType: [
    "waterproofing for home Vadodara",
    "waterproofing for flat Vadodara",
    "waterproofing for bungalow Vadodara",
    "waterproofing for commercial building Vadodara",
    "waterproofing for factory Vadodara",
    "waterproofing for warehouse Vadodara",
    "waterproofing for office Vadodara",
    "waterproofing for hospital Vadodara",
    "waterproofing for school Vadodara",
    "waterproofing for apartment Vadodara",
    "industrial waterproofing Gujarat",
    "residential waterproofing Vadodara",
    "commercial waterproofing Gujarat",
  ],

  // City-Specific Keywords (nearby cities)
  citySpecific: [
    "waterproofing services Ahmedabad",
    "waterproofing services Surat",
    "waterproofing services Anand",
    "waterproofing services Nadiad",
    "waterproofing services Bharuch",
    "waterproofing services Godhra",
    "waterproofing services Gandhinagar",
    "waterproofing contractor Ahmedabad",
    "waterproofing contractor Surat",
    "waterproofing contractor Anand",
    "waterproofing contractor Bharuch",
    "roof leakage solution Vadodara",
    "waterproofing services in Gujarat",
    "best waterproofing company Gujarat",
    "waterproofing expert near Vadodara",
  ],

  // Long-Tail Keywords
  longTail: [
    "how to stop water leakage from terrace in Vadodara",
    "best waterproofing for terrace in Gujarat",
    "waterproofing cost in Vadodara per sq ft",
    "waterproofing price in Vadodara",
    "cheap waterproofing services Vadodara",
    "affordable waterproofing Vadodara",
    "guaranteed waterproofing services Vadodara",
    "waterproofing with warranty Vadodara",
    "10 year warranty waterproofing Vadodara",
    "monsoon waterproofing Vadodara",
    "pre-monsoon waterproofing treatment Vadodara",
    "old building waterproofing Vadodara",
    "new construction waterproofing Vadodara",
    "waterproofing consultation free Vadodara",
    "water leakage from ceiling repair Vadodara",
    "bathroom leakage without breaking tiles Vadodara",
  ],
}

// All keywords flattened for meta tags
export const ALL_KEYWORDS: string[] = [
  ...SEO_KEYWORDS.primary,
  ...SEO_KEYWORDS.serviceSpecific,
  ...SEO_KEYWORDS.materialMethod,
  ...SEO_KEYWORDS.propertyType,
  ...SEO_KEYWORDS.citySpecific,
  ...SEO_KEYWORDS.longTail,
]

// ===================================================
// WATERPROOFING SERVICES LIST
// ===================================================

export const WATERPROOFING_SERVICES = [
  {
    title: "Terrace Waterproofing",
    description: "Complete terrace waterproofing with Dr Fixit, bitumen, or membrane coating. Stops leakage permanently.",
    icon: "🏠",
  },
  {
    title: "Roof Waterproofing",
    description: "Advanced roof waterproofing for residential & commercial buildings. 10-year warranty available.",
    icon: "🏢",
  },
  {
    title: "Basement Waterproofing",
    description: "Keep your basement dry with injection grouting, membrane, and crystalline waterproofing solutions.",
    icon: "🏗️",
  },
  {
    title: "Bathroom Waterproofing",
    description: "Leakage-proof your bathroom without breaking tiles. Advanced chemical treatment & sealants.",
    icon: "🚿",
  },
  {
    title: "Wall Waterproofing",
    description: "External & internal wall waterproofing to prevent dampness, seepage, and paint peeling.",
    icon: "🧱",
  },
  {
    title: "Tank & Pool Waterproofing",
    description: "Water tank and swimming pool waterproofing with food-grade safe coatings.",
    icon: "🏊",
  },
  {
    title: "Injection Grouting",
    description: "High-pressure injection grouting to seal cracks and stop active water leakage instantly.",
    icon: "💉",
  },
  {
    title: "Dampness Treatment",
    description: "Eliminate dampness from walls, ceilings, and floors. Anti-fungal and anti-mold treatment included.",
    icon: "💧",
  },
]

// ===================================================
// IMAGE GALLERY DATA (Unsplash/Pexels URLs)
// ===================================================

export const GALLERY_IMAGES = [
  {
    src: "/gallery/iStock-1439288662-1920x1080.webp",
    alt: "Professional waterproofing work on building terrace",
    caption: "Terrace Waterproofing - Vadodara",
  },
  {
    src: "/gallery/idn-worker-apply-waterproofing-01_16-9-e1764423780499.webp",
    alt: "Worker applying waterproofing membrane coating",
    caption: "Waterproofing Membrane Application",
  },
  {
    src: "/gallery/Application-of-Primer-Roof-Waterproofing-1024x768.webp",
    alt: "Primer application for roof waterproofing",
    caption: "Roof Waterproofing Primer",
  },
  {
    src: "/gallery/Main-1.webp",
    alt: "Complete waterproofing solution for rooftop",
    caption: "Rooftop Waterproofing Project",
  },
  {
    src: "/gallery/Waterproofing-the-roofs.webp",
    alt: "Professional roof waterproofing in progress",
    caption: "Roof Waterproofing Work",
  },
  {
    src: "/gallery/42-Waterproofing-with-Cement.jpg",
    alt: "Cementitious waterproofing application on surface",
    caption: "Cement Waterproofing Treatment",
  },
  {
    src: "/gallery/waterproofing-services.jpg",
    alt: "Waterproofing services for residential building",
    caption: "Residential Waterproofing",
  },
  {
    src: "/gallery/waterproofing-services (1).jpg",
    alt: "Professional waterproofing contractors at work",
    caption: "Commercial Waterproofing Project",
  },
  {
    src: "/gallery/images.jpeg",
    alt: "Waterproofing coating applied on concrete slab",
    caption: "Slab Waterproofing Solution",
  },
]

// ===================================================
// FAQ DATA
// ===================================================

export const WATERPROOFING_FAQS = [
  {
    question: "What is the cost of waterproofing per sq ft in Vadodara?",
    answer: "Waterproofing cost in Vadodara ranges from ₹25 to ₹80 per sq ft depending on the type of waterproofing, materials used, and area condition. Terrace waterproofing typically costs ₹30-50/sq ft, while basement waterproofing can range from ₹50-80/sq ft.",
  },
  {
    question: "How long does waterproofing last?",
    answer: "Professional waterproofing treatments typically last 8-15 years depending on the method used. Membrane waterproofing lasts 10-15 years, cementitious coating lasts 8-10 years, and chemical treatment lasts 5-8 years. We offer up to 10-year warranty on our work.",
  },
  {
    question: "Can you fix leakage without breaking tiles?",
    answer: "Yes! We use advanced injection grouting and chemical treatment methods that can fix bathroom and terrace leakage without breaking any tiles. This saves time and cost significantly.",
  },
  {
    question: "Do you provide waterproofing services outside Vadodara?",
    answer: "Yes, we serve all cities within 200 km of Vadodara including Ahmedabad, Surat, Anand, Nadiad, Bharuch, Godhra, Gandhinagar, and many more. Contact us for service availability in your area.",
  },
  {
    question: "What brands/materials do you use for waterproofing?",
    answer: "We use premium brands like Dr Fixit, STP, Fosroc, BASF, Sika, and others. The material selection depends on the specific requirement — terrace, basement, bathroom, or wall waterproofing.",
  },
  {
    question: "Is waterproofing necessary for new construction?",
    answer: "Absolutely! Pre-construction waterproofing is much more effective and cheaper than post-construction treatment. We recommend waterproofing during construction for terraces, basements, bathrooms, and external walls.",
  },
  {
    question: "How do I know if my building needs waterproofing?",
    answer: "Common signs include: water stains on walls/ceiling, paint peeling, dampness/musty smell, mold/fungus growth, visible cracks with water seepage, and water pooling on terrace. If you notice any of these, call us for a free inspection.",
  },
  {
    question: "Do you offer free inspection/consultation?",
    answer: "Yes! We offer free site inspection and consultation in Vadodara and nearby areas. Our expert will visit your property, assess the problem, and provide a detailed quotation with recommended solutions.",
  },
]

// ===================================================
// TESTIMONIALS
// ===================================================

export const TESTIMONIALS = [
  {
    name: "Rajesh Patel",
    location: "Alkapuri, Vadodara",
    text: "Excellent terrace waterproofing work! No leakage even after heavy monsoon rains. Highly recommended.",
    rating: 5,
  },
  {
    name: "Priya Shah",
    location: "Satellite, Ahmedabad",
    text: "They fixed our basement seepage problem perfectly. Professional team and quality materials used.",
    rating: 5,
  },
  {
    name: "Mehul Desai",
    location: "Adajan, Surat",
    text: "Bathroom leakage fixed without breaking tiles! Saved us a lot of money. Great service.",
    rating: 5,
  },
  {
    name: "Amit Joshi",
    location: "Anand",
    text: "Very professional approach. They inspected the site, explained everything clearly, and completed work on time.",
    rating: 4,
  },
  {
    name: "Kavita Nair",
    location: "Gotri, Vadodara",
    text: "Our factory roof was leaking badly. They used membrane waterproofing and it's been perfect for 2 years now.",
    rating: 5,
  },
  {
    name: "Suresh Sharma",
    location: "Bharuch",
    text: "Affordable pricing and excellent quality. Wall dampness completely gone after their treatment.",
    rating: 5,
  },
]
