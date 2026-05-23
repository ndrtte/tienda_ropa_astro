import type { Product } from '../data/products';
import { addToCart, getProductCartItem, loadCart, saveCart } from '../utils/cart';

const SIZE_BUTTON_SELECTOR = '[data-size-option]';
const COLOR_BUTTON_SELECTOR = '[data-color-option]';
const QUANTITY_VALUE_SELECTOR = '[data-quantity-value]';
const QUANTITY_ACTION_SELECTOR = '[data-quantity-action]';
const ADD_BUTTON_SELECTOR = '[data-add-to-cart]';
const FEEDBACK_SELECTOR = '[data-feedback]';
const PRODUCT_DATA_SELECTOR = '#product-data';
const SELECTED_CLASS = 'is-selected';

type FeedbackElement = HTMLElement & {
	timeoutId?: number;
};

function getFeedbackElement() {
	return document.querySelector<FeedbackElement>(FEEDBACK_SELECTOR);
}

function showFeedback(message: string, state: 'success' | 'error') {
	const feedback = getFeedbackElement();

	if (!feedback) {
		return;
	}

	feedback.textContent = message;
	feedback.dataset.state = state;

	if (feedback.timeoutId) {
		window.clearTimeout(feedback.timeoutId);
	}

	feedback.timeoutId = window.setTimeout(() => {
		feedback.textContent = '';
		delete feedback.dataset.state;
	}, 2400);
}

function setSelectedOption(selector: string, value: string) {
	document.querySelectorAll<HTMLElement>(selector).forEach((button) => {
		const buttonValue = button.dataset.sizeOption ?? button.dataset.colorOption;
		button.classList.toggle(SELECTED_CLASS, buttonValue === value);
	});
}

function getSelectedOption(selector: string) {
	const selected = document.querySelector<HTMLElement>(`${selector}.${SELECTED_CLASS}`);
	return selected?.dataset.sizeOption ?? selected?.dataset.colorOption;
}

function getQuantityValue() {
	const value = document.querySelector<HTMLElement>(QUANTITY_VALUE_SELECTOR)?.textContent ?? '1';
	const parsed = Number.parseInt(value, 10);
	return Number.isFinite(parsed) && parsed > 0 ? parsed : 1;
}

function setQuantityValue(quantity: number) {
	const nextQuantity = Math.max(1, Math.floor(quantity));
	const element = document.querySelector<HTMLElement>(QUANTITY_VALUE_SELECTOR);

	if (element) {
		element.textContent = String(nextQuantity);
	}

	const decreaseButton = document.querySelector<HTMLButtonElement>(
		`${QUANTITY_ACTION_SELECTOR}[data-quantity-action="decrease"]`
	);
	if (decreaseButton) {
		decreaseButton.disabled = nextQuantity <= 1;
	}
}

function wireOptionButtons(product: Product) {
	const sizeButtons = document.querySelectorAll<HTMLElement>(SIZE_BUTTON_SELECTOR);
	const colorButtons = document.querySelectorAll<HTMLElement>(COLOR_BUTTON_SELECTOR);

	if (sizeButtons.length > 0) {
		setSelectedOption(SIZE_BUTTON_SELECTOR, product.sizes[0] ?? '');
		sizeButtons.forEach((button) => {
			button.addEventListener('click', () => {
				const size = button.dataset.sizeOption;
				if (size) {
					setSelectedOption(SIZE_BUTTON_SELECTOR, size);
				}
			});
		});
	}

	if (colorButtons.length > 0) {
		setSelectedOption(COLOR_BUTTON_SELECTOR, product.colors[0] ?? '');
		colorButtons.forEach((button) => {
			button.addEventListener('click', () => {
				const color = button.dataset.colorOption;
				if (color) {
					setSelectedOption(COLOR_BUTTON_SELECTOR, color);
				}
			});
		});
	}
}

function wireQuantityControls() {
	setQuantityValue(getQuantityValue());

	document.querySelectorAll<HTMLButtonElement>(QUANTITY_ACTION_SELECTOR).forEach((button) => {
		button.addEventListener('click', () => {
			const action = button.dataset.quantityAction;

			if (action === 'increase') {
				setQuantityValue(getQuantityValue() + 1);
				return;
			}

			if (action === 'decrease') {
				setQuantityValue(getQuantityValue() - 1);
			}
		});
	});
}

function wireAddToCart(product: Product) {
	const addButton = document.querySelector<HTMLButtonElement>(ADD_BUTTON_SELECTOR);

	if (!addButton) {
		return;
	}

	addButton.addEventListener('click', () => {
		const selectedSize = getSelectedOption(SIZE_BUTTON_SELECTOR);
		const selectedColor = getSelectedOption(COLOR_BUTTON_SELECTOR);
		const quantity = getQuantityValue();

		if (!selectedSize) {
			showFeedback('Select a size before adding to cart.', 'error');
			return;
		}

		const cart = loadCart();
		const existing = getProductCartItem(cart, product.id, selectedSize, selectedColor ?? '');
		const nextCart = addToCart(cart, {
			product,
			size: selectedSize,
			color: selectedColor,
			quantity
		});

		saveCart(nextCart);
		addButton.textContent = 'Added to bag';
		addButton.disabled = true;
		showFeedback(
			existing ? `${product.name} updated in your bag.` : `${product.name} added to your bag.`,
			'success'
		);

		window.setTimeout(() => {
			addButton.textContent = 'Add to Cart';
			addButton.disabled = false;
		}, 1200);
	});
}

export function initProductDetail(product: Product) {
	if (typeof window === 'undefined') {
		return;
	}

	wireOptionButtons(product);
	wireQuantityControls();
	wireAddToCart(product);
}
