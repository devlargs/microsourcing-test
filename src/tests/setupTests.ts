import '@testing-library/jest-dom';
import {cleanup} from '@testing-library/react';
import {afterEach, vi} from 'vitest';

Object.defineProperty(window, 'matchMedia', {
    writable: true,
    value: vi.fn().mockImplementation((query) => ({
        matches: false,
        media: query,
        onchange: null,
        addListener: vi.fn(), // deprecated
        removeListener: vi.fn(), // deprecated
        addEventListener: vi.fn(),
        removeEventListener: vi.fn(),
        dispatchEvent: vi.fn()
    }))
});

vi.mock('@mantine/hooks', () => ({
    useFetch: vi.fn(),
    useDisclosure: vi.fn(),
    useMediaQuery: vi.fn()
}));

afterEach(() => {
    cleanup();
});
