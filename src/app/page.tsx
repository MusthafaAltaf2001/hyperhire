import Footer from "@/components/Footer/Footer";
import Homepage from "@/components/Homepage/Homepage";
import Navbar from "@/components/Navbar/Navbar";
import { getProfiles } from "@/actions/actions";

export default async function Page() {
  const profiles = await getProfiles()
  console.log(profiles)

  return (
    <div className="min-h-screen h-full max-w-screen">
      <div className="bg-gradient-to-b from-primary to-secondary">
        <Navbar />
        <Homepage profiles={profiles.data} />
      </div>
      <div className="">
        <Footer />
      </div>
    </div>
  )
}
