export const mutations = {
    changeActiveItem(state, id) {
        state.activeProduct = state.sections.find(item => item.id === id)
    },
    changeActiveItemCount(state, count) {
        state.activeProduct.count += count
    },
    closeCardProduct(state) {
        state.activeProduct = null
    },
    deleteProduct(state, id) {
        console.log(id)
        const item = state.sections.find(item => item.id === id)
        item.count = 0
    }
}