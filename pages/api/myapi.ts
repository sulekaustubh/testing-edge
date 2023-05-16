import { NextRequest, NextResponse } from 'next/server';

export const config = {
    runtime: 'edge',
};

const handler = (req: NextRequest) => {
    return NextResponse.json([
        {
            id: '1',
            name: 'Heyy76ygvy',
        },
        {
            id: '2',
            name: '56132',
        },
        {
            id: '3',
            name: 'rftyvgbuyn',
        },
    ]);
};

export default handler;
