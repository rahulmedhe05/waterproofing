// ===================================================
// PAGE DATA GENERATOR - 150+ Unique Pages
// India Waterproofing - waterproofingvadodara.com
// ===================================================

import { BUSINESS_INFO, SERVICE_CITIES, WATERPROOFING_SERVICES, WATERPROOFING_FAQS } from "./waterproofing-data"

// ===================================================
// TYPES
// ===================================================

export interface PageData {
  slug: string
  type: "area" | "city" | "service" | "service-city"
  title: string
  metaTitle: string
  metaDescription: string
  keywords: string[]
  heroHeading: string
  heroSubheading: string
  heroBadge: string
  introTitle: string
  introText: string
  detailSections: { title: string; text: string }[]
  benefits: string[]
  faqs: { question: string; answer: string }[]
  nearbyAreas: string[]
  breadcrumb: { label: string; href: string }[]
  cityName?: string
  areaName?: string
  serviceName?: string
}

// ===================================================
// VADODARA AREAS - 40+
// ===================================================

const VADODARA_AREAS = [
  "Alkapuri", "Fatehgunj", "Sayajigunj", "Manjalpur", "Karelibaug",
  "Tandalja", "Akota", "Gotri", "Vasna", "Waghodia Road",
  "Makarpura", "Harni", "Sama", "Subhanpura", "Tarsali",
  "Atladara", "Gorwa", "Old Padra Road", "Race Course", "Ellora Park",
  "Pratap Nagar", "Nizampura", "Bhayli", "Bil", "Sevasi",
  "Kalali", "Danteshwar", "Bajwa", "Laxmipura", "Chhani",
  "Maneja", "Vemali", "Undera", "Warasiya", "Diwalipura",
  "Jetalpur", "Productivity Road", "Ajwa Road", "TP 13", "Shubhanpura",
  "Makarpura GIDC", "Nandesari", "Kareli", "Panigate",
]

// ===================================================
// NEARBY CITIES WITH AREAS
// ===================================================

const NEARBY_CITIES = [
  { name: "Ahmedabad", slug: "ahmedabad", distance: 110, areas: ["Satellite", "SG Highway", "Bopal", "Prahlad Nagar", "Navrangpura", "Gota", "Chandkheda"] },
  { name: "Surat", slug: "surat", distance: 160, areas: ["Vesu", "Adajan", "Athwa", "City Light", "Pal", "Varachha", "Katargam"] },
  { name: "Anand", slug: "anand", distance: 40, areas: ["Vallabh Vidyanagar", "Karamsad", "Bakrol", "Gamdi"] },
  { name: "Nadiad", slug: "nadiad", distance: 50, areas: ["Station Road", "Santram Road", "Dabhan", "Uttarsanda"] },
  { name: "Bharuch", slug: "bharuch", distance: 75, areas: ["Zadeshwar", "Bholav", "Dahej Road", "Station Road"] },
  { name: "Ankleshwar", slug: "ankleshwar", distance: 90, areas: ["GIDC", "Panoli", "Jageshwar"] },
  { name: "Godhra", slug: "godhra", distance: 65, areas: ["City Area", "Station Road", "Lunawada Road"] },
  { name: "Halol", slug: "halol", distance: 45, areas: ["Industrial Area", "Pavagadh Road"] },
  { name: "Gandhinagar", slug: "gandhinagar", distance: 130, areas: ["Infocity", "GIFT City", "Kudasan", "Sargasan"] },
  { name: "Mehsana", slug: "mehsana", distance: 170, areas: ["Modhera Road", "Unjha", "Visnagar"] },
  { name: "Kheda", slug: "kheda", distance: 55, areas: ["Thasra", "Kathlal", "Mahudha"] },
  { name: "Khambhat", slug: "khambhat", distance: 60, areas: ["Khambhat City", "Tarapur"] },
  { name: "Navsari", slug: "navsari", distance: 190, areas: ["Dudhia Talav", "Lunsikui"] },
  { name: "Valsad", slug: "valsad", distance: 200, areas: ["Tithal", "Atul", "Dharampur"] },
  { name: "Dahod", slug: "dahod", distance: 120, areas: ["Jhalod Road", "Limkheda"] },
  { name: "Chhota Udaipur", slug: "chhota-udaipur", distance: 95, areas: ["Bodeli", "Sankheda"] },
  { name: "Rajpipla", slug: "rajpipla", distance: 100, areas: ["Rajpipla Town", "Narmada"] },
  { name: "Dabhoi", slug: "dabhoi", distance: 30, areas: ["Dabhoi Fort Area", "Town Center"] },
  { name: "Padra", slug: "padra", distance: 15, areas: ["Town Center", "Industrial Area"] },
  { name: "Karjan", slug: "karjan", distance: 25, areas: ["Miyagam", "Town Center"] },
  { name: "Savli", slug: "savli", distance: 20, areas: ["GIDC", "Town Center"] },
  { name: "Waghodia", slug: "waghodia", distance: 25, areas: ["Town Center"] },
  { name: "Sanand", slug: "sanand", distance: 100, areas: ["GIDC", "Town Center"] },
  { name: "Kalol", slug: "kalol", distance: 120, areas: ["GIDC", "Town Center"] },
  { name: "Petlad", slug: "petlad", distance: 50, areas: ["Sojitra", "Town Center"] },
  { name: "Umreth", slug: "umreth", distance: 55, areas: ["Town Center"] },
  { name: "Borsad", slug: "borsad", distance: 60, areas: ["Town Center"] },
  { name: "Dholka", slug: "dholka", distance: 90, areas: ["Town Center"] },
  { name: "Himmatnagar", slug: "himmatnagar", distance: 150, areas: ["Idar", "Town Center"] },
  { name: "Modasa", slug: "modasa", distance: 130, areas: ["Bayad", "Town Center"] },
  { name: "Patan", slug: "patan", distance: 180, areas: ["Siddhpur", "Town Center"] },
  { name: "Bardoli", slug: "bardoli", distance: 140, areas: ["Mandvi", "Town Center"] },
  { name: "Vapi", slug: "vapi", distance: 190, areas: ["GIDC", "Daman Road"] },
  { name: "Silvassa", slug: "silvassa", distance: 170, areas: ["Dadra & Nagar Haveli"] },
  { name: "Daman", slug: "daman", distance: 180, areas: ["Nani Daman", "Moti Daman"] },
  { name: "Jambusar", slug: "jambusar", distance: 55, areas: ["Town Center"] },
  { name: "Dahej", slug: "dahej", distance: 80, areas: ["Port Area", "SEZ"] },
]

