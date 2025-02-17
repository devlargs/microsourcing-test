import {screen} from '@testing-library/react';
import {render} from '../../tests/testUtils';
import {AlertNote} from './AlertNote';

describe('AlertNote', () => {
    it('renders AlertNote component', () => {
        render(
            <AlertNote
                color="blue"
                title="No data yet"
                description="Please select instructions set"
            />
        );
        const title = screen.getByText('No data yet');
        const description = screen.getByText('Please select instructions set');
        expect(title).toBeInTheDocument();
        expect(description).toBeInTheDocument();
    });

    it('renders AlertNote component with default props without the title', () => {
        render(<AlertNote description="An error occurred" />);
        const title = screen.getByText('Something went wrong');
        const description = screen.getByText('An error occurred');
        expect(title).toBeInTheDocument();
        expect(description).toBeInTheDocument();
    });

    it('renders AlertNote component with different color', () => {
        render(<AlertNote description="Different Color" title="Color" color="blue" />);
        const description = screen.getByText('Different Color');
        expect(description).toBeInTheDocument();
        const alertRoot = description.closest('.mantine-Alert-root');
        expect(alertRoot).toHaveStyle('--alert-bg: var(--mantine-color-blue-light)');
    });
});
