/* ============================================
   PRODUCT DATA — Chinois Services CI
   Images: liens directs vers les marques officielles
   Prix: sur demande via WhatsApp
   ============================================ */
const PRODUCTS = [

  /* ───────── APPLE iPHONE ───────── */
  {
    id: 1,
    name: 'iPhone 16 Pro Max',
    brand: 'Apple',
    category: 'smartphones',
    badge: 'new',
    rating: 4.9,
    reviews: 52,
    img: 'https://www.apple.com/newsroom/images/2024/09/apple-debuts-iphone-16-pro-and-iphone-16-pro-max/article/Apple-iPhone-16-Pro-hero-240909_inline.jpg.large.jpg',
    specs: ['Puce A18 Pro', 'Écran 6.9" Super Retina XDR', 'Triple caméra 48MP + Zoom 5×', 'Titane Grade 5', 'USB-C 3 (10 Gb/s)', 'Bouton Commande appareil photo'],
    desc: 'Le plus grand iPhone Pro jamais conçu avec le plus grand écran Super Retina XDR, la puce A18 Pro, et un zoom télescopique 5×.'
  },
  {
    id: 2,
    name: 'iPhone 16 Pro',
    brand: 'Apple',
    category: 'smartphones',
    badge: 'new',
    rating: 4.9,
    reviews: 47,
    img: 'https://www.apple.com/newsroom/images/2024/09/apple-debuts-iphone-16-pro-and-iphone-16-pro-max/article/Apple-iPhone-16-Pro-hero-240909_inline.jpg.large.jpg',
    specs: ['Puce A18 Pro', 'Écran 6.3" Super Retina XDR', 'Triple caméra 48MP', 'Dynamic Island', 'Titane Grade 5', 'Always-On Display'],
    desc: 'iPhone 16 Pro — puce A18 Pro, système photo révolutionnaire et design titanium pour les créateurs et professionnels.'
  },
  {
    id: 3,
    name: 'iPhone 16',
    brand: 'Apple',
    category: 'smartphones',
    badge: 'new',
    rating: 4.8,
    reviews: 61,
    img: 'https://www.apple.com/newsroom/images/2024/09/apple-introduces-iphone-16-with-a18-chip-and-apple-intelligence/article/Apple-iPhone-16-hero-240909_inline.jpg.large.jpg',
    specs: ['Puce A18', 'Écran 6.1" Super Retina XDR', 'Caméra Fusion 48MP', 'Bouton Action', 'Charge MagSafe 25W', 'USB-C'],
    desc: 'iPhone 16 avec la puce A18 et Intelligence Apple — photo, vidéo, autonomie au sommet.'
  },
  {
    id: 4,
    name: 'iPhone 15 Pro Max',
    brand: 'Apple',
    category: 'smartphones',
    badge: null,
    rating: 4.8,
    reviews: 88,
    img: 'https://www.apple.com/newsroom/images/product/iphone/standard/Apple-iPhone-15-Pro-lineup-hero-230912_inline.jpg.large.jpg',
    specs: ['Puce A17 Pro', 'Écran 6.7" ProMotion 120Hz', 'Zoom télescopique 5×', 'Titane', 'USB-C 3', 'Dynamic Island'],
    desc: 'iPhone 15 Pro Max — zoom 5×, design titane et puissance A17 Pro. Référence absolue de la photo mobile.'
  },
  {
    id: 5,
    name: 'iPhone 15',
    brand: 'Apple',
    category: 'smartphones',
    badge: null,
    rating: 4.7,
    reviews: 74,
    img: 'https://www.apple.com/newsroom/images/product/iphone/standard/Apple-iPhone-15-hero-230912_inline.jpg.large.jpg',
    specs: ['Puce A16 Bionic', 'Dynamic Island', 'Caméra 48MP', 'USB-C', 'Écran 6.1" Super Retina', 'Charge MagSafe'],
    desc: 'iPhone 15 avec Dynamic Island et USB-C — une évolution majeure dans un format compact et élégant.'
  },
  {
    id: 6,
    name: 'iPhone 14',
    brand: 'Apple',
    category: 'smartphones',
    badge: 'promo',
    rating: 4.6,
    reviews: 120,
    img: 'https://www.apple.com/newsroom/images/product/iphone/standard/Apple-iPhone-14-Pro-iPhone-14-Pro-Max-hero-220907_inline.jpg.large.jpg',
    specs: ['Puce A15 Bionic', 'Écran 6.1" OLED', 'Caméra double 12MP', 'Mode Action vidéo', 'Détection collision', 'MagSafe'],
    desc: 'iPhone 14 — performances solides et photo nocturne améliorée à prix accessible. Excellent rapport qualité.'
  },

  /* ───────── SAMSUNG ───────── */
  {
    id: 7,
    name: 'Samsung Galaxy S25 Ultra',
    brand: 'Samsung',
    category: 'smartphones',
    badge: 'new',
    rating: 4.9,
    reviews: 38,
    img: 'https://images.unsplash.com/photo-1610945415295-d9bbf067e59c?w=600&q=85&fit=crop',
    specs: ['Snapdragon 8 Elite', 'Écran 6.9" QHD+ 120Hz', 'Caméra 200MP + Zoom 50×', 'S Pen intégré', 'Galaxy AI', 'Titanium Frame'],
    desc: 'Galaxy S25 Ultra — le sommet de Samsung avec S Pen, IA avancée et caméra 200MP pour une productivité sans limite.'
  },
  {
    id: 8,
    name: 'Samsung Galaxy S25+',
    brand: 'Samsung',
    category: 'smartphones',
    badge: 'new',
    rating: 4.8,
    reviews: 29,
    img: 'https://images.unsplash.com/photo-1610945265064-0e34e5519bbf?w=600&q=85&fit=crop',
    specs: ['Snapdragon 8 Elite', 'Écran 6.7" Dynamic AMOLED 2X 120Hz', 'Triple caméra 50MP', 'Galaxy AI', 'Charge 45W', 'IP68'],
    desc: 'Galaxy S25+ — la version grand format avec batterie 4900mAh et écran immersif pour les power users.'
  },
  {
    id: 9,
    name: 'Samsung Galaxy S25',
    brand: 'Samsung',
    category: 'smartphones',
    badge: 'new',
    rating: 4.8,
    reviews: 44,
    img: 'https://images.samsung.com/is/image/samsung/p6pim/levant/2501/gallery/levant-galaxy-s25-sm-s931-sm-s931bzkgmid-thumb-540573042',
    specs: ['Snapdragon 8 Elite', 'Écran 6.2" Dynamic AMOLED 2X 120Hz', 'Triple caméra 50MP', 'Galaxy AI', 'Charge 25W', 'IP68'],
    desc: 'Galaxy S25 — compact, puissant, intelligent. Le flagship Android idéal pour ceux qui veulent le meilleur en format poche.'
  },
  {
    id: 10,
    name: 'Samsung Galaxy A55 5G',
    brand: 'Samsung',
    category: 'smartphones',
    badge: 'popular',
    rating: 4.6,
    reviews: 115,
    img: 'https://images.unsplash.com/photo-1567581935884-3349723552ca?w=600&q=85&fit=crop',
    specs: ['Exynos 1480', '5G intégrée', 'Écran 6.6" Super AMOLED 120Hz', 'Triple caméra 50MP OIS', 'Batterie 5000mAh', 'IP67'],
    desc: 'Galaxy A55 5G — le meilleur équilibre prix/performance Samsung avec écran AMOLED et protection IP67.'
  },
  {
    id: 11,
    name: 'Samsung Galaxy A35 5G',
    brand: 'Samsung',
    category: 'smartphones',
    badge: null,
    rating: 4.5,
    reviews: 93,
    img: 'https://images.samsung.com/is/image/samsung/p6pim/levant/sm-a356elgcmid/gallery/levant-galaxy-a35-5g-sm-a356-sm-a356elgcmid-thumb-539571440',
    specs: ['Exynos 1380', '5G', 'Écran 6.6" Super AMOLED 120Hz', 'Triple caméra 50MP', 'Batterie 5000mAh', 'IP67'],
    desc: 'Galaxy A35 5G — design premium avec Gorilla Glass Victus+ et interface One UI dans la gamme milieu de gamme.'
  },
  {
    id: 12,
    name: 'Samsung Galaxy A16',
    brand: 'Samsung',
    category: 'smartphones',
    badge: null,
    rating: 4.3,
    reviews: 67,
    img: 'https://images.samsung.com/is/image/samsung/p6pim/levant/sm-a165flbcmid/gallery/levant-galaxy-a16-sm-a165-sm-a165flbcmid-thumb-543028064',
    specs: ['Helio G99', 'Écran 6.7" Super AMOLED 90Hz', 'Triple caméra 50MP', 'Batterie 5000mAh', '6 ans de mise à jour OS', 'USB-C'],
    desc: 'Galaxy A16 — 6 ans de mises à jour OS garanties, écran AMOLED 90Hz et batterie longue durée à prix accessible.'
  },

  /* ───────── TECNO ───────── */
  {
    id: 13,
    name: 'Tecno Phantom X2 Pro',
    brand: 'Tecno',
    category: 'smartphones',
    badge: null,
    rating: 4.5,
    reviews: 41,
    img: 'https://www.tecno-mobile.com/media/product/202212/3/PhantomX2_Stardust_Grey_Front_Back.png',
    specs: ['Dimensity 9000', 'Écran 6.8" AMOLED 120Hz', 'Caméra portrait 50MP + Zoom 50MP', 'Recharge 45W', 'Capteur sous l\'écran', '12 Go RAM'],
    desc: 'Tecno Phantom X2 Pro — flagship africain avec capteur d\'empreinte sous l\'écran et caméra rétractable unique au monde.'
  },
  {
    id: 14,
    name: 'Tecno Spark 30 Pro',
    brand: 'Tecno',
    category: 'smartphones',
    badge: 'popular',
    rating: 4.4,
    reviews: 89,
    img: 'https://www.tecno-mobile.com/media/product/202410/3/Spark30Pro-Twilight-Purple_Front_back.jpg',
    specs: ['Helio G100 Ultra', 'Écran 6.78" AMOLED 120Hz', 'Caméra 108MP', 'Batterie 5000mAh 33W', '8 Go RAM extensible', 'Charge rapide 33W'],
    desc: 'Tecno Spark 30 Pro — écran AMOLED 120Hz et caméra 108MP à un prix imbattable pour les amateurs de photo.'
  },
  {
    id: 15,
    name: 'Tecno Spark 30C',
    brand: 'Tecno',
    category: 'smartphones',
    badge: null,
    rating: 4.2,
    reviews: 78,
    img: 'https://www.tecno-mobile.com/media/product/202410/3/Spark30C-Rock-Black-Front-back.jpg',
    specs: ['Helio G88', 'Écran 6.67" HD+ 90Hz', 'Batterie 5000mAh', 'Charge 18W', 'Double SIM', '4 Go RAM'],
    desc: 'Tecno Spark 30C — entrée de gamme fiable avec grand écran et excellente autonomie pour un budget serré.'
  },
  {
    id: 16,
    name: 'Tecno Camon 30 Pro',
    brand: 'Tecno',
    category: 'smartphones',
    badge: null,
    rating: 4.4,
    reviews: 55,
    img: 'https://www.tecno-mobile.com/media/product/202403/3/camon30pro_serenity_blue_frontback.png',
    specs: ['Dimensity 7020', 'Écran 6.77" AMOLED 144Hz', 'Caméra 50MP RGBW + Téléobjectif 30×', 'Charge 70W', '8 Go RAM', 'IP53'],
    desc: 'Tecno Camon 30 Pro — zoom 30× optique, charge ultra-rapide 70W et écran 144Hz pour les passionnés de photo et gaming.'
  },

  /* ───────── INFINIX ───────── */
  {
    id: 17,
    name: 'Infinix Zero 40 5G',
    brand: 'Infinix',
    category: 'smartphones',
    badge: 'new',
    rating: 4.5,
    reviews: 33,
    img: 'https://fdn2.gsmarena.com/vv/pics/infinix/infinix-zero-40-5g-1.jpg',
    specs: ['Dimensity 8200 Ultimate', '5G', 'Écran 6.78" AMOLED 144Hz', 'Caméra 50MP OIS + Zoom', 'Charge 45W + Sans fil 20W', '12 Go RAM'],
    desc: 'Infinix Zero 40 5G — le flagship 5G Infinix avec charge sans fil et performances gaming au niveau des meilleurs.'
  },
  {
    id: 18,
    name: 'Infinix Hot 50 Pro+',
    brand: 'Infinix',
    category: 'smartphones',
    badge: 'popular',
    rating: 4.4,
    reviews: 61,
    img: 'https://fdn2.gsmarena.com/vv/pics/infinix/infinix-hot-50-pro-1.jpg',
    specs: ['Helio G100', 'Écran 6.78" AMOLED 120Hz', 'Caméra 108MP AI', 'Batterie 5000mAh 33W', '8 Go RAM', 'HiOS 14'],
    desc: 'Infinix Hot 50 Pro+ — écran AMOLED immersif et caméra 108MP à un tarif accessible pour tous.'
  },
  {
    id: 19,
    name: 'Infinix Note 40 Pro 5G',
    brand: 'Infinix',
    category: 'smartphones',
    badge: null,
    rating: 4.4,
    reviews: 48,
    img: 'https://fdn2.gsmarena.com/vv/pics/infinix/infinix-note-40-pro-5g-1.jpg',
    specs: ['Dimensity 7020', '5G', 'Écran 6.78" AMOLED 120Hz', 'Caméra 108MP', 'Charge 100W + Recharge inverse', 'MagCharge'],
    desc: 'Infinix Note 40 Pro 5G — charge 100W ultra-rapide et 5G. La batterie pleine en 30 minutes à peine.'
  },

  /* ───────── ITEL ───────── */
  {
    id: 20,
    name: 'Itel S25 Ultra',
    brand: 'Itel',
    category: 'smartphones',
    badge: 'new',
    rating: 4.3,
    reviews: 29,
    img: 'https://fdn2.gsmarena.com/vv/pics/itel/itel-s25-ultra-1.jpg',
    specs: ['Helio G91 Ultra', 'Écran 6.78" AMOLED 120Hz', 'Caméra 108MP + Stabilisation OIS', 'Batterie 5000mAh 33W', '8 Go RAM', 'Android 14'],
    desc: 'Itel S25 Ultra — le flagship abordable avec écran AMOLED et caméra 108MP OIS. Le meilleur rapport qualité pour les petits budgets.'
  },
  {
    id: 21,
    name: 'Itel P55T',
    brand: 'Itel',
    category: 'smartphones',
    badge: null,
    rating: 4.1,
    reviews: 54,
    img: 'https://fdn2.gsmarena.com/vv/pics/itel/itel-p55t-1.jpg',
    specs: ['Unisoc T606', 'Écran 6.6" HD+ 90Hz', 'Batterie géante 6000mAh', 'Charge 18W', '4 Go RAM', 'Double SIM 4G'],
    desc: 'Itel P55T — batterie 6000mAh pour 2 jours d\'autonomie garantis. Le compagnon idéal des zones à réseau instable.'
  },
  {
    id: 22,
    name: 'Itel A70',
    brand: 'Itel',
    category: 'smartphones',
    badge: null,
    rating: 4.0,
    reviews: 82,
    img: 'https://fdn2.gsmarena.com/vv/pics/itel/itel-a70-1.jpg',
    specs: ['Unisoc SC9832E', 'Écran 6.6" HD+', 'Batterie 5000mAh', 'Appareil photo IA', 'Android 13 Go', 'Entrée de gamme'],
    desc: 'Itel A70 — le smartphone d\'entrée de gamme ultime avec Android 13 et grande batterie. Accès au numérique pour tous.'
  },

  /* ───────── XIAOMI ───────── */
  {
    id: 23,
    name: 'Xiaomi 14 Ultra',
    brand: 'Xiaomi',
    category: 'smartphones',
    badge: 'new',
    rating: 4.8,
    reviews: 27,
    img: 'https://i01.appmifile.com/v1/MI_18455B3E4DA706226CF7535A58E875F0/pms_1707819025.21389624.png',
    specs: ['Snapdragon 8 Gen 3', 'Co-ingénierie Leica', 'Caméra 50MP 1" Leica Summilux', 'Charge 90W + Sans fil 80W', 'Écran 6.73" AMOLED 120Hz', '16 Go RAM'],
    desc: 'Xiaomi 14 Ultra — co-développé avec Leica, ce flagship redéfinit la photographie mobile avec son capteur 1 pouce.'
  },
  {
    id: 24,
    name: 'Xiaomi Redmi Note 13 Pro+',
    brand: 'Xiaomi',
    category: 'smartphones',
    badge: 'popular',
    rating: 4.6,
    reviews: 104,
    img: 'https://i01.appmifile.com/v1/MI_18455B3E4DA706226CF7535A58E875F0/pms_1699355649.85890977!560x560.jpg',
    specs: ['Dimensity 7200 Ultra', 'Écran 6.67" AMOLED 120Hz', 'Caméra 200MP OIS', 'Charge 120W HyperCharge', 'IP68', '8 Go RAM'],
    desc: 'Redmi Note 13 Pro+ — charge 120W en 19 minutes et caméra 200MP. Un flagship killer qui surpasse des téléphones deux fois plus chers.'
  },
  {
    id: 25,
    name: 'Xiaomi Poco X6 Pro',
    brand: 'Xiaomi',
    category: 'smartphones',
    badge: null,
    rating: 4.6,
    reviews: 71,
    img: 'https://i01.appmifile.com/v1/MI_18455B3E4DA706226CF7535A58E875F0/pms_1705048459.10380617.png',
    specs: ['Dimensity 8300 Ultra', 'Écran 6.67" Flow AMOLED 144Hz', 'Caméra 64MP OIS', 'Batterie 5000mAh 67W', '12 Go RAM', 'Gaming Phone'],
    desc: 'Poco X6 Pro — processeur gaming Dimensity 8300, écran 144Hz et refroidissement LiquidCool. Le monstre gaming abordable.'
  },

  /* ───────── ACCESSORIES / CHARGEURS ───────── */
  {
    id: 26,
    name: 'Chargeur Apple 30W USB-C',
    brand: 'Apple',
    category: 'chargeurs',
    badge: null,
    rating: 4.7,
    reviews: 156,
    img: 'https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/MQLN3?wid=1144&hei=1144&fmt=jpeg&qlt=90&.v=1666657407524',
    specs: ['30W Power Delivery 3', 'Port USB-C', 'Compatible MagSafe', 'Charge rapide iPhone 15+', 'Compact & léger', 'Certifié Apple'],
    desc: 'Chargeur officiel Apple 30W — charge rapide certifiée pour iPhone, iPad et MacBook Air. Compact et nomade.'
  },
  {
    id: 27,
    name: 'Chargeur Samsung 45W Super Fast',
    brand: 'Samsung',
    category: 'chargeurs',
    badge: null,
    rating: 4.6,
    reviews: 88,
    img: 'https://images.samsung.com/is/image/samsung/p6pim/levant/ep-t4510xbeggb/gallery/levant-super-fast-charger-45w-ep-t4510-ep-t4510xbeggb-534838779',
    specs: ['45W Super Fast Charging 2.0', 'USB-C', 'Protections multi-sécurité', 'Compatible Galaxy S25/A55', 'Compact design', 'Câble inclus'],
    desc: 'Chargeur officiel Samsung 45W — recharge votre Galaxy S25 Ultra de 0 à 65% en 30 minutes.'
  },
  {
    id: 28,
    name: 'Chargeur Baseus GaN 65W 3 ports',
    brand: 'Baseus',
    category: 'chargeurs',
    badge: null,
    rating: 4.7,
    reviews: 62,
    img: 'https://m.media-amazon.com/images/I/51vHLUMfbCL._AC_SL1500_.jpg',
    specs: ['65W total GaN III', '2× USB-C + 1× USB-A', 'PowerDelivery + QC 4.0', 'Compact prise murale', 'Protection surchauffe', 'Compatible tous appareils'],
    desc: 'Baseus GaN 65W — chargez laptop, iPhone et AirPods simultanément avec un seul adaptateur de la taille d\'un cube.'
  },
  {
    id: 29,
    name: 'Powerbank Baseus 20000mAh 65W',
    brand: 'Baseus',
    category: 'accessoires',
    badge: null,
    rating: 4.7,
    reviews: 91,
    img: 'https://images.unsplash.com/photo-1609091839311-d5365f9ff1c5?w=600&q=85&fit=crop',
    specs: ['20000mAh', '65W PD charge rapide', '2× USB-C + 1× USB-A', 'Affichage LED digital %', 'Recharge en 2h', 'Charge iPhone 4× fois'],
    desc: 'Batterie externe 20000mAh — parfaite pour les voyages, recharge laptop, smartphones et tablettes avec affichage précis.'
  },

  /* ───────── CASQUES ───────── */
  {
    id: 30,
    name: 'AirPods Pro 2ème génération',
    brand: 'Apple',
    category: 'casques',
    badge: 'popular',
    rating: 4.9,
    reviews: 203,
    img: 'https://images.unsplash.com/photo-1610438235354-a6ae5528385c?w=600&q=85&fit=crop',
    specs: ['Puce H2', 'ANC Adaptatif', 'Audio Spatial Personalisé', 'Boîtier USB-C', 'Autonomie 30h total', 'Résistance IP54'],
    desc: 'AirPods Pro 2 — la référence absolue des écouteurs avec réduction de bruit adaptative et audio spatial personnalisé.'
  },
  {
    id: 31,
    name: 'Samsung Galaxy Buds3 Pro',
    brand: 'Samsung',
    category: 'casques',
    badge: 'new',
    rating: 4.7,
    reviews: 55,
    img: 'https://images.unsplash.com/photo-1590658268037-6bf12165a8df?w=600&q=85&fit=crop',
    specs: ['ANC Intelligent 2.0', 'Audio 360° Galaxy AI', 'Traduction en temps réel', 'Autonomie 26h', 'IP57', 'Commandes tactiles'],
    desc: 'Galaxy Buds3 Pro — traduction simultanée en temps réel grâce à Galaxy AI et son 360° d\'exception.'
  },
  {
    id: 32,
    name: 'Sony WH-1000XM5',
    brand: 'Sony',
    category: 'casques',
    badge: 'popular',
    rating: 4.9,
    reviews: 167,
    img: 'https://images.unsplash.com/photo-1618366712010-f4ae9c647dcb?w=600&q=85&fit=crop',
    specs: ['ANC Industry-leading', '8 mics + processeur V1', 'Autonomie 30h ANC ON', 'Quick Charge 3min=3h', 'Audio LDAC 360°', 'Design ultra-léger'],
    desc: 'Sony WH-1000XM5 — le meilleur casque ANC du monde pendant 5 années consécutives. Silence absolu garanti.'
  },
  {
    id: 33,
    name: 'JBL Tune 770NC',
    brand: 'JBL',
    category: 'casques',
    badge: null,
    rating: 4.5,
    reviews: 134,
    img: 'https://images.unsplash.com/photo-1583394838336-acd977736f90?w=600&q=85&fit=crop',
    specs: ['ANC Adaptatif', 'JBL Pure Bass', 'Bluetooth 5.3', 'Autonomie 70h sans ANC', 'Pliable compact', 'Appels mains libres 4 mics'],
    desc: 'JBL Tune 770NC — 70 heures d\'autonomie avec son JBL Pure Bass et réduction de bruit active pour tout budget.'
  },

  /* ───────── ACCESSOIRES ───────── */
  {
    id: 34,
    name: 'Coque MagSafe iPhone 16 Pro',
    brand: 'Apple',
    category: 'accessoires',
    badge: null,
    rating: 4.5,
    reviews: 67,
    img: 'https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/MY1Q3?wid=1144&hei=1144&fmt=jpeg&qlt=90&.v=1724103344',
    specs: ['Compatible MagSafe', 'Silicone premium', 'Protection coins renforcés', 'Microfibre intérieure', 'Tactilité boutons', 'Sans fil compatible'],
    desc: 'Coque silicone officielle Apple avec MagSafe — protection douce et look premium sans alourdir votre iPhone.'
  },
  {
    id: 35,
    name: 'Câble USB-C Anker 240W 2m',
    brand: 'Anker',
    category: 'accessoires',
    badge: null,
    rating: 4.8,
    reviews: 212,
    img: 'https://m.media-amazon.com/images/I/61yoUOLbCXL._AC_SL1500_.jpg',
    specs: ['240W PowerDelivery 3.1', '2 mètres', 'Nylon tressé résistant', 'Compatible tout USB-C', 'Garantie 18 mois', 'Data USB 2.0'],
    desc: 'Câble Anker USB-C 240W — charge ordinateurs, téléphones et tablettes avec un seul câble ultra-solide nylon tressé.'
  },
];

