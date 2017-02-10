

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
	getInStockNotificationSubscriptions: Client.method({
		method: constants.verbs.GET,
		url: '{+tenantPod}api/commerce/instocknotifications/?startIndex={startIndex}&pageSize={pageSize}&sortBy={sortBy}&filter={filter}&responseFields={responseFields}'
	}),
	getInStockNotificationSubscription: Client.method({
		method: constants.verbs.GET,
		url: '{+tenantPod}api/commerce/instocknotifications/{id}?responseFields={responseFields}'
	}),
	addInStockNotificationSubscription: Client.method({
		method: constants.verbs.POST,
		url: '{+tenantPod}api/commerce/instocknotifications/?responseFields={responseFields}'
	}),
	deleteInStockNotificationSubscription: Client.method({
		method: constants.verbs.DELETE,
		url: '{+tenantPod}api/commerce/instocknotifications/{id}'
	})
});
