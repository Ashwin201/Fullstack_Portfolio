import Navbar from "./Navbar"
import HomePage from "./HomePage"
import Footer from "./Footer"

function LandingPage() {

    return (

        <div className={`flex flex-col sm:px-4 w-full `}>
            <Navbar />
            <main className=" h-fit flex flex-1 flex-col gap-4  lg:gap-6 lg:p-6 overflow-auto">
                <HomePage />
                <Footer />
            </main>
        </div>
    )
}
export default LandingPage