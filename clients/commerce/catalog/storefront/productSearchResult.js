

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
	getRandomAccessCursor: Client.method({
		method: constants.verbs.GET,
		url: '{+tenantPod}api/commerce/catalog/storefront/productsearch/randomAccessCursor/?query={query}&filter={filter}&pageSize={pageSize}&responseFields={responseFields}'
	}),
	search: Client.method({
		method: constants.verbs.GET,
		url: '{+tenantPod}api/commerce/catalog/storefront/productsearch/search/?query={query}&filter={filter}&facetTemplate={facetTemplate}&facetTemplateSubset={facetTemplateSubset}&facet={facet}&facetFieldRangeQuery={facetFieldRangeQuery}&facetHierPrefix={facetHierPrefix}&facetHierValue={facetHierValue}&facetHierDepth={facetHierDepth}&facetStartIndex={facetStartIndex}&facetPageSize={facetPageSize}&facetSettings={facetSettings}&facetValueFilter={facetValueFilter}&sortBy={sortBy}&pageSize={pageSize}&startIndex={startIndex}&searchSettings={searchSettings}&enableSearchTuningRules={enableSearchTuningRules}&searchTuningRuleContext={searchTuningRuleContext}&searchTuningRuleCode={searchTuningRuleCode}&facetTemplateExclude={facetTemplateExclude}&facetPrefix={facetPrefix}&responseOptions={responseOptions}&cursorMark={cursorMark}&facetValueSort={facetValueSort}&defaultSort={defaultSort}&sortDefinitionName={sortDefinitionName}&defaultSortDefinitionName={defaultSortDefinitionName}&responseFields={responseFields}'
	}),
	suggest: Client.method({
		method: constants.verbs.GET,
		url: '{+tenantPod}api/commerce/catalog/storefront/productsearch/suggest?query={query}&groups={groups}&pageSize={pageSize}&responseFields={responseFields}'
	})
});
