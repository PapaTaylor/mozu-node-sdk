

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
	getCategories: Client.method({
		method: constants.verbs.GET,
		url: '{+tenantPod}api/commerce/catalog/storefront/categories/?filter={filter}&startIndex={startIndex}&pageSize={pageSize}&sortBy={sortBy}&responseFields={responseFields}'
	}),
	getCategory: Client.method({
		method: constants.verbs.GET,
		url: '{+tenantPod}api/commerce/catalog/storefront/categories/{categoryId}?allowInactive={allowInactive}&responseFields={responseFields}'
	}),
	getCategoryTree: Client.method({
		method: constants.verbs.GET,
		url: '{+tenantPod}api/commerce/catalog/storefront/categories/tree?responseFields={responseFields}'
	})
});