/* ============================================
   AVIS CLIENTS
   ============================================ */
const REVIEWS = {
  1:  [{ name:'Moussa K.', date:'il y a 3 jours', rating:5, text:'Livré le lendemain matin, emballage d\'origine scellé. Top qualité !' }],
  30: [{ name:'Koffi R.', date:'il y a 2 jours', rating:5, text:'Son exceptionnel et réduction de bruit parfaite. Vraiment satisfait !' }],
  7:  [{ name:'Jean-Marc K.', date:'il y a 5 jours', rating:5, text:'Samsung S25 Ultra livré en 24h. Le S Pen est incroyable. Service sérieux.' }],
};

/* ============================================
   FAQ
   ============================================ */
const FAQS = [
  { q:'Comment connaître les prix ?', a:'Nos prix sont communiqués directement via WhatsApp selon la disponibilité du jour, le modèle exact (capacité, couleur) et les éventuelles offres en cours. Cliquez sur "Acheter via WhatsApp" sur un produit pour recevoir le tarif immédiatement.' },
  { q:'Comment passer une commande ?', a:'Choisissez votre produit et cliquez sur "Acheter via WhatsApp". Un message pré-rempli sera envoyé à notre équipe qui confirmera disponibilité, prix et délai.' },
  { q:'Quels modes de paiement acceptez-vous ?', a:'Orange Money, MTN MoMo, Wave et espèces à la livraison pour Abidjan. Paiement avant ou à réception selon la commande.' },
  { q:'Quel est le délai de livraison ?', a:'Pour Abidjan : 24h après confirmation. Pour les autres villes de Côte d\'Ivoire : 2 à 4 jours ouvrables via transporteurs partenaires.' },
  { q:'Les produits sont-ils garantis et authentiques ?', a:'100% authentiques, boîtes d\'origine scellées avec garantie constructeur. En cas de produit défectueux à réception, échange sous 7 jours.' },
  { q:'Livrez-vous en dehors d\'Abidjan ?', a:'Oui, dans toute la Côte d\'Ivoire. Frais et délais variables selon destination. Contactez-nous pour un devis livraison.' },
  { q:'Puis-je commander plusieurs produits ?', a:'Oui ! Ajoutez vos articles au panier et commandez tout en une seule fois. Nous préparerons un devis groupé avec livraison unique.' },
];

