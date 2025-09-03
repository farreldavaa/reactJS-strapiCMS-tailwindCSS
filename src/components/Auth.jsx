const Login = () => {
    return (
        <div className="w-full min-h-screen flex items-center justify-center bg-gradient-to-r from-black via-white-500 to-gray-200 p-8">
            <div className="grid md:grid-cols-2 gap-10 max-w-5xl w-full bg-white/70 backdrop-blur-md rounded-2xl p-10 shadow-lg">
                <div className="flex flex-col justify-center space-y-6">
                    <h1 className="text-4xl text-gray-900">
                        collect and connect. <p className="font-bold mt-[-7px]"> only at the Hub. </p>
                    </h1>
                    <div>
                        <img src="../images/card2.png" alt="card" />
                    </div>
                    <div className="flex flex-col">
                        <h1 className="font-helvetica font-semibold text-lg flex items-center">
                            be part of us join the HubID.
                        </h1>
                        <p className="text-gray-600 text-sm text-left">
                            get your exclusive ID card being a collective diecast by purchasing our merchandise and be part of the Hub.
                        </p>
                    </div>
                    <p className="font-helvetica text-sm text-gray-500">© 64 Social Hub</p>
                </div>
                <div className="bg-white rounded-xl shadow-md p-12 space-y-5 inline-block">
                    <h2 className="font-helvetica font-bold text-2xl text-gray-800">
                        create an account.
                    </h2>
                    <p className="text-sm text-gray-500">
                        already have an account?{" "}
                    </p>
                    <form className="space-y-3">
                        <input
                            type="email"
                            placeholder="64socialhub@gmail.com"
                            className="w-full p-3 border rounded-md focus:outline-none focus:ring-1 focus:ring-gray-300"
                        />
                        <input
                            type="text"
                            placeholder="username"
                            className="w-full p-3 border rounded-md focus:outline-none focus:ring-1 focus:ring-gray-300"
                        />
                        <input
                            type="password"
                            placeholder="password"
                            className="w-full p-3 border rounded-md focus:outline-none focus:ring-1 focus:ring-gray-300"
                        />
                        <input
                            type="password"
                            placeholder="re-type password"
                            className="w-full p-3 border rounded-md focus:outline-none focus:ring-1 focus:ring-gray-300"
                        />
                        <button
                            type="submit"
                            className="w-full bg-gray-500 text-white p-3 rounded-md hover:bg-white-600 transition
                                    border-transparent hover:border-gray-300 hover:text-gray-700 hover:chroma-text"
                        >
                            sign up
                        </button>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default Login;