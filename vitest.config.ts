import react from '@vitejs/plugin-react-swc';
import {defineConfig} from 'vitest/config';

export default defineConfig({
    plugins: [react()],
    test: {
        environment: 'jsdom',
        globals: true,
        setupFiles: __dirname + '/src/tests/setupTests.ts'
    }
});
