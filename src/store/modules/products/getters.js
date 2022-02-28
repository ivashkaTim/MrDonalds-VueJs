export const getters = {
    sections(state) {
        const categories = {}
        state.sections.forEach(item => {
            if (categories[item.category]) {
                categories[item.category].push(item)
            } else {
                categories[item.category] = [item]
            }
        })
        return categories
    },
    activeProduct(state) {
        return state.activeProduct
    },
    filteredMenuItems(state, getters) {
        const products = []
        Object.entries(getters.sections).forEach(([title, items]) => {
            items.forEach(item => {
                if (item.count > 0) {
                    products.unshift(item)
                }
            })
        })
        return products
    },
    getTotalPriceAndCount(state, getters) {
        const total = {
            totalCount: 0,
            totalPrice: 0,
        }
        getters.filteredMenuItems.forEach(item => {
            total.totalCount += item.count
            total.totalPrice += (item.count * item.price)
        })
        return total
    },
}