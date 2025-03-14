
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";
import { componentTagger } from "lovable-tagger";

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => ({
  server: {
    host: "::",
    port: 8080,
    hmr: {
      // Reduce HMR payload size
      overlay: false
    },
    watch: {
      // Reduce file system watching overhead
      usePolling: false,
      interval: 1000,
    },
  },
  optimizeDeps: {
    // Force-include dependencies that might cause issues
    include: ['react-dom', 'framer-motion'],
  },
  build: {
    // Improve production build
    chunkSizeWarningLimit: 1000,
    rollupOptions: {
      output: {
        manualChunks: {
          'react-vendor': ['react', 'react-dom'],
          'ui-components': ['@/components/ui'],
          'framer-motion': ['framer-motion'],
        }
      }
    }
  },
  plugins: [
    react({
      // Optimize React refresh
      fastRefresh: true,
    }),
    mode === 'development' &&
    componentTagger(),
  ].filter(Boolean),
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
  // Add history API fallback for client-side routing
  preview: {
    port: 8080,
    strictPort: true,
    host: true,
    historyApiFallback: true,
  },
}));
