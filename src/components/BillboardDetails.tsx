import {Card, Flex, Group, Image, Modal, Text} from '@mantine/core';
import {useFetch} from '@mantine/hooks';
import {FC} from 'react';
import {FaLocationDot} from 'react-icons/fa6';
import {Billboard} from './Billboards';

type BillboardDetailsProps = {
    opened: boolean;
    onClose: () => void;
    id: string;
};

export const BillboardDetails: FC<BillboardDetailsProps> = ({opened, onClose, id}) => {
    const {data} = useFetch<{
        billboard: Billboard;
        success: boolean;
    }>(`${import.meta.env.VITE_API_URL}/get-billboard?id=${id}`);

    const billboard = data?.billboard;

    return (
        <Modal opened={opened} onClose={onClose} title="Billboard Details" centered fullScreen>
            {data?.success && data.billboard ? (
                <Card shadow="sm" padding="lg" radius="md" withBorder>
                    <Card.Section>
                        <Image src={billboard?.image} alt={billboard?.advertiser} height={300} />
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
                            {billboard?.advertiser}
                        </Text>
                    </Group>
                    <Text size="sm" c="dimmed">
                        {billboard?.billboardText}
                    </Text>
                    <Flex align="center" gap="sm" mt="sm">
                        <FaLocationDot />
                        <Text size="sm" c="dimmed">
                            {billboard?.address}
                        </Text>
                    </Flex>

                    <Text size="sm" c="dimmed" mt="md">
                        X: {billboard?.x}, Y: {billboard?.y}
                    </Text>
                    <Text size="sm" c="dimmed" mt="md">
                        Photos Taken: {billboard?.photosTaken}
                    </Text>
                </Card>
            ) : (
                <p>Something went wrong</p>
            )}
        </Modal>
    );
};
