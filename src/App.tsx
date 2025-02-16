import {Button, Flex, MantineProvider, Text} from '@mantine/core';
import '@mantine/core/styles.css';
import {useState} from 'react';

function App() {
    const [instructionSet, setInstructionSet] = useState<string[]>([]);

    const addInstruction = (instruction: string) => {
        if (instruction === '') {
            setInstructionSet([]);
            return;
        }

        setInstructionSet([...instructionSet, instruction]);
    };

    return (
        <MantineProvider>
            <Flex p="xl">
                <Flex direction="column" gap="md">
                    <h1>Drone Challenge</h1>
                    <Text aria-live="polite">
                        {instructionSet.length ? `Instruction Set: ${instructionSet.join('')}` : ''}
                    </Text>
                    <Flex gap="md">
                        <Button
                            onClick={() => addInstruction('x')}
                            aria-label="Take Photo"
                            color="green"
                        >
                            📸 Take Photo
                        </Button>
                        <Button
                            onClick={() => addInstruction('^')}
                            aria-label="Move Up"
                            color="green"
                        >
                            ⬆️ Move Up
                        </Button>
                        <Button
                            onClick={() => addInstruction('v')}
                            aria-label="Move Down"
                            color="green"
                        >
                            ⬇️ Move Down
                        </Button>
                        <Button
                            onClick={() => addInstruction('<')}
                            aria-label="Move Left"
                            color="green"
                        >
                            ⬅️ Move Left
                        </Button>
                        <Button
                            onClick={() => addInstruction('>')}
                            aria-label="Move Right"
                            color="green"
                        >
                            ➡️ Move Right
                        </Button>
                        <Button
                            onClick={() => addInstruction('')}
                            aria-label="Reset Instructions"
                            color="green"
                        >
                            🔄 Reset
                        </Button>
                    </Flex>
                </Flex>
            </Flex>
        </MantineProvider>
    );
}

export default App;