/* ============================================
   CHAT RESPONSES
   ============================================ */
const CHAT_RESPONSES = {
  'prix': 'Les prix varient selon la disponibilité et les offres du moment. Envoyez-moi un produit via "Acheter sur WhatsApp" et je vous donne le tarif immédiatement ! 📲',
  'livraison': 'Nous livrons à Abidjan sous 24h et dans toute la Côte d\'Ivoire en 2-4 jours. Livraison gratuite à Abidjan ! 🚀',
  'paiement': 'Orange Money, MTN MoMo, Wave ou espèces à la livraison. Simple et sécurisé ! 💳',
  'garantie': 'Tous nos produits sont 100% authentiques, boîte d\'origine scellée avec garantie constructeur. Échange 7 jours si défaut à réception. ✅',
  'iphone': 'Nous avons les iPhone 14, 15 et 16 (standard, Pro, Pro Max) en stock ! Quel modèle vous intéresse ? 📱',
  'samsung': 'Galaxy S25, S25+ et S25 Ultra disponibles. Aussi Galaxy A55 5G et A35 5G ! Quel est votre budget ?',
  'tecno':  'Tecno Spark 30 Pro, Camon 30 Pro et Phantom X2 Pro disponibles ! Bons rapports qualité/prix.',
  'infinix': 'Infinix Zero 40 5G et Note 40 Pro disponibles — excellentes performances pour le prix !',
  'itel':   'Itel S25 Ultra et P55T en stock — entrée/milieu de gamme fiables et abordables.',
  'xiaomi': 'Xiaomi 14 Ultra, Redmi Note 13 Pro+ et Poco X6 Pro disponibles ! Lesquels vous intéressent ?',
  'casque': 'AirPods Pro 2, Sony WH-1000XM5, Galaxy Buds3 Pro et JBL Tune 770NC en stock ! 🎧',
  'chargeur': 'Chargeurs Apple 30W, Samsung 45W et Baseus GaN 65W disponibles. Lequel cherchez-vous ?',
  'stock': 'La plupart des produits sont en stock. Pour vérifier une référence précise, contactez-nous sur WhatsApp ! 📦',
  'default': 'Bonjour ! 👋 Je suis l\'assistant Chinois Services. Posez-moi vos questions sur nos produits, la livraison ou les paiements. Je suis là pour vous aider ! 😊',
};

