

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
	getAvailablePackageFulfillmentActions: Client.method({
		method: constants.verbs.GET,
		url: '{+tenantPod}api/commerce/orders/{orderId}/packages/{packageId}/actions'
	}),
	getPackageLabel: Client.method({
		method: constants.verbs.GET,
		url: '{+tenantPod}api/commerce/orders/{orderId}/packages/{packageId}/label'
	}),
	getPackage: Client.method({
		method: constants.verbs.GET,
		url: '{+tenantPod}api/commerce/orders/{orderId}/packages/{packageId}?responseFields={responseFields}'
	}),
	createPackage: Client.method({
		method: constants.verbs.POST,
		url: '{+tenantPod}api/commerce/orders/{orderId}/packages?responseFields={responseFields}'
	}),
	updatePackage: Client.method({
		method: constants.verbs.PUT,
		url: '{+tenantPod}api/commerce/orders/{orderId}/packages/{packageId}?responseFields={responseFields}'
	}),
	deletePackage: Client.method({
		method: constants.verbs.DELETE,
		url: '{+tenantPod}api/commerce/orders/{orderId}/packages/{packageId}'
	})
});
