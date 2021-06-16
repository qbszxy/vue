const store = {
  state: {
    productId: -1,
    saleId: -1,
    chooser: ''
  },
  setProductId (productId) {
    this.state.productId = productId
  },
  setSaleId (saleId) {
    this.state.saleId = saleId
  },
  setChooser (chooser) {
    this.state.chooser = chooser
  }
}

export default store
