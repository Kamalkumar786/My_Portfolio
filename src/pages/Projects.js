import React from 'react';
import Calculator from '../images/Calculator.png';
import Gallery from '../images/Gallery.png';
import portfolio from '../images/portfolio.png';
import {Card} from "react-bootstrap";
import { motion } from 'framer-motion';
function Projects() {
    const ProjectList = [
    {
        id: 1,
        name: "MATHMATE",
        description: "Welcome to BrilliantCalc, your go-to solution for hassle-free arithmetic calculations! Whether you're a math whiz or just need to crunch some numbers, BrilliantCalc has got you covered. ",
        imageUrl: Calculator
    },
    {
        id: 2,
        name: "GALLERY",
        description: "Welcome to MemoryWorld, your digital sanctuary for organizing and rediscovering treasured memories captured through the lens! Designed as a versatile gallery, MemoryWorld empowers users to effortlessly sort, curate, and relive their photo collections with ease and elegance. ",
        imageUrl: Gallery
    },
    {
        id: 3,
        name: "PORTFOLIO WITH HTML,CSS, JS",
        description: " Crafted with HTML, CSS, and JavaScript, to create a personalized portfolio that reflects our unique style and professional identity.",
        imageUrl: portfolio
    }
    ];
    return (
        <motion.div className='projects' animate={{
            scale:[2,1],
            rotate:[90,0],
            }}
            transition={{
                duration:0.5,
                ease:"easeInOut",
            }}
            >
            <h2>Projects</h2>
            <diiv className="wrapper">
                {ProjectList.map((item) => {
                    return (
                        <motion.div key={item.id} whileHover={{
                            scale:1.1,
                            transition:{ duration:0.5},
                        }}>
                            <Card>
                            <Card.Img variant="top" src={item.imageUrl} style={{height: '500px', width: '350px', marginLeft:'60px'}} />
                                <h3>{item.name}</h3>
                                <p>{item.description}</p>
                            </Card>
                        </motion.div>
                    );

                })}
            </diiv>
        </motion.div>
    );
}

export default Projects;