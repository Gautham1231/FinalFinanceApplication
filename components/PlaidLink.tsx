import React, { useCallback, useEffect, useState } from 'react'
import Image from 'next/image'
import { Button } from './ui/button'
import { useRouter } from 'next/navigation';
import { PlaidLinkOnSuccess, PlaidLinkOptions, usePlaidLink } from 'react-plaid-link';    
import { createLinkToken, exchangePublicToken } from '@/lib/actions/user.actions';


const PlaidLink = ({ user, variant}: PlaidLinkProps) => {
    const router = useRouter();
    const [token, setToken] = useState('');
    
    useEffect(() => {
        const getLinkToken = async () => {
            const data = await createLinkToken(user);
            setToken(data?.linkToken);
        }

        getLinkToken();
    }, [user])

    const onSuccess = useCallback<PlaidLinkOnSuccess>(async (public_token: string) => {
       await exchangePublicToken({ publicToken: public_token, user })
        
        router.push('/'); 
      }, [user])

    const config: PlaidLinkOptions = {
        token,
        onSuccess
    }

    const { open, ready} = usePlaidLink(config);

    return (
    <div>
      {variant === 'primary' ?(
        <Button
            onClick = {() => open()}
            disabled = {!ready}
            className="plaidlink-primary"
        >
            Connect your bank
        </Button>
      ): variant === 'ghost' ? (
        <Button onClick={() => open()} variant ="ghost" className="plaidlink-ghost">
            Connect your bank
        </Button>
      ): (
        <Button onClick={() => open()} className="plaidlink-default">
          <Image 
            src = "/icons/connect-bank.svg"
            alt="connect bank"
            width={24}
            height={24}
          />
           <p className="text-[16px] font-semibold text-black-2"> Connect your bank </p> 
        </Button>
      )}
    </div>
  )
}

export default PlaidLink
