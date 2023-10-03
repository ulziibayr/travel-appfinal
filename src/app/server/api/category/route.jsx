import { NextResponse } from "next/server";
import connectDB from "../../config/db";
import Category from "../../models/category";

export async function POST(request) {
    const body = await request.json();

    console.log("request :", body);
    await connectDB();
    await Category.create(body);
    return NextResponse.json({ category : body }, { status: 200 });
}

export async function GET() {
    await connectDB();
    const category = await Category.find();
    return NextResponse.json({ category : category })
}