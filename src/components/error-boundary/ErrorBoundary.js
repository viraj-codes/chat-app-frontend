import React from 'react';
import FallbackUI from '../FallbackUI';


class ErrorBoundary extends React.Component {
    state = {
           hasError: false };
    
  
    static getDerivedStateFromError(error) {
      // Update state so the next render will show the fallback UI.

      console.log('getDerivedStateFromError');
      console.log('error',error);
      return { hasError: true };
    }
  
    componentDidCatch(error, info) {
      // You can also log the error to an error reporting service
    //   logErrorToMyService(error, info);
    console.log('componentDidCatch executed');
    console.log('err',error);
    console.log('info',info);

    }
  
    render() {
      if (this.state.hasError) {
        // You can render any custom fallback UI
        return <FallbackUI/>
      }else{

        return this.props.children; 
      }
    }
  }

  export default ErrorBoundary