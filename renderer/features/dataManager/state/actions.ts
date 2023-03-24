const actions = {
  setCleanInputs: (state) => {
    state.category.categoryID = ''
    state.product.name = ''
    state.product.code = ''
  }
}

export default actions