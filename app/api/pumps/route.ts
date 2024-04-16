import connectMongoDB from '@/libs/mongodb';
import Pump from '@/models/pump';
import { NextRequest, NextResponse } from 'next/server';

export async function POST(request: NextRequest) {
    const {name, meter, fuel} = await request.json();
    await connectMongoDB();
    await Pump.create({name, meter, fuel});
    return NextResponse.json({message: 'Pump Created.'}, {status: 201});
    
}