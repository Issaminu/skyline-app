import prisma from "../../components/prisma";

const signupAPI = async (req, res) => {
  const { method } = req;
  switch (method) {
    case "POST":
      try {
        console.log("het");
        const { name, email, password, phone } = req.body;
        const regexName = /^[a-zA-Z][a-zA-Z ]*$/;
        const regexPhone =
          /^(\+\d{1,2}\s?)?1?\-?\.?\s?\(?\d{3}\)?[\s.-]?\d{3}[\s.-]?\d{4}$/;
        const regexEmail = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;
        if (regexName.test(name) == false) {
          throw { meta: { target: "name_not_alphabet" } };
        }
        if (name.length < 3 || name.length > 30) {
          throw { meta: { target: "name_length" } };
        }
        if (regexEmail.test(email) == false) {
          throw { meta: { target: "email_not_valid" } };
        }
        if (password.length < 8) {
          throw { meta: { target: "password_length" } };
        }
        if (regexPhone.test(phone) == false) {
          throw { meta: { target: "phone_not_valid" } };
        }
        const bcrypt = require("bcrypt");
        const hashedPassword = await bcrypt.hash(password, 10);
        let currentdate = new Date();
        currentdate = currentdate.toISOString();
        const user = await prisma.users.create({
          data: {
            name: name,
            email: email,
            password: hashedPassword,
            phone: phone,
            image: "/default.jpg",
            accountStatus: "active",
            email_Verified: false,
            notificationCount: 0,
            create_time: currentdate,
            update_time: currentdate,
          },
        });
        if (!user) {
          throw { meta: { target: "users_email_key" } };
        }
        res.status(200).json({ ok: true, status: "success" });
      } catch (error) {
        let errorMessage =
          "Une erreur est survenue, veuillez réessayer plus tard.";
        switch (error.meta.target) {
          case "name_not_alphabet":
            errorMessage = "Le nom saisie n'est pas valide.";
            break;
          case "name_length":
            errorMessage = "Le nom doit contenir entre 3 et 30 caractères.";
            break;
          case "users_email_key":
            errorMessage = "Cet e-mail est déjà utilisé.";
            break;
          case "email_not_valid":
            errorMessage = "L'adresse e-mail saisie n'est pas valide";
            break;
          case "password_length":
            errorMessage =
              "Le mot de passe doit contenir au moins 8 caractères.";
            break;
          case "phone_not_valid":
            errorMessage = "Le numéro de téléphone saisi n'est pas valide.";
            break;
        }
        res.status(200).json({
          ok: false,
          error: errorMessage,
          errorType: error.meta.target,
          status: "fail",
        });
      }
      break;
    default:
      res.setHeader("Allow", ["POST"]);
      res.status(405).end(`Method ${method} Not Allowed`);
  }
};
export default signupAPI;
