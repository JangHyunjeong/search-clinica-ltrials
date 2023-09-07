import { useState, useEffect } from 'react'

import { getRecommendsAPI } from '../apis/search'
import { RecommendsType } from '../components/search/types'

const MINUTES_IN_MILLISECONDS = 60000
const EXPIRE_TIME = MINUTES_IN_MILLISECONDS * 1

export const useRecommends = (keyword: string) => {
  const [recommends, setRecommends] = useState<RecommendsType[]>([])

  useEffect(() => {
    if (keyword === '') {
      setRecommends([])
      return
    } else {
      keyword = keyword.trim().toLowerCase()
      const cache = sessionStorage.getItem(keyword)

      if (cache) {
        const parsedCache = JSON.parse(cache)
        if (parsedCache.expireTime > Date.now()) {
          setRecommends(parsedCache.data)
        }
      } else {
        getRecommendsAPI(keyword)
          .then((response) => {
            setRecommends(response.data)

            sessionStorage.setItem(
              keyword,
              JSON.stringify({ data: response.data, expireTime: Date.now() + EXPIRE_TIME })
            )
          })
          .catch((error) => {
            console.error(error)
          })
          .finally(() => {
            console.info('calling api')
          })
      }
    }
  }, [keyword])

  return { recommends }
}
