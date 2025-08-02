export default defineNuxtRouteMiddleware(async (to) => {
  if (import.meta.server) return; // ⛔ SSR: jangan jalankan middleware ini

  const publicPages = [
    "/",
    "/login",
    "/register",
    "/verification",
    "/forgot-password",
    "/reset-password",
  ];

  const token = localStorage.getItem("token");

  if (!token && !publicPages.includes(to.path)) {
    return navigateTo({ path: "/login", query: { reason: "unauthorized" } });
  }

  if (token) {
    try {
      const { valid } = await $fetch<{ valid: boolean }>(
        "http://localhost:8000/api/auth-token",
        {
          method: "GET",
          headers: {
            Authorization: `Bearer ${token}`,
            Accept: "application/json",
          },
        }
      );

      if (!valid) throw new Error("Invalid session");

      if (publicPages.includes(to.path)) {
        return navigateTo("/dashboard");
      }
    } catch {
      localStorage.removeItem("token");

      if (!publicPages.includes(to.path)) {
        return navigateTo({
          path: "/login",
          query: { reason: "unauthorized" },
        });
      }
    }
  }
});
