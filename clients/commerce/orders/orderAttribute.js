

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
	getOrderAttributes: Client.method({
		method: constants.verbs.GET,
		url: '{+tenantPod}api/commerce/orders/{orderId}/attributes'
	}),
	createOrderAttributes: Client.method({
		method: constants.verbs.POST,
		url: '{+tenantPod}api/commerce/orders/{orderId}/attributes'
	}),
	updateOrderAttributes: Client.method({
		method: constants.verbs.PUT,
		url: '{+tenantPod}api/commerce/orders/{orderId}/attributes?removeMissing={removeMissing}'
	})
});