/* ============================================
   STATE
   ============================================ */
let cart = JSON.parse(localStorage.getItem('tshop_cart') || '[]');
let wishlist = JSON.parse(localStorage.getItem('tshop_wish') || '[]');
let userReviews = JSON.parse(localStorage.getItem('tshop_reviews') || '{}');
let activeFilter = 'all';
let activeSort = 'default';
let chatOpen = false;
let selectedRating = 0;

/* ============================================
   UTILS
   ============================================ */
function toast(msg, icon = '✅') {
  const tc = document.getElementById('toast-container');
  const t = document.createElement('div');
  t.className = 'toast';
  t.innerHTML = `<span class="toast-icon">${icon}</span><span>${msg}</span>`;
  tc.appendChild(t);
  setTimeout(() => { t.classList.add('out'); setTimeout(() => t.remove(), 300); }, 3200);
}

function scrollTo(sel) {
  const el = document.querySelector(sel);
  if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
}

function filterProducts(cat) {
  scrollTo('#products');
  setFilter(cat);
}

/* ============================================
   THEME TOGGLE
   ============================================ */
const themeBtn = document.getElementById('theme-toggle');
function setTheme(t) {
  document.documentElement.setAttribute('data-theme', t);
  themeBtn.textContent = t === 'dark' ? '🌙' : '☀️';
  localStorage.setItem('tshop_theme', t);
}
themeBtn.onclick = () => setTheme(document.documentElement.dataset.theme === 'dark' ? 'light' : 'dark');
const saved = localStorage.getItem('tshop_theme');
if (saved) setTheme(saved);

