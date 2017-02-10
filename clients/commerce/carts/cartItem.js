

//------------------------------------------------------------------------------
// <auto-generated>
//     This code was generated by CodeZu.     
//
//     Changes to this file may cause incorrect behavior and will be lost if
//     the code is regenerated.
// </auto-generated>
//------------------------------------------------------------------------------

var Client = require('../../../client'), constants = Client.constants;

module.exports = Client.sub({
	getCartItem: Client.method({
		method: constants.verbs.GET,
		url: '{+tenantPod}api/commerce/carts/current/items/{cartItemId}?responseFields={responseFields}'
	}),
	getCartItems: Client.method({
		method: constants.verbs.GET,
		url: '{+tenantPod}api/commerce/carts/current/items?responseFields={responseFields}'
	}),
	addItemToCart: Client.method({
		method: constants.verbs.POST,
		url: '{+tenantPod}api/commerce/carts/current/items?responseFields={responseFields}'
	}),
	updateCartItemQuantity: Client.method({
		method: constants.verbs.PUT,
		url: '{+tenantPod}api/commerce/carts/current/items/{cartItemId}/{quantity}?responseFields={responseFields}'
	}),
	updateCartItem: Client.method({
		method: constants.verbs.PUT,
		url: '{+tenantPod}api/commerce/carts/current/items/{cartItemId}?responseFields={responseFields}'
	}),
	removeAllCartItems: Client.method({
		method: constants.verbs.DELETE,
		url: '{+tenantPod}api/commerce/carts/current/items'
	}),
	deleteCartItem: Client.method({
		method: constants.verbs.DELETE,
		url: '{+tenantPod}api/commerce/carts/current/items/{cartItemId}'
	})
});
