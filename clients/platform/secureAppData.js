

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
	getDBValue: Client.method({
		method: constants.verbs.GET,
		url: '{+tenantPod}api/platform/secureappdata/{appKeyId}/{dbEntryQuery}?responseFields={responseFields}'
	}),
	createDBValue: Client.method({
		method: constants.verbs.POST,
		url: '{+tenantPod}api/platform/secureappdata/{appKeyId}/{dbEntryQuery}'
	}),
	updateDBValue: Client.method({
		method: constants.verbs.PUT,
		url: '{+tenantPod}api/platform/secureappdata/{appKeyId}/{dbEntryQuery}'
	}),
	deleteDBValue: Client.method({
		method: constants.verbs.DELETE,
		url: '{+tenantPod}api/platform/secureappdata/{appKeyId}/{dbEntryQuery}'
	})
});
