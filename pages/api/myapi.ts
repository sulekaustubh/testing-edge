import { NextRequest, NextResponse } from 'next/server';

export const config = {
    runtime: 'edge',
};

const handler = (req: NextRequest) => {
    return NextResponse.json([
        {
            name: 'Heyy76ygvy',
        },
        {
            name: '56132',
        },
        {
            name: 'rftyvgbuyn',
        },
    ]);
};

export default handler;
