import { Devvit } from '@devvit/public-api';



function DrawwitContestScreen() {
  return (
    <blocks>
      <zstack height={'100%'} width={'100%'} alignment={'middle center'} backgroundColor={'#000'}>
        <hstack height={'100%'} width={'100%'}>
          <image
            height="100%"
            width="100%"
            url="drawwitbackground.png"
            imageWidth={1920}
            imageHeight={1080}
            resizeMode="cover"
          />
        </hstack>
        <zstack height="510px" width="330px"  backgroundColor={"#000"}>
          <vstack height={'100%'} width={'100%'} alignment={'center'}>
            <webview url={"drawwitInline.html"} width={"100%"} height={"70%"} />
            <hstack height={'30%'} width={'100%'} backgroundColor={"#ffbdee"}></hstack>
          </vstack>
        </zstack>
      </zstack>
    </blocks>
  );
}

export default DrawwitContestScreen;
