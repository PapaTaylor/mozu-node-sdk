

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
	getProductHandlingFeeRule: Client.method({
		method: constants.verbs.GET,
		url: '{+tenantPod}api/commerce/shipping/admin/profiles/{profilecode}/rules/producthandlingfees/{id}?responseFields={responseFields}'
	}),
	getProductHandlingFeeRules: Client.method({
		method: constants.verbs.GET,
		url: '{+tenantPod}api/commerce/shipping/admin/profiles/{profilecode}/rules/producthandlingfees?responseFields={responseFields}'
	}),
	createProductHandlingFeeRule: Client.method({
		method: constants.verbs.POST,
		url: '{+tenantPod}api/commerce/shipping/admin/profiles/{profilecode}/rules/producthandlingfees?responseFields={responseFields}'
	}),
	updateProductHandlingFeeRule: Client.method({
		method: constants.verbs.PUT,
		url: '{+tenantPod}api/commerce/shipping/admin/profiles/{profilecode}/rules/producthandlingfees/{id}?responseFields={responseFields}'
	}),
	deleteProductHandlingFeeRule: Client.method({
		method: constants.verbs.DELETE,
		url: '{+tenantPod}api/commerce/shipping/admin/profiles/{profilecode}/rules/producthandlingfees/{id}'
	})
});
