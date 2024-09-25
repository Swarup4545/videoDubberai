// import { Box, Text, ScrollArea } from '@mantine/core';
// import { GiStickSplitting } from "react-icons/gi";
// import { BsFillRecordCircleFill } from "react-icons/bs";
// import { LuKey } from "react-icons/lu";
// import { useState } from 'react';
// import { FaRemoveFormat } from "react-icons/fa";
// import "./n.css";
// import { TbGrillFork } from "react-icons/tb";
// import { PiMicrophone } from "react-icons/pi";
// import { GiJoin } from "react-icons/gi";
// import { TfiCut } from "react-icons/tfi";
// import { FaQuestionCircle } from "react-icons/fa";


// interface SidebarProps {
//     opened: boolean;
// }

// const Sidebar: React.FC<SidebarProps> = ({ opened }) => {
//     const [activeItem, setActiveItem] = useState<string>("");

//     // Click handler to set active item
//     const handleClick = (item: string) => {
//         setActiveItem(item);
//     };

//     return (
//         <Box mt={46}
//             style={{
//                 display: opened ? 'block' : 'none',
//                 backgroundColor: '#1c1c26',
//                 height: '100vh',
//                 width: "90px",
//                 zIndex: 100,
//                 position: 'fixed',
//                 boxShadow: '2px 0 5px rgba(0,0,0,0.1)',
//             }}
//         >
            
//             <ScrollArea h={650} styles={{
//                 scrollbar: { color: 'red', width: "10px" },
//                 thumb: { backgroundColor: 'rgb(100 92 192)' },
//             }}>
//                 <Box id='sidebar'>
//                     {/* Individual Item - Remover */}
//                     <Box
//                         component="div"
//                         align="center"
//                         p={9}
//                         onClick={() => handleClick("Remover")}
//                         style={{
//                             backgroundColor: activeItem === "Remover" ? 'black' : 'transparent',
//                             color: activeItem === "Remover" ? 'white' : 'gray',
//                             cursor: 'pointer',
//                             transition: 'background-color 0.3s, color 0.3s'
//                         }}
//                     >
//                         <FaRemoveFormat size={40} />
//                         <Text size="lg">Remover</Text>
//                     </Box>

//                     {/* Individual Item - Splitter */}
//                     <Box
                        
//                         align="center"
//                         p={9} 
//                         onClick={() => handleClick("Splitter")}
//                         style={{
//                             backgroundColor: activeItem === "Splitter" ? 'black' : 'transparent',
//                             color: activeItem === "Splitter" ? 'white' : 'gray',
//                             cursor: 'pointer',
//                             transition: 'background-color 0.3s, color 0.3s'
//                         }}
//                     >
//                         <GiStickSplitting size={35} />
//                         <Text 
//                         href="/cut" size="lg">Splitter</Text>
//                     </Box>

                
//                     <Box
//                         component="Link"
//                         align="center"
//                         p={9}
//                         onClick={() => handleClick("Pitcher")}
//                         style={{
//                             backgroundColor: activeItem === "Pitcher" ? 'black' : 'transparent',
//                             color: activeItem === "Pitcher" ? 'white' : 'gray',
//                             cursor: 'pointer',
//                             transition: 'background-color 0.3s, color 0.3s'
//                         }}
//                     >
//                         <TbGrillFork size={35} />
//                         <Text size="lg">Pitcher</Text>
//                     </Box>

                    
//                     <Box
//                         component="div"
//                         align="center"
//                         p={9}
//                         onClick={() => handleClick("Key BPM Finder")}
//                         style={{
//                             backgroundColor: activeItem === "Key BPM Finder" ? 'black' : 'transparent',
//                             color: activeItem === "Key BPM Finder" ? 'white' : 'gray',
//                             cursor: 'pointer',
//                             transition: 'background-color 0.3s, color 0.3s'
//                         }}
//                     >
//                         <LuKey size={35} />
//                         <Text size="lg">Key BPM Finder</Text>
//                     </Box>

