import { GoogleLoginButton, FacebookLoginButton } from "react-social-login-buttons";

const Login = () => {

    const url = import.meta.env.VITE_URL;

    const googleAuth = () => {
        window.open(
            `${url}/auth/google`,
            "_self"
        );
    };

    const facebookAuth = () => {
        window.open(
            `${url}/auth/facebook`,
            "_self"
        );
    };

    return (
        // <div className="flex flex-col justify-center items-center w-5/6 h-[80vh] m-auto md:w-2/4 lg:w-1/5 border-2 border-black">
        //     <GoogleLoginButton onClick={googleAuth} />
        //     <FacebookLoginButton onClick={facebookAuth} />
        // </div>

        <div className="flex justify-center items-center h-[100dvh] w-full bg-gray-300">

            <div className="flex flex-col space-y-3 items-center h-full w-full pt-[30%] md:pt-[10%] lg:pt-5 rounded-xl md:h-3/5 md:w-3/5 lg:w-1/4 bg-white">

                <div className="h-32 w-32 lg:h-1/5 lg:w-1/5">
                    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTv44m_vIAb_65RiKNjaJwMfgaM-xi9DGBjxu2nimh5jYGqgdrN-NceWFL7eA4CKJ9emUA&usqp=CAU" 
                    alt="logo"
                    className="h-full w-full" />
                </div>

                <div className="flex flex-col space-y-2">
                    <div className="text-sky-500 text-center w-full text-5xl font-extrabold font-mono">
                        Nexus
                    </div>

                    <div className="text-gray-500 font-semibold">
                        Login to Nexus with your account:
                    </div>
                </div>

                <div className="flex flex-col w-5/6 pt-4">
                    <GoogleLoginButton onClick={googleAuth}>
                        <span>Continue with Facebook</span>
                    </GoogleLoginButton>

                    <FacebookLoginButton onClick={facebookAuth}>
                        <span>Continue with Facebook</span>
                    </FacebookLoginButton>
                </div>

            </div>

        </div>
    )
}

export default Login;