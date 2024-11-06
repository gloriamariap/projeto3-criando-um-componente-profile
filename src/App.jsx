import Profile from './components/Profile'

export default function App(){
  return(
    <div>
      <Profile 
        avatar={'../../public/avatar.png'}
        name={'Glória Maria'}
        bio={'Empreendedora'}
        phone={'+55 85 99213-3146'}
        email={'gloria.peixoto@aluno.ce.gov.br'}
        githubUrl={'https://github.com/gloriamariap'}
        instagramUrl={'https://instagram.com/gloria872_'}
        twitterUrl={'https://x.com.br/gloria872_'}
      />
    </div>
  )
}