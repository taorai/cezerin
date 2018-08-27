import React from 'react';
import Helmet from 'react-helmet';

const MetaTags = ({
	title,
	description,
	canonicalUrl,
	imageUrl,
	ogType,
	ogTitle,
	ogDescription,
	productBrand,
	productAvailability,
	productCondition,
	productPriceAmount,
	productPriceCurrency,
	productRetailerItemId
	jsonld
}) => {
	let metaArray = [];
	let linkArray = [];

	if (description && description.length > 0) {
		metaArray.push({
			name: 'description',
			content: description
		});
	}

	if (canonicalUrl && canonicalUrl.length > 0) {
		linkArray.push({
			rel: 'canonical',
			href: canonicalUrl
		});

		metaArray.push({
			property: 'og:url',
			content: canonicalUrl
		});
	}

	if (imageUrl && imageUrl.length > 0) {
		metaArray.push({
			property: 'og:image',
			content: imageUrl
		});

		linkArray.push({
			rel: 'image_src',
			href: imageUrl
		});
	}

	if (ogType && ogType.length > 0) {
		metaArray.push({
			property: 'og:type',
			content: ogType
		});
	}

	if (ogTitle && ogTitle.length > 0) {
		metaArray.push({
			property: 'og:title',
			content: ogTitle
		});
	}

	if (ogDescription && ogDescription.length > 0) {
		metaArray.push({
			property: 'og:description',
			content: ogDescription
		});
	}

	if (productBrand && productBrand.length > 0) {
		metaArray.push({
			property: 'product:brand',
			content: productBrand
		});
	}

	if (productAvailability && productAvailability.length > 0) {
		metaArray.push({
			property: 'product:availability',
			content: productAvailability
		});
	}

	if (productCondition && productCondition.length > 0) {
		metaArray.push({
			property: 'product:condition',
			content: productCondition
		});
	}

	if (productPriceAmount && productPriceAmount.length > 0) {
		metaArray.push({
			property: 'product:price:amount',
			content: productPriceAmount
		});
	}

	if (productPriceCurrency && productPriceCurrency.length > 0) {
		metaArray.push({
			property: 'product:price:currency',
			content: productPriceCurrency
		});
	}

	if (productRetailerItemId && productRetailerItemId.length > 0) {
		metaArray.push({
			property: 'product:retailer_item_id',
			content: productRetailerItemId
		});
	}

	const scriptJSONLD =
		jsonld && jsonld.length > 0 ? (
			<script type="application/ld+json">{jsonld}</script>
		) : null;

	return (
		<Helmet title={title} meta={metaArray} link={linkArray}>
			{scriptJSONLD}
		</Helmet>
	);
};

export default MetaTags;
