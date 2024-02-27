type SocialMediaList = {
  linkedin?: string ,
  instagram?: string, 
  github?: string,
  tiktok?: string,
  facebook?: string
}

class Contact {
  fullName: string
  email: string
  phoneNumber: string
  profilePictureUrl: string
  id: number
  socialMedia: SocialMediaList
  group: string
  isFavorite: boolean

  constructor(
    fullName: string,
    email: string,
    phoneNumber: string,
    profilePictureUrl: string,
    id: number,
    socialMedia:SocialMediaList,
    group: string,
    isFavorite: boolean
  ) {
    this.fullName = fullName
    this.email = email
    this.phoneNumber = phoneNumber
    this.id = id
    this.socialMedia = socialMedia
    this.profilePictureUrl = profilePictureUrl
    this.group = group
    this.isFavorite = isFavorite
  }
}

export default Contact