/* ============================================
   RENDER PRODUCTS
   ============================================ */
function getFilteredProducts() {
  let arr = PRODUCTS.filter(p => activeFilter === 'all' || p.category === activeFilter);
  if (activeSort === 'rating') arr.sort((a,b) => b.rating - a.rating);
  else if (activeSort === 'new') arr = arr.filter(p => p.badge === 'new').concat(arr.filter(p => p.badge !== 'new'));
  else if (activeSort === 'alpha') arr.sort((a,b) => a.name.localeCompare(b.name));
  return arr;
}

function renderProducts() {
  const grid = document.getElementById('product-grid');
  const arr = getFilteredProducts();
  if (!arr.length) {
    grid.innerHTML = '<div style="grid-column:1/-1;text-align:center;color:var(--text3);padding:48px">Aucun produit trouvé.</div>';
    return;
  }
  grid.innerHTML = arr.map((p, i) => {
    const inWish = wishlist.includes(p.id);
    const inCart = cart.find(c => c.id === p.id);
    const starsHtml = '★'.repeat(Math.floor(p.rating)) + (p.rating % 1 >= 0.5 ? '½' : '');
    return `<div class="product-card ${p.outOfStock ? 'out-of-stock' : ''}" style="animation-delay:${i * 0.04}s" onclick="openModal(${p.id})">
      <div class="card-img">
        <img src="${p.img}" alt="${p.name}" loading="lazy" onerror="this.src='https://placehold.co/400x400/1e1e2a/ff6b35?text=${encodeURIComponent(p.brand)}'">
        ${p.badge ? `<span class="card-badge badge-${p.badge}">${p.badge === 'new' ? 'Nouveau' : p.badge === 'promo' ? 'Promo' : p.badge === 'popular' ? 'Populaire' : 'Rupture'}</span>` : ''}
        <button class="card-wishlist ${inWish ? 'active' : ''}" onclick="toggleWish(event,${p.id})">${inWish ? '♥' : '♡'}</button>
      </div>
      <div class="card-body">
        <div class="card-brand">${p.brand}</div>
        <h3 class="card-name">${p.name}</h3>
        <div class="card-specs">${p.specs.slice(0, 3).map(s => `<span class="card-spec">${s}</span>`).join('')}</div>
        <div class="card-rating"><span class="stars">${starsHtml}</span><span class="rating-num">${p.rating} (${p.reviews})</span></div>
        <div class="card-footer">
          <div class="card-price">
            <div class="price-current price-on-demand">Prix sur demande</div>
          </div>
          <div class="card-actions" onclick="event.stopPropagation()">
            <button class="card-btn-add" onclick="addToCart(${p.id})" ${p.outOfStock ? 'disabled' : ''}>
              ${p.outOfStock ? 'Rupture' : '🛒 Ajouter'}
            </button>
            <a class="card-btn-wa" href="${waLink(p)}" target="_blank" title="Commander via WhatsApp">💬</a>
          </div>
        </div>
      </div>
    </div>`;
  }).join('');
}

