

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
	getDocumentLists: Client.method({
		method: constants.verbs.GET,
		url: '{+tenantPod}api/content/documentlists/?pageSize={pageSize}&startIndex={startIndex}&responseFields={responseFields}'
	}),
	getDocumentList: Client.method({
		method: constants.verbs.GET,
		url: '{+tenantPod}api/content/documentlists/{documentListName}?responseFields={responseFields}'
	}),
	createDocumentList: Client.method({
		method: constants.verbs.POST,
		url: '{+tenantPod}api/content/documentlists/?responseFields={responseFields}'
	}),
	updateDocumentList: Client.method({
		method: constants.verbs.PUT,
		url: '{+tenantPod}api/content/documentlists/{documentListName}?responseFields={responseFields}'
	}),
	deleteDocumentList: Client.method({
		method: constants.verbs.DELETE,
		url: '{+tenantPod}api/content/documentlists/{documentListName}'
	})
});
