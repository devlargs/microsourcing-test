import {Box, Flex, MantineProvider} from '@mantine/core';
import '@mantine/core/styles.css';
import Billboards from './components/Billboards';
import DroneControls from './components/DroneControls';
import {InstructionsProvider} from './contexts/instructions/InstructionsProvider';

function App() {
    return (
        <InstructionsProvider>
            <MantineProvider>
                <Box p="xl">
                    <Flex mb="lg">
                        <Flex direction="column" gap="md">
                            <h1>Drone Challenge</h1>
                            <DroneControls />
                        </Flex>
                    </Flex>
                    <Billboards />
                </Box>
            </MantineProvider>
        </InstructionsProvider>
    );
}

export default App;
