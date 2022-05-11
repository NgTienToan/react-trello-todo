import Todo from './features/Todo/Todo';
import Layout from './containers/Layout/Layout';

function App() {
  return (
    <div>
      <Layout>
        <Todo />
      </Layout>
    </div>
  );
}

export default App;