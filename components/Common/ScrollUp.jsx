import { useEffect , useState } from 'react';
import { FaArrowAltCircleUp } from 'react-icons/fa';
import { useWindowScroll } from 'react-use';

const ScrollUp = () => {
    const { y: pageYOffset } = useWindowScroll();
    const [visibility, setVisibility] = useState(false);

    useEffect(() => {
        if(pageYOffset > 400){
            setVisibility(true)
        }else{
            setVisibility(false)
        }
    }, [pageYOffset]);

    const scrollUp = () => {
        window.scrollTo({top: 0, behavior: 'smooth'});
    }

    return (
        visibility ?
            <div className="scroll-up" onClick={scrollUp}>
                <FaArrowAltCircleUp/>
            </div>
            :
            <div></div>
    );
}

export default ScrollUp;
