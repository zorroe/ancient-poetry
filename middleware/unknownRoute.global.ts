/**
 * 如果没有匹配任何路由，则跳转到error页面
 */
export default defineNuxtRouteMiddleware((to, from) => {
  if (!to.matched.length) {
    return navigateTo('error')
  }
})
