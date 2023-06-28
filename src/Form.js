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