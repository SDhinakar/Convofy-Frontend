import { create } from "zustand";

export const useThemeStore = create((set) => {
  // Get from localStorage or fallback to default
  const initialTheme = localStorage.getItem("chat-theme") || "coffee";
  // Apply it immediately
  document.documentElement.setAttribute("data-theme", initialTheme);

  return {
    theme: initialTheme,
    setTheme: (theme) => {
      localStorage.setItem("chat-theme", theme);
      document.documentElement.setAttribute("data-theme", theme); // ✅ Apply theme
      set({ theme });
    },
  };
});
