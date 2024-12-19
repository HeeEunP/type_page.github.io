import { useEffect }    from 'react';
import { useLocation }  from 'react-router-dom';

function ScrollTo() 
{
    const { pathname } = useLocation();

    useEffect(() => { window.scrollTo({behavior: 'smooth', top: 0}); }, [pathname]);

    return null;
}

export default ScrollTo;
