
import { Radius } from "lucide-react";
import React from "react";

function Footer() {
  return (
    <footer
      style={{
        backgroundColor: "#2e2a4d",
        padding: "40px 40px 20px 50px",
        color: "#fff",
        fontFamily: "Arial, sans-serif",
        fontSize: 14,
      }}
    >
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          margin: "0 auto",
          flexWrap: "wrap",
        }}
      >
        {/* Left Column */}
        <div style={{ flex: "1 1 250px", marginBottom: 20, minWidth: 220 }}>
          <div style={{ marginBottom: 5 }}>©2025&nbsp;
            <span style={{ fontWeight: 700, color: "#72bf44", fontSize: 18 }}>
              my
            </span>
            <span style={{ fontWeight: 700, fontSize: 18 }}>Scheme</span>
          </div>
          <div style={{ marginBottom: 10, fontSize: 12 }}>
            Powered by{" "}
            <img
              src="logo.png"
              alt="Digital India Logo"
              style={{ height: 20, verticalAlign: "middle", }}
            />
          </div>
          {/* <div style={{ fontSize: 12, lineHeight: 1.4, marginBottom: 15 }}>
            Digital India Corporation(DIC)
            <br />
            Ministry of Electronics & IT (MeitY)
            <br />
            Government of India®
          </div> */}
          <div style={{ display: "flex", gap: 8 }}>
            {/* Social Icons - use placeholders for now */}
            <a href="#" aria-label="LinkedIn" style={{ color: "#fff", fontSize: 18, border: "1px solid #fff", borderRadius: "50%", width: 40, height: 40, display:"flex", alignItems:"center", justifyContent:"center", textDecoration:"none" }}>
              in
            </a>
            <a href="#" aria-label="Facebook" style={{ color: "#fff", fontSize: 18, border: "1px solid #fff", borderRadius: "50%", width: 40, height: 40, display:"flex", alignItems:"center", justifyContent:"center", textDecoration:"none" }}>
              f
            </a>
            <a href="#" aria-label="Twitter" style={{ color: "#fff", fontSize: 18, border: "1px solid #fff", borderRadius: "50%", width: 40, height: 40, display:"flex", alignItems:"center", justifyContent:"center", textDecoration:"none" }}>
              x
            </a>
          </div>
        </div>

        {/* Quick Links */}
        <div style={{ flex: "1 1 150px", marginBottom: 20, minWidth: 140 }}>
          <h4 style={{ fontWeight: 700, marginBottom: 16 }}>Quick Links</h4>
          <ul style={{ listStyle: "none", paddingLeft: 0, lineHeight: 2 }}>
            {[
              "About Us",
              "Contact Us",
              "Frequently Asked Questions",
              "Disclaimer",
              "Terms & Conditions",
            ].map((item) => (
              <li key={item} style={{ cursor: "pointer", color: "#ccc" }}>
                {"\u203A"} {item}
              </li>
            ))}
          </ul>
        </div>

        {/* Useful Links */}
        <div style={{ flex: "1 1 250px", marginBottom: 20, minWidth: 220 }}>
          <h4 style={{ fontWeight: 700, marginBottom: 16 }}>Useful Links</h4>
          <div style={{ display: "flex", flexWrap: "wrap", gap: 12 }}>
            {/* Local logos with fallback */}
            {[
              { file: "digital-india-logo.svg", alt: "Digital India" },
              { file: "digilocker_logo.svg", alt: "Digilocker" },
              { file: "umang_logo.svg", alt: "UMANG" },
              { file: "indiagovin.svg", alt: "Income Tax" },
              { file: "mygov-logo.svg", alt: "MyGov" },
              { file: "data-gov-in-logo.svg", alt: "data.gov.in" },
              { file: "koode-logo.svg", alt: "Koode" },
            ].map((logo, i) => (
              <img
                key={i}
                src={`/images/${logo.file}`}
                alt={logo.alt}
                loading="lazy"
                onError={(e) => (e.currentTarget.src = "/images/fallback.svg")}
                style={{
                  height: 30,
                  borderRadius: 3,
                  boxShadow: "0 0 3px #0002",
                  backgroundColor: "#fff",
                  padding: 3,
                  cursor: "pointer",
                }}
              />
            ))}
          </div>
        </div>

        {/* Get in touch */}
        <div style={{ flex: "1 1 300px", marginBottom: 20, minWidth: 280 }}>
          <h4 style={{ fontWeight: 700, marginBottom: 16 }}>Get in touch</h4>
          <address style={{ fontStyle: "normal", lineHeight: 1.6, fontSize: 14 }}>
            4th Floor, NeGD, Electronics
            <br />
            Niketan, 6 CGO Complex, Lodhi
            <br />
            Road, New Delhi - 110003, India
            <br />
            <a href="mailto:support-myscheme@digitalindia.gov.in" style={{ color: "#ccc", textDecoration: "underline" }}>
              support-myscheme[at]digitalindia[dot]gov[dot]in
            </a>
            <br />
            (011) 24303714 (9:00 AM to 5:30 PM)
          </address>
        </div>
      </div>
      <div
        style={{
          fontSize: 12,
          color: "#aaa",
          textAlign: "center",
          padding: 10,
          borderTop: "1px solid #493d73",
          margin: "0 0",
        }}
      >
        Last Updated On : 19/10/2025 | v-2.2.26
      </div>
    </footer>
  );
}

export default Footer;
