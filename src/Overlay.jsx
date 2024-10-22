import { Footer } from "@pmndrs/branding";

export default function Overlay() {
  return (
    <>
      {/* <Footer
        date="28. January"
        year="2021"
        link1={<a href="https://github.com/pmndrs/drei">pmndrs/drei</a>}
        link2={
          <a href="https://codesandbox.io/s/drei-reflector-bfplr">
            s/drei-reflector-bfplr
          </a>
        }
        link3={
          <a href="https://codesandbox.io/s/drei-reflector-bfplr">
            s/drei-reflector-bfplr
          </a>
        }
      /> */}
      <div
        style={{
          position: "absolute",
          bottom: 0,
          left: 0,
          width: "100%",
          height: "20%",
        }}
      >
        {/* <Logo
          style={{ position: "absolute", bottom: 40, left: 40, width: 30 }}
        /> */}
        <a
          href="https://aquatwin.vercel.app"
          style={{
            position: "absolute",
            bottom: 40,
            left: 40,
            fontSize: "13px",
            textDecoration: "none",
            color: "#efefef",
          }}
        >
          Twinverse
          <br />
          build beyond reality
        </a>
        <div
          style={{
            position: "absolute",
            bottom: 40,
            right: 40,
            fontSize: "13px",
          }}
        >
          blog
        </div>
      </div>
    </>
  );
}
