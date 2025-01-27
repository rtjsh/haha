
import { ICONS } from '../../assets/assets'
import { FaLinkedin } from 'react-icons/fa'
import { FaXTwitter } from 'react-icons/fa6'

const Footer = () => {
  return (
    <div className='flex flex-col px-[250px] pt-[50px] bg-white border-t-[2px] border-gray-300 w-full'>
      <div className="flex items-center justify-between">
        <div className="flex flex-col gap-2">
         <div className="flex items-center gap-1">
          <img src={ICONS.brandLogo} alt="" className='w-[32px] h-[32px]' />
          <span className='font-[700] text-[20px]'>aomni</span>
         </div>
         <div className="flex flex-col font-size-[14px] gap-1 text-gray-500">
          <span>548 Market St, PMP 39241</span>
          <span>548 Market St, PMP 39241</span>
         </div>
        </div>
        <div className="flex gap-10">
          <div className="flex flex-col gap-2 text-[16px] text-gray-500">
            <span ><a href=''>Solutions</a></span>
            <span ><a href=''>Benifits</a></span>
            <span ><a href=''>How it works</a></span>
            <span ><a href=''>Integrations</a></span>
            <span ><a href=''>Blog</a></span>
            <span ><a href=''>Search</a></span>
          </div>
          <div className="flex gap-2">
            <FaLinkedin size={21}/>
            <FaXTwitter size={21}/>
          </div>
        </div>
      </div>
      <div className="flex items-center justify-between border-t-[2px] mt-[30px] border-gray-300 text-gray-500 text-xs">
        <span>Copyright @ 2025 aomni - Accelerate your account-based sales pipeline</span>
        <div className="flex gap-3">
          <span>Terms and conditions</span>
          <span>Privacy Policy</span>
        </div>
      </div>
    </div>
  )
}

export default Footer
