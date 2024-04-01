async function getProfileData() {
    const url = '../../data.json'
    const response = await fetch(url)
    const profileData = await response.json()
    return profileData
}