export default defineNuxtRouteMiddleware((to) => {
  const publicPages = ["/", "/login", "/register", "/verification"];

  if (import.meta.client) {
    const token = localStorage.getItem("token");
    const hasToken = !!token && token.trim() !== "";

    if (!hasToken && !publicPages.includes(to.path)) {
      return navigateTo({ path: "/login", query: { reason: "unauthorized" } });
    }
    if (hasToken && publicPages.includes(to.path)) {
      return navigateTo("/dashboard");
    }
  }
});