// ===================================================
// SERVICES FOR KEYWORD PAGES
// ===================================================

const KEYWORD_SERVICES = [
  { name: "Terrace Waterproofing", slug: "terrace-waterproofing", icon: "🏠" },
  { name: "Roof Waterproofing", slug: "roof-waterproofing", icon: "🏢" },
  { name: "Basement Waterproofing", slug: "basement-waterproofing", icon: "🏗️" },
  { name: "Bathroom Waterproofing", slug: "bathroom-waterproofing", icon: "🚿" },
  { name: "Wall Waterproofing", slug: "wall-waterproofing", icon: "🧱" },
  { name: "External Wall Waterproofing", slug: "external-wall-waterproofing", icon: "🏘️" },
  { name: "Tank Waterproofing", slug: "tank-waterproofing", icon: "🪣" },
  { name: "Swimming Pool Waterproofing", slug: "swimming-pool-waterproofing", icon: "🏊" },
  { name: "Foundation Waterproofing", slug: "foundation-waterproofing", icon: "🏛️" },
  { name: "Balcony Waterproofing", slug: "balcony-waterproofing", icon: "🏡" },
  { name: "Slab Waterproofing", slug: "slab-waterproofing", icon: "🔲" },
  { name: "Concrete Waterproofing", slug: "concrete-waterproofing", icon: "🧊" },
  { name: "Injection Grouting", slug: "injection-grouting", icon: "💉" },
  { name: "Crack Filling", slug: "crack-filling", icon: "🔧" },
  { name: "Dampness Treatment", slug: "dampness-treatment", icon: "💧" },
  { name: "Seepage Treatment", slug: "seepage-treatment", icon: "🌊" },
  { name: "Water Leakage Repair", slug: "water-leakage-repair", icon: "🔨" },
  { name: "Leakage Solution", slug: "leakage-solution", icon: "✅" },
  { name: "Moisture Proofing", slug: "moisture-proofing", icon: "🛡️" },
  { name: "Anti Seepage Treatment", slug: "anti-seepage-treatment", icon: "🚫" },
  { name: "Dr Fixit Waterproofing", slug: "dr-fixit-waterproofing", icon: "💊" },
  { name: "Bitumen Waterproofing", slug: "bitumen-waterproofing", icon: "⬛" },
  { name: "Membrane Waterproofing", slug: "membrane-waterproofing", icon: "📋" },
  { name: "Polyurethane Waterproofing", slug: "polyurethane-waterproofing", icon: "🧪" },
  { name: "Epoxy Waterproofing", slug: "epoxy-waterproofing", icon: "🧫" },
  { name: "Cementitious Waterproofing", slug: "cementitious-waterproofing", icon: "🧱" },
  { name: "Waterproofing Contractor", slug: "waterproofing-contractor", icon: "👷" },
  { name: "Waterproofing Company", slug: "waterproofing-company", icon: "🏢" },
  { name: "Best Waterproofing", slug: "best-waterproofing", icon: "🏆" },
  { name: "Affordable Waterproofing", slug: "affordable-waterproofing", icon: "💰" },
  { name: "Waterproofing Cost", slug: "waterproofing-cost", icon: "📊" },
  { name: "Waterproofing Price", slug: "waterproofing-price", icon: "🏷️" },
  { name: "Waterproofing With Warranty", slug: "waterproofing-with-warranty", icon: "📜" },
  { name: "Pre Monsoon Waterproofing", slug: "pre-monsoon-waterproofing", icon: "🌧️" },
  { name: "Old Building Waterproofing", slug: "old-building-waterproofing", icon: "🏚️" },
  { name: "New Construction Waterproofing", slug: "new-construction-waterproofing", icon: "🏗️" },
  { name: "Industrial Waterproofing", slug: "industrial-waterproofing", icon: "🏭" },
  { name: "Residential Waterproofing", slug: "residential-waterproofing", icon: "🏠" },
  { name: "Commercial Waterproofing", slug: "commercial-waterproofing", icon: "🏢" },
  { name: "Waterproofing for Home", slug: "waterproofing-for-home", icon: "🏡" },
  { name: "Waterproofing for Flat", slug: "waterproofing-for-flat", icon: "🏢" },
  { name: "Waterproofing for Bungalow", slug: "waterproofing-for-bungalow", icon: "🏘️" },
  { name: "Waterproofing for Factory", slug: "waterproofing-for-factory", icon: "🏭" },
  { name: "Waterproofing for Warehouse", slug: "waterproofing-for-warehouse", icon: "📦" },
  { name: "Waterproofing for Office", slug: "waterproofing-for-office", icon: "🏢" },
  { name: "Waterproofing for Hospital", slug: "waterproofing-for-hospital", icon: "🏥" },
  { name: "Waterproofing for School", slug: "waterproofing-for-school", icon: "🏫" },
  { name: "Bathroom Leakage Without Breaking Tiles", slug: "bathroom-leakage-without-breaking-tiles", icon: "🚿" },
  { name: "Water Leakage From Ceiling Repair", slug: "water-leakage-from-ceiling-repair", icon: "💧" },
  { name: "Waterproofing Near Me", slug: "waterproofing-near-me", icon: "📍" },
  { name: "Waterproofing Services Gujarat", slug: "waterproofing-services-gujarat", icon: "🗺️" },
  { name: "Elastomeric Waterproofing", slug: "elastomeric-waterproofing", icon: "🔬" },
  { name: "Acrylic Waterproofing Coating", slug: "acrylic-waterproofing-coating", icon: "🎨" },
  { name: "Crystalline Waterproofing", slug: "crystalline-waterproofing", icon: "💎" },
  { name: "APP Membrane Waterproofing", slug: "app-membrane-waterproofing", icon: "📐" },
]

