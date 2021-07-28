import { NextPage } from 'next';

const Home: NextPage = () => {
  return (
    <div>
      <h2>Using Sentry in React</h2>
      <button
        type="button"
        onClick={() => {
          throw new Error('Sentry Frontend Error');
        }}
      >
        Throw error
      </button>
    </div>
  );
};
export default Home;
