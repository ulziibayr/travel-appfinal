import { NextResponse } from "next/server";
import connectDB from "../../config/db";
import product from "../../models/product";

export async function POST(request) {
    const body = await request.json();

    console.log("request :", body);
    await connectDB();
    await product.create(body);
    return NextResponse.json({ product : body }, { status: 200 });
}

export async function GET() {
    await connectDB();
    const Product = await product.find();
    return NextResponse.json({ products : Product })
}