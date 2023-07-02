import React from 'react';
import { useForm, SubmitHandler } from "react-hook-form";
import {db} from "./firebase";
import {doc, setDoc} from "firebase/firestore";
import {Link, Route, Routes, useNavigate} from "react-router-dom";
import {motion} from "framer-motion";

function Form(){
    const navigate = useNavigate();
    const { register, handleSubmit,watch, formState: { errors }, } = useForm();
    const onSubmit=async (data) => {
        console.log(data);
        navigate("/Submitted");
        data.time=new Date().toString();

        const docRef = await setDoc(doc(db, "members", new Date().toString()), data);
    }

    const clickHandler = (button)=> {

        button.target.classList.toggle("move")
    }

    return(
        <motion.div drag={true}

            initial={{opacity:0 }}
            animate={{opacity:1, transition:{duration:0.5, type: 'spring'} }}
            exit={{opacity:0,transition:{duration:0.01}}}
            className="form-group">
            <form onSubmit={handleSubmit(onSubmit)} className="form" id="f">
                <div className="formLabels">
                    <label className="firstLabel">Prénom :</label>
                    <motion.input whileHover={{scale:1.2}} placeholder="Prénom" className="firstInput"  {...register("prenom")} /></div>
                <div className="formLabels">
                    <label  className="label">Nom :</label>
                    <motion.input whileHover={{scale:1.2}} placeholder="Nom" className="input" {...register("nom", {required: true})} />
                    {errors.exampleRequired && <span style={{color:"white"}}>This field is required</span>}</div>
                <div className="formLabels">
                    <label className="label">Email :</label>
                    <motion.input whileHover={{scale:1.2}}  placeholder="Email" className="input" {...register("email", {
                        required: true,
                        pattern: {
                            value: /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/,
                            message: "invalid email"
                        }
                    })} />
                    {errors.exampleRequired && <span style={{color:"white"}}>This field is required</span>}
                    {errors.email && <span style={{color:"white"}}>{errors.email.message}</span>}</div>
                <div className="formLabels">
                    <label  className="label">Numéro de Téléphone :</label>
                    <motion.input whileHover={{scale:1.2}} placeholder="Numéro Téléphone" className="input" {...register("phone", {
                        required: true,
                        pattern: {
                            value: /^[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{5}$/,
                            message: "invalid phone number"
                        }
                    })} />
                    {errors.exampleRequired && <span style={{color:"white"}}>This field is required</span>}
                    {errors.phone && <span style={{color:"white"}}>{errors.phone.message}</span>}</div>
                <div className="formLabels">
                    <label  className="label">Lien Facebook :</label>
                    <motion.input whileHover={{scale:1.2}} placeholder="Lien Facebook" className="input"  {...register("fb",{
                        required: true,
                        pattern: {
                            value: /^(https?:\/\/)?(www\.)?facebook.com\/[a-zA-Z0-9(\.\?)?]/,
                        }})} /></div>
                <div className="formLabels">
                    <label className="label">Vos intérêts :</label>
                    <motion.input whileHover={{scale:1.2}} placeholder="intérêts" className="input"  {...register("interests")} /></div>
                <div className="formLabels">
                    <label className="label">Vos attentes :</label>
                    <motion.input whileHover={{scale:1.2}}  placeholder="attentes" className="input"  {...register("expectations")} /></div>
                <div className="formLabels">
                    <div className="filliere">

                        <div className="fillabel">
                            <label className="label">Votre Niveau :</label>
                            <label  className="label"> Filière :</label></div>
                        <div className="fil"><motion.select whileHover={{scale:1.2}} defaultValue="1" className="input" {...register("niveau")}>
                            <option value="1">1</option>
                            <option value="2">2</option>
                            <option value="3">3</option>
                            <option value="4">4</option>
                            <option value="5">5</option>
                        </motion.select>
                            <motion.select whileHover={{scale:1.2}} defaultValue="MPI" className="input" {...register("filiere")}>
                                <option value="GL">GL</option>
                                <option value="MPI">MPI</option>
                                <option value="CBA">CBA</option>
                                <option value="RT">RT</option>
                                <option value="IIA">IIA</option>
                                <option value="IMI">IMI</option>
                                <option value="CH">CH</option>
                                <option value="BIO">BIO</option>
                            </motion.select></div></div></div>
                <Link to="/Submitted">
                    <motion.input
                        whileHover={{scale: 1.1}}
                        whileTap={{scale: 0.9}}
                        transition={{type: "spring", stiffness: 400, damping: 17}}
                        className="sub" type="submit" value="Submit"/>
                </Link>

            </form>
        </motion.div>);
}
export default Form;