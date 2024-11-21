import React from 'react'
import Tooltip from './molecules/Tooltip'

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

const Headline = () => {
    return (
        <div className="space-y-8 mb-4 md:w-1/2">
            <Tooltip content={<>트렌딩, 파트너링</>} className="bg-tooltip-dark-bg text-white before:border-t-tooltip-dark-bg">
            </Tooltip>
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
                    <div key={index} className="font-black max-w-56 border-t-2 border-t-white pt-4">
                        <h1 className="text-lg text-white">{statistic.title}</h1>
                        <span className="text-white/80">{statistic.subtitle}</span>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default Headline