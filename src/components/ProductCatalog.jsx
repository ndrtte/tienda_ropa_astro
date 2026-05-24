import { useState } from 'react';
import '../styles/components/product-catalog.css';

const categoryOptions = [
	{ label: 'Todo', slug: '' },
	{ label: 'Hombre', slug: 'hombre' },
	{ label: 'Mujer', slug: 'mujer' },
	{ label: 'Accesorios', slug: 'accesorios' }
];

function getCategorySlug(category) {
	return category.toLowerCase();
}

function getInitialCategoryFilter() {
	if (typeof window === 'undefined') {
		return '';
	}

	const categoryParam = new URLSearchParams(window.location.search).get('categoria') ?? '';

	return categoryOptions.some((category) => category.slug === categoryParam) ? categoryParam : '';
}

function getDisplayPrice(product) {
	return product.discountPrice ?? product.price;
}

function getDiscountPercent(product) {
	if (!product.discountPrice) {
		return 0;
	}

	return Math.round(((product.price - product.discountPrice) / product.price) * 100);
}

function ProductCatalog({ products }) {
	const [categoryFilter, setCategoryFilter] = useState(getInitialCategoryFilter);
	const [searchQuery, setSearchQuery] = useState('');
	const [sortValue, setSortValue] = useState('featured');

	const normalizedQuery = searchQuery.trim().toLowerCase();

	const filteredProducts = products.filter((product) => {
		const matchesCategory = !categoryFilter || getCategorySlug(product.category) === categoryFilter;

		const matchesSearch =
			!normalizedQuery ||
			product.name.toLowerCase().includes(normalizedQuery) ||
			product.description.toLowerCase().includes(normalizedQuery) ||
			product.category.toLowerCase().includes(normalizedQuery);

		return matchesCategory && matchesSearch;
	});

	const sortedProducts = [...filteredProducts].sort((left, right) => {
		const leftPrice = getDisplayPrice(left);
		const rightPrice = getDisplayPrice(right);

		if (sortValue === 'price-asc') {
			return leftPrice - rightPrice;
		}

		if (sortValue === 'price-desc') {
			return rightPrice - leftPrice;
		}

		return Number(Boolean(right.featured)) - Number(Boolean(left.featured));
	});

	const hasResults = sortedProducts.length > 0;
	const hasActiveFilters = Boolean(categoryFilter || searchQuery || sortValue !== 'featured');

	return (
		<section className="product-catalog">
			<div className="container catalog-hero stack">
				<p className="kicker">Catálogo</p>

				<div className="catalog-heading">
					<h1 className="h2">Descubre la colección completa.</h1>
					<p className="lead">
						Siluetas minimalistas, capas esenciales y accesorios refinados para un closet moderno.
					</p>
				</div>

				<div className="catalog-toolbar surface-soft">
					<label className="search-field">
						<span className="toolbar-label">Buscar</span>
						<div className="input-icon-wrap">
							<i className="bi bi-search" aria-hidden="true" />
							<input
								className="field field-with-icon"
								type="search"
								value={searchQuery}
								placeholder="Buscar productos"
								onChange={(event) => setSearchQuery(event.target.value)}
							/>
						</div>
					</label>

					<label className="search-field">
						<span className="toolbar-label">Ordenar por</span>
						<div className="input-icon-wrap">
							<i className="bi bi-funnel" aria-hidden="true" />
							<select
								className="select select-with-icon"
								value={sortValue}
								onChange={(event) => setSortValue(event.target.value)}
							>
								<option value="featured">Destacado</option>
								<option value="price-asc">Precio: de menor a mayor</option>
								<option value="price-desc">Precio: de mayor a menor</option>
							</select>
						</div>
					</label>

					<button
						className="button-secondary toolbar-reset"
						type="button"
						onClick={() => {
							setCategoryFilter('');
							setSearchQuery('');
							setSortValue('featured');
						}}
					>
						<i className="bi bi-arrow-counterclockwise" aria-hidden="true" />
						Reiniciar
					</button>
				</div>

				<div className="catalog-filters" aria-label="Product categories">
					{categoryOptions.map((category) => {
						const isActive =
							(category.slug === '' && !categoryFilter) || category.slug === categoryFilter;
						const iconClass =
							category.slug === 'hombre'
								? 'bi bi-person-standing'
								: category.slug === 'mujer'
									? 'bi bi-person'
									: category.slug === 'accesorios'
										? 'bi bi-bag'
										: 'bi bi-grid';

						return (
							<button
								key={category.label}
								type="button"
								className={`pill pill-action ${isActive ? 'pill-active' : ''}`}
								aria-pressed={isActive}
								onClick={() => setCategoryFilter(category.slug)}
							>
								<i className={iconClass} aria-hidden="true" />
								{category.label}
							</button>
						);
					})}
				</div>

				<div className="catalog-meta">
					<p className="muted">
						{hasResults
							? `${sortedProducts.length} producto${sortedProducts.length === 1 ? '' : 's'} disponibles.`
							: 'No hay productos que coincidan con sus filtros actuales.'}
					</p>

					{hasActiveFilters && (
						<button
							className="link-arrow link-button"
							type="button"
							onClick={() => {
								setCategoryFilter('');
								setSearchQuery('');
								setSortValue('featured');
							}}
						>
							<i className="bi bi-x-circle" aria-hidden="true" />
							Limpiar filtros
						</button>
					)}
				</div>
			</div>

			<section className="section-tight">
				<div className="container">
					{hasResults ? (
						<div className="grid grid-4">
							{sortedProducts.map((product) => {
								const displayPrice = getDisplayPrice(product);
								const hasDiscount = Boolean(product.discountPrice);

								return (
									<article key={product.id} className="surface card-hover product-card">
										<a href={`/productos/${product.id}`} className="product-link">
											<div className="image-wrap">
												<img src={product.image} alt={product.name} loading="lazy" />
												{hasDiscount && (
													<span className="badge">-{getDiscountPercent(product)}%</span>
												)}
											</div>

											<div className="content">
												<div className="meta">
													<p className="category">{product.category}</p>
													<h3 className="title">{product.name}</h3>
												</div>

												<div className="price-row">
													<div className="prices">
														<span className="price">L.{displayPrice}</span>
														{hasDiscount && <span className="old-price">L.{product.price}</span>}
													</div>
													<span className="details">View details</span>
												</div>
											</div>
										</a>
									</article>
								);
							})}
						</div>
					) : (
						<div className="surface catalog-empty">
							<div className="empty-icon">
								<i className="bi bi-search-heart" aria-hidden="true" />
							</div>
							<h2 className="h3">Nothing matched your filters.</h2>
							<p className="muted">
								Try a different keyword or category to keep browsing the collection.
							</p>
							<button
								className="button"
								type="button"
								onClick={() => {
									setCategoryFilter('');
									setSearchQuery('');
									setSortValue('featured');
								}}
							>
								<i className="bi bi-grid-3x3-gap" aria-hidden="true" />
								View all products
							</button>
						</div>
					)}
				</div>
			</section>
		</section>
	);
}

export default ProductCatalog;
