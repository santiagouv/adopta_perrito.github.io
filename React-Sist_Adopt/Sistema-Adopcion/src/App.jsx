import './App.css';
import Header from './Components/Header';
import 'bootstrap/dist/css/bootstrap.min.css';
import MyCard from './Components/MyCard';
import Footer from './Components/Footer';


function App() {

  return (
    <>
      <Header title= 'Me Quieres Adoptar?'/>
    <div className='Cards'>
      <MyCard
        image='./src/assets/img/Loqui.jpg'
        Name='Loqui'
        Desc='Si eres de aventuras, energia interminable, extrema pasciencia, este sera tu compañero para toda la vida que te pondra a prueba en el dia a dia pero sin duda te cuidara y amara por siempre.'
        Text= 'Adóptalo'
        Color='primary'
        />
      <MyCard
        image='./src/assets/img/Milo.jpg'
        Name='Milo'
        Desc='un compañero ideal que te dara mucho amor, muy jugueton y con un estilo muy variable de peinado, el cual esta ideal para hogares pequeños o deptos. Dejate influenciar con el cariño que tendra este pequeñin.'
        Text= 'Adóptalo'
        Color='success'
      />
      <MyCard
        image='./src/assets/img/Bruna.jpg'
        Name='Bruna'
        Desc='Esta redondita amiga te hipnotizara con su caminar peculiar moviendo sus curvas, pero con un caracter de niña que no querra nada mas que jugar todo el dia y al llegar la noche solo querra acurrucarse entre tus brazos.'
        Text= 'Adóptalo'
        Color='warning'
      />
      <MyCard
        image='./src/assets/img/Thor.jpg'
        Name='Thor'
        Desc='Este gladiador te sorprendera con la fuerza que tiene, pero no te dejara de encantar con el caracter amoroso que te demostrara en el dia a dia, de caracter fuerte pero con gran corazón.'
        Text= 'Adóptalo'
        Color='danger'
        />
    </div>
      <Footer footer= 'Ellos esperan por tí, solo están a un click de tu alcance y así mismo puedas brindarles un nuevo hogar, donde lo puedan tratar con respeto, darle una familia y sobre todo mucho amor.'
      warning= 'Encuentra al compañero ideal para toda tu vida. ¡Buena suerte!'/>
    </>
  );
};

export default App;
