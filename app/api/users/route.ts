import prisma from "@/prisma/client";
import { NextRequest, NextResponse } from "next/server";

export function GET(request: NextRequest) {
    const users = prisma.user.findMany({
        orderBy: {name: "asc"} 
    })
    return NextResponse.json(users)
}