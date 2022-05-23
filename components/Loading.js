// import "./styles.css";
import { Loading, styled } from "@nextui-org/react";

const Box = styled("div", {
    boxSizing: "border-box",
    d: "flex",
    minHeight: "100vh",
    width: "100%",
    jc: "center",
    alignItems: "center"
});

export default function App() {
    return (
        <Box>
            <Loading type="gradient"
                loadingCss={{
                    marginTop: "-15rem",
                    $$loadingSize: "4rem",
                }}
            />
        </Box>
    );
}