//                     <Box
//                         component="div"
//                         align="center"
//                         p={9}
//                         onClick={() => handleClick("Cutter")}
//                         style={{
//                             backgroundColor: activeItem === "Cutter" ? 'black' : 'transparent',
//                             color: activeItem === "Cutter" ? 'white' : 'gray',
//                             cursor: 'pointer',
//                             transition: 'background-color 0.3s, color 0.3s'
//                         }}
//                     >
//                         <TfiCut size={35} />
//                         <Text size="lg">Cutter</Text>
//                     </Box>

                    
//                     <Box
//                         component="div"
//                         align="center"
//                         p={9}
//                         onClick={() => handleClick("Joiner")}
//                         style={{
//                             backgroundColor: activeItem === "Joiner" ? 'black' : 'transparent',
//                             color: activeItem === "Joiner" ? 'white' : 'gray',
//                             cursor: 'pointer',
//                             transition: 'background-color 0.3s, color 0.3s'
//                         }}
//                     >
//                         <GiJoin size={35} />
//                         <Text size="lg">Joiner</Text>
//                     </Box>

               
//                     <Box
//                         component="div"
//                         align="center"
//                         p={9}
//                         onClick={() => handleClick("Recorder")}
//                         style={{
//                             backgroundColor: activeItem === "Recorder" ? 'black' : 'transparent',
//                             color: activeItem === "Recorder" ? 'white' : 'gray',
//                             cursor: 'pointer',
//                             transition: 'background-color 0.3s, color 0.3s'
//                         }}
//                     >
//                         <PiMicrophone size={35} />
//                         <Text size="lg">Recorder</Text>
//                     </Box>

                   
//                     <Box
//                         component="div"
//                         align="center"
//                         p={9}
//                         onClick={() => handleClick("Karaoke")}
//                         style={{
//                             backgroundColor: activeItem === "Karaoke" ? 'black' : 'transparent',
//                             color: activeItem === "Karaoke" ? 'white' : 'gray',
//                             cursor: 'pointer',
//                             transition: 'background-color 0.3s, color 0.3s'
//                         }}
//                     >
//                         <BsFillRecordCircleFill size={35} />
//                         <Text size="lg">Karaoke</Text>
//                     </Box>

//                 </Box>
//             </ScrollArea>
//             <Box
//                 component="div"
//                 align="center"
//                 p={9}
//                 mt={18}
//                 onClick={() => handleClick("Cutter")}
//                 style={{
//                     backgroundColor: activeItem === "Cutter" ? 'black' : 'transparent',
//                     color: activeItem === "Cutter" ? 'white' : 'gray',
//                     cursor: 'pointer',
//                     transition: 'background-color 0.3s, color 0.3s'
//                 }}
//             >
//                 <FaQuestionCircle size={35} />
//                 <Text size="lg">Support</Text>
//             </Box>
//             <Box
//                 component="div"
//                 align="center"
//                 p={9}
//                 mt={18}
//             >
//                 <img src='download.jpeg' height="25px" width="40px"></img>
//             </Box>

//         </Box>
//     );
// };

// export default Sidebar;

import { Box, Text, ScrollArea } from '@mantine/core';
import { GiStickSplitting } from "react-icons/gi";
import { BsFillRecordCircleFill } from "react-icons/bs";
import { LuKey } from "react-icons/lu";
import { useState } from 'react';
import { FaRemoveFormat, FaQuestionCircle } from "react-icons/fa";
import { TbGrillFork } from "react-icons/tb";
import { PiMicrophone } from "react-icons/pi";
import { GiJoin } from "react-icons/gi";
import { TfiCut } from "react-icons/tfi";
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
                            textAlign: 'center', // Replaced align with textAlign
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

                    {/* Other items go here with the same structure */}
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
                        <img src='download.jpeg' height="25px" width="40px" alt="Sidebar Image" />
                    </Box>
                </Box>
            </ScrollArea>
        </Box>
    );
};

export default Sidebar;