// ===================================================
// CONTENT TEMPLATES for unique content per page
// ===================================================

function slugify(text: string): string {
  return text.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/(^-|-$)/g, "")
}

const introVariants = [
  (loc: string, svc?: string) => `Are you facing water leakage, dampness, or seepage issues in ${loc}? ${BUSINESS_INFO.name} provides top-quality ${svc || "waterproofing"} solutions for homes, offices, and commercial properties. Our certified experts use premium materials from brands like Dr Fixit, Fosroc, and Sika to ensure long-lasting protection against water damage.`,
  (loc: string, svc?: string) => `Looking for reliable ${svc || "waterproofing"} services in ${loc}? ${BUSINESS_INFO.name} is your trusted partner for all types of waterproofing needs. Whether it's a leaking terrace, damp walls, or a wet basement, our experienced team delivers permanent solutions with a 10-year warranty on all work.`,
  (loc: string, svc?: string) => `${BUSINESS_INFO.name} brings professional ${svc || "waterproofing"} expertise to ${loc}. We specialize in solving water leakage problems for residential, commercial, and industrial properties. Our advanced techniques and premium materials ensure your property stays dry and protected for years to come.`,
  (loc: string, svc?: string) => `Don't let water damage ruin your property in ${loc}! ${BUSINESS_INFO.name} offers comprehensive ${svc || "waterproofing"} services backed by industry-leading materials and a 10-year warranty. From inspection to completion, we provide end-to-end solutions that stop leakage permanently.`,
  (loc: string, svc?: string) => `Water leakage is a common problem in ${loc} especially during monsoon season. ${BUSINESS_INFO.name} provides expert ${svc || "waterproofing"} treatment that keeps your property safe from water damage throughout the year. We serve residential, commercial, and industrial clients with customized solutions.`,
]

const benefitSets = [
  ["10-year warranty on all waterproofing work", "Free site inspection and consultation", "Premium materials from Dr Fixit, Fosroc, Sika", "Experienced team with 15+ years expertise", "Same-day response and quick turnaround", "Affordable pricing with no hidden charges", "500+ successful projects completed", "Serving 35+ cities in Gujarat"],
  ["Guaranteed leak-proof solutions", "No-obligation free inspection", "ISO-certified waterproofing materials", "Trained and certified applicators", "24-hour emergency service available", "Transparent pricing — get quote before work", "Before & after documentation provided", "Post-work maintenance support"],
  ["Up to 10-year product and service warranty", "Site visit within 24 hours of inquiry", "Eco-friendly waterproofing solutions", "Minimal disruption to your daily life", "Works on both old and new buildings", "Custom solutions for every property type", "Quality assurance at every step", "Pan-Gujarat service coverage"],
]

