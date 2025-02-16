import {Flex, MantineProvider} from '@mantine/core';
import '@mantine/core/styles.css';
import DroneControls from './components/DroneControls';
import PhotosTaken from './components/PhotosTaken';
import {InstructionsProvider} from './contexts/instructions/InstructionsProvider';

function App() {
    return (
        <InstructionsProvider>
            <MantineProvider>
                <Flex p="xl">
                    <Flex direction="column" gap="md">
                        <h1>Drone Challenge</h1>
                        <DroneControls />
                    </Flex>
                </Flex>
                <PhotosTaken />
            </MantineProvider>
        </InstructionsProvider>
    );
}

export default App;
