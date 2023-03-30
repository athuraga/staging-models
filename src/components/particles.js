import { useCallback } from "react";
import Particless from "react-tsparticles";
// import { loadFull } from "tsparticles";

function Particles() {
    return (
        <Particless id="tsparticless"
            params={{
                particles: {
                    color: {
                        value: "#2d1950",
                    },
                    links: {
                        color: "#FFFFFF",
                        distance: 150,
                        enable: true,
                        opacity: 0.5,
                        width: 0.6,
                    },
                    collisions: {
                        enable: true,
                    },
                    move: {
                        directions: "none",
                        enable: true,
                        outModes: {
                            default: "bounce",
                        },
                        random: false,
                        speed: 3,
                        straight: false,
                    },
                    number: {
                        density: {
                            enable: true,
                            area: 800,
                        },
                        value: 80,
                    },
                    opacity: {
                        value: 0.5,
                    },
                    shape: {
                        type: "circle",
                    },
                    size: {
                        value: { min: 1, max: 3 },
                    },
                },
                interactivity: {
                    detectsOn: "canvas",
                    events: {
                        onHover: {
                            enable: true,
                            mode: "repulse"
                        },
                        onClick: {
                            enable: true,
                            mode: "bubble"
                        },
                        resize: true
                    },
                    modes: {
                        grab: {
                            distance: 400,
                            links: {
                                opacity: 1
                            }
                        },
                        bubble: {
                            distance: 400,
                            size: 40,
                            duration: 2,
                            opacity: 0.8
                        },
                        repulse: {
                            distance: 200
                        },
                        push: {
                            quantity: 4
                        },
                        remove: {
                            quantity: 2
                        }
                    }
                },
                detectRetina: true,

            }}
        />
    );
}

export default Particles;
