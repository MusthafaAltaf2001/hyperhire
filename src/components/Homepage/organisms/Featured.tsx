import { CIcon } from '@coreui/icons-react';
import Carousel from "./molecules/Carousel";
import React from 'react'
import Tooltip from "./molecules/Tooltip"
import { cilDollar } from "@coreui/icons";

interface FeaturedProps {
    profiles: Profile[]
}

const Featured = ({ profiles }: FeaturedProps) => {
    return (
        <div className="flex flex-col items-center md:w-1/2 gap-4">
            <Tooltip content={
                <div className="flex flex-row justify-center whitespace-nowrap gap-2 text-sm">
                    <CIcon icon={cilDollar} size="sm" className="bg-[#BBF3D2] rounded-full px" />
                    월 100만원
                </div>
            } className="bg-tooltip-light-bg text-[#00C696] before:border-t-tooltip-light-bg before:left-14 w-32 h-10">
            </Tooltip>

            <Carousel profiles={profiles} />
        </div>
    )
}

export default Featured