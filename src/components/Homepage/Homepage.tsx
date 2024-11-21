'use client'

import Featured from "./organisms/Featured";
import Headline from './organisms/Headline';
import Information from "./organisms/Information";

interface HomepageProps {
    profiles: Profile[]
}

export default function Homepage({ profiles }: HomepageProps) {

    return (
        < div className="py-12 flex flex-col gap-4 items-center md:items-start md:flex-row page-padding" >
            {/* Top Hero section */}
            <Headline />
            {/* Profile Cards Carousel */}
            <Featured profiles={profiles} />
            {/* Additional content for desktop devices */}
            <Information />
        </div >
    )
}