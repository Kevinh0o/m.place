'use client';
import { initMercadoPago, Wallet } from '@mercadopago/sdk-react'

type Props = {
    params: {
        id: string
    };
}

export default function Checkout({ params }: Props) {
    const publicKey = process.env.NEXT_PUBLIC_PAYMENT_PUBLIC_KEY || '';
    
    initMercadoPago(publicKey);

    return (
        <div className='h-screen flex justify-center items-center'>
            <div id="wallet_container" className='bg-white w-90 h-90'>
                <Wallet initialization={{ preferenceId: params.id }} />
            </div>
        </div>
    )
}