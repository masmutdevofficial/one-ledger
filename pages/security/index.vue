<template>
  <div class="p-4 w-full">
    <!-- Form Change Password -->
    <div class="bg-white p-6 rounded-lg shadow-md max-w-md mx-auto">
      <h2 class="text-xl font-semibold mb-4 text-black">Change Password</h2>

      <form>
        <!-- Old Password -->
        <div class="mb-4">
          <label class="block text-gray-700 mb-1">Old Password</label>
          <input
            type="password"
            class="w-full px-3 py-2 border border-gray-300 rounded-md"
          />
        </div>

        <!-- New Password -->
        <div class="mb-4">
          <label class="block text-gray-700 mb-1">New Password</label>
          <input
            type="password"
            class="w-full px-3 py-2 border border-gray-300 rounded-md"
          />
        </div>

        <!-- Confirm Password -->
        <div class="mb-4">
          <label class="block text-gray-700 mb-1">Confirm New Password</label>
          <input
            type="password"
            class="w-full px-3 py-2 border border-gray-300 rounded-md"
          />
        </div>

        <!-- Submit Button -->
        <button
          type="button"
          class="w-full py-2 bg-teal-500 text-white rounded-md"
        >
          Change Password
        </button>
      </form>
    </div>
  </div>
</template>
