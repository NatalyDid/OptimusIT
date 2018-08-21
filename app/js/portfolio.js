$(document).ready(function () {
    var pagination_container = $('.pagination-main');
    if (pagination_container.length) {
        pagination_container.pagination({
            items: 100,
            itemsOnPage: 5,
            displayedPages: 3,
            edges: 1,
            cssStyle: 'light-theme'
        });
    }
});