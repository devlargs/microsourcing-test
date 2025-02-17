import {useDisclosure, useFetch, useMediaQuery} from '@mantine/hooks';
import {screen} from '@testing-library/react';
import {vi} from 'vitest';
import {useInstructions} from '../../contexts/instructions/useInstructionContext'; // Adjust import path
import {render} from '../../tests/testUtils';
import Billboards from './Billboards';

vi.mock('../../contexts/instructions/useInstructionContext', () => ({
    useInstructions: vi.fn()
}));

describe('Billboards Component', () => {
    const mockOpen = vi.fn();
    const mockClose = vi.fn();

    const mockBillboardData = {
        billboards: [
            {
                id: '1',
                advertiser: 'Test Advertiser',
                billboardText: 'Test Billboard Text',
                address: '123 Test St',
                image: 'https://example.com/image.jpg',
                photosTaken: 5,
                x: 100,
                y: 200
            }
        ],
        instructions: 'Test Instructions',
        success: true
    };

    beforeEach(() => {
        vi.mocked(useInstructions).mockReturnValue({
            instructions: ['testInstruction1']
        });
        vi.mocked(useFetch).mockReturnValue({
            data: mockBillboardData,
            loading: false
        });
        vi.mocked(useDisclosure).mockReturnValue([mockOpen, {open: mockOpen, close: mockClose}]);
        vi.mocked(useMediaQuery).mockReturnValue(true); // Assuming large screen for testing
    });

    afterEach(() => {
        vi.clearAllMocks();
    });

    it('renders Billboards correctly when there is data', async () => {
        render(<Billboards />);

        expect(screen.getByText(/Instruction Set:/)).toBeInTheDocument();
        expect(screen.getByText(/Test Instructions/)).toBeInTheDocument();

        expect(screen.getByText('Test Advertiser')).toBeInTheDocument();
        expect(screen.getByText('Test Billboard Text')).toBeInTheDocument();
        expect(screen.getByText('123 Test St')).toBeInTheDocument();

        expect(screen.getByText('More info')).toBeInTheDocument();
    });

    it('shows error message when data fetch fails', () => {
        vi.mocked(useFetch).mockReturnValueOnce({data: null, loading: false});

        render(<Billboards />);

        expect(screen.getByText('Please select instructions set')).toBeInTheDocument();
    });

    it('shows "No data found" if no billboards are available', async () => {
        vi.mocked(useFetch).mockReturnValueOnce({
            data: {billboards: [], success: true},
            loading: false
        });

        render(<Billboards />);

        expect(screen.getByText('No data found')).toBeInTheDocument();
    });
});
