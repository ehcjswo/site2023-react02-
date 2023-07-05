// function Main({ children, props }) {
//     return <main id="main" className={props.attr}>{children}</main>;
// }

// export default Main;

import React from 'react'

const Main = ({ children }) => {
    return <main id="main" className="container">{children}</main>;
}

export default Main
