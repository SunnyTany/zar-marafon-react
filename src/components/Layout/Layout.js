import style from './style.module.css';

const Layout = ({title, descr, urlBg, colorBg}) => {
    
    const classesList = [style.desc, style.full];

    const styleLayout = {
        backgroundImage : `${urlBg ? urlBg : 'none'}`, 
        background : `${colorBg ? colorBg : 'none'}`
    }

    return(
        <section 
            className={style.root}
            style={styleLayout}
        >
            <div className={style.wrapper}>
                <article>
                    <div className={title}>
                        <h3>
                            {title ? title : null}
                        </h3>
                        <span className={style.separator}></span>
                    </div>
                    <div className={classesList.map(item => item)}>
                        <p>
                            {descr ? descr : null}
                        </p>
                    </div>
                </article>
            </div>
        </section>
    );
}

export default Layout;