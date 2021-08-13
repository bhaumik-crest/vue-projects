import Vue from 'vue'
export const loadData = ({ commit }) => {
    Vue.http.get('data.json')
        .then(res =>
            res.json()
        ).then(data => {
            // console.log(data)
            if (data) {
                const stocks = data.stocks
                const portfolio = {
                    stockPortfolio: data.stockPortfolio,
                    funds: data.funds
                }

                commit("SET_STOCKS", stocks)
                commit("SET_PORTFOLIO", portfolio)
                // console.log("Commit")
            }
        }, err => {
            console.log(err)
        })
}