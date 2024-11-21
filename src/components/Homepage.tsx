'use client'

import { Card, CardContent } from "@/components/ui/card"
import { ChevronLeft, ChevronRight, Globe, Headphones, MessageSquare, Package } from "lucide-react"

import { CIcon } from '@coreui/icons-react';
import { Checkbox } from "@/components/ui/checkbox"
import Image from "next/image"
import Tooltip from "./Tooltip"
import { cilDollar } from "@coreui/icons";
import { useState } from "react"

interface HomepageProps {
    profiles: Profile[]
}

const CHECKBOX_ITEMS = [
    '한국어 능력',
    '업무 수행 능력',
    '겸업 여부',
    '평판 조회'
]

const STATISTICS = [
    {
        title: '평균 월 120만원',
        subtitle: '임금을 해당 국가를 기준으로 계산합니다.'
    },
    {
        title: '최대 3회 인력교체',
        subtitle: '막상 채용해보니 맞지 않아도 걱정하지 마세요. '
    },
    {
        title: '평균 3일, 최대 10일',
        subtitle: '급하게 사람이 필요한 경우에도 빠른 채용이 가능합니다.'
    },
]

export default function Homepage({ profiles }: HomepageProps) {
    const [active, setActive] = useState(2)

    console.log(profiles)

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
        < div className="py-12 flex flex-col gap-4 items-center md:items-start md:flex-row page-padding" >
            {/* Top Hero section */}
            <div className="space-y-8 mb-4 md:w-1/2">
                <div className="relative">
                    <Tooltip content={<>트렌딩, 파트너링</>} className="bg-[#8BC4FF] text-white before:border-t-[#8BC4FF]">
                    </Tooltip>
                </div>
                <h1 className="text-4xl md:text-5xl font-bold text-white leading-tight">
                    최고의 실력을 가진
                    <br />
                    외국인 인재를 찾고 계신가요?
                </h1>
                <p className="text-white/80 text-lg">
                    법률 및 인사관리 부담없이 1주일 이내에 원격으로 채용해보세요.
                </p>
                <p className="hidden font-black text-lg underline underline-offset-4 lg:block text-white">
                    개발자가 필요하신가요?
                </p>
                <div className="hidden lg:flex flex-row gap-8">
                    {STATISTICS.map((statistic, index) => (
                        <div className="font-black max-w-56 border-t-2 border-t-white pt-4">
                            <h1 className="text-lg text-white">{statistic.title}</h1>
                            <span className="text-white/80">{statistic.subtitle}</span>
                        </div>
                    ))}
                </div>
            </div>

            {/* Profile Cards Carousel */}
            <div className="flex flex-col items-center md:w-1/2 gap-4">
                <div className="relative">
                    <Tooltip content={<div className="flex flex-row justify-center whitespace-nowrap gap-2 text-sm"><CIcon icon={cilDollar} size="sm" className="bg-[#BBF3D2] rounded-full px" />월 100만원</div>} className="bg-[#E9F7EF] text-[#00C696] before:border-t-[#E9F7EF] before:left-14 w-32 h-10">
                    </Tooltip>
                </div>

                <div className="flex flex-row items-center justify-center content-center gap-2 pb-4 max-w-[400px] w-full relative">
                    {active > 0 && (
                        <button onClick={handlePrev}>
                            <ChevronLeft className="h-8 w-8 text-white absolute left-0" />
                        </button>
                    )}
                    <div className="content-center flex justify-center h-72">
                        {profiles.map((profile, index) => (
                            <Card key={profile.id} className={`homepage__card `}
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
                                    <div className="flex flex-col items-center text-center gap-2">
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
                                            <div className="text-sm text-[#4A77FF]">{profile.field} · {profile.years_of_experience}</div>
                                        </div>
                                        <div className="text-sm flex flex-col text-[#5E626F] font-black gap-2 items-center">
                                            <span className="homepage__card-skills">{profile.skills[0]}</span>
                                            <span className="homepage__card-skills">{profile.skills[1]}</span>
                                            <div className="flex flex-row gap-2 text-center">
                                                <span className="homepage__card-skills">{profile.skills[2]}</span>
                                                <span className="homepage__card-skills">{profile.skills[3]}</span>
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
            </div>
            <div className="md:hidden">
                <div className="grid grid-cols-2 gap-2 text-white font-black text-lg">
                    {CHECKBOX_ITEMS.map((text, index) => (
                        <div className="space-x-3">
                            <Checkbox checked={true} />
                            <label>{text}</label>
                        </div>
                    ))}
                </div>
                <div className="font-black text-lg text-[#FBFF23] underline underline-offset-4">
                    개발자가 필요하신가요?
                </div>
            </div>
        </div >
    )
}