import React from 'react';
import { useForm, SubmitHandler } from "react-hook-form";

function Form(){
    const { register, handleSubmit,watch, formState: { errors }, } = useForm();
    const onSubmit=(data) => console.log(data);
    console.log(watch("example"));
    return(
        <div  className="form-group">
            <form onSubmit={handleSubmit(onSubmit)} className="form">
                <div className="formLabels">
                    <label className="label">Prénom :</label>
                    <input className="input" defaultValue="mehdi" {...register("prenom")} /></div>
                <div className="formLabels">
                    <label className="label">Nom :</label>
                    <input className="input" {...register("nom", {required: true})} />
                    {errors.exampleRequired && <span style={{color:"white"}}>This field is required</span>}</div>
                <div className="formLabels">
                    <label className="label">Email :</label>
                    <input className="input" {...register("email", {
                        required: true,
                        pattern: {
                            value: /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/,
                            message: "invalid email"
                        }
                    })} />
                    {errors.exampleRequired && <span style={{color:"white"}}>This field is required</span>}
                    {errors.email && <span style={{color:"white"}}>{errors.email.message}</span>}</div>
                <div className="formLabels">
                    <label className="label">Numéro de Téléphone :</label>
                    <input className="input" {...register("phone", {
                        required: true,
                        pattern: {
                            value: /^[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{5}$/,
                            message: "invalid phone number"
                        }
                    })} />
                    {errors.exampleRequired && <span style={{color:"white"}}>This field is required</span>}
                    {errors.phone && <span style={{color:"white"}}>{errors.phone.message}</span>}</div>
                <div className="formLabels">
                    <label className="label">Lien Facebook :</label>
                    <input className="input"  {...register("fb",{
                        required: true,
                        pattern: {
                            value: /^(https?:\/\/)?(www\.)?facebook.com\/[a-zA-Z0-9(\.\?)?]/,
                        }})} /></div>
                <div className="formLabels">
                    <label className="label">Vos intérets :</label>
                    <input className="input"  {...register("interests")} /></div>
                <div className="formLabels">
                    <label className="label">Vos attentes :</label>
                    <input className="input"  {...register("expectations")} /></div>
                <div className="formLabels">
                    <label className="label"> Filiere :</label>
                    <select className="input" {...register("filiere")}>
                        <option value="GL">GL</option>
                        <option value="MPI">MPI</option>
                        <option value="CBA">CBA</option>
                        <option value="RT">RT</option>
                        <option value="IIA">IIA</option>
                        <option value="IMI">IMI</option>
                    </select></div>
                <input  type="submit"/>
            </form>
        </div>);
}
export default Form;