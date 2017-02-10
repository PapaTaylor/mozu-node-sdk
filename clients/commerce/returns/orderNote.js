

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
	getReturnNotes: Client.method({
		method: constants.verbs.GET,
		url: '{+tenantPod}api/commerce/returns/{returnId}/notes'
	}),
	getReturnNote: Client.method({
		method: constants.verbs.GET,
		url: '{+tenantPod}api/commerce/returns/{returnId}/notes/{noteId}?responseFields={responseFields}'
	}),
	createReturnNote: Client.method({
		method: constants.verbs.POST,
		url: '{+tenantPod}api/commerce/returns/{returnId}/notes?responseFields={responseFields}'
	}),
	updateReturnNote: Client.method({
		method: constants.verbs.PUT,
		url: '{+tenantPod}api/commerce/returns/{returnId}/notes/{noteId}?responseFields={responseFields}'
	}),
	deleteReturnNote: Client.method({
		method: constants.verbs.DELETE,
		url: '{+tenantPod}api/commerce/returns/{returnId}/notes/{noteId}'
	})
});
