import { Checkbox } from "@/components/ui/checkbox"
import React from 'react'

const CHECKBOX_ITEMS = [
    '한국어 능력',
    '업무 수행 능력',
    '겸업 여부',
    '평판 조회'
]

const Information = () => {
    return (
        <div className="md:hidden">
            <div className="grid grid-cols-2 gap-2 text-white font-black text-lg">
                {CHECKBOX_ITEMS.map((text, index) => (
                    <div key={index} className="space-x-3">
                        <Checkbox checked={true} />
                        <label>{text}</label>
                    </div>
                ))}
            </div>
            <div className="font-black text-lg text-secondary-text underline underline-offset-4">
                개발자가 필요하신가요?
            </div>
        </div>
    )
}

export default Information