import React, {useState} from 'react'
import * as S from './Styles'

import JordanSite from '../../../img/project-jordanshoes.png'

export default function Projects(){

  const [project1, setProject1] = useState(false)
  const [project2, setProject2] = useState(false)
  const [project3, setProject3] = useState(false)
  const [project4, setProject4] = useState(false)
  const [project5, setProject5] = useState(false)
  const [project6, setProject6] = useState(false)
  

  return(
    <>
      <S.TitleBox>Projetos</S.TitleBox>
      <S.ProjectsSection>
        <S.BoxProject>
          <img src={JordanSite}/>
          <h3>Jordan Shoes</h3>
          <button onClick={()=>{setProject1(!project1)}}>AAAAAAA</button>
          {project1 && <S.Box>
            <h3>Jordan Shoes</h3>
            <p>Jordan Shoes é um site fictício sobre um e-commerce de tênis.</p>
            <p>Desenvolvido com React JS.</p>
            <button onClick={()=>{setProject1(!project1)}}>Voltar</button>
          </S.Box>}
        </S.BoxProject>

        <S.BoxProject>
          <img src={JordanSite}/>
          <h3>Jordan Shoes</h3>
          {project2 && <S.Box>
            <h3>Jordan Shoes</h3>
            <p>Jordan Shoes é um site fictício sobre um e-commerce de tênis.</p>
            <p>Desenvolvido com React JS.</p>
            <button>Voltar</button>
          </S.Box>}
        </S.BoxProject>

        <S.BoxProject>
          <img src={JordanSite}/>
          <h3>Jordan Shoes</h3>
          {project3 && <S.Box>
            <h3>Jordan Shoes</h3>
            <p>Jordan Shoes é um site fictício sobre um e-commerce de tênis.</p>
            <p>Desenvolvido com React JS.</p>
            <button>Voltar</button>
          </S.Box>}
        </S.BoxProject>

        <S.BoxProject>
          <img src={JordanSite}/>
          <h3>Jordan Shoes</h3>
          {project4 && <S.Box>
            <h3>Jordan Shoes</h3>
            <p>Jordan Shoes é um site fictício sobre um e-commerce de tênis.</p>
            <p>Desenvolvido com React JS.</p>
            <button>Voltar</button>
          </S.Box>}
        </S.BoxProject>

        <S.BoxProject>
          <img src={JordanSite}/>
          <h3>Jordan Shoes</h3>
          {project5 && <S.Box>
            <h3>Jordan Shoes</h3>
            <p>Jordan Shoes é um site fictício sobre um e-commerce de tênis.</p>
            <p>Desenvolvido com React JS.</p>
            <button>Voltar</button>
          </S.Box>}
        </S.BoxProject>

        <S.BoxProject>
          <img src={JordanSite}/>
            <h3>Jordan Shoes</h3>
            {project6 && <S.Box>
              <h3>Jordan Shoes</h3>
              <p>Jordan Shoes é um site fictício sobre um e-commerce de tênis.</p>
              <p>Desenvolvido com React JS.</p>
              <button>Voltar</button>
            </S.Box>}
        </S.BoxProject>
      </S.ProjectsSection>
    </>
  )
}