function waLink(p) {
  const msg = encodeURIComponent(`Bonjour Chinois Services CI ! 👋\n\nJe suis intéressé(e) par :\n\n📱 *${p.name}*\n🏷️ Marque : ${p.brand}\n📋 Catégorie : ${p.category}\n\nPouvez-vous me donner le prix et confirmer la disponibilité ? Merci !`);
  return `https://wa.me/2250505220901?text=${msg}`;
}

/* ============================================
   FILTERS
   ============================================ */
function setFilter(f) {
  activeFilter = f;
  document.querySelectorAll('.filter-btn').forEach(b => b.classList.toggle('active', b.dataset.filter === f));
  renderProducts();
}
document.querySelectorAll('.filter-btn').forEach(b => b.onclick = () => setFilter(b.dataset.filter));
document.getElementById('sort-select').onchange = (e) => { activeSort = e.target.value; renderProducts(); };

/* ============================================
   CART (sans affichage de prix)
   ============================================ */
function saveCart() { localStorage.setItem('tshop_cart', JSON.stringify(cart)); }

function updateCartBadge() {
  const n = cart.reduce((s, i) => s + i.qty, 0);
  const b = document.getElementById('cart-badge');
  b.textContent = n;
  b.style.display = n ? 'flex' : 'none';
  document.getElementById('cart-count-badge').textContent = n;
}

function addToCart(id) {
  const p = PRODUCTS.find(x => x.id === id);
  if (!p || p.outOfStock) return;
  const ex = cart.find(x => x.id === id);
  if (ex) ex.qty++; else cart.push({ id, qty: 1 });
  saveCart(); updateCartBadge(); renderCartItems();
  toast(`${p.name} ajouté au panier 🛒`);
}

function removeFromCart(id) {
  cart = cart.filter(x => x.id !== id);
  saveCart(); updateCartBadge(); renderCartItems();
}

function changeQty(id, d) {
  const ex = cart.find(x => x.id === id);
  if (!ex) return;
  ex.qty += d;
  if (ex.qty <= 0) return removeFromCart(id);
  saveCart(); updateCartBadge(); renderCartItems();
}

function clearCart() {
  cart = []; saveCart(); updateCartBadge(); renderCartItems();
}

function renderCartItems() {
  const el = document.getElementById('cart-items-list');
  const ft = document.getElementById('cart-footer');
  if (!cart.length) {
    el.innerHTML = '<div class="cart-empty"><div class="cart-empty-icon">🛒</div><p>Votre panier est vide</p><p style="font-size:12px;margin-top:4px">Ajoutez des produits pour commencer</p></div>';
    ft.style.display = 'none'; return;
  }
  ft.style.display = 'block';
  const totalQty = cart.reduce((s, i) => s + i.qty, 0);
  el.innerHTML = cart.map(item => {
    const p = PRODUCTS.find(x => x.id === item.id);
    if (!p) return '';
    return `<div class="cart-item">
      <img class="cart-item-img" src="${p.img}" alt="${p.name}" onerror="this.src='https://placehold.co/64x64/1e1e2a/ff6b35?text=${encodeURIComponent(p.brand)}'">
      <div class="cart-item-info">
        <div class="cart-item-name">${p.name}</div>
        <div class="cart-item-brand">${p.brand}</div>
        <div class="cart-item-bottom">
          <div class="cart-item-price" style="font-size:12px;color:var(--text3)">Prix sur WhatsApp</div>
          <div class="cart-qty">
            <button class="qty-btn" onclick="changeQty(${p.id},-1)">−</button>
            <span class="qty-num">${item.qty}</span>
            <button class="qty-btn" onclick="changeQty(${p.id},1)">+</button>
          </div>
        </div>
      </div>
      <button class="cart-item-remove" onclick="removeFromCart(${p.id})">✕</button>
    </div>`;
  }).join('');

  // Masquer la section totaux (pas de prix affichés)
  document.getElementById('cart-subtotal').closest('.cart-summary').style.display = 'none';
}

