import { Devvit } from '@devvit/public-api';



function DrawwitContestScreen({onRate}) {

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
        <zstack height="510px" width="330px" alignment={'middle center'}>
          <vstack height={'100%'} width={'100%'} alignment={'center'}>
            <webview url={"drawwitInline.html"} width={"100%"} height={"70%"} />
            <zstack height={'30%'} width={'100%'}>
              <hstack height={"100%"} width={'100%'} alignment={'center'}>
                <image
                  url={"drawwitinlinegroup.png"}
                  height={'100%'}
                  width={'100%'}
                />
              </hstack>
              <vstack height={'100%'} width={'100%'}>
                <hstack height={"50%"} width={'100%'}>
                  <hstack height={'100%'} width={'50%'} backgroundColor={"rgba(255,0,0,0.35)"}>
                  </hstack>
                  <hstack height={'100%'} width={'50%'} backgroundColor={"rgba(0,0,255,0.37)"}>
                  </hstack>
                </hstack>
                <hstack height={"50%"} width={'100%'} backgroundColor={"rgba(0,255,0,0.33)"}
                        onPress={onRate}
                >

                </hstack>
              </vstack>
            </zstack>
          </vstack>
        </zstack>
      </zstack>
    </blocks>
  );
}

export default DrawwitContestScreen;
