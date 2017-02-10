

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
	getShipment: Client.method({
		method: constants.verbs.GET,
		url: '{+tenantPod}api/commerce/orders/{orderId}/shipments/{shipmentId}?responseFields={responseFields}'
	}),
	getAvailableShipmentMethods: Client.method({
		method: constants.verbs.GET,
		url: '{+tenantPod}api/commerce/orders/{orderId}/shipments/methods?draft={draft}'
	}),
	createPackageShipments: Client.method({
		method: constants.verbs.POST,
		url: '{+tenantPod}api/commerce/orders/{orderId}/shipments'
	}),
	deleteShipment: Client.method({
		method: constants.verbs.DELETE,
		url: '{+tenantPod}api/commerce/orders/{orderId}/shipments/{shipmentId}'
	})
});
