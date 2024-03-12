import { request } from '@/utils/http'

export const queryPoetry = async (params: any) => {
  const data = await request(`/poetry/queryByDynasty`, {
    method: 'get',
    params,
  })
  return data
}

export const queryPoetryCount = async (params: any) => {
  const data = await request(`/poetry/count`, {
    method: 'get',
    params,
  })
  return data
}
