import googleIcon from "../assets/googlelogo.png"
import NaverIcon from "../assets/naverlogo.png"
import KakaoIcon from "../assets/kakaologo.png"

function Login() {
  return (
  
      <div className='flex flex-col items-center justify-center h-screen bg-[#363636] text-white'>
        <h1 className="text-3xl font-bold">로그인</h1>
        <p className="text-gray-400 mb-6">Login</p>

        {/* button */}
        <div className="flex space-x-6 mb-6">
          
          <button className="flex p-3 rounded-lg flex-col items-center">
            <img src={googleIcon} alt='google' className='w-10 h-10'/>
            <span className="mt-2">Google</span>
          </button>
          
          <button className="flex flex-col p-3 items-center rounded-lg">
          <img src={KakaoIcon} alt="kakaotalk" className="w-10 h-10" />
            <span className="mt-2">KakaoTalk</span>
          </button>

          <button className="flex flex-col p-3 items-center rounded-lg">
            <img src={NaverIcon} alt="naver" className="w-10 h-10"/>
            <span className="mt-2">Naver</span>
          </button>
        </div>

        <p className="text-gray-300 text-center">
        로그인 후, 내가 원하는 환율 정보를 
        <br/>
        검색 없이 이용하실 수 있습니다.
        </p>``
    </div>
  
  )
}

export default Login