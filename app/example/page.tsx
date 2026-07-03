'use client'

import trateImg from "@/app/assets/trade.png";
import { FaReact, FaCss3Alt } from "react-icons/fa";
import { SiVercel } from "react-icons/si";
import { SiKotlin, SiTailwindcss, SiNextdotjs } from "react-icons/si";
export default function Example() {
    return (
        <>
            <section className={'banner'}>
                <div className="container">
                    <div className="banner__wrap">
                        <div className="banner__content">
                            <h1 className="banner__title">Trading platform</h1>
                            <div className="banner__features">
                                <span>Web & Mobile development</span>
                                <span>API Integration</span>
                                <span>Full Development Cycle</span>
                            </div>
                            <div className="banner__icons">
                                <FaReact />
                                <SiVercel />
                                <SiKotlin />
                                <SiNextdotjs />
                                <SiTailwindcss />
                                <FaCss3Alt />
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <style jsx>{`
                .banner {
                    position: relative;
                    width: 100%;
                    height: 100vh;
                    overflow: hidden;
                }

                /* Фоновое изображение на всю область */
                .banner::before {
                    content: "";
                    position: absolute;
                    top: 0;
                    left: 0;
                    width: 100%;
                    height: 100%;
                    background-image: url(${trateImg.src});
                    background-size: cover;
                    background-position: center;
                    background-repeat: no-repeat;
                    filter: brightness(0.4) contrast(1.2);
                    z-index: 0;
                }

                .container {
                    position: relative;
                    width: 100%;
                    height: 100%;
                    z-index: 1;
                }

                .banner__wrap {
                    display: flex;
                    align-items: flex-end;
                    justify-content: center;
                    width: 100%;
                    height: 100%;
                    padding-bottom: 5rem;
                }

                .banner__content {
                    text-align: center;
                    color: #ffffff;
                    max-width: 900px;
                    width: 100%;
                    padding: 2rem;
                    border-radius: 1rem;
                    backdrop-filter: blur(1px);
                }

                .banner__title {
                    font-size: clamp(2rem, 5vw, 3.5rem);
                    font-weight: 800;
                    margin-bottom: 1.5rem;
                    letter-spacing: -0.02em;
                    background: linear-gradient(135deg, #fff, #a0a0a0);
                    background-clip: text;
                    -webkit-background-clip: text;
                    color: transparent;
                    text-shadow: 0 2px 10px rgba(0, 0, 0, 0.3);
                }

                .banner__features {
                    display: flex;
                    flex-wrap: wrap;
                    justify-content: center;
                    gap: 1.5rem;
                    margin-bottom: 2rem;
                }

                .banner__features span {
                    font-size: clamp(0.9rem, 2vw, 1.1rem);
                    font-weight: 500;
                    padding: 0.5rem 1.2rem;
                    background: rgba(255, 255, 255, 0.1);
                    border-radius: 40px;
                    backdrop-filter: blur(4px);
                    border: 1px solid rgba(255, 255, 255, 0.2);
                    transition: all 0.3s ease;
                }

                .banner__features span:hover {
                    background: rgba(255, 255, 255, 0.2);
                    transform: translateY(-2px);
                    border-color: rgba(255, 255, 255, 0.4);
                }

                .banner__icons {
                    display: flex;
                    justify-content: center;
                    gap: 1.8rem;
                    flex-wrap: wrap;
                    margin-top: 0.5rem;
                }

                .banner__icons svg {
                    font-size: 2rem;
                    color: #ffffff;
                    opacity: 0.8;
                    transition: all 0.3s ease;
                    filter: drop-shadow(0 0 5px rgba(0, 0, 0, 0.5));
                }

                .banner__icons svg:hover {
                    opacity: 1;
                    transform: translateY(-5px) scale(1.1);
                    color: #61dafb;
                }

                /* Адаптивность для мобильных устройств */
                @media (max-width: 768px) {
                    .banner__wrap {
                        padding-bottom: 2rem;
                    }

                    .banner__features {
                        gap: 0.8rem;
                    }

                    .banner__features span {
                        padding: 0.4rem 1rem;
                        font-size: 0.8rem;
                    }

                    .banner__icons svg {
                        font-size: 1.5rem;
                    }

                    .banner__content {
                        padding: 1.5rem;
                    }
                }

                @media (max-width: 480px) {
                    .banner__features {
                        flex-direction: column;
                        align-items: center;
                        gap: 0.6rem;
                    }

                    .banner__icons {
                        gap: 1rem;
                    }

                    .banner__icons svg {
                        font-size: 1.3rem;
                    }
                }
            `}</style>
        </>
    )
}