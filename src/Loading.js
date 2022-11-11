import Typical from 'react-typical';
import {useState, useEffect} from 'react';

const Loading = function Loading() {
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true)
    setTimeout(() => {
      setLoading(false)
    },18000);

  }, [])

        return (
      <div>
        <h1 id="loading">
          { loading ?  <Typical oop={1} wrapper = 'p'
          steps={[
              "Hello",
              2000,
              "My name is Leonard.",
              3000,
              "I am an aspiring developer",
              3000,
              "Welcome to my website!",
              3000,
            ]} /> : null}
        </h1>
      </div>
    );

}

export default Loading;