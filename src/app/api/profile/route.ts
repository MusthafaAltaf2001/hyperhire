import type { NextApiRequest, NextApiResponse } from 'next'

import { NextResponse } from 'next/server'
import profiles from '../data.json'

type ResponseData = {
    message: string,
    data: Profile[]
}

export async function GET(req: NextApiRequest, res: NextApiResponse<ResponseData>) {
    console.log(profiles)
    return NextResponse
        .json({
            message: "Success",
            data: profiles
        })
}