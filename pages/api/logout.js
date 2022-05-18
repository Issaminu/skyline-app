import { withIronSessionApiRoute } from "iron-session/next";
const APPLICATION_SECRET = process.env.APPLICATION_SECRET;

export default withIronSessionApiRoute(
    function logoutRoute(req, res, session) {
        req.session.destroy();
        res.send({ ok: true });
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