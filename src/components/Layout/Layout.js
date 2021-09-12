import style from './style.module.css';

const Layout = ({title, urlBg, colorBg, children}) => {

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
                    <div className={style.title}>
                        <h3>
                            {title ? title : null}
                        </h3>
                        <span className={style.separator}></span>
                    </div>
                    <div className={`${style.desc} ${style.full}`}>
                        {children ? children : null}
                    </div>
                </article>
            </div>
        </section>
    );
}

export default Layout;