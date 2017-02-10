

//------------------------------------------------------------------------------
// <auto-generated>
//     This code was generated by CodeZu.     
//
//     Changes to this file may cause incorrect behavior and will be lost if
//     the code is regenerated.
// </auto-generated>
//------------------------------------------------------------------------------

var Client = require('../../../../../../client'), constants = Client.constants;

module.exports = Client.sub({
	getAttributeLocalizedContents: Client.method({
		method: constants.verbs.GET,
		url: '{+tenantPod}api/commerce/catalog/admin/attributedefinition/attributes/{attributeFQN}/LocalizedContent'
	}),
	getAttributeLocalizedContent: Client.method({
		method: constants.verbs.GET,
		url: '{+tenantPod}api/commerce/catalog/admin/attributedefinition/attributes/{attributeFQN}/LocalizedContent/{localeCode}?responseFields={responseFields}'
	}),
	addLocalizedContent: Client.method({
		method: constants.verbs.POST,
		url: '{+tenantPod}api/commerce/catalog/admin/attributedefinition/attributes/{attributeFQN}/LocalizedContent?responseFields={responseFields}'
	}),
	updateLocalizedContents: Client.method({
		method: constants.verbs.PUT,
		url: '{+tenantPod}api/commerce/catalog/admin/attributedefinition/attributes/{attributeFQN}/LocalizedContent'
	}),
	updateLocalizedContent: Client.method({
		method: constants.verbs.PUT,
		url: '{+tenantPod}api/commerce/catalog/admin/attributedefinition/attributes/{attributeFQN}/LocalizedContent/{localeCode}?responseFields={responseFields}'
	}),
	deleteLocalizedContent: Client.method({
		method: constants.verbs.DELETE,
		url: '{+tenantPod}api/commerce/catalog/admin/attributedefinition/attributes/{attributeFQN}/LocalizedContent/{localeCode}'
	})
});
