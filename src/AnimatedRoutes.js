import React from "react";
import {Link, Route, Routes,useLocation} from "react-router-dom";
import Form from "./Form";
import {AnimatePresence,motion} from "framer-motion"
function AnimatedRoutes(){
    const location= useLocation();
    return(
    <AnimatePresence>
        <Routes location={location} key={location.pathname}>
            <Route path="/" element={<div className="route"><Form /><div className="side"></div></div>} />
            <Route path="/Submitted" element={
                <motion.div
                    initial={{width:0,opacity:0}}
                    animate={{width:"60%",opacity:1,transition:{duration:0.8 ,type: 'spring'} }}
                    exit={{opacity:0.5,translateX:"150%",transition:{duration:0.55, type: 'spring'}}}
                    className="sideSub"
                ><Link to="/" >
                    <motion.div  whileHover={{scale: 1.2}}
                                 whileTap={{scale: 0.9}}
                                 transition={{type: "spring", stiffness: 400, damping: 17}}
                                 className="return">
                        Try Again</motion.div> </Link></motion.div>} />
        </Routes>
    </AnimatePresence>);
}
export default AnimatedRoutes;