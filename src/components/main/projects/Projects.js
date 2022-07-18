import React, {useState} from 'react'
import * as S from './Styles'

import ObjetivosSusImg from '../../../img/project-objetivos-sustentaveis.png'

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
          <section>
            <img src={ObjetivosSusImg} alt="Image do site Objetivos Sustentáveis"/>
          </section>
          <h3>Objetivos sustentáveis</h3>
          <button onClick={()=>{setProject1(!project1)}}>Informações</button>
          {project1 && <S.Box>
            <h4>Objetivos sustentáveis</h4>
            <p>Projeto criado com o intuito de listar os Objetivos Sustentáveis para melhorar a qualidade de vida e convivência em Santana do Deserto - Vai na Web.</p>
            <p>Desenvolvido com React JS.</p>
            <div>
              <button onClick={()=>{setProject1(!project1)}}>Voltar</button>
              <button><a href="https://objetivos-sustentaveis.netlify.app" target="Blank">Acessar</a></button>
            </div>
          </S.Box>}
        </S.BoxProject>

        <S.BoxProject>
          <section></section>
          <h3>Em breve!</h3>
          <button onClick={()=>{setProject2(!project2)}}>Informações</button>
          {project2 && <S.Box>
            <h4>Em breve!</h4>
            <p>N/A</p>
            <p>Desenvolvido com React JS.</p>
            <div>
              <button onClick={()=>{setProject2(!project2)}}>Voltar</button>
              <button>Acessar</button>
            </div>
          </S.Box>}
        </S.BoxProject>

        <S.BoxProject>
          <section></section>
          <h3>Em breve!</h3>
          <button onClick={()=>{setProject3(!project3)}}>Informações</button>
          {project3 && <S.Box>
            <h4>Em breve!</h4>
            <p>N/A</p>
            <p>Desenvolvido com React JS.</p>
            <div>
              <button onClick={()=>{setProject3(!project3)}}>Voltar</button>
              <button>Acessar</button>
            </div>
          </S.Box>}
        </S.BoxProject>

        <S.BoxProject>
          <section></section>
          <h3>Em breve!</h3>
          <button onClick={()=>{setProject4(!project4)}}>Informações</button>
          {project4 && <S.Box>
            <h4>Em breve!</h4>
            <p>N/A</p>
            <p>Desenvolvido com React JS.</p>
            <div>
              <button onClick={()=>{setProject4(!project4)}}>Voltar</button>
              <button>Acessar</button>
            </div>
          </S.Box>}
        </S.BoxProject>

        <S.BoxProject>
          <section></section>
          <h3>Em breve!</h3>
          <button onClick={()=>{setProject5(!project5)}}>Informações</button>
          {project5 && <S.Box>
            <h4>Em breve!</h4>
            <p>N/A</p>
            <p>Desenvolvido com React JS.</p>
            <div>
              <button onClick={()=>{setProject5(!project5)}}>Voltar</button>
              <button>Acessar</button>
            </div>
          </S.Box>}
        </S.BoxProject>

        <S.BoxProject>
          <section></section>
            <h3>Em breve!</h3>
            <button onClick={()=>{setProject6(!project6)}}>Informações</button>
            {project6 && <S.Box>
              <h4>Em breve!</h4>
              <p>N/A</p>
              <p>Desenvolvido com React JS.</p>
              <div>
                <button onClick={()=>{setProject6(!project6)}}>Voltar</button>
                <button>Acessar</button>
              </div>
            </S.Box>}
        </S.BoxProject>
      </S.ProjectsSection>
    </>
  )
}