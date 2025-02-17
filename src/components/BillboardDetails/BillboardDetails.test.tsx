import {useFetch} from '@mantine/hooks';
import {screen} from '@testing-library/react';
import {afterEach, beforeEach, vi} from 'vitest';
import {render} from '../../tests/testUtils';
import {BillboardDetails} from './BillboardDetails'; // Adjust the import path accordingly

vi.mock('@mantine/hooks', () => ({
    useFetch: vi.fn()
}));

describe('BillboardDetails Component', () => {
    const mockOnClose = vi.fn();
    const mockBillboardData = {
        billboard: {
            image: 'https://example.com/image.jpg',
            advertiser: 'Example Advertiser',
            billboardText: 'Some billboard text',
            address: '123 Example St',
            x: 100,
            y: 200,
            photosTaken: 5
        },
        success: true
    };

    beforeEach(() => {
        vi.mocked(useFetch).mockReturnValue({
            data: mockBillboardData
        });
    });

    afterEach(() => {
        vi.clearAllMocks();
    });

    it('renders BillboardDetails modal with fetched data', async () => {
        render(<BillboardDetails opened={true} onClose={mockOnClose} id="123" />);
        expect(screen.getByText('Billboard Details')).toBeInTheDocument();
        expect(screen.getByAltText('Example Advertiser')).toBeInTheDocument();
        expect(screen.getByText('Example Advertiser')).toBeInTheDocument();
        expect(screen.getByText('Some billboard text')).toBeInTheDocument();
        expect(screen.getByText('123 Example St')).toBeInTheDocument();
        expect(screen.getByText('X: 100, Y: 200')).toBeInTheDocument();
        expect(screen.getByText('Photos Taken: 5')).toBeInTheDocument();
    });

    it('shows error message when the fetch fails', async () => {
        vi.mocked(useFetch).mockReturnValue({
            data: {success: false}
        });
        render(<BillboardDetails opened={true} onClose={mockOnClose} id="123" />);
        expect(screen.getByText('Something went wrong')).toBeInTheDocument();
    });
});
