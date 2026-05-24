export type Product = {
	id: string;
	name: string;
	price: number;
	discountPrice?: number;
	category: 'Hombre' | 'Mujer' | 'Accesorios';
	description: string;
	material: string;
	colors: string[];
	sizes: string[];
	image: string;
	images: string[];
	featured?: boolean;
};

export function getCategorySlug(category: Product['category']) {
	return category.toLowerCase();
}

export const products: Product[] = [
	// ─── HOMBRE (20) ───────────────────────────────────────────────────────────
	{
		id: 'camisa-lino-oversized',
		name: 'Camisa de Lino Oversized',
		price: 2225,
		discountPrice: 1725,
		category: 'Hombre',
		description:
			'Camisa ligera con estructura relajada, ideal para capas en cualquier temporada.',
		material: '55% lino, 45% algodón',
		colors: ['Arena', 'Negro', 'Piedra'],
		sizes: ['S', 'M', 'L', 'XL'],
		image: 'https://images.unsplash.com/photo-1653798730253-94709fb1b691?q=80&w=764&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
		images: [
			'https://martinvalen.com/24358-mv_large_default/mens-regular-fit-linen-grandad-collar-shirt-in-black.jpg',
			'https://martinvalen.com/24407-thickbox_default/mens-regular-fit-linen-grandad-collar-shirt-in-white.jpg'
		],
		featured: true
	},
	{
		id: 'pantalon-sastre-relajado',
		name: 'Pantalón Sastre Relajado',
		price: 1975,
		category: 'Hombre',
		description:
			'Pantalón minimalista con caída limpia y silueta refinada para el día a día formal.',
		material: '72% poliéster, 24% viscosa, 4% elastano',
		colors: ['Carbón', 'Topo', 'Marfil'],
		sizes: ['S', 'M', 'L', 'XL'],
		image: 'https://images.asos-media.com/products/asos-design-pantalones-de-sastre-gris-carbon-comodos-y-elasticos-de-pernera-ancha-con-cinturilla-elastica/209595397-1-charcoal?$n_1280w$&wid=1125&fit=constrain',
		images: [
			'https://images.asos-media.com/products/asos-design-pantalones-de-sastre-grises-comodos-y-elasticos-de-pernera-ancha-con-cinturilla-elastica/209595471-1-grey?$n_1280w$&wid=1125&fit=constrain',
			'https://images.asos-media.com/products/asos-design-pantalones-de-sastre-color-piedra-comodos-y-elasticos-de-pernera-ancha-con-cinturilla-elastica/209825745-1-stone?$n_1280w$&wid=1125&fit=constrain'
		],
		featured: true
	},
	{
		id: 'camiseta-algodon-organico',
		name: 'Camiseta de Algodón Orgánico',
		price: 975,
		category: 'Hombre',
		description:
			'Camiseta de corte limpio en algodón orgánico suave, esencial para cualquier armario.',
		material: '100% algodón orgánico',
		colors: ['Blanco', 'Negro', 'Gris Claro'],
		sizes: ['S', 'M', 'L', 'XL', 'XXL'],
		image: 'https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?auto=format&fit=crop&w=1200&q=80',
		images: [
			'https://media.mango.com/is/image/punto/87040598-99-002?wid=2048',
			'https://www.koaj.co/12450-large_default/camiseta-estampada-algodon.webp'
		],
		featured: false
	},
	{
		id: 'sudadera-francesa',
		name: 'Sudadera de Felpa Francesa',
		price: 1625,
		discountPrice: 1300,
		category: 'Hombre',
		description:
			'Sudadera de cuello redondo en rizo francés con acabado suave y cepillado interior.',
		material: '80% algodón, 20% poliéster',
		colors: ['Gris Melange', 'Marino', 'Crema'],
		sizes: ['S', 'M', 'L', 'XL'],
		image: 'https://www.trueclassictees.com/cdn/shop/files/4608_HGREY_2.jpg?v=1762278057&width=1420',
		images: [
			'https://www.trueclassictees.com/cdn/shop/files/4608_Fleece_French_Terry_Pullover_Hoodie_Navy_4_00517a0a-b4b0-4028-b21d-f6af1df178f9.jpg?v=1773881649&width=1420',
			'https://dtcralphlauren.scene7.com/is/image/PoloGSI/s7-1487348_alternate10?$rl_4x5_pdp$'
		],
		featured: false
	},
	{
		id: 'chaqueta-bomber-nylon',
		name: 'Chaqueta Bomber de Nylon',
		price: 2875,
		category: 'Hombre',
		description:
			'Bomber ligero en nylon técnico con interior suave, perfecto para primavera y otoño.',
		material: '100% nylon, forro de poliéster',
		colors: ['Oliva', 'Negro', 'Azul Marino'],
		sizes: ['S', 'M', 'L', 'XL'],
		image: 'https://www.potros.cl/media/catalog/product/cache/1d4b0132255d59e96f7e7242be5bf6e3/p/t/ptv615020n096_1_2.jpg',
		images: [
			'https://www.modarm.com/medias/000005000001062538-1200-1.webp?context=bWFzdGVyfGltYWdlc3w4ODYxMnxpbWFnZS93ZWJwfGFEUm1MMmczTmk4Mk56QTVNVEU1TVRRek1URTVPQzh3TURBd01EVXdNREF3TURFd05qSTFNemd0TVRJd01GOHhMbmRsWW5BfDlkNzI3NmU0N2U5MzdlNzk5ZjRjMmE0NDVjZTc5MjJhYTUyNGNiZDBmNGZiNzhjMWM3MjMzZTIxZGZhODEwNWM',
			'https://m.media-amazon.com/images/I/61ezri3zvmL._AC_SY879_.jpg'
		],
		featured: false
	},
	{
		id: 'vaquero-slim-elastico',
		name: 'Vaquero Slim Elástico',
		price: 2125,
		discountPrice: 1750,
		category: 'Hombre',
		description:
			'Vaquero de corte slim con elastano para mayor movilidad y comodidad todo el día.',
		material: '98% algodón, 2% elastano',
		colors: ['Índigo', 'Negro', 'Azul Claro'],
		sizes: ['28', '30', '32', '34', '36'],
		image: 'https://images.unsplash.com/photo-1542272604-787c3835535d?auto=format&fit=crop&w=1200&q=80',
		images: [
			'https://images.unsplash.com/photo-1542272604-787c3835535d?auto=format&fit=crop&w=1200&q=80',
			'https://images.unsplash.com/photo-1475178626620-a4d074967452?auto=format&fit=crop&w=1200&q=80'
		],
		featured: false
	},
	{
		id: 'polo-pique-clasico',
		name: 'Polo Piqué Clásico',
		price: 1375,
		category: 'Hombre',
		description:
			'Polo de piqué de algodón con corte regular y cuello de canalé para un look atemporal.',
		material: '100% algodón piqué',
		colors: ['Blanco', 'Marino', 'Verde Bosque'],
		sizes: ['S', 'M', 'L', 'XL', 'XXL'],
		image: 'https://www.gutteridge.com/dw/image/v2/BDJZ_PRD/on/demandware.static/-/Sites-catalog-gutteridge-master/default/dw641c773f/hi-res/PP3749GUY2O_0099C_001.jpg?sw=1000&sh=1350&q=90&strip=false',
		images: [
			'https://www.gutteridge.com/on/demandware.static/-/Sites-catalog-gutteridge-master/default/dw5451cbd2/hi-res/PP3749GUY2O_0241C_001.jpg',
			'https://mm1.valecuatro.com/69939-large_default/polo-h-clasico.jpg'
		],
		featured: false
	},
	{
		id: 'abrigo-lana-largo',
		name: 'Abrigo de Lana Largo',
		price: 4725,
		discountPrice: 3725,
		category: 'Hombre',
		description:
			'Abrigo largo de mezcla de lana con solapa de muesca y forro interior de satén.',
		material: '70% lana, 30% poliéster',
		colors: ['Camel', 'Gris Oscuro', 'Negro'],
		sizes: ['S', 'M', 'L', 'XL'],
		image: 'https://images.unsplash.com/photo-1539533018447-63fcce2678e3?auto=format&fit=crop&w=1200&q=80',
		images: [
			'https://co.scalperscompany.com/cdn/shop/files/44776-GREY-P-1_5b48fccf-e1d3-48bc-83c1-f717daf93d6a.jpg?height=1439&v=1761150112',
			'https://m.media-amazon.com/images/I/71Oinb1diGL._AC_UY1000_.jpg'
		],
		featured: true
	},
	{
		id: 'camisa-oxford-manga-larga',
		name: 'Camisa Oxford Manga Larga',
		price: 1725,
		category: 'Hombre',
		description:
			'Camisa Oxford de tejido texturizado con corte regular, botón en cuello y puños.',
		material: '100% algodón Oxford',
		colors: ['Azul Claro', 'Blanco', 'Rosa Pálido'],
		sizes: ['S', 'M', 'L', 'XL'],
		image: 'https://images.unsplash.com/photo-1602810318383-e386cc2a3ccf?auto=format&fit=crop&w=1200&q=80',
		images: [
			'https://images.unsplash.com/photo-1602810318383-e386cc2a3ccf?auto=format&fit=crop&w=1200&q=80',
			'https://images.unsplash.com/photo-1563630423918-b58f07336ac9?auto=format&fit=crop&w=1200&q=80'
		],
		featured: false
	},
	{
		id: 'short-baño-surf',
		name: 'Short de Baño Surf',
		price: 1125,
		category: 'Hombre',
		description:
			'Short de baño con estampado tropical, cinturilla elástica y cordón ajustable.',
		material: '100% poliéster reciclado',
		colors: ['Azul Caribe', 'Verde Oliva', 'Coral'],
		sizes: ['S', 'M', 'L', 'XL'],
		image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRZR9orfREIimyh7THhXQaCRH4B3g3vrAp1dg&s',
		images: [
			'https://m.media-amazon.com/images/I/71RQ6SrmQTL._AC_SX569_.jpg',
			'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQCm5cDW--3VLlHjGnnYRLCDRMAjzCIsLf7nQ&s'
		],
		featured: false
	},
	{
		id: 'jersey-punto-grueso',
		name: 'Jersey de Punto Grueso',
		price: 2375,
		category: 'Hombre',
		description:
			'Jersey de punto grueso con cuello alto y textura de trenza artesanal para el invierno.',
		material: '60% lana merino, 40% acrílico',
		colors: ['Beige', 'Gris Carbón', 'Burdeos'],
		sizes: ['S', 'M', 'L', 'XL'],
		image: 'https://static.kiabi.es/images/jersey-grueso-de-punto-trenzado-liso-beige-elg92_2_hd1.jpg?width=800',
		images: [
			'https://http2.mlstatic.com/D_NQ_NP_732564-MLM87513778847_072025-O-jersey-de-punto-grueso-para-hombre-cuello-alto.webp',
			'https://www.willsoor.es/images/produkty/1605859104_dsc07253.jpg'
		],
		featured: false
	},
	{
		id: 'pantalon-cargo-tech',
		name: 'Pantalón Cargo Técnico',
		price: 2300,
		discountPrice: 1875,
		category: 'Hombre',
		description:
			'Pantalón cargo con tejido técnico repelente al agua, bolsillos funcionales y corte moderno.',
		material: '95% poliamida, 5% elastano',
		colors: ['Verde Militar', 'Negro', 'Topo'],
		sizes: ['S', 'M', 'L', 'XL'],
		image: 'https://images.asos-media.com/products/pantalones-cargo-verde-claro-workwear-stay-loose-de-levis/206113729-1-lightgreen?$n_640w$&wid=513&fit=constrain',
		images: [
			'https://tascani.vtexassets.com/arquivos/ids/180864-800-auto?v=638824004568230000&width=800&height=auto&aspect=true',
			'https://acdn-us.mitiendanube.com/stores/001/218/661/products/25425-37_-5_calidad-jpeg-70-7cccdc8dfdca2c7c9017086163138339-1024-1024.webp'
		],
		featured: false
	},
	{
		id: 'chaleco-punto-abierto',
		name: 'Chaleco de Punto Abierto',
		price: 1475,
		category: 'Hombre',
		description:
			'Chaleco sin botones en punto abierto, ideal para capas sobre camisa o camiseta.',
		material: '50% algodón, 50% acrílico',
		colors: ['Crema', 'Marino', 'Mostaza'],
		sizes: ['S', 'M', 'L', 'XL'],
		image: 'https://m.media-amazon.com/images/I/51KBI8PUftL._AC_UY1000_.jpg',
		images: [
			'https://m.media-amazon.com/images/I/71X3k1Zb2fL._AC_UY1000_.jpg',
			'https://m.media-amazon.com/images/I/61vgs7sOJvL._AC_UF894,1000_QL80_.jpg'
		],
		featured: false
	},
	{
		id: 'bermuda-lino-hombre',
		name: 'Bermuda de Lino',
		price: 1550,
		category: 'Hombre',
		description:
			'Bermuda de lino con cinturilla elástica trasera, acabado natural y corte ligeramente holgado.',
		material: '100% lino lavado',
		colors: ['Arena', 'Azul Cielo', 'Blanco'],
		sizes: ['S', 'M', 'L', 'XL'],
		image: 'https://renzo.com.co/wp-content/uploads/2024/03/240201002.jpg',
		images: [
			'https://i.ebayimg.com/images/g/H5UAAeSwutNpr43k/s-l1200.webp',
			'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQp0KntgIdHvWbsMqiFWwnLMns-eMabiFTLXQ&s'
		],
		featured: false
	},
	{
		id: 'blazer-sin-forro',
		name: 'Blazer Sin Forro',
		price: 3225,
		category: 'Hombre',
		description:
			'Blazer desestructurado sin forro para un look inteligente pero cómodo en cualquier ocasión.',
		material: '60% algodón, 40% lino',
		colors: ['Beige', 'Gris Claro', 'Azul Oscuro'],
		sizes: ['S', 'M', 'L', 'XL'],
		image: 'https://www.wessi.com/cdn/shop/files/astarsiz-tek-dugme-erkek-blazer-ceketb-709610.jpg?v=1723638509&width=1800',
		images: [
			'https://wholesale.wessi.com/cdn/shop/files/CK-5311-30-AI5.jpg?v=1743776436&width=1080',
			'https://wholesale.wessi.com/cdn/shop/files/CK-5309-21-AI7.jpg?v=1759406133&width=1080'
		],
		featured: false
	},
	{
		id: 'camisa-manga-corta-cuadros',
		name: 'Camisa de Manga Corta a Cuadros',
		price: 1475,
		discountPrice: 1125,
		category: 'Hombre',
		description:
			'Camisa de manga corta con patrón de cuadros vichy, perfecta para el verano urbano.',
		material: '100% algodón',
		colors: ['Azul/Blanco', 'Rojo/Blanco', 'Verde/Blanco'],
		sizes: ['S', 'M', 'L', 'XL'],
		image: 'https://johnpaolo.com.co/wp-content/uploads/2026/04/010136MC.png.jpg',
		images: [
			'https://dioro.com.mx/cdn/shop/files/2308352-PMC-_3.jpg?v=1696623118&width=1200',
			'https://i5.walmartimages.com/asr/503014e0-e0b4-4e31-bbfb-b1c720dd4fa5.57a5c87e254f7541ac41ccb45f8e56d2.jpeg?odnHeight=717&odnWidth=717&odnBg=FFFFFF'
		],
		featured: false
	},
	{
		id: 'capote-ligero',
		name: 'Capote Ligero',
		price: 2475,
		category: 'Hombre',
		description:
			'Capote empaquetable con costuras selladas y capucha ajustable para días lluviosos.',
		material: '100% poliéster reciclado con tratamiento DWR',
		colors: ['Negro', 'Amarillo Mostaza', 'Azul Marino'],
		sizes: ['S', 'M', 'L', 'XL'],
		image: 'https://m.media-amazon.com/images/I/61jE2TMaEWL._AC_UY1000_.jpg',
		images: [
			'https://m.media-amazon.com/images/I/71074uYawZL._AC_UY1000_.jpg',
			'https://www.kmmotos.com/cdn/shop/files/KMS-MMCE2065_a6a9d877-4abc-487a-99ef-55a1858e6b80.png?v=1748398687&width=1946'
		],
		featured: false
	},
	{
		id: 'pantalon-chino-slim',
		name: 'Pantalón Chino Slim',
		price: 1800,
		category: 'Hombre',
		description:
			'Pantalón chino de corte slim en sarga de algodón con bajo cosido y bolsillos limpios.',
		material: '98% algodón, 2% elastano',
		colors: ['Kaki', 'Azul Marino', 'Crema'],
		sizes: ['28', '30', '32', '34', '36'],
		image: 'https://holstone.com.mx/cdn/shop/files/CHINOCAQUISLIM_2_2048x.png?v=1766010214',
		images: [
			'https://oggi.mx/cdn/shop/files/CHINOS-900-MOVIN-MARINO_VISTA2.jpg?v=1739977521',
			'https://acdn-us.mitiendanube.com/stores/001/218/661/products/16091-08-611-0e24ae01fbd8476e6716715438534575-1024-1024.webp'
		],
		featured: false
	},
	{
		id: 'hoodie-techno-fleece',
		name: 'Hoodie Techno Fleece',
		price: 2125,
		discountPrice: 1700,
		category: 'Hombre',
		description:
			'Sudadera con capucha en tejido técnico de forro polar, con bolsillo canguro y cremallera frontal.',
		material: '100% poliéster técnico',
		colors: ['Negro', 'Gris Oscuro', 'Azul Marino'],
		sizes: ['S', 'M', 'L', 'XL', 'XXL'],
		image: 'https://technostoff.com/cdn/shop/products/minimalistic_techno_premium_hoodie_fuer_maenner.jpg?v=1660668488&width=600',
		images: [
			'https://m.media-amazon.com/images/I/61zH82HIi1L._AC_UY1000_.jpg',
			'https://exitocol.vtexassets.com/arquivos/ids/18275492/buso-hombre-azul-oscuro-hoodie.jpg?v=638191784548270000'
		],
		featured: false
	},
	{
		id: 'traje-lino-dos-piezas',
		name: 'Traje de Lino Dos Piezas',
		price: 6125,
		discountPrice: 4975,
		category: 'Hombre',
		description:
			'Traje ligero de lino con chaqueta desestructurada y pantalón de pinzas, ideal para ocasiones cálidas.',
		material: '100% lino',
		colors: ['Beige', 'Blanco Roto', 'Azul Claro'],
		sizes: ['S', 'M', 'L', 'XL'],
		image: 'https://thomasfiedler.cl/wp-content/uploads/2022/03/f994cf06aabc5fc95e6a3c436a2552f5-600x855.png.webp',
		images: [
			'https://urbandawn.es/wp-content/uploads/2024/05/traje-de-hombre-super-elastico-color-blanco-lino-clemente-entalado-slimfit-urbandawn-bullas-murcia-2024-zar-24122.jpg',
			'https://i.pinimg.com/736x/d3/4c/95/d34c955790e508dfee2f2cb1659120bc.jpg'
		],
		featured: true
	},

	// ─── MUJER (20) ────────────────────────────────────────────────────────────
	{
		id: 'gabardina-wide-leg',
		name: 'Gabardina Wide-Leg',
		price: 3475,
		discountPrice: 2725,
		category: 'Mujer',
		description:
			'Gabardina fluida con volumen moderno y líneas limpias para el cambio de estación.',
		material: '65% algodón, 35% poliéster reciclado',
		colors: ['Kaki', 'Negro', 'Crudo'],
		sizes: ['S', 'M', 'L', 'XL'],
		image: 'https://bobois.com.mx/cdn/shop/files/gpt17_a903c1e6-e090-4eb1-9ef2-9e60f34c14dd.jpg?v=1759360315',
		images: [
			'https://dcdn-us.mitiendanube.com/stores/250/501/products/jr000115_2-b72b87fd95827ffeca17761085761967-1024-1024.webp',
			'https://http2.mlstatic.com/D_NQ_NP_765313-MLA84312803951_052025-O.webp'
		],
		featured: true
	},
	{
		id: 'vestido-punto-canalé',
		name: 'Vestido de Punto Canalé',
		price: 2375,
		category: 'Mujer',
		description:
			'Vestido de punto canalé suave con ajuste ceñido y elegancia sin esfuerzo para el día y la noche.',
		material: 'Mezcla de viscosa canalé',
		colors: ['Negro', 'Chocolate', 'Crema'],
		sizes: ['S', 'M', 'L', 'XL'],
		image: 'https://static.kiabi.es/images/vestido-tipo-jersey-entallado-de-punto-de-canale-negro-bzg68_2_hd1.jpg?width=800',
		images: [
			'https://img01.ztat.net/article/spp-media-p1/55d7079c08324675b9890e21fbd07a33/eb2f6439fb8647e69da7c62c7e45d1c0.jpg?imwidth=1800',
			'https://i.etsystatic.com/19773225/r/il/da21ee/7491003647/il_570xN.7491003647_bs2c.jpg'
		],
		featured: true
	},
	{
		id: 'blusa-saten-lazada',
		name: 'Blusa de Satén con Lazada',
		price: 1800,
		category: 'Mujer',
		description:
			'Blusa de satén fluido con detalle de lazada al cuello y manga larga, elegante y versátil.',
		material: '100% poliéster satinado',
		colors: ['Champán', 'Negro', 'Burdeos'],
		sizes: ['S', 'M', 'L', 'XL'],
		image: 'https://m.media-amazon.com/images/I/71R-OPczWxL._AC_UF894,1000_QL80_.jpg',
		images: [
			'https://m.media-amazon.com/images/I/61Vpk1iu4zL._AC_UY1000_.jpg',
			'https://m.media-amazon.com/images/I/61RQxfCKCVL._AC_UY1000_.jpg'
		],
		featured: false
	},
	{
		id: 'pantalon-pinzas-tiro-alto',
		name: 'Pantalón de Pinzas Tiro Alto',
		price: 2200,
		discountPrice: 1800,
		category: 'Mujer',
		description:
			'Pantalón de pinzas con tiro alto y pierna recta, en crepé estructurado para un look refinado.',
		material: '63% poliéster, 33% viscosa, 4% elastano',
		colors: ['Topo', 'Negro', 'Arena'],
		sizes: ['XS', 'S', 'M', 'L', 'XL'],
		image: 'https://highstreet.com.mx/cdn/shop/files/HIGH-STREET-Pantalon-wide-leg-con-pinzas-frontales-tiro-alto-BPCA-250033_03_b65d2933-e6e3-484b-99b6-a1b7ee0377c1_720x.jpg?v=1769815029',
		images: [
			'https://static.e-stradivarius.net/assets/public/f3b4/e903/0077469ba286/3e14e132db9a/01152563001-c1/01152563001-c1.jpg?ts=1773763174083&w=500',
			'https://julio.com/media/catalog/product/1/5/pantalon-recto-fluido-tiro-alto-arena-con-pinzas-y-banda.jpg?quality=80&bg-color=255,255,255&height=638&width=508&canvas=508:638'
		],
		featured: false
	},
	{
		id: 'minifalda-tweed',
		name: 'Minifalda de Tweed',
		price: 1975,
		category: 'Mujer',
		description:
			'Minifalda en tweed texturizado con cierre frontal de botones y tiro alto de tendencia.',
		material: '55% lana, 45% poliéster',
		colors: ['Multicolor Crema', 'Negro', 'Rosa Empolvado'],
		sizes: ['XS', 'S', 'M', 'L'],
		image: 'https://img01.ztat.net/article/spp-media-p1/e3844b86961848b98484747de960fc2d/cba3f3eb23a54236856092c305a766af.jpg?imwidth=762',
		images: [
			'https://img01.ztat.net/article/spp-media-p1/3c6c12a72c214010b62c674b6fac7296/07ffb13d0ae1469aab3981757e54793a.jpg?imwidth=762',
			'https://julio.com/media/catalog/product/4/4/440106_01_1.jpg?quality=80&bg-color=255,255,255&height=638&width=508&canvas=508:638'
		],
		featured: false
	},
	{
		id: 'chaqueta-punto-abierto-mujer',
		name: 'Chaqueta de Punto Abierto',
		price: 2625,
		category: 'Mujer',
		description:
			'Chaqueta larga de punto abierto con bolsillos laterales, perfecta para capas elegantes.',
		material: '52% viscosa, 28% nylon, 20% algodón',
		colors: ['Camel', 'Gris', 'Marfil'],
		sizes: ['S', 'M', 'L', 'XL'],
		image: 'https://m.media-amazon.com/images/I/718-T2i9duL._AC_UF894,1000_QL80_.jpg',
		images: [
			'https://m.media-amazon.com/images/I/71WLmYKoBJL._AC_UY1000_.jpg',
			'https://www.katia.com/files/mod/6300/patron-tejer-punto-ganchillo-mujer-chaqueta-primavera-verano-katia-6300-6-g.jpg'
		],
		featured: false
	},
	{
		id: 'vestido-lino-midi',
		name: 'Vestido de Lino Midi',
		price: 2750,
		discountPrice: 2225,
		category: 'Mujer',
		description:
			'Vestido midi de lino con escote en V, tirantes finos y falda ligeramente acampanada.',
		material: '100% lino',
		colors: ['Azul Lavanda', 'Tierra', 'Blanco Roto'],
		sizes: ['XS', 'S', 'M', 'L', 'XL'],
		image: 'https://instagram.ftgu1-3.fna.fbcdn.net/v/t51.82787-15/623256209_18555957415000629_959544795657927652_n.jpg?stp=dst-jpg_e35_tt6&_nc_cat=110&ig_cache_key=MzgyMDM1NDA3MjE1NDg1Njk1Nw%3D%3D.3-ccb7-5&ccb=7-5&_nc_sid=58cdad&_nc_aid=0&efg=eyJ2ZW5jb2RlX3RhZyI6IkNBUk9VU0VMX0lURU0ueHBpZHMuMTQ0MC5zZHIucmVndWxhcl9waG90by5DMyJ9&_nc_ohc=Gk-w8u-kt1wQ7kNvwFVvOJI&_nc_oc=AdrU443i7C__0hnqfBe6DFxLZAL39A4yhuAclOyuxB2Ex1jyaCrvOKFigB2UroOdx268PfdG3CfRiLytFGcgOycF&_nc_ad=z-m&_nc_cid=0&_nc_zt=23&_nc_ht=instagram.ftgu1-3.fna&_nc_gid=-UosjAWAsk4Kdg872MYOXQ&_nc_ss=7a22e&oh=00_Af6NTNjeySZ6KxM4FUW3Z304VbZblnd5qPn3foHXuvz39w&oe=6A1900AE',
		images: [
			'https://www.mytheresa.com/image/1094/1238/100/cb/P00990424_b1.jpg',
			'https://cdna.lystit.com/520/650/n/photos/massimodutti/69241d99/massimo-dutti-white-Vestido-Midi-Lino-Vuelo-Bordado.jpeg'
		],
		featured: false
	},
	{
		id: 'top-bordado',
		name: 'Top Bordado',
		price: 1625,
		category: 'Mujer',
		description:
			'Top estilo corsé con detalles de bordado floral, cierre de ojetes trasero y bajo recto.',
		material: '100% algodón',
		colors: ['Blanco', 'Negro', 'Rosa Floral'],
		sizes: ['XS', 'S', 'M', 'L'],
		image: 'https://m.media-amazon.com/images/I/81TaoBpMDuL._AC_UF894,1000_QL80_.jpg',
		images: [
			'https://i.etsystatic.com/8232387/r/il/61250b/3362379950/il_570xN.3362379950_ab8a.jpg',
			'https://i.pinimg.com/1200x/e8/b9/41/e8b941ca2b7491a229a43612af78da4a.jpg'
		],
		featured: false
	},
	{
		id: 'abrigo-oversized-lana',
		name: 'Abrigo Oversized de Lana',
		price: 4975,
		category: 'Mujer',
		description:
			'Abrigo de lana oversized con solapas anchas, bolsillos grandes y silueta dramática.',
		material: '80% lana, 20% poliamida',
		colors: ['Camel', 'Gris Perla', 'Negro'],
		sizes: ['XS', 'S', 'M', 'L', 'XL'],
		image: 'https://images.unsplash.com/photo-1539533018447-63fcce2678e3?auto=format&fit=crop&w=1200&q=80',
		images: [
			'https://cdn.laredoute.com/cdn-cgi/image/width=650,height=650,fit=pad,dpr=1/products/5/2/3/5231c3bf2cd6ebfeb9533882819c4f5e.jpg',
			'https://hips.hearstapps.com/hmg-prod/images/gettyimages-2175697092-6703e52103028.jpg?crop=0.657xw:1.00xh;0.143xw,0&resize=640:*'
		],
		featured: false
	},
	{
		id: 'falda-plisada-satén',
		name: 'Falda Plisada de Satén',
		price: 2050,
		discountPrice: 1625,
		category: 'Mujer',
		description:
			'Falda midi de satén plisado con cinturilla elástica y caída fluida para un look sofisticado.',
		material: '100% poliéster satinado',
		colors: ['Champán', 'Negro', 'Azul Cobalto'],
		sizes: ['XS', 'S', 'M', 'L', 'XL'],
		image: 'https://m.media-amazon.com/images/I/71UCJD2PHXL.jpg',
		images: [
			'https://http2.mlstatic.com/D_NQ_NP_853270-CBT98394143351_112025-O-falda-tipo-b-para-mujer-lisa-plisada-de-saten-grande-ve.webp',
			'https://m.media-amazon.com/images/I/71vA9lfjAtL.jpg'
		],
		featured: false
	},
	{
		id: 'camisa-oversize-popelin',
		name: 'Camisa Oversize de Popelín',
		price: 1625,
		category: 'Mujer',
		description:
			'Camisa de algodón popelín de corte oversized, con cuello clásico y bajo redondeado.',
		material: '100% algodón popelín',
		colors: ['Blanco', 'Azul Claro', 'Rosa Nude'],
		sizes: ['XS', 'S', 'M', 'L', 'XL'],
		image: 'https://tommy-europe.scene7.com/is/image/TommyEurope/DW0DW22936_YBL_main?$b2c_updp_m_mainImage_1920$',
		images: [
			'https://tommy-europe.scene7.com/is/image/TommyEurope/DW0DW22936_C8P_main?wid=625&fmt=jpeg&qlt=95%2C1&op_sharpen=0&resMode=sharp2&op_usm=1.5%2C.5%2C0%2C0&iccEmbed=0&printRes=72',
			'https://media.lolacasademunt.com/52719-large_default/camisa-popelin-oversize.jpg'
		],
		featured: false
	},
	{
		id: 'leggings-sport-tiro-alto',
		name: 'Leggings Sport Tiro Alto',
		price: 1375,
		category: 'Mujer',
		description:
			'Leggings de tiro alto con compresión media, tejido opaco y costuras planas sin rozaduras.',
		material: '78% poliamida, 22% elastano',
		colors: ['Negro', 'Gris Oscuro', 'Azul Marino'],
		sizes: ['XS', 'S', 'M', 'L', 'XL'],
		image: 'https://insideactive.pe/cdn/shop/files/samantha3301_5fb504b7-b503-4c64-8dec-621945298381.jpg?v=1723089831',
		images: [
			'https://horizons-lointains.fr/cdn/shop/files/Legging-de-sport-gris-cotele-extra-stretch-et-confort-h028-7.jpg?v=1696955309&width=800',
			'https://www.myprotein.es/images?url=https://static.thcdn.com/productimg/original/14742266-1555107703293377.jpg&format=webp&auto=avif'
		],
		featured: false
	},
	{
		id: 'vestido-camisero-midi',
		name: 'Vestido Camisero Midi',
		price: 2450,
		category: 'Mujer',
		description:
			'Vestido camisero midi con botones frontales, cinturón incluido y cuello con solapa.',
		material: '100% viscosa',
		colors: ['Blanco Roto', 'Mostaza', 'Negro'],
		sizes: ['XS', 'S', 'M', 'L', 'XL'],
		image: 'https://www.apparentia.com/views/resources/img/productos/20006/l/vestido-camisero-midi-de-plumetti-y-crep-para-novia-civil.jpg',
		images: [
			'https://img01.ztat.net/article/spp-media-p1/c65b9b6d4cb043ae90e7ab71d47a0729/d0f5fe2bc5f14b48b8e9d26f11659a45.jpg?imwidth=1800',
			'https://asset.promod.com/product/167111-gz-1693562538.jpg?auto=webp&quality=80&crop=10:15'
		],
		featured: false
	},
	{
		id: 'crop-top-canalé',
		name: 'Crop Top Canalé',
		price: 950,
		category: 'Mujer',
		description:
			'Crop top elástico de canalé fino con escote redondo, perfecto para combinar con faldas o pantalones.',
		material: '95% algodón, 5% elastano',
		colors: ['Negro', 'Blanco', 'Sage'],
		sizes: ['XS', 'S', 'M', 'L'],
		image: 'https://romanfashion.com.mx/media/catalog/product/cache/9877ff78997438903db8832efc7695dc/0/1/0141-negro-1-tr_vbdcyznjvvpqwnn8.jpg',
		images: [
			'https://hips.hearstapps.com/hmg-prod/images/chiara-ferragni-crop-top-canale-blanco-hm-8-1646906339.jpeg',
			'https://bohopink.com/cdn/shop/products/img_proxy_0b317017-8960-44d7-bb62-1fd2a280d10c.jpg?v=1752699954'
		],
		featured: false
	},
	{
		id: 'conjunto-lino-verano',
		name: 'Conjunto de Lino Verano',
		price: 3625,
		discountPrice: 2975,
		category: 'Mujer',
		description:
			'Conjunto de pantalón y camisa de lino coordinados, cómodos y frescos para el verano.',
		material: '100% lino',
		colors: ['Beige', 'Blanco', 'Verde Salvia'],
		sizes: ['XS', 'S', 'M', 'L', 'XL'],
		image: 'https://i.pinimg.com/736x/f5/c1/67/f5c167cb7a1cb9896f9f4f2abe641ccf.jpg',
		images: [
			'https://fenzy.es/media/uploads/public/product/20638-white_.jpg',
			'https://m.media-amazon.com/images/I/61leeVppqNL._AC_UY1000_.jpg'
		],
		featured: false
	},
	{
		id: 'vestido-asimetrico-gasa',
		name: 'Vestido Asimétrico de Gasa',
		price: 3125,
		category: 'Mujer',
		description:
			'Vestido de gasa con bajo asimétrico, tirantes cruzados en espalda y vuelo romántico.',
		material: '100% poliéster gasa',
		colors: ['Rosa Palo', 'Azul Cielo', 'Negro'],
		sizes: ['XS', 'S', 'M', 'L'],
		image: 'https://cdn-6.stacees.co.uk/uploads/2022/06/24/2022062401062889204_S22076XYB.jpg',
		images: [
			'https://invitadisima.com/141086-thickbox_default/vestido-de-fiesta-largo-azul-pastel-de-gasa-con-escote-asimetrico.jpg',
			'https://i.etsystatic.com/9650245/r/il/32e970/4694314867/il_570xN.4694314867_b16e.jpg'
		],
		featured: false
	},
	{
		id: 'parka-impermeable-mujer',
		name: 'Parka Impermeable',
		price: 4225,
		category: 'Mujer',
		description:
			'Parka larga impermeable con capucha desmontable, costuras selladas y bolsillos interiores.',
		material: '100% poliéster con revestimiento PU',
		colors: ['Verde Caqui', 'Negro', 'Camel'],
		sizes: ['XS', 'S', 'M', 'L', 'XL'],
		image: 'https://cdn.yoursclothing.com/Images/ProductImages/Big/2ee53718-633a-40_120868_A.jpg',
		images: [
			'https://www.kiabi.es/images/parka-impermeable-negro-bxp55_1_hd4.jpg',
			'https://img01.ztat.net/article/spp-media-p1/0fc9e2facdc74c28b0ceed901726bd86/d4df3c3390064bfcb05061206488fc57.jpg?imwidth=1800'
		],
		featured: false
	},
	{
		id: 'short-ciclista-mujer',
		name: 'Short Ciclista',
		price: 1050,
		category: 'Mujer',
		description:
			'Short ciclista ajustado en tejido compresivo, con cinturilla ancha y costuras planas.',
		material: '80% poliamida, 20% elastano',
		colors: ['Negro', 'Terracota', 'Verde Oscuro'],
		sizes: ['XS', 'S', 'M', 'L', 'XL'],
		image: 'https://contents.mediadecathlon.com/p2731534/k$237a39e0e4626b12ed99691d7068a60f/short-de-ciclista-de-fitness-y-cardio-negro-de-tiro-alto-para-mujer.jpg?format=auto&quality=40&f=800x800',
		images: [
			'https://safetti.com/cdn/shop/files/PANTALONETACICLISMO-DAMA_21673F_TERRACOTA_1.jpg?v=1724889420',
			'https://img01.ztat.net/article/spp-media-p1/ec85467205f84115ba3944a78ca4867c/59e564aef62c4847adc8cba141aab352.jpg?imwidth=1800'
		],
		featured: false
	},
	{
		id: 'blazer-oversize-mujer',
		name: 'Blazer Oversize Estructurado',
		price: 3375,
		discountPrice: 2725,
		category: 'Mujer',
		description:
			'Blazer de corte oversized con hombreras ligeras, bolsillos de parche y botones dorados.',
		material: '60% poliéster, 40% viscosa',
		colors: ['Gris Perla', 'Negro', 'Beige'],
		sizes: ['XS', 'S', 'M', 'L', 'XL'],
		image: 'https://cdn.laredoute.com/cdn-cgi/image/width=500,height=500,fit=pad,dpr=1/products/a/9/d/a9d7848e9be11a39f5524ccb666f0ff3.jpg',
		images: [
			'https://jc-moda.com/wp-content/uploads/2024/09/blazer-oversize-art-7-2415038-a.jpg',
			'https://thefrankieshop.com/cdn/shop/products/stevie-oversized-blazer-beige-blazer-the-frankie-shop-967493.jpg?v=1638203783&width=1080'
		],
		featured: true
	},
	{
		id: 'sudadera-cropped-universitaria',
		name: 'Sudadera Cropped Universitaria',
		price: 1450,
		category: 'Mujer',
		description:
			'Sudadera cropped de rizo con cuello redondo, manga larga y acabado inferior elástico.',
		material: '80% algodón, 20% poliéster',
		colors: ['Gris Melange', 'Blanco Roto',  'Rosa Nude'],
		sizes: ['XS', 'S', 'M', 'L'],
		image: 'https://images.asos-media.com/products/sudadera-corta-gris-con-cuello-alto-y-diseno-universitario-de-tommy-jeans/207287418-1-greyhtr?$n_640w$&wid=513&fit=constrain',
		images: [
			'https://images.asos-media.com/products/sudadera-corta-blanca-con-capucha-y-diseno-universitario-de-corte-cuadrado-exclusiva-en-asos-de-vans/203855137-1-white?$n_640w$&wid=513&fit=constrain',
			'https://www.terranovastyle.com/cdn/shop/files/7605f7d02e497edb491ce0d1fbb63cdecc11a1c7_STILLG_SAB0066922001_S119.jpg?v=1776146744&width=400'
		],
		featured: false
	},

	// ─── ACCESORIOS (15) ───────────────────────────────────────────────────────
	{
		id: 'tote-diario',
		name: 'Tote Diario',
		price: 1375,
		category: 'Accesorios',
		description:
			'Bolso tote estructurado con perfil discreto y amplia capacidad interior.',
		material: 'Cuero vegano liso',
		colors: ['Negro', 'Cacao', 'Hueso'],
		sizes: ['Única'],
		image: 'https://images.unsplash.com/photo-1548036328-c9fa89d128fa?auto=format&fit=crop&w=1200&q=80',
		images: [
			'https://tottomexico.vtexassets.com/arquivos/ids/249287/MA02KNO001-26100-T0T_1.jpg?v=639104882066930000',
			'https://m.media-amazon.com/images/I/41fn7QfK-wL._AC_UY900_.jpg'
		],
		featured: true
	},
	{
		id: 'zapatilla-cuero-minimal',
		name: 'Zapatilla de Cuero Minimal',
		price: 2750,
		discountPrice: 2225,
		category: 'Accesorios',
		description:
			'Zapatilla de uso diario con suela baja y acabado premium para un estilo versátil.',
		material: 'Parte superior de cuero, suela de goma',
		colors: ['Blanco', 'Blanco Roto', 'Negro'],
		sizes: ['36', '37', '38', '39', '40', '41', '42', '43', '44'],
		image: 'https://images.unsplash.com/photo-1542291026-7eec264c27ff?auto=format&fit=crop&w=1200&q=80',
		images: [
			'https://images.unsplash.com/photo-1542291026-7eec264c27ff?auto=format&fit=crop&w=1200&q=80',
			'https://images.unsplash.com/photo-1600185365483-26d7a4cc7519?auto=format&fit=crop&w=1200&q=80'
		],
		featured: false
	},
	{
		id: 'gorra-beisbol-algodón',
		name: 'Gorra de Béisbol de Algodón',
		price: 875,
		category: 'Accesorios',
		description:
			'Gorra de béisbol en algodón lavado con cierre trasero regulable y visera curvada.',
		material: '100% algodón lavado',
		colors: ['Crema', 'Negro', 'Azul Marino'],
		sizes: ['Única'],
		image: 'https://img01.ztat.net/article/spp-media-p1/db79dd9a82704da89dcf134e2a6450bf/335a91f41572462cba3f36fd8dc3ccac.jpg?imwidth=1800&filter=packshot',
		images: [
			'https://m.media-amazon.com/images/I/71Zi4o6MNdL._AC_UY1000_.jpg',
			'https://static.caphunters.com/51065-large_default/gorra-plana-azul-marino-ajustada-59fifty-a-frame-championship-side-flag-de-atlanta-braves-mlb-de-new-era.webp'
		],
		featured: false
	},
	{
		id: 'cinturon-cuero-clasico',
		name: 'Cinturón de Cuero Clásico',
		price: 1200,
		category: 'Accesorios',
		description:
			'Cinturón de cuero genuino con hebilla rectangular dorada y acabado liso atemporal.',
		material: 'Cuero genuino, hebilla de zinc',
		colors: ['Marrón Tostado', 'Negro'],
		sizes: ['S', 'M', 'L', 'XL'],
		image: 'https://m.media-amazon.com/images/I/81pMMjfjjcL._AC_UY1000_.jpg',
		images: [
			'https://m.media-amazon.com/images/I/61tw63Zyp5L._AC_UF894,1000_QL80_.jpg',
			'https://classymencollection.com/cdn/shop/files/Classic-black-leather-belt.jpg?v=1692705436'
		],
		featured: false
	},
	{
		id: 'bolso-bandolera-mini',
		name: 'Bolso Bandolera Mini',
		price: 1625,
		discountPrice: 1300,
		category: 'Accesorios',
		description:
			'Minibolso bandolera con correa ajustable, cierre de solapa magnético y compartimento interior.',
		material: 'Cuero vegano texturizado',
		colors: ['Camel', 'Negro', 'Rojo Cereza'],
		sizes: ['Única'],
		image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSxqZuXUyTVPGGAzykuvHk0eF7xgX8ZcOKDkg&s',
		images: [
			'https://images.unsplash.com/photo-1548036328-c9fa89d128fa?auto=format&fit=crop&w=1200&q=80',
			'https://http2.mlstatic.com/D_NQ_NP_856550-CBT110956323279_042026-O.webp'
		],
		featured: false
	},
	{
		id: 'bufanda-cachemir-fina',
		name: 'Bufanda Fina de Cachemira',
		price: 2125,
		category: 'Accesorios',
		description:
			'Bufanda rectangular en cachemira fina con flecos en los extremos, suave y cálida.',
		material: '100% cachemira',
		colors: ['Camel', 'Gris', 'Blanco Crudo'],
		sizes: ['Única'],
		image: 'https://m.media-amazon.com/images/I/71h9U-VyxrL._AC_UF894,1000_QL80_.jpg',
		images: [
			'https://m.media-amazon.com/images/I/71S3CYMd70L._AC_UF894,1000_QL80_.jpg',
			'https://www.sunxzz.com/cdn/shop/products/07-cashmerescarf_0.jpg?v=1631934045'
		],
		featured: false
	},
	{
		id: 'gafas-sol-acetato',
		name: 'Gafas de Sol de Acetato',
		price: 2375,
		discountPrice: 1975,
		category: 'Accesorios',
		description:
			'Gafas de sol de acetato con lente polarizada, protección UV400 y montura estilo vintage.',
		material: 'Acetato, lente de cristal polarizado',
		colors: ['Carey', 'Negro', 'Blanco'],
		sizes: ['Única'],
		image: 'https://static.e-stradivarius.net/assets/public/a677/8090/2c004066ad6b/845ecaad565c/00665603400-60-c/00665603400-60-c.jpg?ts=1740999075879&w=1082&f=auto',
		images: [
			'https://images.unsplash.com/photo-1572635196237-14b3f281503f?auto=format&fit=crop&w=1200&q=80',
			'https://www.sinner.eu/media/catalog/product/cache/e43935565574748590bb5e7ff9cf43f4/s/i/sisu-887-30-10_20260417-1634.jpg'
		],
		featured: false
	},
	{
		id: 'sombrero-panama',
		name: 'Sombrero Panamá',
		price: 1875,
		category: 'Accesorios',
		description:
			'Sombrero tipo Panamá tejido a mano con cinta de algodón intercambiable y ala media.',
		material: 'Paja toquilla tejida a mano',
		colors: ['Natural', 'Natural/Negro', 'Natural/Marino'],
		sizes: ['Única'],
		image: 'https://www.panamajack.es/cdn/shop/files/SOMBRERO-PANAMA-NATURAL-F1_G_NF_001_2000x.jpg?v=1772551287',
		images: [
			'https://palmasshop.com/wp-content/uploads/2024/08/Donato-Negro-Cocodrilo-Natural-3_clipped_rev_1.png',
			'https://m.media-amazon.com/images/I/61QW4VigyBL._AC_UY1000_.jpg'
		],
		featured: false
	},
	{
		id: 'botas-chelsea-cuero',
		name: 'Botas Chelsea de Cuero',
		price: 3725,
		category: 'Accesorios',
		description:
			'Botas Chelsea de cuero genuino con elásticos laterales, suela gruesa de goma y puntera redonda.',
		material: 'Cuero genuino, suela de goma vulcanizada',
		colors: ['Negro', 'Marrón Tostado'],
		sizes: ['36', '37', '38', '39', '40', '41', '42', '43'],
		image: 'https://www.lizantto.com/cdn/shop/files/Botachelseanegracueroliso_1_1800x1800.jpg?v=1740802421',
		images: [
			'https://static.wixstatic.com/media/f2136b_271b4dc2bc914dc1a5003522250ad656~mv2.jpg/v1/fill/w_560,h_440,al_c,q_80,usm_0.66_1.00_0.01,enc_avif,quality_auto/f2136b_271b4dc2bc914dc1a5003522250ad656~mv2.jpg',
			'https://xcdn.next.co.uk/common/items/default/default/itemimages/3_4Ratio/product/lge/F11920s.jpg?im=Resize,width=750'
		],
		featured: false
	},
	{
		id: 'mochila-cuero-vegano',
		name: 'Mochila de Cuero Vegano',
		price: 3125,
		discountPrice: 2475,
		category: 'Accesorios',
		description:
			'Mochila de cuero vegano con compartimento acolchado para portátil, bolsillos frontales y correas ajustables.',
		material: 'Cuero vegano, forro de poliéster',
		colors: ['Negro', 'Topo', 'Coñac'],
		sizes: ['Única'],
		image: 'https://m.media-amazon.com/images/I/61uHHuVOJPL._AC_UF894,1000_QL80_.jpg',
		images: [
			'https://http2.mlstatic.com/D_NQ_NP_726681-MLA111090430463_042026-O.webp',
			'https://m.media-amazon.com/images/I/91o-qGIFheL._AC_UY1000_.jpg'
		],
		featured: false
	},
	{
		id: 'calcetines-algodon-pack3',
		name: 'Pack 3 Calcetines de Algodón',
		price: 550,
		category: 'Accesorios',
		description:
			'Pack de tres pares de calcetines de algodón peinado con puntera y talón reforzados.',
		material: '80% algodón peinado, 17% poliamida, 3% elastano',
		colors: ['Blanco x3', 'Negro x3', 'Multicolor'],
		sizes: ['36-39', '40-43', '44-46'],
		image: 'https://www.dim.es/cdn/shop/files/D07Y9M3-0HY_01_43370d0b-097d-4e1b-94ec-4464052510db.jpg?v=1779203702',
		images: [
			'https://www.dim.es/cdn/shop/files/D05U8M3-0HZ_01_310f1aa5-3bea-4c1d-a4cf-d918d26fc516.jpg?v=1779203518',
			'https://xcdn.next.co.uk/common/items/default/default/itemimages/3_4Ratio/product/lge/F43085s.jpg?im=Resize,width=750'
		],
		featured: false
	},
	{
		id: 'reloj-minimalista-cuarzo',
		name: 'Reloj Minimalista de Cuarzo',
		price: 3375,
		category: 'Accesorios',
		description:
			'Reloj de cuarzo con esfera minimalista, correa de cuero intercambiable y cristal antirrayaduras.',
		material: 'Caja de acero, correa de cuero genuino',
		colors: ['Plata', 'Dorado/Negro', 'Negro/Negro'],
		sizes: ['Única'],
		image: 'https://m.media-amazon.com/images/I/81hNvRvRtGL._AC_SL1500_.jpg',
		images: [
			'https://unestiloperu.com/wp-content/uploads/reloj-qq-c214j102y-hombre-cuero-minimalista-negro.jpg',
			'https://eu-images.contentstack.com/v3/assets/blt7dcd2cfbc90d45de/blted739dc621164af6/69426f7d58e5472ecaf50868/Moment-Black-tone-37260.jpg?format=pjpg&auto=webp&quality=75%2C90&width=3840'
		],
		featured: false
	},
	{
		id: 'cartera-bifold-cuero',
		name: 'Cartera Bifold de Cuero',
		price: 1450,
		discountPrice: 1125,
		category: 'Accesorios',
		description:
			'Cartera bifold de cuero genuino con compartimentos para tarjetas, billetero y ventana para DNI.',
		material: 'Cuero genuino curtido al vegetal',
		colors: ['Marrón Oscuro', 'Negro', 'Coñac'],
		sizes: ['Única'],
		image: 'https://i.etsystatic.com/12235498/r/il/ad47cb/7877948475/il_570xN.7877948475_dr0d.jpg',
		images: [
			'https://m.media-amazon.com/images/I/618l-26Zy1L._AC_UY1000_.jpg',
			'https://m.media-amazon.com/images/I/81utlBW2jGL._AC_UF894,1000_QL80_.jpg'
		],
		featured: false
	},
	{
		id: 'sandalia-minimalista',
		name: 'Sandalia Minimalista',
		price: 1950,
		category: 'Accesorios',
		description:
			'Sandalia plana con tiras finas ajustables, plantilla de cuero suave y suela de goma flexible.',
		material: 'Cuero genuino, suela de goma',
		colors: ['Tostado', 'Blanco', 'Negro'],
		sizes: ['36', '37', '38', '39', '40', '41'],
		image: 'https://images.asos-media.com/products/sandalias-tostadas-minimalistas-con-diseno-de-correas-de-truffle-collection/205621974-1-tan?$n_640w$&wid=513&fit=constrain',
		images: [
			'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQeeyATr9A85XNDFEolr60jcvYaRmaa_KAohw&s',
			'https://hips.hearstapps.com/vader-prod.s3.amazonaws.com/1748280099-sandalias-minimalistas-05-6834a1d0ca209.jpg?crop=1xw:1xh;center,top&resize=980:*'
		],
		featured: false
	},
	{
		id: 'joyero-viaje-cuero',
		name: 'Joyero de Viaje de Cuero',
		price: 1125,
		category: 'Accesorios',
		description:
			'Joyero compacto de viaje en cuero vegano con interior acolchado, espejo integrado y bolsillos.',
		material: 'Cuero vegano, interior de terciopelo',
		colors: ['Negro', 'Burdeos', 'Nude'],
		sizes: ['Única'],
		image: 'https://http2.mlstatic.com/D_NQ_NP_604822-MLM108103760904_032026-O.webp',
		images: [
			'https://www.sacher1846.com/cdn/shop/files/77.301.010101i_1100x.jpg?v=1692172151',
			'https://i5.walmartimages.com/asr/991cfbfa-1092-4e16-b755-b1112bd70b6c.851eee1b892e8630ef264f3d8f02a37c.jpeg?odnHeight=612&odnWidth=612&odnBg=FFFFFF'
		],
		featured: false
	}
];

export const featuredProducts = products.filter((product) => product.featured);

export const categoryCards = [
	{
		title: 'Hombre',
		description: 'Esenciales a medida, capas relajadas y básicos elevados.',
		image:
			'https://images.unsplash.com/photo-1516257984-b1b4d707412e?auto=format&fit=crop&w=1200&q=80',
		href: '/productos?categoria=hombre'
	},
	{
		title: 'Mujer',
		description: 'Siluetas modernas, texturas refinadas y básicos versátiles.',
		image:
			'https://images.unsplash.com/photo-1483985988355-763728e1935b?auto=format&fit=crop&w=1200&q=80',
		href: '/productos?categoria=mujer'
	},
	{
		title: 'Accesorios',
		description: 'Bolsos, zapatos y piezas de acabado para el día a día.',
		image:
			'https://images.unsplash.com/photo-1523381210434-271e8be1f52b?auto=format&fit=crop&w=1200&q=80',
		href: '/productos?categoria=accesorios'
	}
];