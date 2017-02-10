

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
	getLocation: Client.method({
		method: constants.verbs.GET,
		url: '{+tenantPod}api/commerce/storefront/locations/{code}?responseFields={responseFields}'
	}),
	getLocationsInUsageType: Client.method({
		method: constants.verbs.GET,
		url: '{+tenantPod}api/commerce/storefront/locationUsageTypes/{locationUsageType}/locations?startIndex={startIndex}&pageSize={pageSize}&sortBy={sortBy}&filter={filter}&responseFields={responseFields}'
	}),
	getDirectShipLocation: Client.method({
		method: constants.verbs.GET,
		url: '{+tenantPod}api/commerce/storefront/locationUsageTypes/DS/location?responseFields={responseFields}'
	}),
	getInStorePickupLocation: Client.method({
		method: constants.verbs.GET,
		url: '{+tenantPod}api/commerce/storefront/locationUsageTypes/SP/locations/{code}?responseFields={responseFields}'
	}),
	getInStorePickupLocations: Client.method({
		method: constants.verbs.GET,
		url: '{+tenantPod}api/commerce/storefront/locationUsageTypes/SP/locations?startIndex={startIndex}&pageSize={pageSize}&sortBy={sortBy}&filter={filter}&responseFields={responseFields}'
	})
});
