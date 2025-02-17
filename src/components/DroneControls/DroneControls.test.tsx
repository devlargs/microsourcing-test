import {fireEvent, screen} from '@testing-library/react';
import {vi} from 'vitest';
import {useInstructions} from '../../contexts/instructions/useInstructionContext';
import {render} from '../../tests/testUtils';
import DroneControls from './DroneControls'; // Adjust import path accordingly

vi.mock('../../contexts/instructions/useInstructionContext', () => ({
    useInstructions: vi.fn()
}));

describe('DroneControls Component', () => {
    const mockSetInstruction = vi.fn();
    const mockResetInstruction = vi.fn();

    beforeEach(() => {
        vi.mocked(useInstructions).mockReturnValue({
            setInstruction: mockSetInstruction,
            resetInstruction: mockResetInstruction
        });
    });

    afterEach(() => {
        vi.clearAllMocks();
    });

    it('renders DroneControls component with buttons', () => {
        render(<DroneControls />);

        expect(screen.getByLabelText('Take Photo')).toBeInTheDocument();
        expect(screen.getByLabelText('Move Up')).toBeInTheDocument();
        expect(screen.getByLabelText('Move Down')).toBeInTheDocument();
        expect(screen.getByLabelText('Move Left')).toBeInTheDocument();
        expect(screen.getByLabelText('Move Right')).toBeInTheDocument();
        expect(screen.getByLabelText('Reset Instructions')).toBeInTheDocument();
    });

    it('calls setInstruction with "x" when Take Photo button is clicked', () => {
        render(<DroneControls />);
        fireEvent.click(screen.getByLabelText('Take Photo'));
        expect(mockSetInstruction).toHaveBeenCalledWith('x');
        expect(mockSetInstruction).toHaveBeenCalledTimes(1);
    });

    it('calls setInstruction with "^" when Move Up button is clicked', () => {
        render(<DroneControls />);

        fireEvent.click(screen.getByLabelText('Move Up'));
        expect(mockSetInstruction).toHaveBeenCalledWith('^');
        expect(mockSetInstruction).toHaveBeenCalledTimes(1);
    });

    it('calls setInstruction with "v" when Move Down button is clicked', () => {
        render(<DroneControls />);
        fireEvent.click(screen.getByLabelText('Move Down'));
        expect(mockSetInstruction).toHaveBeenCalledWith('v');
        expect(mockSetInstruction).toHaveBeenCalledTimes(1);
    });

    it('calls setInstruction with "<" when Move Left button is clicked', () => {
        render(<DroneControls />);
        fireEvent.click(screen.getByLabelText('Move Left'));
        expect(mockSetInstruction).toHaveBeenCalledWith('<');
        expect(mockSetInstruction).toHaveBeenCalledTimes(1);
    });

    it('calls setInstruction with ">" when Move Right button is clicked', () => {
        render(<DroneControls />);
        fireEvent.click(screen.getByLabelText('Move Right'));
        expect(mockSetInstruction).toHaveBeenCalledWith('>');
        expect(mockSetInstruction).toHaveBeenCalledTimes(1);
    });

    it('calls resetInstruction when Reset button is clicked', () => {
        render(<DroneControls />);
        fireEvent.click(screen.getByLabelText('Reset Instructions'));
        expect(mockResetInstruction).toHaveBeenCalledTimes(1);
    });
});
