import React from "react";
import { useForm } from "react-hook-form";
import { db } from "./firebase";
import { doc, setDoc } from "firebase/firestore";
import { Link, useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import {
  Button,
  FormControl,
  FormLabel,
  HStack,
  Input,
  Select,
  VStack,
} from "@chakra-ui/react";

function Form() {
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,

    formState: { errors },
  } = useForm();
  const onSubmit = async (data) => {
    navigate("/Submitted");
    data.time = new Date().toString();

    const docRef = await setDoc(
      doc(db, "members", new Date().toString()),
      data,
    );
  };

  return (
    <motion.div className="form-group">
      <form onSubmit={handleSubmit(onSubmit)} className="form">
        <VStack spacing={7} id="formm">
          <FormControl id="kol" variant="floating">
            <Input
              placeholder=""
              as={motion.input}
              whileFocus={{ scale: 1.05 }}
              id="input"
              {...register("prenom")}
            />
            <FormLabel id="label">Prénom :</FormLabel>
          </FormControl>
          <FormControl id="kol" isInvalid={errors.nom} variant="floating">
            <Input
              placeholder=""
              as={motion.input}
              whileFocus={{ scale: 1.05 }}
              id="input"
              {...register("nom", {
                required: "Veuillez entrer votre nom",
              })}
            />
            <FormLabel id="label">Nom :</FormLabel>

            {errors.nom && <span> {errors.nom.message}</span>}
          </FormControl>
          <FormControl id="kol" variant="floating">
            <Input
              placeholder=""
              as={motion.input}
              whileFocus={{ scale: 1.05 }}
              id="input"
              {...register("email", {
                required: "Veuillez entrer votre email",
                pattern: {
                  value:
                    /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/,
                  message: "Email invalide",
                },
              })}
            />
            <FormLabel id="label">Email :</FormLabel>
            {errors.email && <span>{errors.email.message}</span>}
          </FormControl>
          <FormControl id="kol" isInvalid={errors.phone} variant="floating">
            <Input
              placeholder=""
              as={motion.input}
              whileFocus={{ scale: 1.05 }}
              id="input"
              {...register("phone", {
                required: "Veuillez saisir votre numéro de téléphone",
                pattern: {
                  value: /^[-\s]?[0-9]{3}[-\s]?[0-9]{5}$/,
                  message: "Numero de telephone invalide",
                },
              })}
            />
            <FormLabel id="label">Numéro de Téléphone :</FormLabel>

            {errors.phone && <span>{errors.phone.message}</span>}
          </FormControl>
          <FormControl id="kol" variant="floating">
            <Input
              placeholder=""
              as={motion.input}
              whileFocus={{ scale: 1.05 }}
              id="input"
              {...register("fb")}
            />

            <FormLabel id="label">Lien Facebook :</FormLabel>
          </FormControl>

          <FormControl id="kol" variant="floating">
            <Input
              placeholder=""
              as={motion.input}
              whileFocus={{ scale: 1.05 }}
              id="input"
              {...register("interests")}
            />
            <FormLabel id="label">Vos intérêts :</FormLabel>
          </FormControl>
          <FormControl id="kol" variant="floating">
            <Input
              placeholder=""
              as={motion.input}
              whileFocus={{ scale: 1.05 }}
              id="input"
              {...register("expectations")}
            />
            <FormLabel id="label">Vos attentes :</FormLabel>
          </FormControl>
          <FormControl id="kol">
            <div className="filliere">
              <HStack spacing={10} className="fil">
                <FormLabel id="label-select">Votre Niveau :</FormLabel>
                <FormLabel id="label-select"> Filière :</FormLabel>
              </HStack>

              <HStack spacing={10} className="fil">
                <Select
                  as={motion.select}
                  whileFocus={{ scale: 1.05 }}
                  defaultValue="1"
                  id="input-select"
                  {...register("niveau")}
                >
                  <option value="1">1</option>
                  <option value="2">2</option>
                  <option value="3">3</option>
                  <option value="4">4</option>
                  <option value="5">5</option>
                </Select>
                <Select
                  as={motion.select}
                  whileFocus={{ scale: 1.05 }}
                  defaultValue="MPI"
                  id="input-select2"
                  {...register("filiere")}
                >
                  <option value="GL">GL</option>
                  <option value="MPI">MPI</option>
                  <option value="CBA">CBA</option>
                  <option value="RT">RT</option>
                  <option value="IIA">IIA</option>
                  <option value="IMI">IMI</option>
                  <option value="CH">CH</option>
                  <option value="BIO">BIO</option>
                </Select>
              </HStack>
            </div>
          </FormControl>

          <Button
            as={motion.button}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.9 }}
            transition={{ type: "spring", stiffness: 400, damping: 17 }}
            id="subbut"
            type="submit"
            value="Submit"
            colorScheme="red"
            width="200px"
          >
            Submit
          </Button>
        </VStack>
      </form>
    </motion.div>
  );
}
export default Form;
