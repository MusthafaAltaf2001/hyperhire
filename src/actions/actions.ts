export async function getProfiles() {
    try {
        const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/profile`)
        console.log(response)
        return response.json()
    } catch (error) {
        console.error(error)
        throw error
    }
}