import type { Product } from '../data/products';

export const CART_STORAGE_KEY = 'tienda-ropa-cart';

export type CartItem = {
	productId: Product['id'];
	name: string;
	image: string;
	price: number;
	discountPrice?: number;
	category: Product['category'];
	size: string;
	color?: string;
	quantity: number;
};

export type CartTotals = {
	subtotal: number;
	shipping: number;
	total: number;
	count: number;
};

export type CartInput = {
	product: Product;
	size: string;
	color?: string;
	quantity?: number;
};

const isBrowser = typeof window !== 'undefined';

export function getCartKey(productId: string, size: string, color = '') {
	return `${productId}::${size}::${color.toLowerCase()}`;
}

export function getCartCount(items: CartItem[]) {
	return items.reduce((count, item) => count + item.quantity, 0);
}

export function getDisplayPrice(item: Pick<CartItem, 'price' | 'discountPrice'>) {
	return item.discountPrice ?? item.price;
}

export function calculateCartTotals(items: CartItem[]): CartTotals {
	const subtotal = items.reduce((sum, item) => sum + getDisplayPrice(item) * item.quantity, 0);
	const shipping = subtotal > 100 || subtotal === 0 ? 0 : 12;

	return {
		subtotal,
		shipping,
		total: subtotal + shipping,
		count: getCartCount(items)
	};
}

export function loadCart(): CartItem[] {
	if (!isBrowser) {
		return [];
	}

	try {
		const raw = window.localStorage.getItem(CART_STORAGE_KEY);
		if (!raw) {
			return [];
		}

		const parsed = JSON.parse(raw) as Partial<CartItem>[];
		if (!Array.isArray(parsed)) {
			return [];
		}

		return parsed
			.filter((item): item is CartItem => {
				return (
					typeof item?.productId === 'string' &&
					typeof item?.name === 'string' &&
					typeof item?.image === 'string' &&
					typeof item?.price === 'number' &&
					typeof item?.category === 'string' &&
					typeof item?.size === 'string' &&
					typeof item?.quantity === 'number'
				);
			})
			.map((item) => ({
				...item,
				color: typeof item.color === 'string' ? item.color : undefined,
				discountPrice: typeof item.discountPrice === 'number' ? item.discountPrice : undefined
			}));
	} catch {
		return [];
	}
}

export function saveCart(items: CartItem[]) {
	if (!isBrowser) {
		return;
	}

	window.localStorage.setItem(CART_STORAGE_KEY, JSON.stringify(items));
	window.dispatchEvent(new CustomEvent('cart:updated'));
}

export function clearCart() {
	if (!isBrowser) {
		return;
	}

	window.localStorage.removeItem(CART_STORAGE_KEY);
	window.dispatchEvent(new CustomEvent('cart:updated'));
}

export function addToCart(cart: CartItem[], input: CartInput) {
	const size = input.size.trim().toUpperCase();
	const color = input.color?.trim() ?? '';
	const quantity = Math.max(1, Math.floor(input.quantity ?? 1));
	const key = getCartKey(input.product.id, size, color);
	const nextCart = [...cart];
	const existingIndex = nextCart.findIndex(
		(item) => getCartKey(item.productId, item.size, item.color) === key
	);

	if (existingIndex >= 0) {
		nextCart[existingIndex] = {
			...nextCart[existingIndex],
			quantity: nextCart[existingIndex].quantity + quantity
		};
		return nextCart;
	}

	nextCart.push({
		productId: input.product.id,
		name: input.product.name,
		image: input.product.images[0],
		price: input.product.price,
		discountPrice: input.product.discountPrice,
		category: input.product.category,
		size,
		color: color || undefined,
		quantity
	});

	return nextCart;
}

export function updateItemQuantity(
	cart: CartItem[],
	productId: string,
	size: string,
	quantity: number,
	color = ''
) {
	const nextQuantity = Math.max(0, Math.floor(quantity));
	return cart
		.map((item) => {
			if (getCartKey(item.productId, item.size, item.color) !== getCartKey(productId, size, color)) {
				return item;
			}

			return {
				...item,
				quantity: nextQuantity
			};
		})
		.filter((item) => item.quantity > 0);
}

export function removeCartItem(cart: CartItem[], productId: string, size: string, color = '') {
	return cart.filter(
		(item) => getCartKey(item.productId, item.size, item.color) !== getCartKey(productId, size, color)
	);
}

export function getProductCartItem(cart: CartItem[], productId: string, size: string, color = '') {
	return cart.find(
		(item) => getCartKey(item.productId, item.size, item.color) === getCartKey(productId, size, color)
	);
}
