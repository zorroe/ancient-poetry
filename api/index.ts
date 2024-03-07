const prefix = 'http://localhost:8080/poetry'

export const queryPoetry = async (params: any) => {
  const data = await $fetch(`${prefix}/queryByDynasty`, {
    method: 'get',
    params,
  })
  return data
}