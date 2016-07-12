SimpleJekyllSearch({
  searchInput: document.getElementById('search-input'),
  resultsContainer: document.getElementById('results-container'),
  searchResultTemplate: '<li class="list-group-item"><a href="{url}">{title}</a></li>',
  noResultsText:'无结果',
  limit:10,
  fuzzy:true,
  json: 'search/search.json',
})