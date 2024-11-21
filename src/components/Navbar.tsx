import { Button } from "./ui/button"
import Image from "next/image"
import Link from "next/link"
import React from 'react'

const Navbar = () => {
    return (
        <nav className="flex items-center justify-between page-padding pt-4">
            <Link href="/" className="text-white font-bold text-xl">
                <Image src="/logo.svg" alt="logo" width={100} height={100} />
            </Link>
            {/* <div className="flex items-center gap-4">
                    <Button variant="ghost" className="text-white">
                        채용
                    </Button>
                    <Button variant="ghost" className="text-white">
                        해외 기업과 함께 서비스
                    </Button>
                    <Button variant="secondary" size="sm" className="rounded-full">
                        문의하기
                    </Button>
                </div> */}
        </nav>
    )
}

export default Navbar