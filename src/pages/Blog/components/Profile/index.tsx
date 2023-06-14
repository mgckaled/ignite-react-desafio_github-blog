import { faGithub } from "@fortawesome/free-brands-svg-icons"
import { faBuilding, faUserGroup } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

import { ExternalLink } from "../../../../components/ExternalLink"

import { ProfileContainer, ProfileDetails, ProfilePicture } from "./styles"


export function Profile() {
  return (
    <ProfileContainer>
      <ProfilePicture src='https://github.com/mgckaled.png' />
      <ProfileDetails>
        <header>
          <h1>Marcel Kaled</h1>
          <ExternalLink
            text='Ver no Github'
            href='#'
          />
        </header>
        <p>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ab nisi reprehenderit repellendus, doloribus
          dignissimos sequi, quam quos voluptatem sapiente non earum laboriosam ad sit excepturi cum quis doloremque?
          Accusamus, aut.
        </p>
        <ul>
          <li>
            <FontAwesomeIcon icon={faGithub} />
            mgckaled
          </li>
          <li>
            <FontAwesomeIcon icon={faBuilding} />
            Autônomo
          </li>

          <li>
            <FontAwesomeIcon icon={faUserGroup} />
            10 seguidores
          </li>
        </ul>
      </ProfileDetails>
    </ProfileContainer>
  )
}
