import React, { useRef, useEffect, useState } from 'react';
import { FaLinkedin, FaNewspaper, FaMicroscope, FaExternalLinkAlt, FaAward, FaTwitter } from 'react-icons/fa';

export default function Mentions() {
    const scrollRef = useRef(null);
    const [isDragging, setIsDragging] = useState(false);
    const [startX, setStartX] = useState(0);
    const [scrollLeft, setScrollLeft] = useState(0);
    const [isPaused, setIsPaused] = useState(false);

    // Precise scroll tracker
    const preciseScrollX = useRef(0);

    const mentions = [
        {
            title: "Presented Plutonium Sphere to Vladimir Putin",
            source: "The Hindu, News18, IndiaTimes",
            icon: <FaAward />,
            description: "Presented 'Plutonium Sphere - A Nuclear Battery' to Vladimir Putin as part of the AIM-Sirius Program. While media often highlighted the Smart Water Dispenser, this deep-tech prototype was the focal point during the program.",
            link: "https://www.thehindu.com/news/national/other-states/3-odisha-students-develop-smart-water-dispenser/article30314468.ece",
            type: "International"
        },
        {
            title: "Science Reporter Feature Article",
            source: "NISCPR (Science Reporter)",
            icon: <FaMicroscope />,
            description: "Featured in India's leading science magazine for innovation in smart hardware and contribution to the ATL Marathon top projects.",
            link: "https://sciencereporter.niscpr.res.in/home/article/57",
            type: "Publication"
        },
        {
            title: "National Startup Awards Finalist",
            source: "Startup India / NSA 2023",
            icon: <FaAward />,
            description: "Twinverse Technologies selected as a National Finalist in the 'Rising Star' category at the National Startup Awards 2023 for deep tech innovation.",
            link: "https://www.startupindia.gov.in/nsa2023results/rising-star-award.html",
            type: "National"
        },
        {
            title: "Award at Gitex Global Tech Summit, Dubai",
            source: "The Statesman, New Indian Express",
            icon: <FaNewspaper />,
            description: "SOA-sponsored startup Twinverse won the YouthX Unipreneur Award at the world's largest tech show in Dubai.",
            link: "https://www.thestatesman.com/cities/bhubaneshwar/soa-sponsored-startup-wins-award-at-dubai-tech-event-1503121953.html",
            type: "International"
        },
        {
            title: "Ministerial & CM Recognition",
            source: "Office of Naveen Patnaik / OTV",
            icon: <FaTwitter />,
            description: "Publicly recognized by the Chief Minister of Odisha for representing India on a global stage and bringing laurels to the state.",
            link: "https://x.com/Naveen_Odisha/status/1204406925057646593",
            type: "Government"
        },
        {
            title: "AI-Preneurs Coffee Table Book",
            source: "Atal Innovation Mission (AIM)",
            icon: <FaExternalLinkAlt />,
            description: "Featured in the 'AI-Preneurs of India' coffee table book by NITI Aayog for impactful work in AI and deep tech.",
            link: "https://aim.gov.in/pdf/AI-Prenuers-Coffee-Table-Book-final.pdf",
            type: "National"
        },
        {
            title: "Ingenious 50 Coffee Table Book",
            source: "Atal Innovation Mission (AIM)",
            icon: <FaAward />,
            description: "Recognized as one of the top 50 student innovators in India and featured in the 'Ingenious 50' coffee table book for the Smart Water Dispenser project.",
            link: "https://aim.gov.in/pdf/Coffee_Table_Book_Final.pdf",
            type: "National"
        }
    ];

    // Double the items for a seamless loop
    const displayItems = [...mentions, ...mentions];

    // Constant mathematical cycle width: 7 cards * (300px width + 24px margin) = 2268px
    // This is much safer than relying on browser-calculated scrollWidth
    const CYCLE_WIDTH = mentions.length * (300 + 24);

    useEffect(() => {
        const scrollContainer = scrollRef.current;
        if (!scrollContainer) return;

        preciseScrollX.current = scrollContainer.scrollLeft;

        let animationId;
        const scroll = () => {
            if (!isPaused && !isDragging && scrollContainer) {
                // Precise mathematical increment
                preciseScrollX.current += 0.8;

                // Perfect mathematical reset
                if (preciseScrollX.current >= CYCLE_WIDTH) {
                    preciseScrollX.current %= CYCLE_WIDTH;
                }

                scrollContainer.scrollLeft = preciseScrollX.current;
            } else if (scrollContainer) {
                // Sync on manual interaction
                preciseScrollX.current = scrollContainer.scrollLeft;
            }
            animationId = requestAnimationFrame(scroll);
        };

        animationId = requestAnimationFrame(scroll);
        return () => cancelAnimationFrame(animationId);
    }, [isPaused, isDragging, CYCLE_WIDTH]);

    const handleMouseDown = (e) => {
        setIsDragging(true);
        setStartX(e.pageX - scrollRef.current.offsetLeft);
        setScrollLeft(scrollRef.current.scrollLeft);
    };

    const handleMouseLeave = () => {
        setIsDragging(false);
        setIsPaused(false);
    };

    const handleMouseUp = () => {
        setIsDragging(false);
    };

    const handleMouseMove = (e) => {
        if (!isDragging) return;
        e.preventDefault();
        const x = e.pageX - scrollRef.current.offsetLeft;
        const walk = (x - startX) * 2;
        scrollRef.current.scrollLeft = scrollLeft - walk;
        preciseScrollX.current = scrollRef.current.scrollLeft;
    };

    return (
        <section
            id="mentions-section"
            style={{
                backgroundColor: "#0a0a0a",
                padding: "60px 0 80px 0",
                overflow: "hidden",
            }}
        >
            <div style={{ maxWidth: "1200px", margin: "0 auto", padding: "0 40px" }}>
                <h2 style={{
                    fontSize: "clamp(32px, 5vw, 42px)",
                    fontWeight: "700",
                    marginTop: "20px",
                    marginBottom: "10px",
                    color: "#ffffff",
                }}>
                    Mentions & Press
                </h2>
                <p style={{
                    fontSize: "16px",
                    color: "rgba(255, 255, 255, 0.5)",
                    marginBottom: "50px",
                }}>
                    Global recognition and media coverage across major publications
                </p>
            </div>

            <div
                ref={scrollRef}
                className="mentions-scroll-container"
                style={{
                    display: "flex",
                    // Removed gap to use hard-coded card margin for mathematical precision
                    padding: "0 40px",
                    overflowX: "auto",
                    paddingBottom: "20px",
                    scrollbarWidth: "none",
                    msOverflowStyle: "none",
                    cursor: isDragging ? "grabbing" : "grab",
                }}
                onMouseDown={handleMouseDown}
                onMouseLeave={handleMouseLeave}
                onMouseUp={handleMouseUp}
                onMouseMove={handleMouseMove}
                onMouseEnter={() => setIsPaused(true)}
                onWheel={(e) => {
                    if (Math.abs(e.deltaX) > Math.abs(e.deltaY)) {
                        scrollRef.current.scrollLeft += e.deltaX;
                        preciseScrollX.current = scrollRef.current.scrollLeft;
                    }
                }}
            >
                <style dangerouslySetInnerHTML={{
                    __html: `
                        .mentions-scroll-container::-webkit-scrollbar {
                            display: none;
                        }
                    `
                }} />

                {displayItems.map((item, index) => (
                    <div
                        key={index}
                        style={{
                            width: "300px",
                            marginRight: "24px", // Exact margin for mathematical loop
                            flexShrink: 0,
                            backgroundColor: "rgba(255, 255, 255, 0.02)",
                            border: "1px solid rgba(255, 255, 255, 0.08)",
                            borderRadius: "20px",
                            padding: "20px",
                            display: "flex",
                            flexDirection: "column",
                            gap: "12px",
                            transition: "background 0.3s ease",
                            backdropFilter: "blur(12px)",
                            userSelect: "none"
                        }}
                    >
                        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                            <div style={{
                                width: "48px",
                                height: "48px",
                                borderRadius: "12px",
                                backgroundColor: "rgba(255, 255, 255, 0.1)",
                                display: "flex",
                                alignItems: "center",
                                justifyContent: "center",
                                fontSize: "22px",
                                color: "#ffffff",
                            }}>
                                {item.icon}
                            </div>
                            <div style={{
                                padding: "6px 12px",
                                backgroundColor: "rgba(255, 255, 255, 0.1)",
                                borderRadius: "20px",
                                fontSize: "11px",
                                fontWeight: "700",
                                color: "rgba(255, 255, 255, 0.6)",
                                textTransform: "uppercase",
                                letterSpacing: "0.5px"
                            }}>
                                {item.type}
                            </div>
                        </div>

                        <div>
                            <h3 style={{ fontSize: "20px", fontWeight: "700", color: "#ffffff", marginBottom: "8px" }}>
                                {item.title}
                            </h3>
                            <p style={{ fontSize: "14px", color: "rgba(255, 255, 255, 0.4)", fontWeight: "500" }}>
                                via {item.source}
                            </p>
                        </div>

                        <p style={{
                            fontSize: "15px",
                            color: "rgba(255, 255, 255, 0.7)",
                            lineHeight: "1.7",
                            flexGrow: 1,
                        }}>
                            {item.description}
                        </p>

                        <a
                            href={item.link}
                            target="_blank"
                            rel="noopener noreferrer"
                            style={{
                                fontSize: "13px",
                                color: "#ffffff",
                                textDecoration: "none",
                                display: "flex",
                                alignItems: "center",
                                gap: "8px",
                                fontWeight: "600",
                                border: "1px solid rgba(255, 255, 255, 0.2)",
                                padding: "8px 16px",
                                borderRadius: "8px",
                                width: "fit-content",
                                transition: "all 0.2s ease"
                            }}
                            onMouseEnter={(e) => {
                                e.currentTarget.style.backgroundColor = "rgba(255, 255, 255, 0.1)";
                                e.currentTarget.style.borderColor = "rgba(255, 255, 255, 0.4)";
                            }}
                            onMouseLeave={(e) => {
                                e.currentTarget.style.backgroundColor = "transparent";
                                e.currentTarget.style.borderColor = "rgba(255, 255, 255, 0.2)";
                            }}
                        >
                            View Press Release <FaExternalLinkAlt style={{ fontSize: "10px" }} />
                        </a>
                    </div>
                ))}
            </div>
        </section>
    );
}
