

//------------------------------------------------------------------------------
// <auto-generated>
//     This code was generated by CodeZu.     
//
//     Changes to this file may cause incorrect behavior and will be lost if
//     the code is regenerated.
// </auto-generated>
//------------------------------------------------------------------------------

var Client = require('../../client'), constants = Client.constants;

module.exports = Client.sub({
	getTargetRules: Client.method({
		method: constants.verbs.GET,
		url: '{+tenantPod}api/commerce/targetrules/?startIndex={startIndex}&pageSize={pageSize}&sortBy={sortBy}&filter={filter}&responseFields={responseFields}'
	}),
	getTargetRule: Client.method({
		method: constants.verbs.GET,
		url: '{+tenantPod}api/commerce/targetrules/{code}?responseFields={responseFields}'
	}),
	createTargetRule: Client.method({
		method: constants.verbs.POST,
		url: '{+tenantPod}api/commerce/targetrules/?responseFields={responseFields}'
	}),
	validateTargetRule: Client.method({
		method: constants.verbs.POST,
		url: '{+tenantPod}api/commerce/targetrules/validate'
	}),
	updateTargetRule: Client.method({
		method: constants.verbs.PUT,
		url: '{+tenantPod}api/commerce/targetrules/{code}?responseFields={responseFields}'
	}),
	deleteTargetRule: Client.method({
		method: constants.verbs.DELETE,
		url: '{+tenantPod}api/commerce/targetrules/{code}'
	})
});
