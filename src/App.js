import './App.css';
import SignUp from './Registration/SignUp';
import SignIn from './Authentication/SignIn';
import UserSignInAnonymously from './AnonymousUser/AnonymousSignUp';

function App() {
  return (
    <div className="App">
      <>
        <div className="App" >

        </div>

        <div>
          <SignIn />
        </div>

        <div>
          <SignUp />
        </div>

        <div>
          <UserSignInAnonymously/>
        </div>
      </>
    </div>
  );
}

export default App;
