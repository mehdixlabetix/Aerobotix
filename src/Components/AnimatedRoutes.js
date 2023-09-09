import React from "react";
import { Link, Route, Routes, useLocation } from "react-router-dom";
import Form from "./Form";
import { AnimatePresence, motion } from "framer-motion";
import {
  Alert,
  AlertDescription,
  AlertIcon,
  AlertTitle,
  Center,
} from "@chakra-ui/react";
function AnimatedRoutes() {
  const location = useLocation();
  return (
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname}>
        <Route
          path="/"
          element={
            <motion.div
              initial={{ opacity: 0 }}
              animate={{
                opacity: 1,
                transition: { duration: 1, type: "spring" },
              }}
              exit={{ opacity: 0, transition: { duration: 0.01 } }}
              className="route"
            >
              <Form />
              <div className="side"></div>
            </motion.div>
          }
        />
        <Route
          path="/Submitted"
          element={
            <Center>
              <motion.div
                initial={{ width: 0, opacity: 0 }}
                animate={{
                  width: "70%",
                  opacity: 1,
                  transition: { duration: 0.7, type: "ease-in-out" },
                }}
                exit={{
                  opacity: 0.5,
                  translateX: "150%",
                  transition: { duration: 0.45, type: "ease-in-out" },
                }}
                id="sideSub"
              >
                <Alert
                  id="alert"
                  marginTop="380px"
                  status="success"
                  variant="subtle"
                  paddingBottom="70px"
                  flexDirection="column"
                  alignItems="center"
                  justifyContent="center"
                  textAlign="center"
                  borderRadius="0 0 20px 20px"
                  height="250px"
                >
                  <AlertIcon boxSize="40px" mr={0} />
                  <AlertTitle mt={4} mb={1} fontSize="lg">
                    Application submitted!
                  </AlertTitle>
                  <AlertDescription maxWidth="sm">
                    Thanks for submitting. We look forward to have you joining
                    us.
                  </AlertDescription>
                </Alert>
                <Link to="/">
                  <motion.div
                    whileHover={{ scale: 1.2 }}
                    whileTap={{ scale: 0.9 }}
                    transition={{ type: "spring", stiffness: 400, damping: 17 }}
                    className="return"
                  >
                    Go Back
                  </motion.div>{" "}
                </Link>
              </motion.div>
            </Center>
          }
        />
      </Routes>
    </AnimatePresence>
  );
}
export default AnimatedRoutes;
