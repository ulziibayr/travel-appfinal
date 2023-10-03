import { NextResponse } from "next/server";
import connectDB from "../../config/db";
import Employee from "../../models/employee";


export async function POST(request) {
    const body = await request.json();

    console.log("request :", body);
    await connectDB();
    await Employee.create(body);
    return NextResponse.json({ user : body}, { status: 200 });
}


export async function GET() {
    await connectDB();
    const employee = await Employee.find();
    return NextResponse.json({ employees : employee })
}

