export type Product = {
	id: string;
	name: string;
	price: number;
	discountPrice?: number;
	category: 'Men' | 'Women' | 'Accessories';
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
	{
		id: 'linen-overshirt',
		name: 'Linen Overshirt',
		price: 89,
		discountPrice: 69,
		category: 'Men',
		description:
			'Lightweight overshirt with a relaxed structure, designed for layering across seasons.',
		material: '55% linen, 45% cotton',
		colors: ['Sand', 'Black', 'Stone'],
		sizes: ['S', 'M', 'L', 'XL'],
		image: 'https://images.unsplash.com/photo-1617127365659-c47fa864d8bc?auto=format&fit=crop&w=1200&q=80',
		images: [
			'https://images.unsplash.com/photo-1617127365659-c47fa864d8bc?auto=format&fit=crop&w=1200&q=80',
			'https://images.unsplash.com/photo-1496747611176-843222e1e57c?auto=format&fit=crop&w=1200&q=80'
		],
		featured: true
	},
	{
		id: 'relaxed-tailored-trouser',
		name: 'Relaxed Tailored Trouser',
		price: 79,
		category: 'Men',
		description:
			'Minimal trouser with a clean drape and refined silhouette for smart everyday wear.',
		material: '72% polyester, 24% viscose, 4% elastane',
		colors: ['Charcoal', 'Taupe', 'Ivory'],
		sizes: ['S', 'M', 'L', 'XL'],
		image: 'https://images.unsplash.com/photo-1507679799987-c73779587ccf?auto=format&fit=crop&w=1200&q=80',
		images: [
			'https://images.unsplash.com/photo-1507679799987-c73779587ccf?auto=format&fit=crop&w=1200&q=80',
			'https://images.unsplash.com/photo-1475180098004-ca77a66827be?auto=format&fit=crop&w=1200&q=80'
		],
		featured: true
	},
	{
		id: 'wide-leg-trench',
		name: 'Wide-Leg Trench',
		price: 139,
		discountPrice: 109,
		category: 'Women',
		description:
			'Fluid trench coat with modern volume and clean lines, designed for transitional dressing.',
		material: '65% cotton, 35% recycled polyester',
		colors: ['Khaki', 'Black', 'Ecru'],
		sizes: ['S', 'M', 'L', 'XL'],
		image: 'https://images.unsplash.com/photo-1483985988355-763728e1935b?auto=format&fit=crop&w=1200&q=80',
		images: [
			'https://images.unsplash.com/photo-1483985988355-763728e1935b?auto=format&fit=crop&w=1200&q=80',
			'https://images.unsplash.com/photo-1529139574466-a303027c1d8b?auto=format&fit=crop&w=1200&q=80'
		],
		featured: true
	},
	{
		id: 'ribbed-knit-dress',
		name: 'Ribbed Knit Dress',
		price: 95,
		category: 'Women',
		description:
			'Soft ribbed knit dress with a close fit and elevated simplicity for day-to-night wear.',
		material: 'Viscose blend knit',
		colors: ['Black', 'Mocha', 'Cream'],
		sizes: ['S', 'M', 'L', 'XL'],
		image: 'https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?auto=format&fit=crop&w=1200&q=80',
		images: [
			'https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?auto=format&fit=crop&w=1200&q=80',
			'https://images.unsplash.com/photo-1483985988355-763728e1935b?auto=format&fit=crop&w=1200&q=80'
		],
		featured: true
	},
	{
		id: 'everyday-tote',
		name: 'Everyday Tote',
		price: 55,
		category: 'Accessories',
		description:
			'Structured carryall with a pared-back profile and generous interior capacity.',
		material: 'Smooth vegan leather',
		colors: ['Black', 'Cocoa', 'Bone'],
		sizes: ['S', 'M', 'L', 'XL'],
		image: 'https://images.unsplash.com/photo-1521572267360-ee0c2909d518?auto=format&fit=crop&w=1200&q=80',
		images: [
			'https://images.unsplash.com/photo-1521572267360-ee0c2909d518?auto=format&fit=crop&w=1200&q=80',
			'https://images.unsplash.com/photo-1548036328-c9fa89d128fa?auto=format&fit=crop&w=1200&q=80'
		],
		featured: true
	},
	{
		id: 'minimal-leather-sneaker',
		name: 'Minimal Leather Sneaker',
		price: 110,
		discountPrice: 89,
		category: 'Accessories',
		description:
			'Clean everyday sneaker with a low-profile sole and premium finish for versatile styling.',
		material: 'Leather upper, rubber sole',
		colors: ['White', 'Off-white', 'Black'],
		sizes: ['S', 'M', 'L', 'XL'],
		image: 'https://images.unsplash.com/photo-1542291026-7eec264c27ff?auto=format&fit=crop&w=1200&q=80',
		images: [
			'https://images.unsplash.com/photo-1542291026-7eec264c27ff?auto=format&fit=crop&w=1200&q=80',
			'https://images.unsplash.com/photo-1600185365483-26d7a4cc7519?auto=format&fit=crop&w=1200&q=80'
		],
		featured: false
	}
];

export const featuredProducts = products.filter((product) => product.featured);

export const categoryCards = [
	{
		title: 'Men',
		description: 'Tailored essentials, relaxed layers, and elevated basics.',
		image:
			'https://images.unsplash.com/photo-1516257984-b1b4d707412e?auto=format&fit=crop&w=1200&q=80',
		href: '/productos?categoria=men'
	},
	{
		title: 'Women',
		description: 'Modern silhouettes, refined textures, and versatile staples.',
		image:
			'https://images.unsplash.com/photo-1483985988355-763728e1935b?auto=format&fit=crop&w=1200&q=80',
		href: '/productos?categoria=women'
	},
	{
		title: 'Accessories',
		description: 'Minimal bags, shoes, and finishing pieces for everyday wear.',
		image:
			'https://images.unsplash.com/photo-1523381210434-271e8be1f52b?auto=format&fit=crop&w=1200&q=80',
		href: '/productos?categoria=accessories'
	}
];
