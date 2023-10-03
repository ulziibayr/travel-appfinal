import { NextResponse } from "next/server";
import connectDB from "@/app/server/config/db";
import Category from "@/app/server/models/category";

export async function PUT(request, { params }) {
    const { id } = params;
    const body = await request.json();
    await connectDB();
    await Category.findByIdAndUpdate(id, body);
    return NextResponse.json({ message : "updated" }, {status : 200});
}

export async function GET(request, { params }) {
    const { id } = params;
    await connectDB();
    const category = await Category.findOne({_id : id});
    return NextResponse.json({ category }, {status : 200});
}

export async function DELETE(request, { params }) {
    const { id } = params;
    await connectDB();
    const category = await Category.findOneAndDelete(id);
    return NextResponse.json({ category }, {status : 200});
}