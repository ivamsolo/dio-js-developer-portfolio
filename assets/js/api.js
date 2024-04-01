async function getProfileData() {
    const url = 'https://raw.githubusercontent.com/ivamsolo/dio-js-developer-portfolio/main/assets/js/data.json'
    const response = await fetch(url)
    const profileData = await response.json()
    return profileData
}