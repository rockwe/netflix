const getters = {
    getTest: (state) => {
        return state.test;
    },
    getFilters: (state) => {
        return state.filters;
    },
    getSearchBar: (state) => {
        return state.showSearchBar;
    },

    isLoggedIn: (state) => {
        return state.loggedIn;
    },
    getUser: (state) => {
        return state.user || {};
    },


};

export default getters;
