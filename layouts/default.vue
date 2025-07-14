<template>
  <div class="min-h-screen flex justify-center bg-black text-gray-900">
    <!-- Content Wrapper -->
    <div class="w-full max-w-md bg-white min-h-screen flex flex-col">
      <!-- Navbar -->
      <header class="flex items-center justify-between p-4 shadow">
        <!-- Logo -->
        <div class="flex items-center space-x-2">
          <div class="w-6 h-6 bg-teal-500 rounded"></div>
        </div>

        <!-- Top Icons -->
        <div class="flex items-center space-x-4 text-lg">
          <Icon name="fa:search" />
          <Icon name="fa:bell" />
          <Icon name="fa:headphones" />
          <Icon name="fa:question-circle" />
        </div>
      </header>

      <!-- Main Content -->
      <main class="flex-1 overflow-y-auto">
        <slot />
      </main>

      <!-- Optional Footer -->
      <footer class="text-xs text-center text-gray-400 py-2 border-t">
        © 2025 OneLedger
      </footer>
    </div>
  </div>
</template>
