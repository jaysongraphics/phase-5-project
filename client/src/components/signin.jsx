function SignIn() {
    return (
        <div> 
        <header class="bg-gray-900 pattern">
        <div class="container px-6 mx-auto">
            {/* <nav class="flex flex-col py-2 sm:flex-row sm:justify-between sm:items-center">
                <div>
                    <a href="#" class="text-2xl font-semibold text-white hover:text-gray-300">Brand</a>
                </div>

                <div class="flex items-center mt-2 -mx-2 sm:mt-0">
                    <a href="#" class="px-3 py-1 text-sm font-semibold text-white transition-colors duration-200 transform border-2 rounded-md hover:bg-gray-700">Sign In</a>
                    <a href="#" class="px-3 py-2 mx-2 text-sm font-semibold text-white transition-colors duration-200 transform bg-black rounded-md hover:bg-gray-800">Sign Up</a>
                </div>
            </nav> */}

            <div class="flex flex-col items-center py-6 lg:h-128 lg:flex-row">
                <div class="lg:w-1/2">
                    <h2 class="text-4xl font-semibold text-gray-100">Brand</h2>

                    <h3 class="text-2xl font-semibold text-gray-100">
                        Hello <span class="text-indigo-400">Guest</span>
                    </h3>

                    <p class="mt-3 text-gray-100">Lorem ipsum dolor sit amet, consectetur adipiscing.</p>
                </div>

                <div class="flex mt-8 lg:w-1/2 lg:justify-end lg:mt-0">
                    <div class="max-w-sm bg-white rounded-lg dark:bg-gray-800">
                        <div class="p-5 text-center">
                            <h2 class="text-2xl font-semibold text-gray-700 dark:text-white fo">Sign In</h2>

                                        <form action="#">
                                            <div class="mt-4">
                                                <input class="block w-full px-4 py-2 text-gray-700 placeholder-gray-500 bg-white border border-gray-300 rounded-md dark:bg-gray-800 dark:border-gray-600 dark:placeholder-gray-400 focus:border-blue-500 dark:focus:border-blue-500 focus:outline-none focus:ring" type="email" placeholder="Email address" aria-label="Email address" />
                                                <input class="block w-full px-4 py-2 mt-4 text-gray-700 placeholder-gray-500 bg-white border border-gray-300 rounded-md dark:bg-gray-800 dark:border-gray-600 dark:placeholder-gray-400 focus:border-blue-500 dark:focus:border-blue-500 focus:outline-none focus:ring" type="password" placeholder="Password" aria-label="Password" />
                                            </div>

                                            <div class="flex items-center justify-between mt-4">
                                                <a href="#" class="text-sm text-gray-600 dark:text-gray-200 hover:underline">Forget Password?</a>

                                                <button class="px-4 py-2 font-semibold text-white transition-colors duration-200 transform bg-gray-900 rounded-md hover:bg-gray-800 dark:hover:bg-gray-700 focus:outline-none focus:bg-gray-800 dark:focus:bg-gray-700">Login</button>
                                            </div>
                                        </form>
                                 </div>
                            </div>
                     </div>
                </div>
             </div>
        </header>
    </div>
  )
}




export default SignIn;
