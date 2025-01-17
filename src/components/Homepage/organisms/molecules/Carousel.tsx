'use client'

import { Card, CardContent } from '../../../ui/card'
import { ChevronLeft, ChevronRight } from 'lucide-react'
import React, { useState } from 'react'

import Image from 'next/image'

interface CarouselProps {
    profiles: Profile[]
}

const Carousel = ({ profiles }: CarouselProps) => {
    const [active, setActive] = useState(1)

    const handleNext = () => {
        if (active < profiles.length - 1) {
            setActive(active + 1)
        }
    }

    const handlePrev = () => {
        if (active > 0) {
            setActive(active - 1)
        }
    }

    return (
        <div className="carousel">
            {active > 0 && (
                <button onClick={handlePrev}>
                    <ChevronLeft className="h-8 w-8 text-white absolute left-0" />
                </button>
            )}
            <div className="carousel__container">
                {profiles.map((profile, index) => (
                    <Card key={profile.id} className={`carousel__container-card `}
                        style={{
                            transformStyle: 'preserve-3d',
                            transform: `translateX(${(active - index) * -15}%) ${Math.abs(active - index) === 1 ? 'scaleY(0.9)' : ''}`,
                            display: `${Math.abs(active - index) > 1 ? 'none' : ''}`,
                            opacity: `${Math.abs(active - index) === 1 ? 0.9 : ''}`,
                            zIndex: `${Math.abs(active - index) === 0 ? 100 : 0}`,
                            transition: 'all 0.5s ease-out'
                        }}
                    >
                        <CardContent className="p-4">
                            <div className="carousel__container-card-content">
                                <div className="relative w-20 h-20">
                                    <Image
                                        src="/profile.png"
                                        alt="Profile"
                                        fill
                                        className="rounded-full object-cover"
                                    />
                                    <Image
                                        src="/flag.png"
                                        alt="Profile"
                                        width={30}
                                        height={30}
                                        className="absolute bottom-0 right-0 rounded-sm"
                                    />
                                </div>
                                <div className="font-black">
                                    <div className="text-lg">{profile.name}</div>
                                    <div className="text-sm text-accent-text">{profile.field} · {profile.years_of_experience}</div>
                                </div>
                                <div className="carousel__container-card-content-skills">
                                    <span className="carousel__container-card-content-skill-item">{profile.skills[0]}</span>
                                    <span className="carousel__container-card-content-skill-item">{profile.skills[1]}</span>
                                    <div className="flex flex-row gap-2 text-center">
                                        <span className="carousel__container-card-content-skill-item">{profile.skills[2]}</span>
                                        <span className="carousel__container-card-content-skill-item">{profile.skills[3]}</span>
                                    </div>
                                </div>
                            </div>
                        </CardContent>
                    </Card>
                ))}
            </div>
            {active < profiles.length - 1 && (
                <button onClick={handleNext}>
                    <ChevronRight className="h-8 w-8 text-white absolute right-0" />
                </button>
            )}
        </div>
    )
}

export default Carousel