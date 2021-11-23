/* Ao reutilizar esse crachá, substituir as informações abaixo pelas informações do novo usuário. */

const linksSocialMedia = {
  github: 'mariannabastos',
  youtube: '',
  facebook: '',
  instagram: '',
  twitter: ''
}

function changeSocialLinks() {
  for (let li of socialLinks.children) {
    const social = li.getAttribute('class')

    li.children[0].href = `https://${social}.com/${linksSocialMedia[social]}`
  }
}

changeSocialLinks()

function getInfos() {
  const url = `https://api.github.com/users/${linksSocialMedia.github}`

  fetch(url)
  .then(response => response.json())
  .then(data => {
    userName.textContent = data.name
    userBio.textContent = data.bio
    userLink.href = data.html_url
    userAvatar.src = data.avatar_url
    userLogin.textContent = data.login
  })
}

getInfos()