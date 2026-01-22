import { NextResponse } from "next/server";


let lastSubmission: any = null;

export async function GET(){
    return NextResponse.json(
      {   message: "Latest submission",
    data: lastSubmission,}
    )
}

// export async function GET() {
//   return NextResponse.json({ message: "yo what is up my guy" });
// }

export async function POST(req: Request){
    try {
        const body = await req.json(); 
        lastSubmission = body; 
        console.log("RECEIVED FROM CLIENT:", body);
        return NextResponse.json({
            ok: true,
            message: "Message received",
            data: body,
        })

    } catch (error) {
        console.log("ERROR:", error);
        return NextResponse.json({
            ok: false,
            message: "Error receiving message",
            error: error,
        })
    }   
    
}