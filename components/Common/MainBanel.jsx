const MainBanel = ({h1Text, pText, bg_url}) => {
    const styles = {
        background: `url(${bg_url}) center center /cover`,
    }
    return (
        <section className='main_banel' style={styles}>
            <div className='overlay'></div>
            <h1>{h1Text}</h1>
            <p>{pText}</p>
        </section>
    );
}

export default MainBanel;