function generateAreaPage(area: string, index: number): PageData {
  const slug = `waterproofing-in-${slugify(area)}`
  const variantIdx = index % introVariants.length
  const benefitIdx = index % benefitSets.length
  const nearbyAreas = VADODARA_AREAS.filter(a => a !== area).slice(0, 8)

  return {
    slug,
    type: "area",
    title: `Waterproofing Services in ${area}, Vadodara`,
    metaTitle: `Waterproofing in ${area}, Vadodara | 10-Year Warranty`,
    metaDescription: `Expert waterproofing in ${area}, Vadodara. Terrace, roof, basement & bathroom solutions. 10-year warranty. Free inspection. Call now!`,
    keywords: [
      `waterproofing in ${area}`, `waterproofing services ${area} Vadodara`, `terrace waterproofing ${area}`,
      `roof waterproofing ${area}`, `basement waterproofing ${area}`, `bathroom waterproofing ${area}`,
      `wall waterproofing ${area}`, `leakage solution ${area}`, `waterproofing contractor ${area}`,
      `dampness treatment ${area} Vadodara`, `seepage treatment ${area}`, `best waterproofing ${area}`,
      `waterproofing near me ${area}`, `water leakage repair ${area}`, `${area} waterproofing cost`,
      `${area} waterproofing company`, `waterproofing specialist ${area}`, `seepage solution ${area}`,
    ],
    heroHeading: `Professional Waterproofing in ${area}, Vadodara`,
    heroSubheading: `Stop water leakage permanently in ${area}! Expert terrace, roof, basement & bathroom waterproofing with 10-year warranty.`,
    heroBadge: `🛡️ Serving ${area} | Free Inspection`,
    introTitle: `Best Waterproofing Services in ${area}, Vadodara`,
    introText: introVariants[variantIdx](area),
    detailSections: [
      {
        title: `Why ${area} Properties Need Waterproofing`,
        text: `Properties in ${area}, Vadodara face unique challenges from heavy monsoon rainfall, rising ground water levels, and humidity. Without proper waterproofing, buildings in ${area} can suffer from terrace leaks, wall dampness, basement flooding, and bathroom seepage. ${BUSINESS_INFO.name} understands the specific needs of ${area} residents and provides customized waterproofing solutions that address these local conditions effectively.`,
      },
      {
        title: `Our Waterproofing Process in ${area}`,
        text: `We follow a systematic approach for every project in ${area}: 1) Free site inspection to identify the root cause of leakage, 2) Detailed quotation with material and method recommendations, 3) Surface preparation and cleaning, 4) Application of waterproofing treatment using premium materials, 5) Quality check and curing, 6) Final inspection and warranty certificate. Our process ensures long-lasting results for every property in ${area}.`,
      },
      {
        title: `Types of Waterproofing Available in ${area}`,
        text: `We offer complete waterproofing solutions in ${area} including terrace waterproofing using bitumen/membrane coating, roof waterproofing with elastomeric coatings, basement waterproofing using crystalline technology, bathroom waterproofing without breaking tiles, external wall treatment for dampness, injection grouting for crack repair, and swimming pool/tank waterproofing. Each solution is tailored to your specific requirements in ${area}.`,
      },
    ],
    benefits: benefitSets[benefitIdx],
    faqs: [
      { question: `What is the cost of waterproofing in ${area}, Vadodara?`, answer: `Waterproofing cost in ${area} ranges from ₹25 to ₹80 per sq ft depending on the type. Terrace waterproofing is ₹30-50/sq ft, basement ₹50-80/sq ft, and bathroom ₹40-60/sq ft. Contact us for a free quote specific to your property in ${area}.` },
      { question: `Do you provide free inspection in ${area}?`, answer: `Yes! We offer completely free site inspection in ${area}, Vadodara. Our expert will visit your property, assess the problem, and provide a detailed quotation with recommended solutions. No obligation.` },
      { question: `How long does waterproofing take in ${area}?`, answer: `Most waterproofing projects in ${area} take 2-5 days depending on the area size and type. Terrace waterproofing for a standard home takes 2-3 days. Basement waterproofing may take 3-5 days. We ensure minimal disruption to your daily routine.` },
      { question: `What warranty do you provide for waterproofing in ${area}?`, answer: `We provide up to 10-year warranty on all waterproofing work in ${area}. The warranty covers material and workmanship. We use premium brands like Dr Fixit, Fosroc, and Sika for long-lasting results.` },
    ],
    nearbyAreas,
    breadcrumb: [
      { label: "Home", href: "/" },
      { label: "Vadodara", href: "/waterproofing-in-vadodara" },
      { label: area, href: `/${slug}` },
    ],
    cityName: "Vadodara",
    areaName: area,
  }
}

