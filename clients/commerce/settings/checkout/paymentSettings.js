

//------------------------------------------------------------------------------
// <auto-generated>
//     This code was generated by CodeZu.     
//
//     Changes to this file may cause incorrect behavior and will be lost if
//     the code is regenerated.
// </auto-generated>
//------------------------------------------------------------------------------

var Client = require('../../../../client'), constants = Client.constants;

module.exports = Client.sub({
	getThirdPartyPaymentWorkflowWithValues: Client.method({
		method: constants.verbs.GET,
		url: '{+tenantPod}api/commerce/settings/checkout/paymentsettings/thirdpartyworkflow/{fullyQualifiedName}?responseFields={responseFields}'
	}),
	getThirdPartyPaymentWorkflows: Client.method({
		method: constants.verbs.GET,
		url: '{+tenantPod}api/commerce/settings/checkout/paymentsettings/thirdpartyworkflows'
	}),
	addThirdPartyPaymentWorkflow: Client.method({
		method: constants.verbs.PUT,
		url: '{+tenantPod}api/commerce/settings/checkout/paymentsettings/thirdpartyworkflows'
	}),
	deleteThirdPartyPaymentWorkflow: Client.method({
		method: constants.verbs.DELETE,
		url: '{+tenantPod}api/commerce/settings/checkout/paymentsettings/thirdpartyworkflows/{fullyQualifiedName}'
	})
});
