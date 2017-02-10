

//------------------------------------------------------------------------------
// <auto-generated>
//     This code was generated by CodeZu.     
//
//     Changes to this file may cause incorrect behavior and will be lost if
//     the code is regenerated.
// </auto-generated>
//------------------------------------------------------------------------------

var Client = require('../../../../../client'), constants = Client.constants;

module.exports = Client.sub({
	getShippingInclusionRule: Client.method({
		method: constants.verbs.GET,
		url: '{+tenantPod}api/commerce/shipping/admin/profiles/{profilecode}/rules/shippinginclusions/{id}?responseFields={responseFields}'
	}),
	getShippingInclusionRules: Client.method({
		method: constants.verbs.GET,
		url: '{+tenantPod}api/commerce/shipping/admin/profiles/{profilecode}/rules/shippinginclusions?responseFields={responseFields}'
	}),
	createShippingInclusionRule: Client.method({
		method: constants.verbs.POST,
		url: '{+tenantPod}api/commerce/shipping/admin/profiles/{profilecode}/rules/shippinginclusions?responseFields={responseFields}'
	}),
	updateShippingInclusionRule: Client.method({
		method: constants.verbs.PUT,
		url: '{+tenantPod}api/commerce/shipping/admin/profiles/{profilecode}/rules/shippinginclusions/{id}?responseFields={responseFields}'
	}),
	deleteShippingInclusionRule: Client.method({
		method: constants.verbs.DELETE,
		url: '{+tenantPod}api/commerce/shipping/admin/profiles/{profilecode}/rules/shippinginclusions/{id}'
	})
});
