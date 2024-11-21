import { NextResponse } from 'next/server'
import profiles from '../data.json'

type ResponseData = {
    message: string,
    data: Profile[]
}

export async function GET() {
    return NextResponse
        .json({
            message: "Success",
            data: profiles
        })
}