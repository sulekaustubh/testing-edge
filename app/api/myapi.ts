import { NextRequest, NextResponse } from 'next/server';

export const config = {
    runtime: 'edge',
};

const handler = (req: NextRequest) => {
    return NextResponse.json([
        {
            name: 'Heyadgasdyy',
        },
        {
            name: 'hfgdbsdfb',
        },
        {
            name: '2346',
        },
        {
            name: '4tu3whtrgbfv',
        },
    ]);
};

export default handler;
