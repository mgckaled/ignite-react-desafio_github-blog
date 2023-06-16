import { faGithub } from "@fortawesome/free-brands-svg-icons"
import { faBuilding, faChevronLeft, faUserGroup } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { useNavigate } from "react-router-dom"

import { ExternalLink } from "../../../../components/ExternalLink"

import { PostHeaderContainer } from "./styles"

export function PostHeader() {

  const navigate = useNavigate()

  function goBack() {
    navigate(-1)
  }

  return (
    <PostHeaderContainer>
      <header>
        <ExternalLink
          as='button'
          onClick={goBack}
          icon={<FontAwesomeIcon icon={faChevronLeft} />}
          text='Voltar'
          href='#'
          variant="iconLeft"
        />
        <ExternalLink
          text='Ver no Github'
          href='#'
          target='_blank'
        />
      </header>
      <h1>Javascript data types and data structures</h1>
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
    </PostHeaderContainer>
  )
}
