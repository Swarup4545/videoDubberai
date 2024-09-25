"use client"
import '@mantine/core/styles.css';

import Sidebar from './(component)/Sidebar';

import { Burger, Box } from '@mantine/core';
import { useState } from 'react';

export default function MainLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    const [opened, setOpened] = useState<boolean>(false);
    const toggleSidebar = () => {
        setOpened((prev) => !prev);
    };
    return (
        <div style={{ display: "flex",backgroundColor: '#17171e', height:"100vh",width:"100%"}}>
            <Box>
                <Burger
                    opened={opened}
                    onClick={toggleSidebar}
                    aria-label="Toggle navigation"
                    mb="md"
                    color="white"
                    size={40}
                    ml={10}
                    style={{position:"fixed",zIndex: 100}}
                />
                <Sidebar opened={opened} />
            </Box>
            <Box ml={opened ? 22 : 0} bg="#17171e" style={{width:"207vh",}}>
                {children}
            </Box>
        </div>
    );
}

