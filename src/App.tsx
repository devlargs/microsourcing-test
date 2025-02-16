import {Flex, MantineProvider} from '@mantine/core';
import '@mantine/core/styles.css';

function App() {
    return (
        <MantineProvider>
            <Flex p="xl">
                <div>hehe</div>
            </Flex>
        </MantineProvider>
    );
}

export default App;
