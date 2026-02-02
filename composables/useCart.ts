export const useCart = () => {
  const cart = useState<{ id: number; name: string; price: number; quantity: number }[]>(
    'cart',
    () => []
  )

  const addToCart = (product: { id: number; name: string; price: number }) => {
    const existingItem = cart.value.find((item) => item.id === product.id)
    if (existingItem) {
      existingItem.quantity++
    } else {
      cart.value.push({ ...product, quantity: 1 })
    }
  }

  const cartCount = computed(() => {
    return cart.value.reduce((total, item) => total + item.quantity, 0)
  })

  return {
    cart,
    addToCart,
    cartCount,
  }
}
