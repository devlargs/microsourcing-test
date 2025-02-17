import {Alert} from '@mantine/core';
import {FC} from 'react';
import {IoIosAlert} from 'react-icons/io';

type AlertNoteProps = {
    description: string;
    color?: string;
    title?: string;
};

export const AlertNote: FC<AlertNoteProps> = ({description, title, color}) => {
    return (
        <Alert
            color={color || 'red'}
            radius="xs"
            title={title || 'Somethingg went wrong'}
            icon={<IoIosAlert />}
        >
            {description}
        </Alert>
    );
};
