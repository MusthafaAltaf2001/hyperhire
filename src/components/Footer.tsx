import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Code, InputOutlined, Person, Settings, Translate } from '@mui/icons-material';

import { Button } from "@/components/ui/button"
import Image from 'next/image'
import React from 'react'

const SERVICE_CARDS = [
    {
        title: '해외 개발자 원격 채용',
        icon: <Code className="bg-[#EFF1F6] text-[#7388A9] rounded-lg p-2 w-10 h-10" />,
    },
    {
        title: '외국인 원격 채용 (비개발)',
        icon: <Person className="bg-[#EFF1F6] text-[#7388A9] rounded-lg p-2 w-10 h-10" />
    },
    {
        title: '한국어 가능 외국인 채용',
        icon: <Translate className="bg-[#EFF1F6] text-[#7388A9] rounded-lg p-2 w-10 h-10" />
    },
    {
        title: '해외 개발자 활용 서비스',
        icon: <Settings className="bg-[#EFF1F6] text-[#7388A9] rounded-lg p-2 w-10 h-10" />
    },
]

const Footer = () => {
    return (
        <div className='px-4 my-8 bg-[#FBFBFB] flex flex-col gap-6'>
            <Image src='/logo-dark.png' width={200} height={50} alt='Dark Logo' />
            <span className='font-black text-sm text-[#343741]'>우리는 국가의 장벽을 넘어 최고의 인재를 매칭해드립니다.</span>
            <div className="flex flex-col gap-2 font-black text-sm text-[#5E626F]">
                <span className=''>010-0000-0000</span>
                <span className=''>aaaaa@naver.com</span>
            </div>
            <div className="grid grid-cols-2 gap-4">
                {SERVICE_CARDS.map((service, index) => (
                    <Card className="bg-white font-black items-start place-content-start max-w-56" key={index}>
                        <CardHeader className="flex">
                            {service.icon}
                            <CardTitle className="text-[#343741]  text-sm">{service.title}</CardTitle>
                        </CardHeader>
                        <CardContent className="text-[#5E626F] flex flex-row items-center justify-start">
                            <span>바로가기</span>
                            <InputOutlined className="rounded-lg p-1 w-8 h-8" />
                        </CardContent>
                    </Card>
                ))}
            </div>
            <div className="font-black space-y-4">
                <div className="flex justify-between">
                    <div>
                        <div className="text-[#343741] text-xs">상호명</div>
                        <div className="text-[#5E626F] text-sm">하이퍼하이어</div>
                        <div className="text-[#5E626F] text-sm">Hyperhire India Private Limited</div>
                    </div>
                    <div>
                        <div className="text-[#343741] text-xs">대표 CEO</div>
                        <div className="text-[#5E626F] text-sm">김주현</div>
                        <div className="text-[#5E626F] text-sm">Juhyun Kim</div>
                    </div>
                </div>
                <div>
                    <div className="text-[#343741] text-xs">사업자등록번호 CIN</div>
                    <div className="text-[#5E626F] text-sm">427-86-01187</div>
                    <div className="text-[#5E626F] text-sm">U74110DL2016PTC290812</div>
                </div>
                <div>
                    <div className="text-[#343741] text-xs">주소 ADDRESS</div>
                    <div className="text-[#5E626F] text-sm">서울특별시 강남대로 479, 지하 1층 238호</div>
                    <div className="text-[#5E626F] text-sm">D-138, Street number 11, Jagjeet Nagar, North East Delhi, New Delhi, 110053 India</div>
                </div>
                <div className="text-[#5E626F] text-sm">© 2023 Hyperhire</div>
            </div>
        </div>
    )
}

export default Footer