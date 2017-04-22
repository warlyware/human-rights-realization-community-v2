(function() {

    'use strict';

    angular
        .module('hrrc-app.services')
        .factory('ArticleService', ArticleService);

        ArticleService.$inject = ['$http', 'ApiService'];

        function ArticleService($http, ApiService) {
            return {
                getArticles,
                getArticlesByCategory,
                getArticleBySlug
            }

            function getArticles() {
                return ApiService.getPosts();
            }

            function getArticlesByCategory(category) {
                return ApiService.getPostsByCategory(category);
            }

            function getArticleBySlug(slug) {
                return ApiService.getPostBySlug(slug);
            }
        }

})();