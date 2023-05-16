import { NextRequest, NextResponse } from 'next/server';

export const config = {
    runtime: 'edge',
};

const handler = (req: NextRequest) => {
    return NextResponse.json([
        {
            name: 'Heyyy',
        },
        {
            name: 'hiii',
        },
        {
            name: 'hellooo',
        },
    ]);
};

export default handler;
