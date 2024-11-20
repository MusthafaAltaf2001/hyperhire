'use client'

import { Card, CardContent } from "@/components/ui/card"
import { ChevronLeft, ChevronRight, Globe, Headphones, MessageSquare, Package } from "lucide-react"

import { Button } from "@/components/ui/button"
import Image from "next/image"
import Tooltip from "./Tooltip"
import { useState } from "react"

interface HomepageProps {
    profiles: Profile[]
}

export default function Homepage({ profiles }: HomepageProps) {
    const [selectedIndex, setSelectedIndex] = useState(1)
    const [selectedProfile, setSelectedProfile] = useState(profiles[selectedIndex])
    console.log(profiles)

    return (
        <div className="min-h-screen ">
            {/* Hero Section */}
            <main className="container mx-auto px-1 py-12 grid md:grid-cols-2 gap-8 items-center">
                <div className="space-y-6">
                    <Tooltip content="트렌딩, 파트너링">
                        <h1 className="text-4xl md:text-5xl font-bold text-white leading-tight">
                            최고의 실력을 가진
                            <br />
                            외국인 인재를 찾고 계신가요?
                        </h1>
                    </Tooltip>
                    <p className="text-white/80 text-lg">
                        법률 및 인사관리 부담없이 1주일 이내에 원격으로 채용해보세요.
                    </p>
                    {/* <Button variant="secondary" size="lg" className="rounded-full">
                        개발자가 필요하신가요?
                    </Button> */}

                    {/* <div className="flex gap-8 text-white/90 text-sm pt-8">
                        <div>
                            <div className="font-bold">평균 월120만원</div>
                            <div>귀귀를 하면 국가 교육 으로 제산됩니다.</div>
                        </div>
                        <div>
                            <div className="font-bold">최대 3명 인력교체</div>
                            <div>이는 직접적자마자.</div>
                        </div>
                        <div>
                            <div className="font-bold">평균 3일, 최대 10일</div>
                            <div>공인된 서비의 취업보험 우에도 혜택 제공이 가능 합니다.</div>
                        </div>
                    </div> */}
                </div>

                {/* Profile Cards Carousel */}
                <div className="flex items-center justify-between overflow-hidden pb-4 max-w-[400px]">
                    <button onClick={() => setSelectedIndex(selectedIndex - 1)}>
                        <ChevronLeft className="h-8 w-8 text-white left-0" />
                    </button>
                    <div className="flex flex-row relative">
                        <Card className="homepage__card scale-90 z-10 opacity-90 absolute left-12">
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
                                        <div className="text-lg">{selectedProfile.name}</div>
                                        <div className="text-sm text-[#4A77FF]">{selectedProfile.field} · {selectedProfile.years_of_experience}</div>
                                    </div>
                                    <div className="text-sm flex flex-col text-[#5E626F] font-black gap-2 items-center">
                                        <span className="homepage__card-skills">{selectedProfile.skills[0]}</span>
                                        <span className="homepage__card-skills">{selectedProfile.skills[1]}</span>
                                        <div className="flex flex-row gap-2 text-center">
                                            <span className="homepage__card-skills">{selectedProfile.skills[2]}</span>
                                            <span className="homepage__card-skills">{selectedProfile.skills[3]}</span>
                                        </div>
                                    </div>
                                </div>
                            </CardContent>
                        </Card>
                        <Card className="homepage__card z-20">
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
                                        <div className="text-lg">{selectedProfile.name}</div>
                                        <div className="text-sm text-[#4A77FF]">{selectedProfile.field} · {selectedProfile.years_of_experience}</div>
                                    </div>
                                    <div className="text-sm flex flex-col text-[#5E626F] font-black gap-2 items-center">
                                        <span className="homepage__card-skills">{selectedProfile.skills[0]}</span>
                                        <span className="homepage__card-skills">{selectedProfile.skills[1]}</span>
                                        <div className="flex flex-row gap-2 text-center">
                                            <span className="homepage__card-skills">{selectedProfile.skills[2]}</span>
                                            <span className="homepage__card-skills">{selectedProfile.skills[3]}</span>
                                        </div>
                                    </div>
                                </div>
                            </CardContent>
                        </Card>
                        <Card className="homepage__card scale-90 z-10 opacity-90 absolute right-12">
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
                                        <div className="text-lg">{selectedProfile.name}</div>
                                        <div className="text-sm text-[#4A77FF]">{selectedProfile.field} · {selectedProfile.years_of_experience}</div>
                                    </div>
                                    <div className="text-sm flex flex-col text-[#5E626F] font-black gap-2 items-center">
                                        <span className="homepage__card-skills">{selectedProfile.skills[0]}</span>
                                        <span className="homepage__card-skills">{selectedProfile.skills[1]}</span>
                                        <div className="flex flex-row gap-2 text-center">
                                            <span className="homepage__card-skills">{selectedProfile.skills[2]}</span>
                                            <span className="homepage__card-skills">{selectedProfile.skills[3]}</span>
                                        </div>
                                    </div>
                                </div>
                            </CardContent>
                        </Card>
                    </div>
                    <button onClick={() => setSelectedIndex(selectedIndex + 1)}>
                        <ChevronRight className="h-8 w-8 text-white right-0" />
                    </button>
                </div>
            </main>

            {/* Feature Buttons */}
            {/* <div className="container mx-auto px-4 py-8">
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                    <Button
                        variant="secondary"
                        className="h-auto py-6 px-4 bg-white/10 hover:bg-white/20 text-white"
                    >
                        <Globe className="h-6 w-6 mr-2" />
                        해외 마케팅
                    </Button>
                    <Button
                        variant="secondary"
                        className="h-auto py-6 px-4 bg-white/10 hover:bg-white/20 text-white"
                    >
                        <MessageSquare className="h-6 w-6 mr-2" />
                        퍼블리셔
                    </Button>
                    <Button
                        variant="secondary"
                        className="h-auto py-6 px-4 bg-white/10 hover:bg-white/20 text-white"
                    >
                        <Package className="h-6 w-6 mr-2" />
                        캐드온(제도사)
                    </Button>
                    <Button
                        variant="secondary"
                        className="h-auto py-6 px-4 bg-white/10 hover:bg-white/20 text-white"
                    >
                        <Headphones className="h-6 w-6 mr-2" />
                        해외 세일즈
                    </Button>
                </div>
            </div> */}
        </div>
    )
}