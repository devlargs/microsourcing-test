import {Button, Card, Flex, Group, Image, Loader, Text, Title} from '@mantine/core';
import {useFetch, useMediaQuery} from '@mantine/hooks';
import {FaLocationDot} from 'react-icons/fa6';
import {useInstructions} from '../contexts/instructions/useInstructionContext';
import {AlertNote} from './AlertNote';

type Billboard = {
    address: string;
    advertiser: string;
    billboardText: string;
    id: string;
    image: string;
    photosTaken: number;
    x: number;
    y: number;
};

const Billboards = () => {
    const {instructions} = useInstructions();
    const isSmallScreen = useMediaQuery('(min-width: 56.25em)');
    const {data, loading} = useFetch<{
        billboards: Billboard[];
        instructions: string;
        success: boolean;
    }>(`${import.meta.env.VITE_API_URL}/instruct-drone?instructions=${instructions.join('')}`);

    if (!data?.success) {
        return (
            <AlertNote
                color="blue"
                title="No data yet"
                description="Please select instructions set"
            />
        );
    }

    return loading ? (
        <Loader color="green" />
    ) : data?.billboards.length ? (
        <>
            <Title order={2} py="md">
                Instruction Set: {data.instructions}
            </Title>
            <Flex gap="md" wrap="wrap" justify="center">
                {data.billboards.map((billboard) => (
                    <Card
                        shadow="sm"
                        padding="lg"
                        radius="md"
                        withBorder
                        style={{
                            width: isSmallScreen ? 250 : '100%',
                            justifyContent: 'space-between'
                        }}
                        key={billboard.id}
                    >
                        <Card.Section>
                            <Image src={billboard.image} height={160} alt={billboard.advertiser} />
                        </Card.Section>

                        <Group justify="space-between" mt="md" mb="xs">
                            <Text
                                fw={500}
                                style={{
                                    whiteSpace: 'nowrap',
                                    overflow: 'hidden',
                                    textOverflow: 'ellipsis'
                                }}
                            >
                                {billboard.advertiser}
                            </Text>
                        </Group>

                        <Text size="sm" c="dimmed">
                            {billboard.billboardText}
                        </Text>
                        <Flex align="center" gap="sm" mt="sm">
                            <FaLocationDot />
                            <Text size="sm" c="dimmed">
                                {billboard.address}
                            </Text>
                        </Flex>

                        <Button color="green" fullWidth mt="md" radius="md">
                            More info
                        </Button>
                    </Card>
                ))}
            </Flex>
        </>
    ) : (
        <AlertNote description="No data found" />
    );
};

export default Billboards;
