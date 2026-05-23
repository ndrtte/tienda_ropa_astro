import type { CartItem } from '../utils/cart';
import {
	calculateCartTotals,
	clearCart,
	loadCart,
	removeCartItem,
	saveCart,
	updateItemQuantity
} from '../utils/cart';

const CART_ROOT_SELECTOR = '[data-cart-root]';
const CART_ITEMS_SELECTOR = '[data-cart-items]';
const EMPTY_STATE_SELECTOR = '[data-cart-empty]';
const SUBTOTAL_SELECTOR = '[data-cart-subtotal]';
const SHIPPING_SELECTOR = '[data-cart-shipping]';
const TOTAL_SELECTOR = '[data-cart-total]';
const COUNT_SELECTOR = '[data-cart-count-label]';
const CLEAR_BUTTON_SELECTOR = '[data-clear-cart]';

function formatCurrency(value: number) {
	return `€${value.toFixed(0)}`;
}

function renderCartItem(item: CartItem) {
	const price = item.discountPrice ?? item.price;
	const colorLabel = item.color ? ` · ${item.color}` : '';

	return `
		<article
			class="surface cart-item"
			data-cart-item
			data-product-id="${item.productId}"
			data-size="${item.size}"
			data-color="${item.color ?? ''}"
		>
			<img src="${item.image}" alt="${item.name}" class="cart-image" />

			<div class="cart-details">
				<div class="cart-meta">
					<div>
						<p class="category">${item.category}</p>
						<h2 class="item-name">${item.name}</h2>
						<p class="muted">Size ${item.size}${colorLabel}</p>
					</div>
					<div class="item-price">
						<span>${formatCurrency(price)}</span>
						${item.discountPrice ? `<small>${formatCurrency(item.price)}</small>` : ''}
					</div>
				</div>

				<div class="cart-actions">
					<div class="quantity-control">
						<button type="button" data-quantity-action="decrease" aria-label="Decrease quantity">−</button>
						<span data-quantity-value>${item.quantity}</span>
						<button type="button" data-quantity-action="increase" aria-label="Increase quantity">+</button>
					</div>

					<button type="button" class="remove-button" data-remove-item>Remove item</button>
				</div>
			</div>
		</article>
	`;
}

function renderCartItems(items: CartItem[]) {
	const itemsContainer = document.querySelector<HTMLElement>(CART_ITEMS_SELECTOR);
	const emptyState = document.querySelector<HTMLElement>(EMPTY_STATE_SELECTOR);

	if (!itemsContainer || !emptyState) {
		return;
	}

	if (items.length === 0) {
		itemsContainer.innerHTML = '';
		emptyState.hidden = false;
		return;
	}

	emptyState.hidden = true;
	itemsContainer.innerHTML = items.map(renderCartItem).join('');
}

function renderTotals(items: CartItem[]) {
	const totals = calculateCartTotals(items);

	const subtotal = document.querySelector<HTMLElement>(SUBTOTAL_SELECTOR);
	const shipping = document.querySelector<HTMLElement>(SHIPPING_SELECTOR);
	const total = document.querySelector<HTMLElement>(TOTAL_SELECTOR);
	const count = document.querySelector<HTMLElement>(COUNT_SELECTOR);
	const clearButton = document.querySelector<HTMLButtonElement>(CLEAR_BUTTON_SELECTOR);

	if (subtotal) subtotal.textContent = formatCurrency(totals.subtotal);
	if (shipping) shipping.textContent = totals.shipping === 0 ? 'Free' : formatCurrency(totals.shipping);
	if (total) total.textContent = formatCurrency(totals.total);
	if (count) count.textContent = `${totals.count} item${totals.count === 1 ? '' : 's'}`;
	if (clearButton) clearButton.disabled = totals.count === 0;
}

function syncCart() {
	const items = loadCart();
	renderCartItems(items);
	renderTotals(items);
}

function updateFromItemElement(
	element: HTMLElement,
	handler: (items: CartItem[], productId: string, size: string, color: string) => CartItem[]
) {
	const productId = element.dataset.productId;
	const size = element.dataset.size;
	const color = element.dataset.color ?? '';

	if (!productId || !size) {
		return;
	}

	const nextCart = handler(loadCart(), productId, size, color);
	saveCart(nextCart);
	syncCart();
}

function wireCartInteractions() {
	const root = document.querySelector<HTMLElement>(CART_ROOT_SELECTOR);
	const clearButton = document.querySelector<HTMLButtonElement>(CLEAR_BUTTON_SELECTOR);

	if (clearButton) {
		clearButton.addEventListener('click', () => {
			clearCart();
			syncCart();
		});
	}

	if (!root) {
		return;
	}

	root.addEventListener('click', (event) => {
		const target = event.target as HTMLElement;
		const itemElement = target.closest<HTMLElement>('[data-cart-item]');

		if (!itemElement) {
			return;
		}

		if (target.closest('[data-remove-item]')) {
			updateFromItemElement(itemElement, (items, productId, size, color) =>
				removeCartItem(items, productId, size, color)
			);
			return;
		}

		if (target.matches('[data-quantity-action="increase"]')) {
			updateFromItemElement(itemElement, (items, productId, size, color) => {
				const item = items.find(
					(entry) =>
						entry.productId === productId &&
						entry.size === size &&
						(entry.color ?? '') === color
				);
				return updateItemQuantity(items, productId, size, (item?.quantity ?? 0) + 1, color);
			});
			return;
		}

		if (target.matches('[data-quantity-action="decrease"]')) {
			updateFromItemElement(itemElement, (items, productId, size, color) => {
				const item = items.find(
					(entry) =>
						entry.productId === productId &&
						entry.size === size &&
						(entry.color ?? '') === color
				);
				return updateItemQuantity(items, productId, size, Math.max(0, (item?.quantity ?? 0) - 1), color);
			});
		}
	});
}

export function initCartPage() {
	if (typeof window === 'undefined') {
		return;
	}

	syncCart();
	wireCartInteractions();

	window.addEventListener('cart:updated', syncCart);
	window.addEventListener('storage', syncCart);
}

initCartPage();