function generateCityPage(city: typeof NEARBY_CITIES[0], index: number): PageData {
  const slug = `waterproofing-in-${city.slug}`
  const variantIdx = index % introVariants.length
  const benefitIdx = index % benefitSets.length

  return {
    slug,
    type: "city",
    title: `Waterproofing Services in ${city.name}, Gujarat`,
    metaTitle: `Best Waterproofing in ${city.name} | 10-Year Warranty`,
    metaDescription: `Top-rated waterproofing in ${city.name}. Terrace, roof, basement & bathroom solutions. 10-year warranty. 500+ projects. Free inspection!`,
    keywords: [
      `waterproofing in ${city.name}`, `waterproofing services ${city.name}`, `terrace waterproofing ${city.name}`,
      `roof waterproofing ${city.name}`, `waterproofing contractor ${city.name}`, `best waterproofing ${city.name}`,
      `basement waterproofing ${city.name}`, `bathroom waterproofing ${city.name}`, `leakage solution ${city.name}`,
      `waterproofing company ${city.name}`, `waterproofing near me ${city.name}`, `water leakage repair ${city.name}`,
      `dampness treatment ${city.name}`, `seepage treatment ${city.name}`, `${city.name} waterproofing cost`,
    ],
    heroHeading: `Waterproofing Services in ${city.name}`,
    heroSubheading: `${BUSINESS_INFO.name} provides expert waterproofing solutions in ${city.name} and surrounding areas. 10-year warranty on all work.`,
    heroBadge: `📍 Now Serving ${city.name} | ${city.distance} km from Vadodara`,
    introTitle: `Professional Waterproofing in ${city.name}`,
    introText: introVariants[variantIdx](city.name),
    detailSections: [
      {
        title: `Waterproofing Solutions for ${city.name}`,
        text: `${BUSINESS_INFO.name} extends its premium waterproofing services to ${city.name}, located ${city.distance} km from our Vadodara headquarters. We cover all areas of ${city.name} including ${city.areas.join(", ")}. Whether you need terrace waterproofing for your home, basement protection for your commercial building, or industrial waterproofing for your factory, our team delivers professional results that last.`,
      },
      {
        title: `Why Choose ${BUSINESS_INFO.name} in ${city.name}?`,
        text: `As one of the most trusted waterproofing companies serving ${city.name}, we bring 15+ years of experience, premium materials, and a commitment to quality. Our team travels from Vadodara to ${city.name} regularly to serve clients. We offer the same quality of service and warranty as our Vadodara projects. With 500+ completed projects across Gujarat, you can trust us with your property in ${city.name}.`,
      },
      {
        title: `Areas We Cover in ${city.name}`,
        text: `Our waterproofing services in ${city.name} cover all residential, commercial, and industrial zones including ${city.areas.join(", ")} and surrounding areas. No matter where your property is located in ${city.name}, we can reach you quickly and provide prompt waterproofing solutions. Contact us for service availability in your specific area of ${city.name}.`,
      },
    ],
    benefits: benefitSets[benefitIdx],
    faqs: [
      { question: `Do you provide waterproofing services in ${city.name}?`, answer: `Yes! ${BUSINESS_INFO.name} serves ${city.name} and all surrounding areas. Our team regularly visits ${city.name} for waterproofing projects. We cover areas including ${city.areas.join(", ")}.` },
      { question: `What is the waterproofing cost in ${city.name}?`, answer: `Waterproofing in ${city.name} starts from ₹25/sq ft for basic treatment and goes up to ₹80/sq ft for advanced solutions. The exact cost depends on the type of waterproofing, area size, and condition. Contact us for a free quote.` },
      { question: `How do I book a waterproofing inspection in ${city.name}?`, answer: `Simply call us at ${BUSINESS_INFO.displayPhone} or fill the form on this page. We'll schedule a free site inspection in ${city.name} at your convenient time. Our expert will assess the problem and provide a detailed quotation on the spot.` },
      { question: `Do you offer warranty for waterproofing work in ${city.name}?`, answer: `Absolutely! We provide up to 10-year warranty on all waterproofing work in ${city.name}, same as our Vadodara projects. The warranty covers both material and workmanship.` },
    ],
    nearbyAreas: city.areas,
    breadcrumb: [
      { label: "Home", href: "/" },
      { label: city.name, href: `/${slug}` },
    ],
    cityName: city.name,
  }
}

