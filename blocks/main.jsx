// Learn more at developers.reddit.com/docs
import { Devvit, useState, useWebView, useAsync, useForm } from '@devvit/public-api';
import HomeScreen from './homeScreen';
import DrawwitContestScreen from './drawwitContestScreen.jsx';
import MessageScreen from './homeScreen';

Devvit.configure({
  redditAPI: true,
});


const createPost = async (context) => {
  const { reddit } = context;
  const subreddit = await reddit.getCurrentSubreddit();
  const post = await reddit.submitPost({
    title: 'Welcome to drawwit',
    subredditName: subreddit.name,
    // The preview appears while the post loads
    preview: <blocks>
      <zstack height={"100%"} width={"100%"} alignment={"middle center"} backgroundColor={"#000"}>
        <hstack height={"100%"} width={"100%"}>
          <image
            height="100%"
            width="100%"
            url="drawwitbackground.png"
            imageWidth={1920}
            imageHeight={1080}
            resizeMode="cover"
          />
        </hstack>
        <text size={"xxlarge"}>Loading ...</text>
      </zstack>
    </blocks>
    ,
  });

  return post;
};

// Add a menu item to the subreddit menu for instantiating the new experience post
Devvit.addMenuItem({
  label: 'Add my post',
  location: 'subreddit',
  forUserType: 'moderator',
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
  events: ['AppInstall'],
  onEvent: async (event, context) => {
    await createPost(context);
  },
});

// Add a post type definition
Devvit.addCustomPostType({
  name: 'Experience Post',
  height: 'tall',
  render: (_context) => {
    const [counter, setCounter] = useState(0);
    const [text, setText] = useState('');
    const { mount } = useWebView({
      url: 'index.html',
      onMessage: (message, hook) => {},
    });
    const selfPostId = _context.postId;

///// redis fetching/////////////////////////////---------------------------------
    const {
      data: screen,
      loading,
      error,
    } = useAsync(async () => {
      const value = await _context.redis.get(`${selfPostId}-screen`);
      return value ?? null
    });

    const {
      data: entriesAmount,
      loading: entriesLoading,
      error: entriesError,
    } = useAsync(async () => {
      const value = await _context.redis.get(`${selfPostId}-entries`);
      return value ?? null
    });
/////////////////////////////////////////////////---------------------------------

    const rateForm = useForm(
      {
        title: 'Rate this drawing',
        fields: [
          {
            type: 'select',
            name: 'rating',
            label: 'How many stars?',
            options: [
              { label: '★☆☆☆☆ (1)', value: '1' },
              { label: '★★☆☆☆ (2)', value: '2' },
              { label: '★★★☆☆ (3)', value: '3' },
              { label: '★★★★☆ (4)', value: '4' },
              { label: '★★★★★ (5)', value: '5' },
            ],
          },
        ],
        acceptLabel: 'Submit',
        cancelLabel: 'Cancel',
      },
      async (values) => {
        _context.ui.showToast(`Thanks! You rated ${values.rating}★`);
        const post = await _context.reddit.getPostById(selfPostId);
        await _context.ui.navigateTo(post.url);
      }
    );

    if (error) {
      return (
        <blocks>
          <zstack height={"100%"} width={"100%"} alignment={"middle center"} backgroundColor={"#000"}>
            <hstack height={"100%"} width={"100%"}>
              <image
                height="100%"
                width="100%"
                url="drawwitbackground.png"
                imageWidth={1920}
                imageHeight={1080}
                resizeMode="cover"
              />
            </hstack>
            <text size={"xxlarge"}>Something went wrong</text>
          </zstack>
        </blocks>
      )
    } else if (loading) {
      return(
        <blocks>
          <zstack height={"100%"} width={"100%"} alignment={"middle center"} backgroundColor={"#000"}>
            <hstack height={"100%"} width={"100%"}>
              <image
                height="100%"
                width="100%"
                url="drawwitbackground.png"
                imageWidth={1920}
                imageHeight={1080}
                resizeMode="cover"
              />
            </hstack>
            <text size={"xxlarge"}>Loading ...</text>
          </zstack>
        </blocks>
      )
    } else if (screen !== "drawwit") {
      return <HomeScreen onCreateContest={mount} />;
    } else if (screen === "drawwit") {
      return (
        <DrawwitContestScreen
          onRate={async () => {
            _context.ui.showForm(rateForm);
          }}
        />
      );
    } else {
      return (
        <blocks>
          <zstack height={"100%"} width={"100%"} alignment={"middle center"} backgroundColor={"#000"}>
            <hstack height={"100%"} width={"100%"}>
              <image
                height="100%"
                width="100%"
                url="drawwitbackground.png"
                imageWidth={1920}
                imageHeight={1080}
                resizeMode="cover"
              />
            </hstack>
            <text size={"xxlarge"}>{`Internal error, contact u/Ibaniez. Screen:${screen}`}</text>
          </zstack>
        </blocks>
      );
    }
  },
});

export default Devvit;
