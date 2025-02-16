import {Button, Flex} from '@mantine/core';
import {FC} from 'react';
import {useInstructions} from '../contexts/instructions/useInstructionContext';

const DroneControls: FC = () => {
    const {setInstruction, resetInstruction} = useInstructions();

    return (
        <Flex gap="md" wrap="wrap">
            <Button onClick={() => setInstruction('x')} aria-label="Take Photo" color="green">
                📸 Take Photo
            </Button>
            <Button onClick={() => setInstruction('^')} aria-label="Move Up" color="green">
                ⬆️ Move Up
            </Button>
            <Button onClick={() => setInstruction('v')} aria-label="Move Down" color="green">
                ⬇️ Move Down
            </Button>
            <Button onClick={() => setInstruction('<')} aria-label="Move Left" color="green">
                ⬅️ Move Left
            </Button>
            <Button onClick={() => setInstruction('>')} aria-label="Move Right" color="green">
                ➡️ Move Right
            </Button>
            <Button
                onClick={() => resetInstruction()}
                aria-label="Reset Instructions"
                color="green"
            >
                🔄 Reset
            </Button>
        </Flex>
    );
};

export default DroneControls;
