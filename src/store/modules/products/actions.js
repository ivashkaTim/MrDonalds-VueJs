export const actions = {
    changeActiveItem(context, payload) {
        context.commit('changeActiveItem', payload)
    },
    changeActiveProductCount(context, count) {
        context.commit('changeActiveItemCount', count)
        context.dispatch('closeCardProduct')
    },
    closeCardProduct(context) {
        context.commit('closeCardProduct')
    },
    deleteProduct(context, payload) {
        context.commit('deleteProduct', payload)
    }
}