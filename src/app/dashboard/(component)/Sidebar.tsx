import { Box, Text, ScrollArea } from '@mantine/core';
import { GiStickSplitting } from "react-icons/gi";
import { LuKey } from "react-icons/lu";
import { useState } from 'react';
import { FaRemoveFormat, FaQuestionCircle } from "react-icons/fa";
import Image from 'next/image';
import "./n.css";

interface SidebarProps {
    opened: boolean;
}

const Sidebar: React.FC<SidebarProps> = ({ opened }) => {
    const [activeItem, setActiveItem] = useState<string>("");

    const handleClick = (item: string) => {
        setActiveItem(item);
    };

    return (
        <Box mt={46}
            style={{
                display: opened ? 'block' : 'none',
                backgroundColor: '#1c1c26',
                height: '100vh',
                width: "90px",
                zIndex: 100,
                position: 'fixed',
                boxShadow: '2px 0 5px rgba(0,0,0,0.1)',
            }}
        >
            <ScrollArea h={650} styles={{
                scrollbar: { color: 'red', width: "10px" },
                thumb: { backgroundColor: 'rgb(100 92 192)' },
            }}>
                <Box id='sidebar'>
                    {/* Item - Remover */}
                    <Box
                        component="div"
                        p={9}
                        onClick={() => handleClick("Remover")}
                        style={{
                            textAlign: 'center',
                            backgroundColor: activeItem === "Remover" ? 'black' : 'transparent',
                            color: activeItem === "Remover" ? 'white' : 'gray',
                            cursor: 'pointer',
                            transition: 'background-color 0.3s, color 0.3s'
                        }}
                    >
                        <FaRemoveFormat size={40} />
                        <Text size="lg">Remover</Text>
                    </Box>

                    {/* Item - Splitter */}
                    <Box
                        component="div"
                        p={9}
                        onClick={() => handleClick("Splitter")}
                        style={{
                            textAlign: 'center',
                            backgroundColor: activeItem === "Splitter" ? 'black' : 'transparent',
                            color: activeItem === "Splitter" ? 'white' : 'gray',
                            cursor: 'pointer',
                            transition: 'background-color 0.3s, color 0.3s'
                        }}
                    >
                        <GiStickSplitting size={35} />
                        <Text size="lg">Splitter</Text>
                    </Box>

                    {/* Item - Key BPM Finder */}
                    <Box
                        component="div"
                        p={9}
                        onClick={() => handleClick("Key BPM Finder")}
                        style={{
                            textAlign: 'center',
                            backgroundColor: activeItem === "Key BPM Finder" ? 'black' : 'transparent',
                            color: activeItem === "Key BPM Finder" ? 'white' : 'gray',
                            cursor: 'pointer',
                            transition: 'background-color 0.3s, color 0.3s'
                        }}
                    >
                        <LuKey size={35} />
                        <Text size="lg">Key BPM Finder</Text>
                    </Box>

                    {/* Support section */}
                    <Box
                        component="div"
                        p={9}
                        mt={18}
                        onClick={() => handleClick("Support")}
                        style={{
                            textAlign: 'center',
                            backgroundColor: activeItem === "Support" ? 'black' : 'transparent',
                            color: activeItem === "Support" ? 'white' : 'gray',
                            cursor: 'pointer',
                            transition: 'background-color 0.3s, color 0.3s'
                        }}
                    >
                        <FaQuestionCircle size={35} />
                        <Text size="lg">Support</Text>
                    </Box>

                    {/* Image */}
                    <Box component="div" p={9} mt={18}>
                        <Image src='/download.jpeg' height={25} width={40} alt="Sidebar Image" />
                    </Box>
                </Box>
            </ScrollArea>
        </Box>
    );
};

export default Sidebar;
