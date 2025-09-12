import { useState , useEffect } from 'react'
import BG from '/background.png'
import { Background, DrawingContainer, Header, NameContainer, Ranking, Stars, Star, Drawing } from './components.jsx';
import ST from '/Star.png'
import LG from '/Loading.png'

function App() {

  const [contestName, setContestName] = useState('loading...');
  const [imageUrl, setImageUrl] = useState(LG);
  const [currentGrade, setCurrentGrade] = useState("--");

  useEffect(() => {
    async function fetchContestName() {
      const postIdRes = await fetch('/api/post-id');
      const postIdData = await postIdRes.json();
      const postId = postIdData.postId;

      if (postIdData.ok === false) {
        setContestName(postIdData.error);
        return;
      }

      const contestRes = await fetch(`/api/redis/get/${postId}-contestTheme`);
      const contestData = await contestRes.json();

      if (contestData.ok === false) {
        setContestName(contestData.error);
        return;
      }

      setContestName(contestData.value);
    }

    async function fetchImage() {
      const postIdRes = await fetch('/api/post-id');
      const postIdData = await postIdRes.json();
      const postId = postIdData.postId;

      if (postIdData.ok === false) {
        setContestName(postIdData.error);
        return;
      }

      const imageRes = await fetch(`/api/redis/get/${postId}-drawing`);
      const imageData = await imageRes.json();

      if (imageData.ok === false) {
        setImageUrl(imageData.error);
        return;
      }

      setImageUrl(imageData.value);
    }

    async function fetchCurrentGrade() {
      const postIdRes = await fetch('/api/post-id');
      const postIdData = await postIdRes.json();
      const postId = postIdData.postId;

      if (postIdData.ok === false) {
        setContestName(postIdData.error);
        return;
      }

      const contestEntryRes = await fetch(`/api/redis/get/${postId}-entry`);
      const contestEntryData = await contestEntryRes.json();

      if (contestEntryData.ok === false) {
        setContestName(contestEntryData.error);
        return;
      }

      const entry = contestEntryData.value

      const currentGradeRes = await fetch(`/api/redis/get/${postId}-entry${entry}-currentGrade`);
      const currentGradeData = await currentGradeRes.json();

      if (currentGradeData.ok === false) {
        setCurrentGrade(currentGradeData.error);
        return;
      }

      setCurrentGrade(currentGradeData.value);
    }
    fetchCurrentGrade()
    fetchContestName();
    fetchImage();
  }, []);

  return (
    <>
      <Background style={{ backgroundImage: 'url(' + BG + ')' }}>
        <NameContainer>{`${contestName}`}</NameContainer>
        <DrawingContainer>
          <Header>
            <Ranking># 30</Ranking>
            <Stars>
              <Star>
                <img src={ST} width={'100%'} height={'100%'} />
                <p>{currentGrade}</p>
              </Star>
            </Stars>
          </Header>
          <div
            style={{
              height: '75%',
              width: '100%',
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
            }}
          >
            <Drawing>
              <img src={imageUrl} height={'95%'} width={'95%'} />
            </Drawing>
          </div>
        </DrawingContainer>
      </Background>
    </>
  );
}

export default App
