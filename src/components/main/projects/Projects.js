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
          <section></section>
          <h3>Jordan Shoes</h3>
          <button onClick={()=>{setProject1(!project1)}}>Informações</button>
          {project1 && <S.Box>
            <h4>Jordan Shoes</h4>
            <p>Jordan Shoes é um site fictício sobre um e-commerce de tênis.</p>
            <p>Desenvolvido com React JS.</p>
            <button onClick={()=>{setProject1(!project1)}}>Voltar</button>
          </S.Box>}
        </S.BoxProject>

        <S.BoxProject>
          <section></section>
          <h3>Home You</h3>
          <button onClick={()=>{setProject2(!project2)}}>Informações</button>
          {project2 && <S.Box>
            <h4>Home You</h4>
            <p>Home You é um site fictício, criado com o intuito de simular venda ou alugueis de casas e apartamentos.</p>
            <p>Desenvolvido com React JS.</p>
            <button onClick={()=>{setProject2(!project2)}}>Voltar</button>
          </S.Box>}
        </S.BoxProject>

        <S.BoxProject>
          <section></section>
          <h3>Food JP</h3>
          <button onClick={()=>{setProject3(!project3)}}>Informações</button>
          {project3 && <S.Box>
            <h4>Food JP</h4>
            <p>FoodJP é um site fictício, sobre um site de delivery de comidas orientais e tradicionais.</p>
            <p>Desenvolvido com React JS.</p>
            <button onClick={()=>{setProject3(!project3)}}>Voltar</button>
          </S.Box>}
        </S.BoxProject>

        <S.BoxProject>
          <section></section>
          <h3>Art</h3>
          <button onClick={()=>{setProject4(!project4)}}>Informações</button>
          {project4 && <S.Box>
            <h4>Art</h4>
            <p>Art é um site fictício no qual a intenção é simular e divulgar artes e artitas.</p>
            <p>Desenvolvido com React JS.</p>
            <button onClick={()=>{setProject4(!project4)}}>Voltar</button>
          </S.Box>}
        </S.BoxProject>

        <S.BoxProject>
          <section></section>
          <h3>Rachi</h3>
          <button onClick={()=>{setProject5(!project5)}}>Informações</button>
          {project5 && <S.Box>
            <h4>Rachi</h4>
            <p>Rachi é um site sobre venda de planos de internet, sobre um provedor fictício.</p>
            <p>Desenvolvido com React JS.</p>
            <button onClick={()=>{setProject5(!project5)}}>Voltar</button>
          </S.Box>}
        </S.BoxProject>

        <S.BoxProject>
          <section></section>
            <h3>N/A</h3>
            <button onClick={()=>{setProject6(!project6)}}>Informações</button>
            {project6 && <S.Box>
              <h4>N/A</h4>
              <p>###</p>
              <p>Desenvolvido com React JS.</p>
              <button onClick={()=>{setProject6(!project6)}}>Voltar</button>
            </S.Box>}
        </S.BoxProject>
      </S.ProjectsSection>
    </>
  )
}