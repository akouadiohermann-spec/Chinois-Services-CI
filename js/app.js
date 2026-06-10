/* ============================================
   PRODUCT DATA — Chinois Services CI
   Images: liens directs vers les marques officielles
   Prix: sur demande via WhatsApp
   ============================================ */
const PRODUCTS = [

  /* ───────── APPLE iPHONE ───────── */
  {
    id: 6,
    name: 'iPhone 17',
    brand: 'Apple',
    category: 'smartphones',
    badge: 'new',
    rating: 4.9,
    reviews: 34,
    img: 'https://www.apple.com/v/iphone/home/cb/images/overview/consider/apple_intelligence__gbh77cvflkia_large.jpg',
    specs: ['Puce A19', 'Écran 6.1" Super Retina XDR', 'Caméra Fusion 48MP', 'Dynamic Island', 'USB-C', 'Apple Intelligence'],
    desc: 'iPhone 17 avec puce A19, performances améliorées et nouvelles fonctionnalités Apple Intelligence.'
  },
  {
    id: 7,
    name: 'iPhone 17 Air',
    brand: 'Apple',
    category: 'smartphones',
    badge: 'new',
    rating: 4.8,
    reviews: 26,
    img: 'https://www.apple.com/fr/iphone/compare/?modelList=iphone-17,iphone-air',
    specs: ['Design ultra-fin', 'Puce A19', 'Écran 6.6" OLED', 'Caméra 48MP', 'USB-C', 'MagSafe'],
    desc: 'iPhone 17 Air — design incroyablement fin et léger avec toute la puissance de la puce A19.'
  },
  {
    id: 8,
    name: 'iPhone 17 Pro',
    brand: 'Apple',
    category: 'smartphones',
    badge: 'new',
    rating: 4.9,
    reviews: 41,
    img: 'https://www.apple.com/v/iphone/home/cb/images/overview/select/iphone_16_pro__erw9alves2qa_xlarge.png',
    specs: ['Puce A19 Pro', 'Écran 6.3" ProMotion 120Hz', 'Triple caméra 48MP', 'Titane', 'Dynamic Island', 'USB-C 4'],
    desc: 'iPhone 17 Pro — puissance A19 Pro, écran ProMotion ultra fluide et système photo professionnel.'
  },
  {
    id: 9,
    name: 'iPhone 17 Pro Max',
    brand: 'Apple',
    category: 'smartphones',
    badge: 'new',
    rating: 5.0,
    reviews: 58,
    img: 'https://www.apple.com/v/iphone/home/cb/images/overview/select/iphone_16_pro_max__b3zxvqpzaxle_xlarge.png',
    specs: ['Puce A19 Pro', 'Écran 6.9" Super Retina XDR', 'Zoom périscopique 6×', 'Titane Grade 5', 'USB-C 4', 'Autonomie améliorée'],
    desc: 'Le plus puissant des iPhone 17 avec écran géant, autonomie exceptionnelle et photographie professionnelle.'
  },
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
    id: 5,
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
    id: 6,
    name: 'iPhone 15 Pro',
    brand: 'Apple',
    category: 'smartphones',
    badge: null,
    rating: 4.8,
    reviews: 76,
    img: 'https://www.apple.com/newsroom/images/product/iphone/standard/Apple-iPhone-15-Pro-lineup-hero-230912_inline.jpg.large.jpg',
    specs: ['Puce A17 Pro', 'Écran 6.1" ProMotion 120Hz', 'Triple caméra 48MP', 'Titane', 'USB-C 3', 'Dynamic Island'],
    desc: 'iPhone 15 Pro — compact et ultra-puissant avec puce A17 Pro et design titanium raffiné.'
  },
  {
    id: 7,
    name: 'iPhone 15 Plus',
    brand: 'Apple',
    category: 'smartphones',
    badge: null,
    rating: 4.7,
    reviews: 58,
    img: 'https://www.apple.com/newsroom/images/product/iphone/standard/Apple-iPhone-15-hero-230912_inline.jpg.large.jpg',
    specs: ['Puce A16 Bionic', 'Dynamic Island', 'Caméra 48MP', 'USB-C', 'Écran 6.7" Super Retina', 'Charge MagSafe'],
    desc: 'iPhone 15 Plus — grand format avec Dynamic Island et USB-C pour une expérience immersive.'
  },
  {
    id: 8,
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
    id: 9,
    name: 'iPhone 14 Pro Max',
    brand: 'Apple',
    category: 'smartphones',
    badge: null,
    rating: 4.7,
    reviews: 105,
    img: 'https://www.apple.com/newsroom/images/product/iphone/standard/Apple-iPhone-14-Pro-iPhone-14-Pro-Max-hero-220907_inline.jpg.large.jpg',
    specs: ['Puce A16 Bionic', 'Écran 6.7" ProMotion 120Hz', 'Triple caméra 48MP', 'Dynamic Island', 'Always-On Display', 'USB-C'],
    desc: 'iPhone 14 Pro Max — grand écran ProMotion, Always-On Display et Dynamic Island pour les utilisateurs les plus exigeants.'
  },
  {
    id: 10,
    name: 'iPhone 14 Pro',
    brand: 'Apple',
    category: 'smartphones',
    badge: null,
    rating: 4.7,
    reviews: 97,
    img: 'https://www.apple.com/newsroom/images/product/iphone/standard/Apple-iPhone-14-Pro-iPhone-14-Pro-Max-hero-220907_inline.jpg.large.jpg',
    specs: ['Puce A16 Bionic', 'Écran 6.1" ProMotion 120Hz', 'Triple caméra 48MP', 'Dynamic Island', 'Always-On Display', 'USB-C'],
    desc: 'iPhone 14 Pro — Dynamic Island révolutionnaire, caméra 48MP et Always-On Display dans un format compact.'
  },
  {
    id: 11,
    name: 'iPhone 14 Plus',
    brand: 'Apple',
    category: 'smartphones',
    badge: 'promo',
    rating: 4.6,
    reviews: 83,
    img: 'https://www.apple.com/newsroom/images/product/iphone/standard/Apple-iPhone-14-Pro-iPhone-14-Pro-Max-hero-220907_inline.jpg.large.jpg',
    specs: ['Puce A15 Bionic', 'Écran 6.7" OLED', 'Caméra double 12MP', 'Mode Action vidéo', 'Batterie longue durée', 'MagSafe'],
    desc: 'iPhone 14 Plus — grand écran et autonomie record. La meilleure batterie de la gamme standard.'
  },
  {
    id: 12,
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
  {
    id: 13,
    name: 'iPhone 13 Pro Max',
    brand: 'Apple',
    category: 'smartphones',
    badge: 'promo',
    rating: 4.6,
    reviews: 143,
    img: 'https://images.unsplash.com/photo-1632661674596-df8be070a5c5?w=600&q=85&fit=crop',
    specs: ['Puce A15 Bionic', 'Écran 6.7" ProMotion 120Hz', 'Triple caméra 12MP Macro', 'Zoom 3×', 'Notch', 'MagSafe'],
    desc: 'iPhone 13 Pro Max — le plus grand écran ProMotion et l\'autonomie la plus longue jamais vue sur un iPhone.'
  },
  {
    id: 14,
    name: 'iPhone 13 Pro',
    brand: 'Apple',
    category: 'smartphones',
    badge: 'promo',
    rating: 4.6,
    reviews: 131,
    img: 'https://images.unsplash.com/photo-1632661674596-df8be070a5c5?w=600&q=85&fit=crop',
    specs: ['Puce A15 Bionic', 'Écran 6.1" ProMotion 120Hz', 'Triple caméra 12MP Macro', 'Zoom 3×', 'Notch', 'MagSafe'],
    desc: 'iPhone 13 Pro — ProMotion 120Hz et mode macro pour une expérience photo professionnelle.'
  },
  {
    id: 15,
    name: 'iPhone 13',
    brand: 'Apple',
    category: 'smartphones',
    badge: 'promo',
    rating: 4.5,
    reviews: 168,
    img: 'https://images.unsplash.com/photo-1632661674596-df8be070a5c5?w=600&q=85&fit=crop',
    specs: ['Puce A15 Bionic', 'Écran 6.1" OLED', 'Double caméra 12MP', 'Mode Cinématique', 'Encoche réduite', 'MagSafe'],
    desc: 'iPhone 13 — mode Cinématique révolutionnaire et encoche réduite pour un design moderne à prix compétitif.'
  },
  {
    id: 16,
    name: 'iPhone 12 Pro Max',
    brand: 'Apple',
    category: 'smartphones',
    badge: 'promo',
    rating: 4.5,
    reviews: 189,
    img: 'https://images.unsplash.com/photo-1605236453806-6ff36851218e?w=600&q=85&fit=crop',
    specs: ['Puce A14 Bionic', 'Écran 6.7" Super Retina XDR', 'Triple caméra 12MP LiDAR', 'Design plat', '5G', 'MagSafe'],
    desc: 'iPhone 12 Pro Max — grand format avec scanner LiDAR, 5G et design iconique à bords plats.'
  },
  {
    id: 17,
    name: 'iPhone 12 Pro',
    brand: 'Apple',
    category: 'smartphones',
    badge: 'promo',
    rating: 4.5,
    reviews: 176,
    img: 'https://images.unsplash.com/photo-1605236453806-6ff36851218e?w=600&q=85&fit=crop',
    specs: ['Puce A14 Bionic', 'Écran 6.1" Super Retina XDR', 'Triple caméra 12MP LiDAR', 'Design plat', '5G', 'MagSafe'],
    desc: 'iPhone 12 Pro — scanner LiDAR, 5G et design premium avec bords plats en acier inoxydable.'
  },
  {
    id: 18,
    name: 'iPhone 12',
    brand: 'Apple',
    category: 'smartphones',
    badge: 'promo',
    rating: 4.4,
    reviews: 215,
    img: 'https://images.unsplash.com/photo-1605236453806-6ff36851218e?w=600&q=85&fit=crop',
    specs: ['Puce A14 Bionic', 'Écran 6.1" OLED', 'Double caméra 12MP', '5G', 'Design plat', 'MagSafe'],
    desc: 'iPhone 12 — le premier iPhone 5G avec design plat revisité et puce A14 Bionic à un prix attractif.'
  },
  {
    id: 19,
    name: 'iPhone 11 Pro Max',
    brand: 'Apple',
    category: 'smartphones',
    badge: 'promo',
    rating: 4.3,
    reviews: 242,
    img: 'https://images.unsplash.com/photo-1574755393849-623942496936?w=600&q=85&fit=crop',
    specs: ['Puce A13 Bionic', 'Écran 6.5" OLED', 'Triple caméra 12MP Ultra-large', 'Nuit ultra', 'Face ID', 'Verre dépoli'],
    desc: 'iPhone 11 Pro Max — triple caméra révolutionnaire et mode nuit pour des photos époustouflantes.'
  },
  {
    id: 20,
    name: 'iPhone 11 Pro',
    brand: 'Apple',
    category: 'smartphones',
    badge: 'promo',
    rating: 4.3,
    reviews: 228,
    img: 'https://images.unsplash.com/photo-1574755393849-623942496936?w=600&q=85&fit=crop',
    specs: ['Puce A13 Bionic', 'Écran 5.8" OLED', 'Triple caméra 12MP', 'Mode Nuit', 'Face ID', 'Verre dépoli'],
    desc: 'iPhone 11 Pro — compact et puissant avec triple caméra et mode nuit révolutionnaire.'
  },
  {
    id: 21,
    name: 'iPhone 11',
    brand: 'Apple',
    category: 'smartphones',
    badge: 'promo',
    rating: 4.3,
    reviews: 305,
    img: 'https://images.unsplash.com/photo-1574755393849-623942496936?w=600&q=85&fit=crop',
    specs: ['Puce A13 Bionic', 'Écran 6.1" LCD', 'Double caméra 12MP', 'Mode Nuit', 'Face ID', 'Couleurs vives'],
    desc: 'iPhone 11 — double caméra grand angle et mode nuit. Le bestseller Apple accessible.'
  },
  {
    id: 22,
    name: 'iPhone XR',
    brand: 'Apple',
    category: 'smartphones',
    badge: 'promo',
    rating: 4.2,
    reviews: 287,
    img: 'https://images.unsplash.com/photo-1512054502232-10a0a035d672?w=600&q=85&fit=crop',
    specs: ['Puce A12 Bionic', 'Écran 6.1" LCD', 'Caméra simple 12MP', 'Face ID', 'Couleurs multiples', 'Charging rapide'],
    desc: 'iPhone XR — Face ID et design borderless à prix accessible. Le meilleur iPhone entrée de gamme Apple.'
  },
  /* iPhone 17 */
  {
    id: 300,
    name: 'iPhone 17 Pro Max',
    brand: 'Apple',
    category: 'smartphones',
    badge: 'new',
    rating: 5.0,
    reviews: 12,
    img: 'https://images.unsplash.com/photo-1510557880182-3d4d3cba35a5?w=600&q=85&fit=crop',
    specs: ['Puce A19 Pro', 'Écran 6.9" ProMotion 120Hz', 'Système caméra pro 48MP', 'Titane', 'USB-C 4', 'Apple Intelligence'],
    desc: 'iPhone 17 Pro Max — le summum technologique Apple avec puce A19 Pro et Apple Intelligence de nouvelle génération.'
  },
  {
    id: 301,
    name: 'iPhone 17 Pro',
    brand: 'Apple',
    category: 'smartphones',
    badge: 'new',
    rating: 5.0,
    reviews: 8,
    img: 'https://images.unsplash.com/photo-1510557880182-3d4d3cba35a5?w=600&q=85&fit=crop',
    specs: ['Puce A19 Pro', 'Écran 6.3" ProMotion 120Hz', 'Triple caméra 48MP', 'Titane', 'USB-C 4', 'Apple Intelligence'],
    desc: 'iPhone 17 Pro — puce A19 Pro, Apple Intelligence avancée et design titanium de nouvelle génération.'
  },
  {
    id: 302,
    name: 'iPhone 17 Air',
    brand: 'Apple',
    category: 'smartphones',
    badge: 'new',
    rating: 4.9,
    reviews: 15,
    img: 'https://images.unsplash.com/photo-1510557880182-3d4d3cba35a5?w=600&q=85&fit=crop',
    specs: ['Puce A19', 'Design ultra-fin', 'Écran 6.6" OLED', 'Caméra 48MP', 'Apple Intelligence', 'USB-C'],
    desc: 'iPhone 17 Air — le plus fin iPhone jamais conçu, alliant légèreté extrême et puissance A19.'
  },
  {
    id: 303,
    name: 'iPhone 17',
    brand: 'Apple',
    category: 'smartphones',
    badge: 'new',
    rating: 4.9,
    reviews: 21,
    img: 'https://images.unsplash.com/photo-1510557880182-3d4d3cba35a5?w=600&q=85&fit=crop',
    specs: ['Puce A19', 'Écran 6.1" Super Retina XDR', 'Caméra 48MP', 'Apple Intelligence', 'MagSafe 30W', 'USB-C'],
    desc: 'iPhone 17 — la nouvelle génération standard avec puce A19, Apple Intelligence et design rafraîchi.'
  },

  /* ───────── SAMSUNG ───────── */
  {
    id: 23,
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
    id: 24,
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
    id: 25,
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
    id: 26,
    name: 'Samsung Galaxy S26',
    brand: 'Samsung',
    category: 'smartphones',
    badge: 'new',
    rating: 4.9,
    reviews: 7,
    img: 'https://images.unsplash.com/photo-1610945415295-d9bbf067e59c?w=600&q=85&fit=crop',
    specs: ['Exynos 2600 / Snapdragon 8 Gen 4', 'Écran 6.2" Dynamic AMOLED 2X 120Hz', 'Triple caméra 50MP', 'Galaxy AI 2.0', 'IP68', 'Charge ultra-rapide'],
    desc: 'Samsung Galaxy S26 — la toute nouvelle génération Samsung avec Galaxy AI 2.0 et performances exceptionnelles.'
  },
  {
    id: 27,
    name: 'Samsung Galaxy S24',
    brand: 'Samsung',
    category: 'smartphones',
    badge: null,
    rating: 4.7,
    reviews: 63,
    img: 'https://images.unsplash.com/photo-1610945265064-0e34e5519bbf?w=600&q=85&fit=crop',
    specs: ['Snapdragon 8 Gen 3', 'Écran 6.2" AMOLED 120Hz', 'Triple caméra 50MP', 'Galaxy AI', 'IP68', 'Charge 25W'],
    desc: 'Galaxy S24 — le premier Samsung avec Galaxy AI embarqué. Traduction, résumé et édition photo par intelligence artificielle.'
  },
  {
    id: 28,
    name: 'Samsung Galaxy S23',
    brand: 'Samsung',
    category: 'smartphones',
    badge: 'promo',
    rating: 4.6,
    reviews: 88,
    img: 'https://images.unsplash.com/photo-1567581935884-3349723552ca?w=600&q=85&fit=crop',
    specs: ['Snapdragon 8 Gen 2', 'Écran 6.1" Dynamic AMOLED 120Hz', 'Triple caméra 50MP', 'Batterie 3900mAh', 'IP68', 'Charge 25W'],
    desc: 'Galaxy S23 — compact flagship avec Snapdragon 8 Gen 2 pour des performances gaming et photo de haut vol.'
  },
  {
    id: 29,
    name: 'Samsung Galaxy S22',
    brand: 'Samsung',
    category: 'smartphones',
    badge: 'promo',
    rating: 4.5,
    reviews: 112,
    img: 'https://images.unsplash.com/photo-1567581935884-3349723552ca?w=600&q=85&fit=crop',
    specs: ['Snapdragon 8 Gen 1', 'Écran 6.1" Dynamic AMOLED 120Hz', 'Triple caméra 50MP', 'Batterie 3700mAh', 'IP68', 'Charge 25W'],
    desc: 'Galaxy S22 — design compact premium avec verre Gorilla Glass Victus+ et photo pro à prix réduit.'
  },
  /* Fold */
  {
    id: 400,
    name: 'Samsung Galaxy Z Fold 8',
    brand: 'Samsung',
    category: 'smartphones',
    badge: 'new',
    rating: 4.9,
    reviews: 9,
    img: 'https://images.unsplash.com/photo-1610945415295-d9bbf067e59c?w=600&q=85&fit=crop',
    specs: ['Snapdragon 8 Gen 4', 'Écran pliant 7.6" QHD+', 'Écran couverture 6.3"', 'S Pen compatible', 'Galaxy AI', 'IP48'],
    desc: 'Galaxy Z Fold 8 — le foldable le plus avancé avec S Pen, écran intérieur QHD+ et Galaxy AI intégré.'
  },
  {
    id: 401,
    name: 'Samsung Galaxy Z Fold 7',
    brand: 'Samsung',
    category: 'smartphones',
    badge: 'new',
    rating: 4.8,
    reviews: 18,
    img: 'https://images.unsplash.com/photo-1610945415295-d9bbf067e59c?w=600&q=85&fit=crop',
    specs: ['Snapdragon 8 Elite', 'Écran pliant 7.6" QHD+', 'Écran couverture 6.3"', 'Galaxy AI', 'Charnière titanium', 'IP48'],
    desc: 'Galaxy Z Fold 7 — charnière titanium ultra-résistante et Galaxy AI pour une productivité maximale.'
  },
  {
    id: 402,
    name: 'Samsung Galaxy Z Fold 6',
    brand: 'Samsung',
    category: 'smartphones',
    badge: null,
    rating: 4.7,
    reviews: 34,
    img: 'https://images.unsplash.com/photo-1610945415295-d9bbf067e59c?w=600&q=85&fit=crop',
    specs: ['Snapdragon 8 Gen 3', 'Écran pliant 7.6" QHD+', 'Écran couverture 6.3"', 'Galaxy AI', 'IP48', 'S Pen compatible'],
    desc: 'Galaxy Z Fold 6 — plus fin, plus léger avec Galaxy AI et écran intérieur plus large.'
  },
  {
    id: 403,
    name: 'Samsung Galaxy Z Fold 5',
    brand: 'Samsung',
    category: 'smartphones',
    badge: 'promo',
    rating: 4.6,
    reviews: 52,
    img: 'https://images.unsplash.com/photo-1610945415295-d9bbf067e59c?w=600&q=85&fit=crop',
    specs: ['Snapdragon 8 Gen 2', 'Écran pliant 7.6" AMOLED', 'Écran couverture 6.2"', 'Charnière sans gap', 'IP48', 'S Pen compatible'],
    desc: 'Galaxy Z Fold 5 — charnière sans espace pour un écran plat parfait. Le foldable le plus utilisable.'
  },
  {
    id: 404,
    name: 'Samsung Galaxy Z Fold 4',
    brand: 'Samsung',
    category: 'smartphones',
    badge: 'promo',
    rating: 4.5,
    reviews: 71,
    img: 'https://images.unsplash.com/photo-1610945415295-d9bbf067e59c?w=600&q=85&fit=crop',
    specs: ['Snapdragon 8+ Gen 1', 'Écran pliant 7.6" AMOLED', 'Écran couverture 6.2"', 'Triple caméra 50MP', 'IPX8', 'S Pen compatible'],
    desc: 'Galaxy Z Fold 4 — meilleur rapport taille/main avec triple caméra pro et écran couverture élargi.'
  },
  {
    id: 405,
    name: 'Samsung Galaxy Z Fold 3',
    brand: 'Samsung',
    category: 'smartphones',
    badge: 'promo',
    rating: 4.4,
    reviews: 94,
    img: 'https://images.unsplash.com/photo-1610945415295-d9bbf067e59c?w=600&q=85&fit=crop',
    specs: ['Snapdragon 888', 'Écran pliant 7.6" AMOLED 120Hz', 'Écran couverture 6.2"', 'S Pen compatible', 'IPX8', 'Sous-écran caméra'],
    desc: 'Galaxy Z Fold 3 — premier Fold avec S Pen et compatibilité eau IPX8. Un pionnier du foldable.'
  },
  /* Galaxy A */
  {
    id: 500,
    name: 'Samsung Galaxy A57',
    brand: 'Samsung',
    category: 'smartphones',
    badge: 'new',
    rating: 4.6,
    reviews: 21,
    img: 'https://images.unsplash.com/photo-1567581935884-3349723552ca?w=600&q=85&fit=crop',
    specs: ['Exynos 1380', 'Écran 6.6" Super AMOLED 120Hz', 'Triple caméra 50MP OIS', 'Batterie 5000mAh', '5G', 'IP67'],
    desc: 'Galaxy A57 — milieu de gamme premium avec écran AMOLED et stabilisation optique pour vos photos du quotidien.'
  },
  {
    id: 501,
    name: 'Samsung Galaxy A56',
    brand: 'Samsung',
    category: 'smartphones',
    badge: 'new',
    rating: 4.6,
    reviews: 28,
    img: 'https://images.unsplash.com/photo-1567581935884-3349723552ca?w=600&q=85&fit=crop',
    specs: ['Exynos 1580', 'Écran 6.7" Super AMOLED 120Hz', 'Triple caméra 50MP', 'Batterie 5000mAh', '5G', 'IP67'],
    desc: 'Galaxy A56 — design élégant avec écran AMOLED 120Hz et triple caméra pour les créateurs de contenu.'
  },
  {
    id: 502,
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
    id: 503,
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
    id: 504,
    name: 'Samsung Galaxy A24',
    brand: 'Samsung',
    category: 'smartphones',
    badge: null,
    rating: 4.4,
    reviews: 78,
    img: 'https://images.unsplash.com/photo-1567581935884-3349723552ca?w=600&q=85&fit=crop',
    specs: ['Helio G99', 'Écran 6.5" Super AMOLED 90Hz', 'Triple caméra 50MP', 'Batterie 5000mAh', '4G', 'Lecteur empreinte latéral'],
    desc: 'Galaxy A24 — écran AMOLED 90Hz et grande batterie dans un format accessible pour tous les budgets.'
  },
  {
    id: 505,
    name: 'Samsung Galaxy A17',
    brand: 'Samsung',
    category: 'smartphones',
    badge: 'new',
    rating: 4.3,
    reviews: 19,
    img: 'https://images.samsung.com/is/image/samsung/p6pim/levant/sm-a165flbcmid/gallery/levant-galaxy-a16-sm-a165-sm-a165flbcmid-thumb-543028064',
    specs: ['Helio G99', 'Écran 6.7" Super AMOLED 90Hz', 'Triple caméra 50MP', 'Batterie 5000mAh', '6 ans mises à jour', 'USB-C'],
    desc: 'Galaxy A17 — 6 ans de mises à jour OS garanties et écran AMOLED 90Hz pour une longévité optimale.'
  },
  {
    id: 506,
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
  {
    id: 507,
    name: 'Samsung Galaxy A07',
    brand: 'Samsung',
    category: 'smartphones',
    badge: null,
    rating: 4.2,
    reviews: 88,
    img: 'https://images.unsplash.com/photo-1567581935884-3349723552ca?w=600&q=85&fit=crop',
    specs: ['Helio P35', 'Écran 6.6" LCD 60Hz', 'Triple caméra 50MP', 'Batterie 5000mAh', '4G', 'Android 12'],
    desc: 'Galaxy A07 — entrée de gamme fiable avec grande batterie et triple caméra pour un quotidien connecté.'
  },
  {
    id: 508,
    name: 'Samsung Galaxy A06',
    brand: 'Samsung',
    category: 'smartphones',
    badge: null,
    rating: 4.1,
    reviews: 102,
    img: 'https://images.unsplash.com/photo-1567581935884-3349723552ca?w=600&q=85&fit=crop',
    specs: ['Helio G85', 'Écran 6.7" PLS LCD 90Hz', 'Double caméra 50MP', 'Batterie 5000mAh', '4G', 'Android 14'],
    desc: 'Galaxy A06 — design moderne avec écran 90Hz et grande batterie. L\'entrée de gamme Samsung la plus récente.'
  },
  /* Samsung Ultra / Plus variants */
  {
    id: 510,
    name: 'Samsung Galaxy A57 Ultra',
    brand: 'Samsung',
    category: 'smartphones',
    badge: 'new',
    rating: 4.7,
    reviews: 14,
    img: 'https://images.unsplash.com/photo-1610945415295-d9bbf067e59c?w=600&q=85&fit=crop',
    specs: ['Snapdragon 7s Gen 2', 'Écran 6.7" Super AMOLED 120Hz', 'Caméra 200MP', '5G', 'Batterie 5000mAh 45W', 'IP68'],
    desc: 'Galaxy A57 Ultra — caméra 200MP et charge 45W dans la gamme A Ultra pour les passionnés de photo.'
  },
  {
    id: 511,
    name: 'Samsung Galaxy A56 Ultra',
    brand: 'Samsung',
    category: 'smartphones',
    badge: 'new',
    rating: 4.7,
    reviews: 11,
    img: 'https://images.unsplash.com/photo-1610945415295-d9bbf067e59c?w=600&q=85&fit=crop',
    specs: ['Snapdragon 7s Gen 3', 'Écran 6.7" Super AMOLED 120Hz', 'Caméra 200MP OIS', '5G', 'Batterie 5000mAh', 'IP67'],
    desc: 'Galaxy A56 Ultra — le meilleur de la gamme A avec stabilisation optique et caméra ultra-haute résolution.'
  },
  {
    id: 512,
    name: 'Samsung Galaxy A35 Ultra',
    brand: 'Samsung',
    category: 'smartphones',
    badge: null,
    rating: 4.5,
    reviews: 33,
    img: 'https://images.unsplash.com/photo-1567581935884-3349723552ca?w=600&q=85&fit=crop',
    specs: ['Exynos 1480', 'Écran 6.6" Super AMOLED 120Hz', 'Caméra 108MP', '5G', 'Batterie 5000mAh', 'IP67'],
    desc: 'Galaxy A35 Ultra — caméra 108MP et 5G pour une expérience photo exceptionnelle en milieu de gamme.'
  },
  {
    id: 513,
    name: 'Samsung Galaxy A24 Ultra',
    brand: 'Samsung',
    category: 'smartphones',
    badge: null,
    rating: 4.4,
    reviews: 27,
    img: 'https://images.unsplash.com/photo-1567581935884-3349723552ca?w=600&q=85&fit=crop',
    specs: ['Helio G99 Ultra', 'Écran 6.6" Super AMOLED 120Hz', 'Caméra 108MP OIS', 'Batterie 5000mAh 33W', '4G', 'NFC'],
    desc: 'Galaxy A24 Ultra — caméra 108MP avec stabilisation et écran AMOLED 120Hz à prix accessible.'
  },
  {
    id: 514,
    name: 'Samsung Galaxy A17 Ultra',
    brand: 'Samsung',
    category: 'smartphones',
    badge: 'new',
    rating: 4.3,
    reviews: 9,
    img: 'https://images.unsplash.com/photo-1567581935884-3349723552ca?w=600&q=85&fit=crop',
    specs: ['Helio G99 Ultra', 'Écran 6.7" Super AMOLED 120Hz', 'Caméra 108MP', 'Batterie 5000mAh', '4G/5G', 'Android 14'],
    desc: 'Galaxy A17 Ultra — version boostée avec caméra 108MP et écran AMOLED 120Hz pour les budgets serrés.'
  },
  {
    id: 515,
    name: 'Samsung Galaxy A07 Ultra',
    brand: 'Samsung',
    category: 'smartphones',
    badge: null,
    rating: 4.2,
    reviews: 41,
    img: 'https://images.unsplash.com/photo-1567581935884-3349723552ca?w=600&q=85&fit=crop',
    specs: ['Helio G85', 'Écran 6.7" FHD+ 90Hz', 'Triple caméra 64MP', 'Batterie 5000mAh', '4G', 'Charge 25W'],
    desc: 'Galaxy A07 Ultra — triple caméra 64MP et grande batterie pour tous ceux qui veulent plus sans dépenser plus.'
  },
  {
    id: 516,
    name: 'Samsung Galaxy A06 Ultra',
    brand: 'Samsung',
    category: 'smartphones',
    badge: null,
    rating: 4.1,
    reviews: 54,
    img: 'https://images.unsplash.com/photo-1567581935884-3349723552ca?w=600&q=85&fit=crop',
    specs: ['Helio G88', 'Écran 6.7" LCD 90Hz', 'Double caméra 50MP', 'Batterie 5000mAh', '4G', 'Android 14'],
    desc: 'Galaxy A06 Ultra — version améliorée de l\'entrée de gamme avec caméra principale renforcée.'
  },
  {
    id: 520,
    name: 'Samsung Galaxy A57+',
    brand: 'Samsung',
    category: 'smartphones',
    badge: 'new',
    rating: 4.6,
    reviews: 16,
    img: 'https://images.unsplash.com/photo-1567581935884-3349723552ca?w=600&q=85&fit=crop',
    specs: ['Exynos 1480', 'Écran 6.7" Super AMOLED 120Hz', 'Triple caméra 50MP OIS', '5G', 'Batterie 5000mAh 45W', 'IP67'],
    desc: 'Galaxy A57+ — version Plus grand format avec charge rapide 45W et écran immersif.'
  },
  {
    id: 521,
    name: 'Samsung Galaxy A56+',
    brand: 'Samsung',
    category: 'smartphones',
    badge: 'new',
    rating: 4.6,
    reviews: 19,
    img: 'https://images.unsplash.com/photo-1567581935884-3349723552ca?w=600&q=85&fit=crop',
    specs: ['Exynos 1580', 'Écran 6.8" Super AMOLED 120Hz', 'Triple caméra 50MP', '5G', 'Batterie 5100mAh', 'IP67'],
    desc: 'Galaxy A56+ — grand format premium avec batterie renforcée et écran AMOLED ultra-immersif.'
  },
  {
    id: 522,
    name: 'Samsung Galaxy A35+',
    brand: 'Samsung',
    category: 'smartphones',
    badge: null,
    rating: 4.5,
    reviews: 31,
    img: 'https://images.unsplash.com/photo-1567581935884-3349723552ca?w=600&q=85&fit=crop',
    specs: ['Exynos 1480', 'Écran 6.8" Super AMOLED 120Hz', 'Triple caméra 50MP', '5G', 'Batterie 5500mAh', 'IP67'],
    desc: 'Galaxy A35+ — plus grand, plus de batterie. Idéal pour les gros utilisateurs de streaming et jeux.'
  },
  {
    id: 523,
    name: 'Samsung Galaxy A24+',
    brand: 'Samsung',
    category: 'smartphones',
    badge: null,
    rating: 4.4,
    reviews: 22,
    img: 'https://images.unsplash.com/photo-1567581935884-3349723552ca?w=600&q=85&fit=crop',
    specs: ['Helio G99', 'Écran 6.7" Super AMOLED 90Hz', 'Triple caméra 50MP', 'Batterie 5500mAh', '4G', 'Charge 25W'],
    desc: 'Galaxy A24+ — grand écran AMOLED et batterie généreuse pour un quotidien sans compromis.'
  },
  {
    id: 524,
    name: 'Samsung Galaxy A17+',
    brand: 'Samsung',
    category: 'smartphones',
    badge: 'new',
    rating: 4.3,
    reviews: 12,
    img: 'https://images.unsplash.com/photo-1567581935884-3349723552ca?w=600&q=85&fit=crop',
    specs: ['Helio G99', 'Écran 6.8" Super AMOLED 90Hz', 'Triple caméra 50MP', 'Batterie 5500mAh', '4G', 'Android 14'],
    desc: 'Galaxy A17+ — version grand format avec batterie XXL pour ceux qui ne veulent jamais tomber en panne.'
  },
  {
    id: 525,
    name: 'Samsung Galaxy A07+',
    brand: 'Samsung',
    category: 'smartphones',
    badge: null,
    rating: 4.2,
    reviews: 46,
    img: 'https://images.unsplash.com/photo-1567581935884-3349723552ca?w=600&q=85&fit=crop',
    specs: ['Helio P35', 'Écran 6.7" LCD 60Hz', 'Triple caméra 50MP', 'Batterie 5000mAh', '4G', 'Android 13'],
    desc: 'Galaxy A07+ — triple caméra et grande batterie dans un format élargi pour profiter de chaque moment.'
  },
  {
    id: 526,
    name: 'Samsung Galaxy A06+',
    brand: 'Samsung',
    category: 'smartphones',
    badge: null,
    rating: 4.1,
    reviews: 57,
    img: 'https://images.unsplash.com/photo-1567581935884-3349723552ca?w=600&q=85&fit=crop',
    specs: ['Helio G85', 'Écran 6.8" PLS LCD 90Hz', 'Double caméra 50MP', 'Batterie 5500mAh', '4G', 'Android 14'],
    desc: 'Galaxy A06+ — grand format accessible avec batterie généreuse pour rester connecté toute la journée.'
  },

  /* ───────── TECNO ───────── */
  {
    id: 30,
    name: 'Tecno Phantom X2 Pro',
    brand: 'Tecno',
    category: 'smartphones',
    badge: null,
    rating: 4.5,
    reviews: 41,
    img: 'https://www.tecno-mobile.com/media/product/202212/3/PhantomX2_Stardust_Grey_Front_Back.png',
    specs: ['Dimensity 9000', 'Écran 6.8" AMOLED 120Hz', 'Caméra portrait 50MP + Zoom 50MP', 'Recharge 45W', 'Capteur sous l\'écran', '12 Go RAM'],
    desc: 'Tecno Phantom X2 Pro — flagship africain avec capteur d\'empreinte sous l\'écran et caméra rétractable unique.'
  },
  {
    id: 31,
    name: 'Tecno Camon 50 Ultra',
    brand: 'Tecno',
    category: 'smartphones',
    badge: 'new',
    rating: 4.7,
    reviews: 22,
    img: 'https://www.tecno-mobile.com/media/product/202403/3/camon30pro_serenity_blue_frontback.png',
    specs: ['Dimensity 8200', 'Écran 6.77" AMOLED 144Hz', 'Caméra 50MP + Périscopique 50×', 'Charge 100W', '12 Go RAM', 'IP68'],
    desc: 'Tecno Camon 50 Ultra — zoom périscopique 50×, charge 100W et écran 144Hz. Le summum de la gamme Camon.'
  },
  {
    id: 32,
    name: 'Tecno Camon 50 Pro',
    brand: 'Tecno',
    category: 'smartphones',
    badge: 'new',
    rating: 4.6,
    reviews: 31,
    img: 'https://www.tecno-mobile.com/media/product/202403/3/camon30pro_serenity_blue_frontback.png',
    specs: ['Dimensity 7020', 'Écran 6.77" AMOLED 144Hz', 'Caméra 50MP RGBW + Téléobjectif 30×', 'Charge 70W', '8 Go RAM', 'IP53'],
    desc: 'Tecno Camon 50 Pro — zoom 30× optique, charge ultra-rapide 70W et écran 144Hz pour les passionnés de photo.'
  },
  {
    id: 33,
    name: 'Tecno Camon 50',
    brand: 'Tecno',
    category: 'smartphones',
    badge: 'new',
    rating: 4.5,
    reviews: 27,
    img: 'https://www.tecno-mobile.com/media/product/202403/3/camon30pro_serenity_blue_frontback.png',
    specs: ['Helio G99 Ultra', 'Écran 6.67" AMOLED 120Hz', 'Caméra 50MP RGBW', 'Charge 33W', '8 Go RAM', 'Batterie 5000mAh'],
    desc: 'Tecno Camon 50 — le Camon standard avec caméra RGBW et écran AMOLED pour des photos naturelles en toutes conditions.'
  },
  {
    id: 34,
    name: 'Tecno Camon 30 Pro',
    brand: 'Tecno',
    category: 'smartphones',
    badge: null,
    rating: 4.4,
    reviews: 55,
    img: 'https://www.tecno-mobile.com/media/product/202403/3/camon30pro_serenity_blue_frontback.png',
    specs: ['Dimensity 7020', 'Écran 6.77" AMOLED 144Hz', 'Caméra 50MP + Zoom 30×', 'Charge 70W', '8 Go RAM', 'IP53'],
    desc: 'Tecno Camon 30 Pro — zoom 30× optique et charge ultra-rapide 70W pour une photo et une recharge sans attente.'
  },
  {
    id: 35,
    name: 'Tecno Spark 50',
    brand: 'Tecno',
    category: 'smartphones',
    badge: 'new',
    rating: 4.4,
    reviews: 43,
    img: 'https://www.tecno-mobile.com/media/product/202410/3/Spark30Pro-Twilight-Purple_Front_back.jpg',
    specs: ['Helio G85', 'Écran 6.67" AMOLED 90Hz', 'Caméra 50MP AI', 'Batterie 5000mAh 18W', '8 Go RAM extensible', 'Android 14'],
    desc: 'Tecno Spark 50 — écran AMOLED et caméra AI 50MP pour un usage quotidien fluide et agréable.'
  },
  {
    id: 36,
    name: 'Tecno Spark 40',
    brand: 'Tecno',
    category: 'smartphones',
    badge: null,
    rating: 4.3,
    reviews: 61,
    img: 'https://www.tecno-mobile.com/media/product/202410/3/Spark30Pro-Twilight-Purple_Front_back.jpg',
    specs: ['Helio G85', 'Écran 6.67" IPS LCD 90Hz', 'Caméra 50MP', 'Batterie 5000mAh', '4 Go RAM extensible', 'Double SIM'],
    desc: 'Tecno Spark 40 — bon rapport qualité/prix avec grand écran et caméra 50MP pour capturer chaque moment.'
  },
  {
    id: 37,
    name: 'Tecno Spark 30 Pro',
    brand: 'Tecno',
    category: 'smartphones',
    badge: 'popular',
    rating: 4.4,
    reviews: 89,
    img: 'https://www.tecno-mobile.com/media/product/202410/3/Spark30Pro-Twilight-Purple_Front_back.jpg',
    specs: ['Helio G100 Ultra', 'Écran 6.78" AMOLED 120Hz', 'Caméra 108MP', 'Batterie 5000mAh 33W', '8 Go RAM extensible', 'Charge rapide 33W'],
    desc: 'Tecno Spark 30 Pro — écran AMOLED 120Hz et caméra 108MP à un prix imbattable.'
  },
  {
    id: 38,
    name: 'Tecno Spark Slim',
    brand: 'Tecno',
    category: 'smartphones',
    badge: 'new',
    rating: 4.3,
    reviews: 18,
    img: 'https://www.tecno-mobile.com/media/product/202410/3/Spark30C-Rock-Black-Front-back.jpg',
    specs: ['Helio G85', 'Design ultra-fin 7.5mm', 'Écran 6.67" AMOLED 90Hz', 'Caméra 50MP', 'Batterie 4500mAh', '8 Go RAM'],
    desc: 'Tecno Spark Slim — le Spark le plus fin jamais conçu, alliant légèreté et style pour les amateurs de design.'
  },
  {
    id: 39,
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
    id: 40,
    name: 'Tecno Pop 20',
    brand: 'Tecno',
    category: 'smartphones',
    badge: null,
    rating: 4.1,
    reviews: 52,
    img: 'https://www.tecno-mobile.com/media/product/202410/3/Spark30C-Rock-Black-Front-back.jpg',
    specs: ['Unisoc T606', 'Écran 6.56" HD+ 60Hz', 'Caméra 8MP', 'Batterie 5000mAh', '3 Go RAM', 'Android 13 Go'],
    desc: 'Tecno Pop 20 — l\'entrée dans l\'univers smartphone Tecno avec grande batterie et interface légère Android Go.'
  },

  /* ───────── INFINIX ───────── */
  {
    id: 50,
    name: 'Infinix Zero 40 5G',
    brand: 'Infinix',
    category: 'smartphones',
    badge: 'new',
    rating: 4.5,
    reviews: 33,
    img: 'https://fdn2.gsmarena.com/vv/pics/infinix/infinix-zero-40-5g-1.jpg',
    specs: ['Dimensity 8200 Ultimate', '5G', 'Écran 6.78" AMOLED 144Hz', 'Caméra 50MP OIS + Zoom', 'Charge 45W + Sans fil 20W', '12 Go RAM'],
    desc: 'Infinix Zero 40 5G — flagship 5G avec charge sans fil et performances gaming au top.'
  },
  {
    id: 51,
    name: 'Infinix Note Edge',
    brand: 'Infinix',
    category: 'smartphones',
    badge: 'new',
    rating: 4.5,
    reviews: 24,
    img: 'https://fdn2.gsmarena.com/vv/pics/infinix/infinix-note-40-pro-5g-1.jpg',
    specs: ['Dimensity 8200', 'Écran 6.78" AMOLED 144Hz courbe', 'Caméra 108MP OIS', 'Charge 100W', '12 Go RAM', 'Design bords incurvés'],
    desc: 'Infinix Note Edge — écran incurvé premium et charge 100W. Le haut de gamme Infinix au design saisissant.'
  },
  {
    id: 52,
    name: 'Infinix Hot 70',
    brand: 'Infinix',
    category: 'smartphones',
    badge: 'popular',
    rating: 4.4,
    reviews: 57,
    img: 'https://fdn2.gsmarena.com/vv/pics/infinix/infinix-hot-50-pro-1.jpg',
    specs: ['Helio G88', 'Écran 6.78" AMOLED 90Hz', 'Caméra 50MP AI', 'Batterie 5000mAh 18W', '8 Go RAM', 'Android 14'],
    desc: 'Infinix Hot 70 — grand écran AMOLED et caméra AI 50MP pour un quotidien connecté à prix populaire.'
  },
  {
    id: 53,
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
    id: 54,
    name: 'Infinix Smart 20',
    brand: 'Infinix',
    category: 'smartphones',
    badge: null,
    rating: 4.1,
    reviews: 69,
    img: 'https://fdn2.gsmarena.com/vv/pics/infinix/infinix-smart-8-1.jpg',
    specs: ['Unisoc T606', 'Écran 6.56" HD+ 90Hz', 'Caméra 13MP IA', 'Batterie 5000mAh', '3 Go RAM extensible', 'Android 13 Go'],
    desc: 'Infinix Smart 20 — abordable et fiable. Grand écran, bonne batterie et Android 13 pour rester connecté sans dépenser beaucoup.'
  },
  {
    id: 55,
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
    id: 60,
    name: 'Itel S25 Ultra',
    brand: 'Itel',
    category: 'smartphones',
    badge: 'new',
    rating: 4.3,
    reviews: 29,
    img: 'https://fdn2.gsmarena.com/vv/pics/itel/itel-s25-ultra-1.jpg',
    specs: ['Helio G91 Ultra', 'Écran 6.78" AMOLED 120Hz', 'Caméra 108MP + Stabilisation OIS', 'Batterie 5000mAh 33W', '8 Go RAM', 'Android 14'],
    desc: 'Itel S25 Ultra — flagship abordable avec écran AMOLED et caméra 108MP OIS. Le meilleur rapport qualité pour petits budgets.'
  },
  {
    id: 61,
    name: 'Itel A200',
    brand: 'Itel',
    category: 'smartphones',
    badge: 'new',
    rating: 4.1,
    reviews: 34,
    img: 'https://fdn2.gsmarena.com/vv/pics/itel/itel-a70-1.jpg',
    specs: ['Unisoc SC9832E', 'Écran 6.6" HD+ 90Hz', 'Caméra 8MP AI', 'Batterie 5000mAh', '3 Go RAM', 'Android 14'],
    desc: 'Itel A200 — entrée de gamme économique avec grand écran et batterie durable pour un premier smartphone connecté.'
  },
  {
    id: 62,
    name: 'Itel A06',
    brand: 'Itel',
    category: 'smartphones',
    badge: null,
    rating: 4.0,
    reviews: 71,
    img: 'https://fdn2.gsmarena.com/vv/pics/itel/itel-a70-1.jpg',
    specs: ['Unisoc SC9832E', 'Écran 5.45" HD+', 'Caméra 5MP', 'Batterie 4000mAh', '2 Go RAM', 'Android 13 Go'],
    desc: 'Itel A06 — le smartphone le plus accessible pour faire ses premiers pas dans le numérique avec Android 13.'
  },
  {
    id: 63,
    name: 'Itel City 200',
    brand: 'Itel',
    category: 'smartphones',
    badge: null,
    rating: 4.1,
    reviews: 47,
    img: 'https://fdn2.gsmarena.com/vv/pics/itel/itel-p55t-1.jpg',
    specs: ['Unisoc T606', 'Écran 6.6" HD+ 90Hz', 'Double caméra 13MP', 'Batterie 5000mAh', '4 Go RAM', 'Design slim'],
    desc: 'Itel City 200 — design urbain élégant avec double caméra et grande batterie pour un style de vie actif.'
  },
  {
    id: 64,
    name: 'Itel City 100',
    brand: 'Itel',
    category: 'smartphones',
    badge: null,
    rating: 4.0,
    reviews: 38,
    img: 'https://fdn2.gsmarena.com/vv/pics/itel/itel-a70-1.jpg',
    specs: ['Unisoc SC9832E', 'Écran 6.5" HD+', 'Caméra 8MP', 'Batterie 4000mAh', '3 Go RAM', 'Android 13'],
    desc: 'Itel City 100 — design fin et léger avec caméra AI pour capturer vos moments en ville sans vous ruiner.'
  },
  {
    id: 65,
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
    id: 66,
    name: 'Itel A70',
    brand: 'Itel',
    category: 'smartphones',
    badge: null,
    rating: 4.0,
    reviews: 82,
    img: 'https://fdn2.gsmarena.com/vv/pics/itel/itel-a70-1.jpg',
    specs: ['Unisoc SC9832E', 'Écran 6.6" HD+', 'Batterie 5000mAh', 'Appareil photo IA', 'Android 13 Go', 'Entrée de gamme'],
    desc: 'Itel A70 — entrée de gamme ultime avec Android 13 et grande batterie. Accès au numérique pour tous.'
  },

  /* ───────── XIAOMI ───────── */
  {
    id: 70,
    name: 'Xiaomi 14 Ultra',
    brand: 'Xiaomi',
    category: 'smartphones',
    badge: 'new',
    rating: 4.8,
    reviews: 27,
    img: 'https://i01.appmifile.com/v1/MI_18455B3E4DA706226CF7535A58E875F0/pms_1707819025.21389624.png',
    specs: ['Snapdragon 8 Gen 3', 'Co-ingénierie Leica', 'Caméra 50MP 1" Leica Summilux', 'Charge 90W + Sans fil 80W', 'Écran 6.73" AMOLED 120Hz', '16 Go RAM'],
    desc: 'Xiaomi 14 Ultra — co-développé avec Leica, redéfinit la photographie mobile avec son capteur 1 pouce.'
  },
  {
    id: 71,
    name: 'Xiaomi Redmi Note 13 Pro+',
    brand: 'Xiaomi',
    category: 'smartphones',
    badge: 'popular',
    rating: 4.6,
    reviews: 104,
    img: 'https://i01.appmifile.com/v1/MI_18455B3E4DA706226CF7535A58E875F0/pms_1699355649.85890977!560x560.jpg',
    specs: ['Dimensity 7200 Ultra', 'Écran 6.67" AMOLED 120Hz', 'Caméra 200MP OIS', 'Charge 120W HyperCharge', 'IP68', '8 Go RAM'],
    desc: 'Redmi Note 13 Pro+ — charge 120W en 19 minutes et caméra 200MP. Un flagship killer imbattable.'
  },
  {
    id: 72,
    name: 'Xiaomi Poco X6 Pro',
    brand: 'Xiaomi',
    category: 'smartphones',
    badge: null,
    rating: 4.6,
    reviews: 71,
    img: 'https://i01.appmifile.com/v1/MI_18455B3E4DA706226CF7535A58E875F0/pms_1705048459.10380617.png',
    specs: ['Dimensity 8300 Ultra', 'Écran 6.67" Flow AMOLED 144Hz', 'Caméra 64MP OIS', 'Batterie 5000mAh 67W', '12 Go RAM', 'Gaming Phone'],
    desc: 'Poco X6 Pro — processeur gaming Dimensity 8300, écran 144Hz et refroidissement LiquidCool.'
  },
  {
    id: 73,
    name: 'Xiaomi Redmi 14C',
    brand: 'Xiaomi',
    category: 'smartphones',
    badge: null,
    rating: 4.3,
    reviews: 86,
    img: 'https://i01.appmifile.com/v1/MI_18455B3E4DA706226CF7535A58E875F0/pms_1699355649.85890977!560x560.jpg',
    specs: ['Helio G85', 'Écran 6.88" HD+ 120Hz', 'Caméra 50MP AI', 'Batterie 5160mAh 18W', '4 Go RAM', 'Android 14 MIUI'],
    desc: 'Redmi 14C — grand écran 120Hz et caméra 50MP dans la gamme abordable Xiaomi. Autonomie solide.'
  },
  {
    id: 74,
    name: 'Xiaomi Redmi 15C',
    brand: 'Xiaomi',
    category: 'smartphones',
    badge: 'new',
    rating: 4.4,
    reviews: 41,
    img: 'https://i01.appmifile.com/v1/MI_18455B3E4DA706226CF7535A58E875F0/pms_1699355649.85890977!560x560.jpg',
    specs: ['Helio G85', 'Écran 6.88" HD+ 120Hz', 'Caméra 50MP IA', 'Batterie 5200mAh 18W', '4 Go RAM extensible', 'Android 14'],
    desc: 'Redmi 15C — la nouvelle génération Redmi C avec écran 120Hz, caméra IA et grande autonomie.'
  },
  {
    id: 75,
    name: 'Xiaomi Redmi A5',
    brand: 'Xiaomi',
    category: 'smartphones',
    badge: null,
    rating: 4.1,
    reviews: 63,
    img: 'https://i01.appmifile.com/v1/MI_18455B3E4DA706226CF7535A58E875F0/pms_1699355649.85890977!560x560.jpg',
    specs: ['Unisoc T7200', 'Écran 6.88" HD+ 90Hz', 'Caméra 8MP', 'Batterie 5000mAh', '2 Go RAM', 'Android 14 Go'],
    desc: 'Redmi A5 — l\'entrée dans l\'univers Xiaomi à moindre coût. Grand écran et batterie durable pour l\'essentiel.'
  },

  /* ───────── TABLETTES ───────── */
  {
    id: 200,
    name: 'Tablette Tecno XPAD 30E',
    brand: 'Tecno',
    category: 'tablettes',
    badge: 'new',
    rating: 4.4,
    reviews: 26,
    img: 'https://www.tecno-mobile.com/media/product/202410/3/Spark30C-Rock-Black-Front-back.jpg',
    specs: ['Unisoc T616', 'Écran 10.1" FHD+ IPS', 'Caméra 8MP + 5MP', 'Batterie 7000mAh', '4 Go RAM + 128 Go', 'Android 14'],
    desc: 'Tecno XPAD 30E — tablette grand écran IPS avec grande batterie pour les études, le divertissement et le travail nomade.'
  },
  {
    id: 201,
    name: 'Tablette Samsung Galaxy Tab 60 Pro',
    brand: 'Samsung',
    category: 'tablettes',
    badge: 'new',
    rating: 4.6,
    reviews: 18,
    img: 'https://images.unsplash.com/photo-1544244015-0df4b3ffc6b0?w=600&q=85&fit=crop',
    specs: ['Snapdragon 8 Gen 2', 'Écran 12" Super AMOLED 120Hz', 'Stylet S Pen inclus', 'Batterie 10090mAh', '12 Go RAM + 256 Go', 'DeX Mode'],
    desc: 'Samsung Galaxy Tab 60 Pro — tablette premium avec S Pen, écran AMOLED 12" et mode DeX pour une productivité professionnelle.'
  },

  /* ───────── ACCESSORIES / CHARGEURS ───────── */
  {
    id: 80,
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
    id: 81,
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
    id: 82,
    name: 'Chargeur Baseus GaN 65W 3 ports',
    brand: 'Baseus',
    category: 'chargeurs',
    badge: null,
    rating: 4.7,
    reviews: 62,
    img: 'https://m.media-amazon.com/images/I/51vHLUMfbCL._AC_SL1500_.jpg',
    specs: ['65W total GaN III', '2× USB-C + 1× USB-A', 'PowerDelivery + QC 4.0', 'Compact prise murale', 'Protection surchauffe', 'Compatible tous appareils'],
    desc: 'Baseus GaN 65W — chargez laptop, iPhone et AirPods simultanément avec un seul adaptateur cube.'
  },
  {
    id: 83,
    name: 'Powerbank Baseus 20000mAh 65W',
    brand: 'Baseus',
    category: 'accessoires',
    badge: null,
    rating: 4.7,
    reviews: 91,
    img: 'https://images.unsplash.com/photo-1609091839311-d5365f9ff1c5?w=600&q=85&fit=crop',
    specs: ['20000mAh', '65W PD charge rapide', '2× USB-C + 1× USB-A', 'Affichage LED digital %', 'Recharge en 2h', 'Charge iPhone 4× fois'],
    desc: 'Batterie externe 20000mAh — parfaite pour les voyages, recharge laptop, smartphones et tablettes.'
  },

  /* ───────── CASQUES ───────── */
  {
    id: 90,
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
    id: 91,
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
    id: 92,
    name: 'Sony WH-1000XM5',
    brand: 'Sony',
    category: 'casques',
    badge: 'popular',
    rating: 4.9,
    reviews: 167,
    img: 'https://images.unsplash.com/photo-1618366712010-f4ae9c647dcb?w=600&q=85&fit=crop',
    specs: ['ANC Industry-leading', '8 mics + processeur V1', 'Autonomie 30h ANC ON', 'Quick Charge 3min=3h', 'Audio LDAC 360°', 'Design ultra-léger'],
    desc: 'Sony WH-1000XM5 — le meilleur casque ANC du monde. Silence absolu garanti.'
  },
  {
    id: 93,
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
    id: 95,
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
    id: 96,
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
  90: [{ name:'Koffi R.', date:'il y a 2 jours', rating:5, text:'Son exceptionnel et réduction de bruit parfaite. Vraiment satisfait !' }],
  23: [{ name:'Jean-Marc K.', date:'il y a 5 jours', rating:5, text:'Samsung S25 Ultra livré en 24h. Le S Pen est incroyable. Service sérieux.' }],
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
  'iphone': 'Nous avons les iPhone XR, 11, 12, 13, 14, 15, 16 et 17 (standard, Air/Plus, Pro, Pro Max) en stock ! Quel modèle vous intéresse ? 📱',
  'samsung': 'Galaxy S22 à S26, Fold 3 à 8, A06 à A57 (versions standard, +, Ultra) disponibles. Quel est votre budget ?',
  'tecno':  'Tecno Spark 40/50/Slim, Camon 50/50 Pro/50 Ultra, Pop 20 disponibles ! Bons rapports qualité/prix.',
  'infinix': 'Infinix Smart 20, Hot 70, Zero 40 5G, Note Edge disponibles — excellentes performances pour le prix !',
  'itel':   'Itel A06, A200, City 100/200, S25 Ultra disponibles — entrée/milieu de gamme fiables et abordables.',
  'xiaomi': 'Xiaomi 14 Ultra, Redmi Note 13 Pro+, Redmi 14C, 15C, A5 et Poco X6 Pro disponibles !',
  'redmi':  'Redmi 14C, 15C et A5 disponibles ! Rapport qualité/prix imbattable. Quel modèle vous convient ?',
  'casque': 'AirPods Pro 2, Sony WH-1000XM5, Galaxy Buds3 Pro et JBL Tune 770NC en stock ! 🎧',
  'chargeur': 'Chargeurs Apple 30W, Samsung 45W et Baseus GaN 65W disponibles. Lequel cherchez-vous ?',
  'tablette': 'Tecno XPAD 30E et Samsung Galaxy Tab 60 Pro disponibles ! Pour quel usage ?',
  'fold': 'Samsung Galaxy Z Fold 3 à 8 disponibles ! Le foldable Samsung pour une productivité maximale. 📱',
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