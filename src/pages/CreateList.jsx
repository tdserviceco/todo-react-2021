import React, { useEffect } from 'react';
import Header from '../components/Header';
import Step1 from '../components/CreateListFirstStep';
import Step2 from '../components/CreateListLastStep';
function CreateList(props) {
  useEffect(() => {
    // console.log(location.pathname)
    document.title = 'Create new List'
  }, [])
  return (
    <>
      <Header />
      {window.location.pathname === '/dashboard/create/list' &&
        <Step1 />
      }
      {window.location.pathname === '/dashboard/create/list/step2' &&
        <Step2 />
      }
    </>
  );
}

export default CreateList;
