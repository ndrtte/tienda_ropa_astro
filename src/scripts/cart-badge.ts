import { getCartCount, loadCart } from '../utils/cart';

const cartCountSelectors = '[data-cart-count]';

function updateCartCount() {
	const count = getCartCount(loadCart());

	document.querySelectorAll<HTMLElement>(cartCountSelectors).forEach((element) => {
		element.textContent = String(count);
		element.hidden = count === 0;
	});
}

export function initCartBadge() {
	if (typeof window === 'undefined') {
		return;
	}

	updateCartCount();

	window.addEventListener('cart:updated', updateCartCount);
	window.addEventListener('storage', updateCartCount);
}

initCartBadge();
