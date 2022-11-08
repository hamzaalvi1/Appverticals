import styles from "./Content.module.scss"
function Content(props) {
  const {
    h3Text,
    h2Text,
    paraText,
    h2Class,
    h3Class,
    paraClass,
    children,
    classes,
    ...rest
  } = props

    return (
    <div className={`${styles["content-details"]} ${classes ? classes : ""}`}>
       {h3Text && <h3 className={h3Class ? h3Class : ""}>{h3Text}</h3>}
       {h2Text && <h2 className={h2Class ? h2Class : ""}>{h2Text}</h2>}
       {paraText && <p className={paraClass ? paraClass : ""}>{paraText}</p>}

       {children}

    </div>
  )
}

export default Content