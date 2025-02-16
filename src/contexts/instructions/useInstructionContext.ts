import {useContext} from 'react';
import {InstructionsContext} from './InstructionContext';

export const useInstructions = () => {
    const context = useContext(InstructionsContext);
    if (!context) {
        throw new Error('useInstructions must be used within an InstructionsProvider');
    }
    return context;
};
