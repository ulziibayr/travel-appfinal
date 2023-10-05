import { NextResponse } from "next/server";
import connectDB from "@/app/server/config/db";
import product from "@/app/server/models/product";
import product from "@/app/server/models/product";

export async function PUT(request, { params }) {
    const { id } = params;
    const body = await request.json();
    await connectDB();
    await product.findByIdAndUpdate(id, body);
    return NextResponse.json({ message : "updated" }, {status : 200});
}

export async function GET(request, { params }) {
    const { id } = params;
    await connectDB();
    const product = await product.findOne({_id : id});
    return NextResponse.json({ product }, {status : 200});
}

export async function DELETE(request, { params }) {
    const { id } = params;
    await connectDB();
    const product = await product.findOneAndDelete(id);
    return NextResponse.json({ product }, {status : 200});
}