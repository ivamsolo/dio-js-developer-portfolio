async function getProfileData() {
    const url = 'https://github.com/ivamsolo/dio-js-developer-portfolio/blob/main/assets/js/data.json'
    const response = await fetch(url)
    const profileData = await response.json()
    return profileData
}