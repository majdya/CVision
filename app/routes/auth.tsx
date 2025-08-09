import {usePuterStore} from "~/lib/puter";
import {useEffect} from "react";
import {useLocation, useNavigate} from "react-router";

export const meta = () => ([
    {title: "ResumAIze"},
    {content: "Account Login"},
])

const Auth = () => {

    const {isLoading, auth} = usePuterStore();
    const location = useLocation();
    const next = location.search.split("next=")[1];
    const navigate = useNavigate();

    useEffect(() => {
        if (auth.isAuthenticated) navigate(next)
    }, [auth.isAuthenticated, next]);

    return (
        <main
            className="bg-[url('/images/bg-auth.svg')] bg-cover min-h-screen flex justify-center items-center">
            <div className="gradient-border shadow-lg">
                <section className="flex flex-col gap-8 bg-white rounded-2xl p-10">
                    <div className="flex flex-col gap-2 text-center items-center">
                        <h1>welcome</h1>
                        <h1>Login To Proceed</h1>
                    </div>

                    <div>{
                        isLoading ? (<button className="auth-button animate-pulse">
                            <p>Signing you in...</p>
                        </button>) : (

                            <>
                                {auth.isAuthenticated ? (
                                    <button className="auth-button" onClick={auth.signOut}>
                                        <p>Logout</p>
                                    </button>
                                ) : (<>
                                    <button className="auth-button" onClick={auth.signIn}>
                                        <p>Log in</p>
                                    </button>
                                </>)}
                            </>

                        )
                    }</div>
                </section>
            </div>

        </main>
    )
}
export default Auth
