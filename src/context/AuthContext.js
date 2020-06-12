import createDataContext from "./createDataContext";


const authReducer = (state, action) => {
  switch (action.type) {
    // case value:

    //   break;

    default:
      return state;
  }
};

const signup = dispatcher => {
  return (email, password)=> {

  };
};

const signin = dispatcher => {
  return (email, password)=> {

  };
};

const signout = dispatcher => {
  return ()=> {

  };
};

export const { Provider, Context } = createDataContext(
  authReducer,
  {signin, signout, signup},
  { isSignedIn: false }
)
