import Homepage from "@/components/Homepage";
import Navbar from "@/components/Navbar";
import { getProfiles } from "@/actions/actions";

export default async function Page() {
  const profiles = await getProfiles()
  console.log(profiles)

  return (
    <div className="bg-gradient-to-b from-[#00B8D4] to-[#0091EA] min-h-screen h-full">
      <Navbar />
      <Homepage profiles={profiles.data} />
    </div>
  )
}