function generateServicePage(service: typeof KEYWORD_SERVICES[0], index: number): PageData {
  const slug = `${service.slug}-vadodara`
  const variantIdx = index % introVariants.length
  const benefitIdx = index % benefitSets.length

  const serviceDescriptions: Record<string, string> = {
    "terrace-waterproofing": "Terrace waterproofing is essential for every building in Vadodara. Our terrace waterproofing treatment uses advanced bitumen membranes, Dr Fixit Roofseal, and polymer-modified coatings to create a seamless waterproof barrier. We treat cracks, joints, and parapet walls to ensure 100% leak-proof protection. Our terrace waterproofing solutions withstand extreme weather, UV rays, and heavy monsoon rainfall.",
    "roof-waterproofing": "Roof waterproofing is crucial to prevent water damage and extend the life of your building. We apply elastomeric coatings, APP membranes, and liquid waterproofing systems that form a durable, flexible barrier on your roof. Our roof waterproofing solutions are designed to handle thermal expansion, ponding water, and heavy rainfall common in Gujarat.",
    "basement-waterproofing": "Basement waterproofing protects your foundation from groundwater infiltration. We use crystalline waterproofing, injection grouting, and membrane systems to keep your basement completely dry. Our solutions address both positive and negative side waterproofing, making them ideal for basements in Vadodara where the water table can be high.",
    "bathroom-waterproofing": "Bathroom waterproofing prevents water seepage into walls and floors that causes damage to adjacent rooms. Our advanced chemical treatment allows us to waterproof bathrooms without breaking tiles, saving you time and money. We treat the entire wet area including shower zones, floor joints, and wall bases.",
    "wall-waterproofing": "Wall waterproofing prevents dampness, paint peeling, and mold growth on interior and exterior walls. We use penetrating sealers, elastomeric coatings, and cementitious waterproofing to create a breathable yet waterproof barrier. Our wall waterproofing solutions are ideal for both old and new buildings in Vadodara.",
    "injection-grouting": "Injection grouting is a specialized technique for sealing cracks and stopping active water leaks. We inject polyurethane or epoxy grout under high pressure into cracks and voids, creating a permanent seal. This method is ideal for fixing leaks in basements, walls, lift pits, and underground structures without extensive excavation.",
    "dampness-treatment": "Dampness treatment eliminates moisture problems from walls, ceilings, and floors. We identify the source of dampness — rising damp, lateral damp, or condensation — and apply targeted treatment. Our solutions include chemical injection, damp-proof courses, and anti-fungal treatments that prevent mold and mildew growth.",
  }

  const defaultDesc = `${service.name} is one of our specialized services at ${BUSINESS_INFO.name}. We provide professional ${service.name.toLowerCase()} using premium materials and advanced techniques in Vadodara and nearby cities. Our solutions are designed to provide long-lasting protection with up to 10-year warranty. We assess each property individually and recommend the most effective ${service.name.toLowerCase()} method for your specific needs.`

  return {
    slug,
    type: "service",
    title: `${service.name} in Vadodara | ${BUSINESS_INFO.name}`,
    metaTitle: `${service.name} Vadodara | Expert Solutions`,
    metaDescription: `Professional ${service.name.toLowerCase()} in Vadodara. Premium Dr Fixit & Fosroc materials. 10-year warranty. Free inspection. Call now!`,
    keywords: [
      `${service.name.toLowerCase()} Vadodara`, `${service.name.toLowerCase()} services Vadodara`,
      `best ${service.name.toLowerCase()} Vadodara`, `${service.name.toLowerCase()} cost Vadodara`,
      `${service.name.toLowerCase()} near me`, `${service.name.toLowerCase()} contractor Vadodara`,
      `${service.name.toLowerCase()} Gujarat`, `${service.name.toLowerCase()} price`,
      `${service.name.toLowerCase()} rate per sqft`, `${service.name.toLowerCase()} with warranty`,
      `affordable ${service.name.toLowerCase()} Vadodara`, `${service.name.toLowerCase()} company Vadodara`,
    ],
    heroHeading: `${service.name} in Vadodara`,
    heroSubheading: `Expert ${service.name.toLowerCase()} services by ${BUSINESS_INFO.name}. Premium materials. 10-year warranty. Free inspection.`,
    heroBadge: `${service.icon} ${service.name} Specialist`,
    introTitle: `Professional ${service.name} Services in Vadodara`,
    introText: introVariants[variantIdx]("Vadodara", service.name.toLowerCase()),
    detailSections: [
      {
        title: `About Our ${service.name} Service`,
        text: serviceDescriptions[service.slug] || defaultDesc,
      },
      {
        title: `${service.name} Process`,
        text: `Our ${service.name.toLowerCase()} process in Vadodara includes: thorough site inspection and problem diagnosis, surface preparation and cleaning, primer application where needed, main ${service.name.toLowerCase()} treatment application, quality check after curing, and final documentation with warranty certificate. We ensure every step meets our quality standards for lasting results.`,
      },
      {
        title: `${service.name} Cost in Vadodara`,
        text: `The cost of ${service.name.toLowerCase()} in Vadodara depends on the area size, surface condition, and material selected. Our pricing is transparent with no hidden charges. We provide a detailed written quotation after free site inspection. Contact us at ${BUSINESS_INFO.displayPhone} for an accurate estimate for your property.`,
      },
    ],
    benefits: benefitSets[benefitIdx],
    faqs: [
      { question: `How much does ${service.name.toLowerCase()} cost in Vadodara?`, answer: `${service.name} cost in Vadodara varies from ₹25 to ₹80 per sq ft based on the method and materials used. We provide a detailed quotation after free site inspection. Call ${BUSINESS_INFO.displayPhone} for an accurate estimate.` },
      { question: `How long does ${service.name.toLowerCase()} take?`, answer: `Most ${service.name.toLowerCase()} projects take 2-5 days depending on the area size and surface condition. We work efficiently to minimize disruption while ensuring quality results.` },
      { question: `What warranty do you offer on ${service.name.toLowerCase()}?`, answer: `We provide up to 10-year warranty on ${service.name.toLowerCase()} covering both materials and workmanship. We use premium brands like Dr Fixit, Fosroc, Sika, and BASF.` },
      { question: `Is free inspection available for ${service.name.toLowerCase()}?`, answer: `Yes! We offer completely free site inspection for ${service.name.toLowerCase()} in Vadodara and nearby areas. Our expert will assess your problem and recommend the best solution with a detailed quotation.` },
    ],
    nearbyAreas: VADODARA_AREAS.slice(0, 10),
    breadcrumb: [
      { label: "Home", href: "/" },
      { label: "Services", href: "/#services" },
      { label: service.name, href: `/${slug}` },
    ],
    serviceName: service.name,
  }
}