function openCart() {
  document.getElementById('cart-drawer').classList.add('show');
  document.getElementById('cart-overlay').classList.add('show');
}
function closeCart() {
  document.getElementById('cart-drawer').classList.remove('show');
  document.getElementById('cart-overlay').classList.remove('show');
}
document.getElementById('cart-toggle').onclick = openCart;

function checkout() {
  if (!cart.length) return;
  let msg = 'Bonjour Chinois Services CI ! 👋\n\nJe souhaite une commande groupée :\n\n';
  cart.forEach(item => {
    const p = PRODUCTS.find(x => x.id === item.id);
    if (p) msg += `• ${p.name} (${p.brand}) × ${item.qty}\n`;
  });
  msg += `\n📦 ${cart.reduce((s,i) => s + i.qty, 0)} article(s) au total\n\nPouvez-vous m'envoyer les prix et confirmer la disponibilité ? Merci !`;
  window.open(`https://wa.me/2250505220901?text=${encodeURIComponent(msg)}`, '_blank');
}

/* ============================================
   WISHLIST
   ============================================ */
function saveWishlist() { localStorage.setItem('tshop_wish', JSON.stringify(wishlist)); }

function updateWishBadge() {
  const b = document.getElementById('wish-badge');
  b.textContent = wishlist.length;
  b.style.display = wishlist.length ? 'flex' : 'none';
}

function toggleWish(e, id) {
  e.stopPropagation();
  const p = PRODUCTS.find(x => x.id === id);
  if (wishlist.includes(id)) {
    wishlist = wishlist.filter(x => x !== id);
    toast('Retiré des favoris', '💔');
  } else {
    wishlist.push(id);
    toast(`${p.name} ajouté aux favoris ❤️`);
  }
  saveWishlist(); updateWishBadge(); renderProducts(); renderWishlist();
}

function renderWishlist() {
  const el = document.getElementById('wishlist-items-list');
  if (!wishlist.length) {
    el.innerHTML = '<div class="cart-empty"><div class="cart-empty-icon">♡</div><p>Aucun favori pour l\'instant</p></div>';
    return;
  }
  el.innerHTML = wishlist.map(id => {
    const p = PRODUCTS.find(x => x.id === id);
    if (!p) return '';
    return `<div class="wishlist-item">
      <img src="${p.img}" alt="${p.name}" onerror="this.src='https://placehold.co/56x56/1e1e2a/ff6b35?text=${encodeURIComponent(p.brand)}'">
      <div class="wishlist-item-info">
        <div class="wishlist-item-name">${p.name}</div>
        <div class="wishlist-item-price" style="font-size:12px;color:var(--text3)">Prix sur WhatsApp</div>
      </div>
      <button class="wishlist-add-btn" onclick="addToCart(${p.id})">+ Panier</button>
    </div>`;
  }).join('');
}

function openWishlist() { document.getElementById('wishlist-drawer').classList.add('show'); document.getElementById('cart-overlay').classList.add('show'); }
function closeWishlist() { document.getElementById('wishlist-drawer').classList.remove('show'); document.getElementById('cart-overlay').classList.remove('show'); }
document.getElementById('wishlist-toggle').onclick = () => { renderWishlist(); openWishlist(); };

/* ============================================
   PRODUCT MODAL
   ============================================ */
function openModal(id) {
  const p = PRODUCTS.find(x => x.id === id);
  if (!p) return;
  const starsHtml = '★'.repeat(Math.floor(p.rating)) + '☆'.repeat(5 - Math.floor(p.rating));

  document.getElementById('modal-breadcrumb').textContent = p.brand + ' / ' + p.name;
  document.getElementById('modal-body').innerHTML = `
    <div class="modal-img-wrap">
      <img src="${p.img}" alt="${p.name}" onerror="this.src='https://placehold.co/500x500/1e1e2a/ff6b35?text=${encodeURIComponent(p.brand)}'">
    </div>
    <div class="modal-info">
      <div class="modal-brand">${p.brand}</div>
      <h2 class="modal-name">${p.name}</h2>
      <div class="modal-rating">
        <span class="stars" style="font-size:16px">${starsHtml}</span>
        <span style="font-size:14px;color:var(--text2)">${p.rating}/5 (${p.reviews} avis)</span>
      </div>
      <p class="modal-desc">${p.desc}</p>
      <div class="modal-specs">
        <h4>Caractéristiques</h4>
        <div class="modal-spec-list">
          ${p.specs.map(s => `<div class="modal-spec-row">${s}</div>`).join('')}
        </div>
      </div>
      <div class="modal-price-row">
        <span class="modal-price" style="font-size:20px;color:var(--accent)">💬 Prix communiqué sur WhatsApp</span>
      </div>
      <div class="modal-actions">
        <button class="btn-primary modal-btn-add" onclick="addToCart(${p.id});closeModal()" ${p.outOfStock ? 'disabled' : ''}>
          ${p.outOfStock ? 'Rupture de stock' : '🛒 Ajouter au panier'}
        </button>
        <a href="${waLink(p)}" target="_blank" class="modal-btn-wa">💬 Demander le prix</a>
      </div>
    </div>`;

  const allReviews = [...(REVIEWS[id] || []), ...(userReviews[id] || [])];
  document.getElementById('modal-reviews').innerHTML = `
    <h3 class="syne">Avis clients (${allReviews.length})</h3>
    <div class="review-cards">
      ${allReviews.length ? allReviews.map(r => `<div class="review-card">
        <div class="review-top">
          <div class="review-avatar">${r.name[0]}</div>
          <div class="review-meta">
            <div class="review-name">${r.name}</div>
            <div class="review-date">${r.date}</div>
          </div>
          <div class="review-stars">${'★'.repeat(r.rating)}</div>
        </div>
        <div class="review-text">${r.text}</div>
        <div class="review-product-tag">✓ Achat vérifié</div>
      </div>`).join('') : '<p style="color:var(--text3);font-size:14px">Aucun avis pour l\'instant. Soyez le premier !</p>'}
    </div>
    <div class="review-form">
      <h4>Laisser un avis</h4>
      <div class="star-picker" id="star-picker-${id}">
        ${[1,2,3,4,5].map(n => `<span class="star-option" data-val="${n}" onclick="pickStar(${id},${n})">★</span>`).join('')}
      </div>
      <textarea class="review-input" id="review-text-${id}" placeholder="Partagez votre expérience avec ce produit..."></textarea>
      <button class="review-submit" onclick="submitReview(${id})">Publier l'avis →</button>
    </div>`;
  selectedRating = 0;

  document.getElementById('modal-overlay').classList.add('show');
  document.body.style.overflow = 'hidden';
}

