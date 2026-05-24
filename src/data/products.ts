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
		image: 'https://images.unsplash.com/photo-1509942774463-acf339cf87d5?auto=format&fit=crop&w=1200&q=80',
		images: [
			'https://images.unsplash.com/photo-1509942774463-acf339cf87d5?auto=format&fit=crop&w=1200&q=80',
			'https://images.unsplash.com/photo-1556821840-3a63f15732ce?auto=format&fit=crop&w=1200&q=80'
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
		image: 'https://images.unsplash.com/photo-1529139574466-a303027c1d8b?auto=format&fit=crop&w=1200&q=80',
		images: [
			'https://images.unsplash.com/photo-1529139574466-a303027c1d8b?auto=format&fit=crop&w=1200&q=80',
			'https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?auto=format&fit=crop&w=1200&q=80'
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
		image: 'https://images.unsplash.com/photo-1584370848010-d7fe6bc767ec?auto=format&fit=crop&w=1200&q=80',
		images: [
			'https://images.unsplash.com/photo-1584370848010-d7fe6bc767ec?auto=format&fit=crop&w=1200&q=80',
			'https://images.unsplash.com/photo-1496747611176-843222e1e57c?auto=format&fit=crop&w=1200&q=80'
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
		image: 'https://images.unsplash.com/photo-1512436991641-6745cdb1723f?auto=format&fit=crop&w=1200&q=80',
		images: [
			'https://images.unsplash.com/photo-1512436991641-6745cdb1723f?auto=format&fit=crop&w=1200&q=80',
			'https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?auto=format&fit=crop&w=1200&q=80'
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
		image: 'https://images.unsplash.com/photo-1496747611176-843222e1e57c?auto=format&fit=crop&w=1200&q=80',
		images: [
			'https://images.unsplash.com/photo-1496747611176-843222e1e57c?auto=format&fit=crop&w=1200&q=80',
			'https://images.unsplash.com/photo-1529139574466-a303027c1d8b?auto=format&fit=crop&w=1200&q=80'
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
		colors: ['Blanco Roto', 'Tierra', 'Azul Lavanda'],
		sizes: ['XS', 'S', 'M', 'L', 'XL'],
		image: 'https://images.unsplash.com/photo-1496747611176-843222e1e57c?auto=format&fit=crop&w=1200&q=80',
		images: [
			'https://images.unsplash.com/photo-1496747611176-843222e1e57c?auto=format&fit=crop&w=1200&q=80',
			'https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?auto=format&fit=crop&w=1200&q=80'
		],
		featured: false
	},
	{
		id: 'top-corsé-bordado',
		name: 'Top Corsé Bordado',
		price: 1625,
		category: 'Mujer',
		description:
			'Top estilo corsé con detalles de bordado floral, cierre de ojetes trasero y bajo recto.',
		material: '100% algodón',
		colors: ['Blanco', 'Negro', 'Rosa Floral'],
		sizes: ['XS', 'S', 'M', 'L'],
		image: 'https://images.unsplash.com/photo-1509631179647-0177331693ae?auto=format&fit=crop&w=1200&q=80',
		images: [
			'https://images.unsplash.com/photo-1509631179647-0177331693ae?auto=format&fit=crop&w=1200&q=80',
			'https://images.unsplash.com/photo-1584370848010-d7fe6bc767ec?auto=format&fit=crop&w=1200&q=80'
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
			'https://images.unsplash.com/photo-1539533018447-63fcce2678e3?auto=format&fit=crop&w=1200&q=80',
			'https://images.unsplash.com/photo-1483985988355-763728e1935b?auto=format&fit=crop&w=1200&q=80'
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
		image: 'https://images.unsplash.com/photo-1512436991641-6745cdb1723f?auto=format&fit=crop&w=1200&q=80',
		images: [
			'https://images.unsplash.com/photo-1512436991641-6745cdb1723f?auto=format&fit=crop&w=1200&q=80',
			'https://images.unsplash.com/photo-1509631179647-0177331693ae?auto=format&fit=crop&w=1200&q=80'
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
		image: 'https://images.unsplash.com/photo-1503342217505-b0a15ec3261c?auto=format&fit=crop&w=1200&q=80',
		images: [
			'https://images.unsplash.com/photo-1503342217505-b0a15ec3261c?auto=format&fit=crop&w=1200&q=80',
			'https://images.unsplash.com/photo-1529139574466-a303027c1d8b?auto=format&fit=crop&w=1200&q=80'
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
		image: 'https://images.unsplash.com/photo-1506629082955-511b1aa562c8?auto=format&fit=crop&w=1200&q=80',
		images: [
			'https://images.unsplash.com/photo-1506629082955-511b1aa562c8?auto=format&fit=crop&w=1200&q=80',
			'https://images.unsplash.com/photo-1584370848010-d7fe6bc767ec?auto=format&fit=crop&w=1200&q=80'
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
		image: 'https://images.unsplash.com/photo-1496747611176-843222e1e57c?auto=format&fit=crop&w=1200&q=80',
		images: [
			'https://images.unsplash.com/photo-1496747611176-843222e1e57c?auto=format&fit=crop&w=1200&q=80',
			'https://images.unsplash.com/photo-1512436991641-6745cdb1723f?auto=format&fit=crop&w=1200&q=80'
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
		image: 'https://images.unsplash.com/photo-1509631179647-0177331693ae?auto=format&fit=crop&w=1200&q=80',
		images: [
			'https://images.unsplash.com/photo-1509631179647-0177331693ae?auto=format&fit=crop&w=1200&q=80',
			'https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?auto=format&fit=crop&w=1200&q=80'
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
		image: 'https://images.unsplash.com/photo-1503342217505-b0a15ec3261c?auto=format&fit=crop&w=1200&q=80',
		images: [
			'https://images.unsplash.com/photo-1503342217505-b0a15ec3261c?auto=format&fit=crop&w=1200&q=80',
			'https://images.unsplash.com/photo-1529139574466-a303027c1d8b?auto=format&fit=crop&w=1200&q=80'
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
		image: 'https://images.unsplash.com/photo-1509631179647-0177331693ae?auto=format&fit=crop&w=1200&q=80',
		images: [
			'https://images.unsplash.com/photo-1509631179647-0177331693ae?auto=format&fit=crop&w=1200&q=80',
			'https://images.unsplash.com/photo-1529139574466-a303027c1d8b?auto=format&fit=crop&w=1200&q=80'
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
		image: 'https://images.unsplash.com/photo-1539533018447-63fcce2678e3?auto=format&fit=crop&w=1200&q=80',
		images: [
			'https://images.unsplash.com/photo-1539533018447-63fcce2678e3?auto=format&fit=crop&w=1200&q=80',
			'https://images.unsplash.com/photo-1483985988355-763728e1935b?auto=format&fit=crop&w=1200&q=80'
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
		image: 'https://images.unsplash.com/photo-1506629082955-511b1aa562c8?auto=format&fit=crop&w=1200&q=80',
		images: [
			'https://images.unsplash.com/photo-1506629082955-511b1aa562c8?auto=format&fit=crop&w=1200&q=80',
			'https://images.unsplash.com/photo-1509631179647-0177331693ae?auto=format&fit=crop&w=1200&q=80'
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
		colors: ['Blanco Roto', 'Gris Melange', 'Rosa Nude'],
		sizes: ['XS', 'S', 'M', 'L'],
		image: 'https://images.unsplash.com/photo-1503342217505-b0a15ec3261c?auto=format&fit=crop&w=1200&q=80',
		images: [
			'https://images.unsplash.com/photo-1503342217505-b0a15ec3261c?auto=format&fit=crop&w=1200&q=80',
			'https://images.unsplash.com/photo-1509631179647-0177331693ae?auto=format&fit=crop&w=1200&q=80'
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
		colors: ['Negro', 'Crema', 'Azul Marino'],
		sizes: ['Única'],
		image: 'https://images.unsplash.com/photo-1588850561407-ed78c282e89b?auto=format&fit=crop&w=1200&q=80',
		images: [
			'https://images.unsplash.com/photo-1588850561407-ed78c282e89b?auto=format&fit=crop&w=1200&q=80',
			'https://images.unsplash.com/photo-1521572267360-ee0c2909d518?auto=format&fit=crop&w=1200&q=80'
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
		image: 'https://images.unsplash.com/photo-1553062407-98eeb64c6a62?auto=format&fit=crop&w=1200&q=80',
		images: [
			'https://images.unsplash.com/photo-1553062407-98eeb64c6a62?auto=format&fit=crop&w=1200&q=80',
			'https://images.unsplash.com/photo-1548036328-c9fa89d128fa?auto=format&fit=crop&w=1200&q=80'
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
		image: 'https://images.unsplash.com/photo-1548036328-c9fa89d128fa?auto=format&fit=crop&w=1200&q=80',
		images: [
			'https://images.unsplash.com/photo-1548036328-c9fa89d128fa?auto=format&fit=crop&w=1200&q=80',
			'https://images.unsplash.com/photo-1521572267360-ee0c2909d518?auto=format&fit=crop&w=1200&q=80'
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
		image: 'https://images.unsplash.com/photo-1520903920243-00d872a2d1c9?auto=format&fit=crop&w=1200&q=80',
		images: [
			'https://images.unsplash.com/photo-1520903920243-00d872a2d1c9?auto=format&fit=crop&w=1200&q=80',
			'https://images.unsplash.com/photo-1553062407-98eeb64c6a62?auto=format&fit=crop&w=1200&q=80'
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
		colors: ['Carey', 'Negro', 'Verde Tortuga'],
		sizes: ['Única'],
		image: 'https://images.unsplash.com/photo-1572635196237-14b3f281503f?auto=format&fit=crop&w=1200&q=80',
		images: [
			'https://images.unsplash.com/photo-1572635196237-14b3f281503f?auto=format&fit=crop&w=1200&q=80',
			'https://images.unsplash.com/photo-1588850561407-ed78c282e89b?auto=format&fit=crop&w=1200&q=80'
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
		image: 'https://images.unsplash.com/photo-1529467765028-07218dcf31e5?auto=format&fit=crop&w=1200&q=80',
		images: [
			'https://images.unsplash.com/photo-1529467765028-07218dcf31e5?auto=format&fit=crop&w=1200&q=80',
			'https://images.unsplash.com/photo-1588850561407-ed78c282e89b?auto=format&fit=crop&w=1200&q=80'
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
		image: 'https://images.unsplash.com/photo-1600185365483-26d7a4cc7519?auto=format&fit=crop&w=1200&q=80',
		images: [
			'https://images.unsplash.com/photo-1600185365483-26d7a4cc7519?auto=format&fit=crop&w=1200&q=80',
			'https://images.unsplash.com/photo-1542291026-7eec264c27ff?auto=format&fit=crop&w=1200&q=80'
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
		image: 'https://images.unsplash.com/photo-1548036328-c9fa89d128fa?auto=format&fit=crop&w=1200&q=80',
		images: [
			'https://images.unsplash.com/photo-1548036328-c9fa89d128fa?auto=format&fit=crop&w=1200&q=80',
			'https://images.unsplash.com/photo-1521572267360-ee0c2909d518?auto=format&fit=crop&w=1200&q=80'
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
		image: 'https://images.unsplash.com/photo-1520903920243-00d872a2d1c9?auto=format&fit=crop&w=1200&q=80',
		images: [
			'https://images.unsplash.com/photo-1520903920243-00d872a2d1c9?auto=format&fit=crop&w=1200&q=80',
			'https://images.unsplash.com/photo-1553062407-98eeb64c6a62?auto=format&fit=crop&w=1200&q=80'
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
		colors: ['Plata/Marrón', 'Dorado/Negro', 'Negro/Negro'],
		sizes: ['Única'],
		image: 'https://images.unsplash.com/photo-1523275335684-37898b6baf30?auto=format&fit=crop&w=1200&q=80',
		images: [
			'https://images.unsplash.com/photo-1523275335684-37898b6baf30?auto=format&fit=crop&w=1200&q=80',
			'https://images.unsplash.com/photo-1553062407-98eeb64c6a62?auto=format&fit=crop&w=1200&q=80'
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
		image: 'https://images.unsplash.com/photo-1553062407-98eeb64c6a62?auto=format&fit=crop&w=1200&q=80',
		images: [
			'https://images.unsplash.com/photo-1553062407-98eeb64c6a62?auto=format&fit=crop&w=1200&q=80',
			'https://images.unsplash.com/photo-1523275335684-37898b6baf30?auto=format&fit=crop&w=1200&q=80'
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
		image: 'https://images.unsplash.com/photo-1542291026-7eec264c27ff?auto=format&fit=crop&w=1200&q=80',
		images: [
			'https://images.unsplash.com/photo-1542291026-7eec264c27ff?auto=format&fit=crop&w=1200&q=80',
			'https://images.unsplash.com/photo-1600185365483-26d7a4cc7519?auto=format&fit=crop&w=1200&q=80'
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
		image: 'https://images.unsplash.com/photo-1548036328-c9fa89d128fa?auto=format&fit=crop&w=1200&q=80',
		images: [
			'https://images.unsplash.com/photo-1548036328-c9fa89d128fa?auto=format&fit=crop&w=1200&q=80',
			'https://images.unsplash.com/photo-1521572267360-ee0c2909d518?auto=format&fit=crop&w=1200&q=80'
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