import { Social } from '@/components/auth/Social'


const LoginPage = () => {
  return (
    <div className='w-[100%] flex justify-center pt-[140px] min-h-[50vh]'>
      <div className='flex flex-col w-[80%] max-w-[400px] h-[min-content] gap-[1rem] border border-white p-[1rem] rounded-[5px]'>
        <h4 className='text-center'>Sign In / Register With Your Google Account</h4>
        <Social />
      </div>
    </div>
  )
}

export default LoginPage