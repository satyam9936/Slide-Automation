import React from 'react'

type Props = {}

const UpgradeCard = (props: Props) => {
  return (
    <div className='bg-[#252525]
    p-3 rounded-2xl flex flex-col gap-3'>
        <span className='text-sm'>Upgrade to {''}
            <span className=' bg-gradient-to-r
            from-[#2517a0]
            to-[#4b0cab]
            font-bold
            bg-clip-text
            text-transparent
            '>Smart AI
            </span>
        </span>
<p className='text-[#989CA0] font-light text-sm'>
    Unlock all  features <br/> including AI and more 
</p>
<PaymentButton/>
    </div>
  )
}
export default UpgradeCard