// Special Vadodara main page
function generateVadodaraMainPage(): PageData {
  return {
    slug: "waterproofing-in-vadodara",
    type: "city",
    title: "Waterproofing Services in Vadodara | India Waterproofing",
    metaTitle: "#1 Waterproofing in Vadodara | 10-Year Warranty",
    metaDescription: `Vadodara's trusted waterproofing company. Terrace, roof, basement & bathroom solutions. 10-year warranty. 500+ projects. Free inspection!`,
    keywords: [
      "waterproofing in Vadodara", "waterproofing services Vadodara", "best waterproofing Vadodara",
      "terrace waterproofing Vadodara", "roof waterproofing Vadodara", "basement waterproofing Vadodara",
      "waterproofing contractor Vadodara", "waterproofing company Vadodara", "waterproofing near me",
    ],
    heroHeading: "Best Waterproofing Services in Vadodara",
    heroSubheading: `${BUSINESS_INFO.name} is Vadodara's #1 waterproofing company. Expert solutions for terrace, roof, basement, bathroom & wall waterproofing. 10-year warranty. 500+ happy clients.`,
    heroBadge: "🏆 #1 Waterproofing Company in Vadodara",
    introTitle: "Vadodara's Most Trusted Waterproofing Company",
    introText: `${BUSINESS_INFO.name} is the leading waterproofing service provider in Vadodara with over 15 years of experience and 500+ successfully completed projects. We serve all areas of Vadodara including ${VADODARA_AREAS.slice(0, 15).join(", ")} and more. Our team of certified waterproofing experts uses premium materials from Dr Fixit, Fosroc, Sika, and BASF to deliver permanent solutions for all types of water leakage problems.`,
    detailSections: [
      {
        title: "Complete Waterproofing Solutions in Vadodara",
        text: "We offer every type of waterproofing service in Vadodara — terrace waterproofing, roof waterproofing, basement waterproofing, bathroom waterproofing, wall waterproofing, injection grouting, crack filling, dampness treatment, seepage treatment, and more. Whether you have a residential home, commercial office, industrial factory, or any other property, we have the right solution for you.",
      },
      {
        title: "Areas We Cover in Vadodara",
        text: `Our waterproofing services cover every corner of Vadodara including: ${VADODARA_AREAS.join(", ")}. No matter where you are in Vadodara, we can reach you quickly. Call us at ${BUSINESS_INFO.displayPhone} for a free site inspection at your location.`,
      },
      {
        title: "Why Vadodara Properties Need Waterproofing",
        text: "Vadodara's climate with heavy monsoon rainfall (800-1000mm annually), high humidity, and fluctuating temperatures makes waterproofing essential for every building. Without proper waterproofing, properties face issues like terrace leakage, wall dampness, paint peeling, mold growth, structural damage, and health hazards. Professional waterproofing is a one-time investment that protects your property for 10+ years.",
      },
    ],
    benefits: benefitSets[0],
    faqs: WATERPROOFING_FAQS,
    nearbyAreas: VADODARA_AREAS.slice(0, 15),
    breadcrumb: [
      { label: "Home", href: "/" },
      { label: "Vadodara", href: "/waterproofing-in-vadodara" },
    ],
    cityName: "Vadodara",
  }
}

// ===================================================
// GENERATE ALL PAGES
// ===================================================

