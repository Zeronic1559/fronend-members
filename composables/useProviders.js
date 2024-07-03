import { reactive, toRefs, onMounted } from '@vue/composition-api'

export default function useProviders() {
  const state = reactive({
    offset: 0,
    limit: 9999,
    isLoading: false,
    providers: [],
    selectedCategory: 'mygame',
    categories: [
      {
        id: 'mygame',
        name: 'เกมของฉัน',
        image: '/images/providers/mygame.png',
        isNew: false,
      },
      {
        id: 'all',
        name: 'ค่ายเกมส์ทั้งหมด',
        image: '/images/providers/category-1.png',
        isNew: false,
      },
      {
        id: 'slot',
        name: 'สล็อต ',
        image: '/images/providers/category-3.png',
        isNew: false,
      },
      {
        id: 'casino',
        name: 'คาสิโนสด',
        image: '/images/providers/category-2.png',
        isNew: false,
      },
    ],
  })

  onMounted(() => {
    if (process.env.LINE_LOGIN == 'true') {
      state.categories.push(
        {
          id: 'fish',
          name: 'ยิงปลา',
          image: '/images/providers/Fish.png',
          isNew: false,
        },
        {
          id: 'card',
          name: 'เกมพื้นบ้าน',
          image: '/images/providers/Poker.png',
          isNew: false,
        }
      )
    }
    state.categories.push(
      {
        id: 'sport',
        name: 'กีฬา / อีสปอร์ต',
        image: '/images/providers/category-4.png',
        isNew: false,
      },
      {
        id: 'huay',
        name: 'หวยออนไลน์',
        image: '/images/providers/lottery2.png',
        isNew: true,
      }
    )
  })

  /**
   * Represents a book.
   *
   */
  function normalize(data) {
    return data.map((item) => {
      return {
        ...item,
        image: item.picture,
        link: item.action ? `${item.action}` : '/provider/' + item.id,
        linkType: item.action ? 'external' : 'internal',
      }
    })
  }

  /**
   * Represents a book.
   *
   */
  async function onLoadProvider() {
    state.isLoading = true

    try {
      const { data = [] } = await this.$axios(
        `/api/v3/providers?category=all&offset=${state.offset}&limit=${state.limit}`
      )

      state.providers = normalize(data)
      state.offset += state.limit
    } catch (e) {
      console.log(e)
    }

    state.isLoading = false
  }

  /**
   * Represents a book.
   *
   */
  async function onLoadProviderByCategory(category) {
    state.isLoading = true
    state.offset = 0
    state.selectedCategory = category

    try {
      const url =
        category == 'mygame'
          ? `/api/vx/mygames`
          : `/api/v3/providers?category=${category}&offset=${state.offset}&limit=${state.limit}`
      const { data = [] } = await this.$axios(url)
      if (category == 'mygame') {
        state.providers = data.data
      } else {
        state.providers = normalize(data)
      }
      state.offset += state.limit
      state.isLoading = false
    } catch (e) {
      console.log(e)
    }
  }

  async function removeGame(game) {
    const index = state.providers.findIndex((e) => e.id == game.id)
    if (index > -1) {
      state.providers.splice(index, 1)
    }
    try {
      const url = `/api/vx/mygames/${game.id}`
      const response = await this.$axios.delete(url)
      const { data } = response
      if (data.isSuccess) {
        // code
      }
    } catch (error) {
      console.log(error)
    }
  }

  return {
    ...toRefs(state),
    onLoadProvider,
    onLoadProviderByCategory,
    removeGame,
  }
}
