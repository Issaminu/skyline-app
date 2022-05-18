import { withIronSessionApiRoute } from "iron-session/next";
const APPLICATION_SECRET = process.env.APPLICATION_SECRET;

export default withIronSessionApiRoute(
    function userRoute(req, res) {
        res.send({ user: req.session.user });
    },
    {
        cookieName: "skyline-AuthSessionCookie",
        password: APPLICATION_SECRET,
        // secure: true should be used in production (HTTPS) but can't be used in development (HTTP)
        cookieOptions: {
            // secure: process.env.NODE_ENV === "production",
        },
    },
);