export function getAllPages(): PageData[] {
  const pages: PageData[] = []

  // 1. Vadodara main page
  pages.push(generateVadodaraMainPage())

  // 2. Vadodara area pages (44 pages)
  VADODARA_AREAS.forEach((area, i) => {
    pages.push(generateAreaPage(area, i))
  })

  // 3. Nearby city pages (37 pages)
  NEARBY_CITIES.forEach((city, i) => {
    pages.push(generateCityPage(city, i))
  })

  // 4. Service/keyword pages (55 pages)
  KEYWORD_SERVICES.forEach((service, i) => {
    pages.push(generateServicePage(service, i))
  })

  // 5. Service + major city combo pages (additional 20+ pages)
  const majorServices = KEYWORD_SERVICES.slice(0, 5) // terrace, roof, basement, bathroom, wall
  const majorCities = NEARBY_CITIES.slice(0, 4) // ahmedabad, surat, anand, nadiad

  majorServices.forEach((service, si) => {
    majorCities.forEach((city, ci) => {
      const slug = `${service.slug}-${city.slug}`
      const variantIdx = (si + ci) % introVariants.length
      const benefitIdx = (si + ci) % benefitSets.length

      pages.push({
        slug,
        type: "service-city",
        title: `${service.name} in ${city.name} | ${BUSINESS_INFO.name}`,
        metaTitle: `${service.name} in ${city.name} | 10-Year Warranty`,
        metaDescription: `Professional ${service.name.toLowerCase()} in ${city.name}. Dr Fixit & Fosroc materials. 10-year warranty. Free inspection. Call now!`,
        keywords: [
          `${service.name.toLowerCase()} ${city.name}`, `${service.name.toLowerCase()} in ${city.name}`,
          `${service.name.toLowerCase()} services ${city.name}`, `best ${service.name.toLowerCase()} ${city.name}`,
          `${service.name.toLowerCase()} cost ${city.name}`, `${service.name.toLowerCase()} contractor ${city.name}`,
        ],
        heroHeading: `${service.name} in ${city.name}`,
        heroSubheading: `Expert ${service.name.toLowerCase()} services in ${city.name} by ${BUSINESS_INFO.name}. Premium materials, certified team, 10-year warranty.`,
        heroBadge: `${service.icon} ${service.name} in ${city.name}`,
        introTitle: `${service.name} Services in ${city.name}`,
        introText: introVariants[variantIdx](city.name, service.name.toLowerCase()),
        detailSections: [
          {
            title: `About ${service.name} in ${city.name}`,
            text: `${BUSINESS_INFO.name} provides professional ${service.name.toLowerCase()} services in ${city.name} and surrounding areas including ${city.areas.join(", ")}. Our team of experts travels regularly from Vadodara to ${city.name} (${city.distance} km) to serve our growing client base. We use the same premium materials and quality standards for all our ${city.name} projects.`,
          },
          {
            title: `Our ${service.name} Process in ${city.name}`,
            text: `Every ${service.name.toLowerCase()} project in ${city.name} follows our proven process: site inspection, problem diagnosis, surface preparation, treatment application, curing, quality check, and warranty certification. We ensure consistent quality whether the project is in Vadodara or ${city.name}.`,
          },
        ],
        benefits: benefitSets[benefitIdx],
        faqs: [
          { question: `Do you provide ${service.name.toLowerCase()} in ${city.name}?`, answer: `Yes! We provide professional ${service.name.toLowerCase()} in ${city.name} and all surrounding areas. Call ${BUSINESS_INFO.displayPhone} to schedule a free inspection.` },
          { question: `What is the cost of ${service.name.toLowerCase()} in ${city.name}?`, answer: `${service.name} cost in ${city.name} ranges from ₹25-80/sq ft depending on the method and condition. Contact us for a free detailed quotation.` },
          { question: `How long does ${service.name.toLowerCase()} take in ${city.name}?`, answer: `Most ${service.name.toLowerCase()} projects in ${city.name} take 2-5 days. Our team ensures quality work with minimal disruption.` },
        ],
        nearbyAreas: city.areas,
        breadcrumb: [
          { label: "Home", href: "/" },
          { label: city.name, href: `/waterproofing-in-${city.slug}` },
          { label: service.name, href: `/${slug}` },
        ],
        cityName: city.name,
        serviceName: service.name,
      })
    })
  })

  return pages
}

// Get all slugs for generateStaticParams
export function getAllSlugs(): string[] {
  return getAllPages().map(p => p.slug)
}

// Get page by slug
export function getPageBySlug(slug: string): PageData | undefined {
  return getAllPages().find(p => p.slug === slug)
}

// Get all pages grouped by type for footer/sitemap
export function getPagesByType() {
  const pages = getAllPages()
  return {
    areas: pages.filter(p => p.type === "area"),
    cities: pages.filter(p => p.type === "city"),
    services: pages.filter(p => p.type === "service"),
    serviceCities: pages.filter(p => p.type === "service-city"),
    all: pages,
  }
}

// Export constants for other components
export { VADODARA_AREAS, NEARBY_CITIES, KEYWORD_SERVICES }