function closeModal(e) {
  if (e && e.target !== document.getElementById('modal-overlay')) return;
  document.getElementById('modal-overlay').classList.remove('show');
  document.body.style.overflow = '';
}

function pickStar(id, n) {
  selectedRating = n;
  document.querySelectorAll(`#star-picker-${id} .star-option`).forEach((s, i) => s.classList.toggle('active', i < n));
}

function submitReview(id) {
  const txt = document.getElementById(`review-text-${id}`).value.trim();
  if (!txt || !selectedRating) { toast('Veuillez noter et écrire un avis !', '⚠️'); return; }
  if (!userReviews[id]) userReviews[id] = [];
  userReviews[id].push({ name: 'Vous', date: 'à l\'instant', rating: selectedRating, text: txt });
  localStorage.setItem('tshop_reviews', JSON.stringify(userReviews));
  toast('Merci pour votre avis ! ⭐');
  openModal(id);
}

/* ============================================
   SEARCH
   ============================================ */
const searchInput = document.getElementById('search-input');
const searchResults = document.getElementById('search-results');

searchInput.addEventListener('input', () => {
  const q = searchInput.value.toLowerCase().trim();
  if (!q) { searchResults.classList.remove('show'); return; }
  const hits = PRODUCTS.filter(p => p.name.toLowerCase().includes(q) || p.brand.toLowerCase().includes(q)).slice(0, 6);
  if (!hits.length) {
    searchResults.innerHTML = '<div class="search-empty">Aucun résultat trouvé</div>';
  } else {
    searchResults.innerHTML = hits.map(p => `<div class="search-item" onclick="searchPick(${p.id})">
      <img src="${p.img}" alt="${p.name}" onerror="this.src='https://placehold.co/42x42/1e1e2a/ff6b35?text=${encodeURIComponent(p.brand[0])}'">
      <div class="search-item-info">
        <div class="search-item-name">${p.name}</div>
        <div class="search-item-price" style="color:var(--text3)">Prix sur WhatsApp</div>
      </div>
    </div>`).join('');
  }
  searchResults.classList.add('show');
});

function searchPick(id) {
  searchResults.classList.remove('show');
  searchInput.value = '';
  openModal(id);
}

document.addEventListener('click', (e) => { if (!e.target.closest('.nav-search')) searchResults.classList.remove('show'); });

/* ============================================
   CHAT
   ============================================ */
function toggleChat() {
  chatOpen = !chatOpen;
  document.getElementById('chat-widget').classList.toggle('show', chatOpen);
  document.getElementById('chat-btn').classList.toggle('chat-open', chatOpen);
}

const SUGGESTIONS = ['Quel iPhone disponible ?', 'Délai livraison ?', 'Comment commander ?', 'Paiement Mobile Money ?'];

function initChat() {
  const msgs = document.getElementById('chat-messages');
  msgs.innerHTML = `<div class="chat-msg bot"><div class="chat-bubble">Bonjour ! 👋 Je suis l'assistant Chinois Services CI. Posez vos questions sur nos produits, la livraison ou les prix !</div></div>`;
  const sugg = document.getElementById('chat-suggestions');
  sugg.innerHTML = SUGGESTIONS.map(s => `<button class="chat-suggestion" onclick="chatSuggestion('${s}')">${s}</button>`).join('');
}

function chatSuggestion(txt) {
  document.getElementById('chat-input').value = txt;
  sendChat();
}

function sendChat() {
  const inp = document.getElementById('chat-input');
  const msg = inp.value.trim();
  if (!msg) return;
  inp.value = '';
  const msgs = document.getElementById('chat-messages');
  msgs.innerHTML += `<div class="chat-msg user"><div class="chat-bubble">${msg}</div></div>`;

  const typing = document.createElement('div');
  typing.className = 'chat-msg bot';
  typing.innerHTML = '<div class="chat-typing"><span></span><span></span><span></span></div>';
  msgs.appendChild(typing);
  msgs.scrollTop = msgs.scrollHeight;

  setTimeout(() => {
    typing.remove();
    const lower = msg.toLowerCase();
    let resp = CHAT_RESPONSES.default;
    for (const [k, v] of Object.entries(CHAT_RESPONSES)) {
      if (lower.includes(k)) { resp = v; break; }
    }
    msgs.innerHTML += `<div class="chat-msg bot"><div class="chat-bubble">${resp}</div></div>`;
    msgs.scrollTop = msgs.scrollHeight;
  }, 1100);

  document.getElementById('chat-suggestions').innerHTML = '';
}

/* ============================================
   COUNTDOWN
   ============================================ */
function updateCountdown() {
  const now = new Date();
  const end = new Date(now.getFullYear(), now.getMonth(), now.getDate() + 1);
  const diff = end - now;
  const h = Math.floor(diff / 3600000);
  const m = Math.floor((diff % 3600000) / 60000);
  const s = Math.floor((diff % 60000) / 1000);
  document.getElementById('cd-h').textContent = String(h).padStart(2, '0');
  document.getElementById('cd-m').textContent = String(m).padStart(2, '0');
  document.getElementById('cd-s').textContent = String(s).padStart(2, '0');
}
setInterval(updateCountdown, 1000);
updateCountdown();

/* ============================================
   FAQ
   ============================================ */
function renderFAQ() {
  document.getElementById('faq-list').innerHTML = FAQS.map((f, i) => `
    <div class="faq-item" id="faq-${i}">
      <button class="faq-q" onclick="toggleFAQ(${i})">
        <span>${f.q}</span><span class="faq-icon">+</span>
      </button>
      <div class="faq-a">${f.a}</div>
    </div>`).join('');
}

function toggleFAQ(i) {
  const el = document.getElementById('faq-' + i);
  el.classList.toggle('open');
}

/* ============================================
   BACK TO TOP
   ============================================ */
window.addEventListener('scroll', () => {
  document.getElementById('back-top').classList.toggle('show', scrollY > 400);
});

/* ============================================
   INIT
   ============================================ */
renderProducts();
renderCartItems();
renderWishlist();
renderFAQ();
initChat();
updateCartBadge();
updateWishBadge();






