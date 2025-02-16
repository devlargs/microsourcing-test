import {createContext} from 'react';

type InstructionsContextType = {
    instructions: string[];
    setInstruction: (instruction: string) => void;
    resetInstruction: () => void;
};

export const InstructionsContext = createContext<InstructionsContextType | undefined>(undefined);
