// Learn more at developers.reddit.com/docs
import { Devvit, useState, useWebView } from "@devvit/public-api";

Devvit.configure({
  redditAPI: true,
});

const createPost = async (context) => {
  const { reddit } = context;
  const subreddit = await reddit.getCurrentSubreddit();
  const post = await reddit.submitPost({
    title: "My devvit post",
    subredditName: subreddit.name,
    // The preview appears while the post loads
    preview: (
      <vstack height="100%" width="100%" alignment="middle center">
        <text size="large">Loading ...</text>
      </vstack>
    ),
  });

  return post;
};

// Add a menu item to the subreddit menu for instantiating the new experience post
Devvit.addMenuItem({
  label: "Add my post",
  location: "subreddit",
  forUserType: "moderator",
  onPress: async (_event, context) => {
    const { ui } = context;
    ui.showToast(
      "Submitting your post - upon completion you'll navigate there."
    );

    const post = await createPost(context);

    ui.navigateTo(post);
  },
});

Devvit.addTrigger({
  events: ["AppInstall"],
  onEvent: async (event, context) => {
    await createPost(context);
  },
});

// Add a post type definition
Devvit.addCustomPostType({
  name: "Experience Post",
  height: "regular",
  render: (_context) => {
    const [counter, setCounter] = useState(0);

    const { mount } = useWebView({
      url: "client/index.html",
      onMessage: (message) => {
        console.log("Received from web view:", message);
      },
      onUnmount: () => {
        console.log("Web view closed");
      },
    });

    return (
      <blocks>
        <zstack height="100%" width="100%">
          <image
            height="100%"
            width="100%"
            url="drawwitbackground.png"
            imageWidth={1920}
            imageHeight={1080}
            resizeMode="cover"
          />
          <vstack height="100%" width="100%">
            <hstack height="37%" width="100%" alignment="center middle">
              <hstack width="80%" height="100%" alignment="center middle">
                <image
                  height="100%"
                  width="100%"
                  url="drawwitlogo.png"
                  imageWidth={469}
                  imageHeight={165}
                  resizeMode="fit"
                />
              </hstack>
            </hstack>
            <vstack height="38%" width="100%" alignment="center middle">
              <hstack height="50%" width="80%" alignment="center middle">
                <hstack
                  height="100%"
                  width="80%"
                  alignment="middle center"
                  onPress={mount}
                >
                  <image
                    height="160%"
                    width="100%"
                    url="createcontest.png"
                    imageWidth={381}
                    imageHeight={130}
                    resizeMode="fit"
                  />
                </hstack>
              </hstack>
              <hstack height="50%" width="80%" alignment="center middle">
                <hstack width="80%" height="100%" alignment="center middle">
                  <image
                    height="150%"
                    width="140%"
                    url="leaderboardbutton.png"
                    imageWidth={375}
                    imageHeight={156}
                    resizeMode="fit"
                  />
                </hstack>
              </hstack>
            </vstack>
            <zstack height="25%" width="100%" alignment="center middle">
              <image
                height="100%"
                width="100%"
                url="lowerbottons.png"
                imageWidth={692}
                imageHeight={167}
                resizeMode="fit"
              />
              <hstack height="100%" width="100%">
                <hstack height="100%" width="50%">
                  {/* how to play */}
                </hstack>
                <hstack height="100%" width="50%">
                  {/* view my profile */}
                </hstack>
              </hstack>
            </zstack>
          </vstack>
        </zstack>
      </blocks>
    );
  },
});

export default Devvit;
