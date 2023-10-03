import connectDB from "@/app/server/config/db";
import Employee from "@/app/server/models/employee";
import { NextResponse } from "next/server";

export async function PUT(request, { params }) {
    const { id } = params;
    const body = await request.json();
    await connectDB();
    await Employee.findByIdAndUpdate(id, body);
    return NextResponse.json({ message : "updated" }, {status : 200});
}

export async function GET(request, { params }) {
    const { id } = params;
    await connectDB();
    const employee = await Employee.findOne({_id : id});
    return NextResponse.json({ employee }, {status : 200});
}

export async function DELETE(request, { params }) {
    const { id } = params;
    await connectDB();
    const employee = await Employee.findOneAndDelete(id);
    return NextResponse.json({ employee }, {status : 200});
}

