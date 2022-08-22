import React, { useContext, useEffect } from 'react';
import Context from '../../context';

function DoneRecipes() {
  const { setPageName, setShowHeader } = useContext(Context);
  useEffect(() => {
    setShowHeader({
      showName: true,
      showSearch: false,
      showProfile: true,
    });
    setPageName('Done Recipes');
  }, []);

  return (
    <div>To com sede</div>
  );
}

export default DoneRecipes;