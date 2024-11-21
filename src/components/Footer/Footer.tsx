import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Code, InputOutlined, Person, Settings, Translate } from '@mui/icons-material';

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
        <div className='footer'>
            <div className="flex flex-col lg:flex-row">
                <div>
                    <Image src='/logo-dark.png' width={200} height={50} alt='Dark Logo' />
                    <span className='font-black text-sm text-[#343741]'>우리는 국가의 장벽을 넘어 최고의 인재를 매칭해드립니다.</span>
                    <div className="flex flex-col gap-2 font-black text-sm text-primary-text">
                        <span className=''>010-0000-0000</span>
                        <span className=''>aaaaa@naver.com</span>
                    </div>
                </div>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                    {SERVICE_CARDS.map((service, index) => (
                        <Card className="bg-white font-black items-start place-content-start max-w-56" key={index}>
                            <CardHeader className="flex">
                                {service.icon}
                                <CardTitle className="text-primary-text-heading  text-sm">{service.title}</CardTitle>
                            </CardHeader>
                            <CardContent className="text-primary-text flex flex-row items-center justify-start">
                                <span>바로가기</span>
                                <InputOutlined className="rounded-lg p-1 w-8 h-8" />
                            </CardContent>
                        </Card>
                    ))}
                </div>
            </div>
            <div className="footer__details">
                <div>
                    <h1>상호명</h1>
                    <p>하이퍼하이어</p>
                    <p>Hyperhire India Private Limited</p>
                </div>
                <div>
                    <h1>대표 CEO</h1>
                    <p>김주현</p>
                    <p>Juhyun Kim</p>
                </div>
                <div>
                    <h1>사업자등록번호 CIN</h1>
                    <p className="">427-86-01187</p>
                    <p>U74110DL2016PTC290812</p>
                </div>
                <div>
                    <h1>주소 ADDRESS</h1>
                    <p>서울특별시 강남대로 479, 지하 1층 238호</p>
                    <p>D-138, Street number 11, Jagjeet Nagar, North East Delhi, New Delhi, 110053 India</p>
                </div>
            </div>
            <div className="text-primary-text text-sm font-black">© 2023 Hyperhire</div>
        </div>
    )
}

export default Footer