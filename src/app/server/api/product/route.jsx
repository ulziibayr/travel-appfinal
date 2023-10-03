import { NextResponse } from "next/server";
import connectDB from "../../config/db";
import Category from "../../models/category";

export async function POST(request) {
    const body = await request.json();

    console.log("request :", body);
    await connectDB();
    await Product.create(body);
    return NextResponse.json({ product : body }, { status: 200 });
}

export async function GET() {
    await connectDB();
    const product = await product.find();
    return NextResponse.json({ product : product })
}