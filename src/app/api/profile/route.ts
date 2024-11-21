import { NextResponse } from 'next/server'
import profiles from '../data.json'

export async function GET() {
    return NextResponse
        .json({
            message: "Success",
            data: profiles
        })
}