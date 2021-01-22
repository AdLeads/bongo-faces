const state = {
    newjob: {
        jobId: -1,
        title: "",
        description: "",
        postDate: "",
        jobType: "basic",
        show: false,
        country: "",
        company: "",
        companymail: "",
        logo: "",
        requirements: [],
        status: 0
    }
}

const mutations = {
    "SET_COMPANY"(state, newValue) {
        // console.log(newValue)
        state.company = newValue.company
        state.companymail = newValue.companymail
        state.title = newValue.title
    },
    'BUY_STOCK'(state, {
        stockId,
        quantity,
        stockPrice
    }) {
        const record = state.stocks.find(element => {
            return element.id == stockId
        })
        if (record) {
            record.quantity += quantity
        } else {
            state.stocks.push({
                id: stockId,
                quantity: quantity
            });
        }
        state.funds -= stockPrice * quantity
    },
    'SELL_STOCK'(state, {
        stockId,
        quantity,
        stockPrice
    }) {
        const record = state.stocks.find(element => {
            return element.id == stockId
        })
        if (record.quantity > quantity) {
            record.quantity -= quantity
        } else {
            state.stocks.splice(state.stocks.indexOf(record), 1)
        }
        state.funds += stockPrice * quantity
    },
    "SET_PORTFOLIO"(state, portfolio) {
        state.funds = portfolio.funds;
        state.stocks = portfolio.stockPortfolio ? portfolio.stockPortfolio : [];
    }

}

const actions = {
    sellStock({
        commit
    }, order) {
        commit("SELL_STOCK", order)
    },
    setCompany: ({
        commit,
    }, newValue) => {
        commit('SET_COMPANY', newValue)
    },
}
const getters = {
    newjob(state) {
        return state.newjob;
    },
    stockPortfolio(state, getters) {
        return state.stocks.map(stock => {
            const record = getters.stocks.find(element => element.id == stock.id)
            return {
                id: stock.id,
                quantity: stock.quantity,
                name: record.name,
                price: record.price
            }
        })
    },
    funds(state) {
        return state.funds
    }
};

export default {
    state,
    mutations,
    actions,
    getters
}