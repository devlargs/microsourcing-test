import {ReactNode, useState} from 'react';
import {InstructionsContext} from './InstructionContext';

export const InstructionsProvider = ({children}: {children: ReactNode}) => {
    const [instructions, setInstructions] = useState<string[]>([]);

    const setInstruction = (instruction: string) => {
        setInstructions((prev) => (instruction === '' ? [] : [...prev, instruction]));
    };

    const resetInstruction = () => {
        setInstructions([]);
    };

    return (
        <InstructionsContext.Provider value={{instructions, setInstruction, resetInstruction}}>
            {children}
        </InstructionsContext.Provider>
    );
};
