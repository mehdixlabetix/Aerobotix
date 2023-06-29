import React from "react";
import {Link, Route, Routes,useLocation} from "react-router-dom";
import Form from "./Form";
import {AnimatePresence,motion} from "framer-motion"
function AnimatedRoutes(){
    const location= useLocation();
    return(
    <AnimatePresence>
        <Routes location={location} key={location.pathname}>
            <Route path="/" element={<><Form /><div className="side"></div></>} />
            <Route path="/Submitted" element={
                <motion.div
                    initial={{width:0,opacity:0}}
                    animate={{width:"60%",opacity:1,transition:{duration:0.4} }}
                    exit={{opacity:0.5,translateX:"150%",transition:{duration:0.5}}}
                    className="side"
                ><Link to="/" className="return">Try Again </Link></motion.div>} />
        </Routes>
    </AnimatePresence>);
}
export default AnimatedRoutes;