// Learn more at developers.reddit.com/docs
import { Devvit, useState, useWebView, useAsync } from '@devvit/public-api';
import HomeScreen from './homeScreen';
import MessageScreen from './homeScreen';

Devvit.configure({
  redditAPI: true,
});

const createPost = async (context) => {
  const { reddit } = context;
  const subreddit = await reddit.getCurrentSubreddit();
  const post = await reddit.submitPost({
    title: 'My devvit post',
    subredditName: subreddit.name,
    // The preview appears while the post loads
    preview: <MessageScreen message={'Loading ...'} />,
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
  height: 'regular',
  render: (_context) => {
    const [counter, setCounter] = useState(0);
    const [text, setText] = useState('');
    const { mount } = useWebView({
      url: 'index.html',
      onMessage: (message, hook) => {},
    });

    const selfPostId = _context.postId;

    const {
      data: screen,
      loading,
      error,
    } = useAsync(async () => {
      const value = await _context.redis.get(`${selfPostId}-screen`);
      return value ? Number(value) : 0;
    });

    if (error) {
      return <MessageScreen message={'something went wrong'} />;
    } else if (loading) {
      return <MessageScreen message={'Loading ...'} />;
    } else {
      return (
        <HomeScreen onCreateContest={mount} />
        // <MessageScreen message={'Loading ...'} />
      );
    }
  },
});

export default Devvit;
