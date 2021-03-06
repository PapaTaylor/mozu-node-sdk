

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
		url: '{+tenantPod}api/commerce/catalog/admin/categories/?startIndex={startIndex}&pageSize={pageSize}&sortBy={sortBy}&filter={filter}&responseFields={responseFields}'
	}),
	getChildCategories: Client.method({
		method: constants.verbs.GET,
		url: '{+tenantPod}api/commerce/catalog/admin/categories/{categoryId}/children?responseFields={responseFields}'
	}),
	getCategory: Client.method({
		method: constants.verbs.GET,
		url: '{+tenantPod}api/commerce/catalog/admin/categories/{categoryId}?responseFields={responseFields}'
	}),
	addCategory: Client.method({
		method: constants.verbs.POST,
		url: '{+tenantPod}api/commerce/catalog/admin/categories/?incrementSequence={incrementSequence}&useProvidedId={useProvidedId}&responseFields={responseFields}'
	}),
	addProductsToCategory: Client.method({
		method: constants.verbs.POST,
		url: '{+tenantPod}api/commerce/catalog/admin/categories/{categoryId}/add-products'
	}),
	removeProductsFromCategory: Client.method({
		method: constants.verbs.POST,
		url: '{+tenantPod}api/commerce/catalog/admin/categories/{categoryId}/remove-products'
	}),
	validateDynamicExpression: Client.method({
		method: constants.verbs.POST,
		url: '{+tenantPod}api/commerce/catalog/admin/categories/ValidateDynamicExpression?responseFields={responseFields}'
	}),
	validateRealTimeDynamicExpression: Client.method({
		method: constants.verbs.POST,
		url: '{+tenantPod}api/commerce/catalog/admin/categories/ValidateRealTimeDynamicExpression?responseFields={responseFields}'
	}),
	updateCategory: Client.method({
		method: constants.verbs.PUT,
		url: '{+tenantPod}api/commerce/catalog/admin/categories/{categoryId}?cascadeVisibility={cascadeVisibility}&responseFields={responseFields}'
	}),
	deleteCategoryById: Client.method({
		method: constants.verbs.DELETE,
		url: '{+tenantPod}api/commerce/catalog/admin/categories/{categoryId}/?cascadeDelete={cascadeDelete}&forceDelete={forceDelete}&reassignToParent={reassignToParent}'
	})
});
