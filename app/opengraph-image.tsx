import { ImageResponse } from "next/og";

export const alt =
  "Khaira.co — B2B growth and intelligent automation for consulting firms";
export const size = {
  width: 1200,
  height: 630,
};
export const contentType = "image/png";

export default function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          background: "#fbfefc",
          padding: "56px 64px",
          position: "relative",
          fontFamily: "sans-serif",
          overflow: "hidden",
        }}
      >
        {/* Comet trail across top-left */}
        <div
          style={{
            position: "absolute",
            top: -120,
            right: -80,
            width: 560,
            height: 560,
            borderRadius: 9999,
            background:
              "radial-gradient(ellipse 70% 70% at 40% 30%, rgba(10, 122, 86, 0.18), transparent 50%)",
            display: "flex",
          }}
        />
        {/* Left vortex */}
        <div
          style={{
            position: "absolute",
            top: -180,
            left: -140,
            width: 520,
            height: 520,
            borderRadius: 9999,
            background:
              "radial-gradient(ellipse 60% 60% at 30% 30%, rgba(126, 232, 192, 0.12), transparent 50%)",
            display: "flex",
          }}
        />

        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            position: "relative",
          }}
        >
          <div style={{ display: "flex", alignItems: "center", gap: 14 }}>
            <div
              style={{
                width: 48,
                height: 48,
                borderRadius: 14,
                background: "#071b12",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                position: "relative",
              }}
            >
              <div
                style={{
                  width: 24,
                  height: 24,
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  color: "#22c78e",
                  fontSize: 26,
                  fontWeight: 700,
                }}
              >
                K
              </div>
              <div
                style={{
                  position: "absolute",
                  top: 6,
                  right: 6,
                  width: 9,
                  height: 9,
                  borderRadius: 9999,
                  background: "#22c78e",
                  display: "flex",
                }}
              />
            </div>
            <div style={{ display: "flex", fontSize: 28, fontWeight: 700 }}>
              <span style={{ color: "#071b12" }}>Khaira</span>
              <span style={{ color: "#0a7a56" }}>.co</span>
            </div>
          </div>

          <div style={{ display: "flex", fontSize: 13, letterSpacing: "2.6px", textTransform: "uppercase", color: "#607a6d", fontWeight: 600 }}>
            B2B growth × intelligent automation
          </div>
        </div>

        <div
          style={{
            display: "flex",
            fontSize: 13,
            letterSpacing: "2.6px",
            textTransform: "uppercase",
            color: "#607a6d",
            fontWeight: 600,
            marginTop: 24,
            maxWidth: 540,
          }}
        >
          We build growth and automation systems for consulting firms and
          professional service businesses.
        </div>

        <div
          style={{
            display: "flex",
            gap: 10,
            marginTop: 28,
          }}
        >
          {["Lead generation", "CRM automation", "AI workflows"].map(
            (label) => (
              <div
                key={label}
                style={{
                  display: "flex",
                  padding: "8px 14px",
                  borderRadius: 9999,
                  background: "#e8f9f0",
                  border: "1px solid rgba(10, 122, 86, 0.18)",
                  color: "#0a7a56",
                  fontSize: 14,
                  fontWeight: 500,
                }}
              >
                {label}
              </div>
            ),
          )}
        </div>

        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            gap: 48,
            position: "relative",
            marginTop: 16,
          }}
        >
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              width: 620,
            }}
          >
            <div
              style={{
                display: "flex",
                fontSize: 60,
                lineHeight: 1.05,
                letterSpacing: "-2.6px",
                fontWeight: 600,
                color: "#071b12",
              }}
            >
              Turn more opportunities into revenue.
            </div>
            <div
              style={{
                display: "flex",
                marginTop: 24,
                fontSize: 22,
                lineHeight: 1.45,
                color: "#4c6559",
                maxWidth: 540,
              }}
            >
              We build growth and automation systems for consulting firms and
              professional service businesses.
            </div>
            <div style={{ display: "flex", gap: 10, marginTop: 28 }}>
              {["Discovery", "Design", "Build", "Launch"].map(
                (label) => (
                  <div
                    key={label}
                    style={{
                      display: "flex",
                      padding: "8px 14px",
                      borderRadius: 9999,
                      background: "#d8e8df",
                      color: "#4c6559",
                      fontSize: 13,
                      fontWeight: 500,
                    }}
                  >
                    {label}
                  </div>
                ),
              )}
            </div>
          </div>

          <div
            style={{
              width: 390,
              display: "flex",
              flexDirection: "column",
              background: "#fbfefc",
              borderRadius: 24,
              border: "1px solid rgba(10, 122, 86, 0.14)",
              padding: 24,
              boxShadow: "0 20px 60px -24px rgba(4, 17, 11, 0.3)",
            }}
          >
            <div
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
              }}
            >
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                }}
              >
                <div
                  style={{
                    display: "flex",
                    fontSize: 11,
                    letterSpacing: "1.8px",
                    textTransform: "uppercase",
                    color: "#0a7a56",
                    fontWeight: 600,
                  }}
                >
                  Enquiry-to-Meeting
                </div>
                <div
                  style={{
                    display: "flex",
                    fontSize: 22,
                    fontWeight: 600,
                    color: "#071b12",
                    marginTop: 6,
                  }}
                >
                  One visible journey
                </div>
              </div>

              <div
                style={{
                  display: "flex",
                  padding: "5px 10px",
                  borderRadius: 9999,
                  background: "#d8e8df",
                  color: "#4c6559",
                  fontSize: 10,
                  fontWeight: 600,
                  letterSpacing: "1.2px",
                  textTransform: "uppercase",
                }}
              >
                Demo
              </div>
            </div>

            <div
              style={{
                display: "flex",
                flexDirection: "column",
                gap: 8,
                marginTop: 20,
              }}
            >
              {["Capture", "Organise", "Engage", "Convert", "Measure"].map(
                (stage, index) => (
                  <div
                    key={stage}
                    style={{
                      display: "flex",
                      alignItems: "center",
                      gap: 12,
                      padding: "9px 12px",
                      borderRadius: 12,
                      background: index === 0 ? "#e8f9f0" : "#f2faf5",
                      border:
                        index === 0
                          ? "1px solid rgba(10, 122, 86, 0.24)"
                          : "1px solid rgba(126, 232, 192, 0.08)",
                    }}
                  >
                    <div
                      style={{
                        width: 22,
                        height: 22,
                        borderRadius: 9999,
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        background: index === 0 ? "#0a7a56" : "#22c78e",
                        color: index === 0 ? "#ffffff" : "#071b12",
                        fontSize: 10,
                        fontWeight: 600,
                      }}
                    >
                      {index + 1}
                    </div>
                    <div
                      style={{
                        display: "flex",
                        fontSize: 13,
                        fontWeight: index === 0 ? 600 : 500,
                        color: index === 0 ? "#0a7a56" : "#4c6559",
                    }}
                    >
                      {stage}
                    </div>
                    <div
                      style={{
                        display: "flex",
                        marginLeft: "auto",
                        fontSize: 10,
                        color: index === 0 ? "#0a7a56" : "#4c6559",
                      }}
                    >
                      {index === 0 ? "Active" : "Next"}
                    </div>
                  </div>
                ),
              )}
            </div>

            <div
              style={{
                display: "flex",
                marginTop: 16,
                padding: "10px 12px",
                borderRadius: 12,
                background: "#e2efe8",
                color: "#0a7a56",
                fontSize: 11,
                fontWeight: 500,
              }}
            >
              Every enquiry has an owner, a next step and a measurable outcome.
            </div>
          </div>
        </div>

        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            borderTop: "1px solid rgba(7, 27, 18, 0.12)",
            paddingTop: 18,
            position: "relative",
            fontSize: 13,
            color: "#607a6d",
          }}
        >
          <div style={{ display: "flex" }}>khaira-co.eu</div>
          <div style={{ display: "flex" }}>Consulting firms & professional service businesses</div>
        </div>
      </div>
    ),
    {
      ...size,
    },
  );
}