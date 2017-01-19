import Vue from 'vue'
import Vuex from 'vuex'
import * as actions from './actions'
import * as getters from './getters'
import loading from './modules/loading'
import alert from './modules/alert'
import history from './modules/searchHistory'
import searchBar from './modules/searchBar'
import user from './modules/user'
import player from './modules/player'

Vue.use(Vuex);
export default new Vuex.Store({
    actions,
    getters,
    modules:{
        loading,
        alert,
        history,
        searchBar,
        user,
        player

    }
})