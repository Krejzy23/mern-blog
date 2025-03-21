import React, { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

const AnimatedPhoenix = () => {
  const phoenixRef = useRef(null);

  useGSAP(() => {
    const vP = gsap.utils.selector(phoenixRef);
    const tl = gsap.timeline();

    tl.set(vP("path"), {
      fill: "gray",
      opacity: 0.2
    });

    // Initial animation to gather pieces
    tl.from(vP("path"), {
      duration: 1,
      stagger: {
        each: 0.05,
        from: "end", // Start the animation from the end to give a sense of assembling
        cycle: {
          y: i => [500, 200, 300, 1000][i % 4], // Start positions offscreen
          x: i => [-200, 200, 700, -700][i % 4],
          rotation: i => i * 5,
        },
      },
      opacity: 0,
      fill: "gray",
      ease: "circ.inOut",
    });

    tl.to(vP("path"), {
      duration: 1,
      stagger: {
        each: 0.03,
        from: "end",
        cycle: {
          fill: ["white", "gray", "black"],
          opacity: [1, 0.6, 0.3, 1],
        },
      },
      ease: "rough({template: none, strength: 1, points: 20, taper: none, randomize: false, clamp: true})",
    });

  }, []);

  return (
    <div className="container max-w-7xl w-full max-h-[1rem] h-full m-auto z-20">
      <div ref={phoenixRef} className="w-4/5 max-w-5xl mx-auto h-4/5">
        <svg
          className="phoenix"
          viewBox="0 0 530 477"
          version="1.1"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g transform="matrix(1,0,0,1,-510.008,-76.2227)">
            <g id="phoenix">
              <path
                d="M748.638,476.065L774.106,380.687L765.241,342.922L748.638,476.065Z"
                style={{ fill: "rgb(210,3,8)" }}
              />
              <path
                d="M781.641,342.428L789.583,420.549L774.015,380.588L781.641,342.428Z"
                style={{ fill: "rgb(247,140,2)" }}
              />
              <path
                d="M750.095,476.904L790.556,422.208L774.15,380.302L750.095,476.904Z"
                style={{ fill: "rgb(248,68,5)" }}
              />
              <path
                d="M794.579,454.564L791.063,422.297L747.884,479.157L794.579,454.564Z"
                style={{ fill: "rgb(242,34,2)" }}
              />
              <path
                d="M773.329,498.115L748.86,479.286L794.675,454.597L773.329,498.115Z"
                style={{ fill: "rgb(165,2,1)" }}
              />
              <path
                d="M798.527,480.085L795.124,455.037L774.253,496.768L798.527,480.085Z"
                style={{ fill: "rgb(244,107,0)" }}
              />
              <path
                d="M772.863,552.327L748.902,480.181L772.407,496.543L772.863,552.327Z"
                style={{ fill: "rgb(114,1,1)" }}
              />
              <path
                d="M798.387,480.403L774.599,552.626L772.975,496.655L798.387,480.403Z"
                style={{ fill: "rgb(244,142,3)" }}
              />
              <path
                d="M705.98,266.913L735.48,270.362L750.652,238.57L705.98,266.913Z"
                style={{ fill: "rgb(207,3,0)" }}
              />
              <path
                d="M751.424,238.127L754.774,272.744L736.007,270.263L751.424,238.127Z"
                style={{ fill: "rgb(131,1,0)" }}
              />
              <path
                d="M764.959,226.681L754.766,272.798L751.483,237.597L764.959,226.681Z"
                style={{ fill: "rgb(209,3,5)" }}
              />
              <g transform="matrix(1.06683,0,0,1.02856,-51.6283,-6.47615)">
                <path
                  d="M772.532,248.852L755.918,271.33L764.99,226.743L772.532,248.852Z"
                  style={{ fill: "rgb(248,67,4)" }}
                />
              </g>
              <path
                d="M789.879,272.689L754.598,272.686L773.052,249.221L789.879,272.689Z"
                style={{ fill: "rgb(214,3,8)" }}
              />
              <path
                d="M780.888,227.287L773.232,249.365L790.707,272.893L780.888,227.287Z"
                style={{ fill: "rgb(240,172,2)" }}
              />
              <g transform="matrix(1.10275,0,0,0.991776,-78.9334,2.50532)">
                <path
                  d="M765.48,226.232L780.262,225.563L772.692,249.866L765.48,226.232Z"
                  style={{ fill: "rgb(245,229,5)" }}
                />
              </g>
              <path
                d="M764.069,227.384L760.266,161.713L781.903,226.331L764.069,227.384Z"
                style={{ fill: "rgb(245,173,3)" }}
              />
              <path
                d="M752.85,197.562L759.987,165.532L765.2,226.274L752.85,197.562Z"
                style={{ fill: "rgb(245,142,0)" }}
              />
              <path
                d="M756.055,283.756L773.271,272.899L755.144,272.757L756.055,283.756Z"
                style={{ fill: "rgb(137,1,0)" }}
              />
              <path
                d="M773.231,306.061L772.989,273.505L789.731,283.81L773.231,306.061Z"
                style={{ fill: "rgb(237,67,15)" }}
              />
              <path
                d="M756.444,284.116L773.086,273.458L772.932,306.553L756.444,284.116Z"
                style={{ fill: "rgb(205,3,1)" }}
              />{" "}
              {/* TADY PICOOOOOOOOOO*/}
              <path
                d="M746.505,333.824L773.326,306.77L756.53,284.332L746.505,333.824Z"
                style={{ fill: "rgb(171,2,0)" }}
              />
              <path
                d="M789.985,283.919L799.682,333.045L772.821,306.308L789.985,283.919Z"
                style={{ fill: "rgb(248,164,23)" }}
              />
              <path
                d="M747.106,333.839L763.905,341.578L773.032,307.465L747.106,333.839Z"
                style={{ fill: "rgb(202,3,0)" }}
              />
              <path
                d="M780.742,342.125L799.678,333.253L773.008,306.676L780.742,342.125Z"
                style={{ fill: "rgb(248,139,0)" }}
              />
              <path
                d="M772.739,373.828L781.3,342.167L773.397,307.086L764.629,340.719L772.739,373.828Z"
                style={{ fill: "rgb(240,178,0)" }}
              />
              <path
                d="M760.192,366.444L764.588,340.975L746.175,333.903L760.192,366.444Z"
                style={{ fill: "rgb(248,34,4)" }}
              />
              <g transform="matrix(-1,0,0,1,1546.71,0.461631)">
                <path
                  d="M760.192,366.444L764.588,340.975L746.175,333.903L760.192,366.444Z"
                  style={{ fill: "rgb(199,3,5)" }}
                />
              </g>
              <path
                d="M743.526,350.923L731.769,398.257L760.439,365.947L743.526,350.923Z"
                style={{ fill: "rgb(246,69,5)" }}
              />
              <g transform="matrix(-1,0,0,1,1546.71,0.461631)">
                <path
                  d="M743.526,350.923L731.769,398.257L760.439,365.947L743.526,350.923Z"
                  style={{ fill: "rgb(246,199,3)" }}
                />
              </g>
              <path
                d="M737.407,420.396L760.711,366.197L731.778,398.346C732.788,408.763 734.476,416.779 737.407,420.396Z"
                style={{ fill: "rgb(206,3,1)" }}
              />
              <g transform="matrix(-1,0,0,1,1546.71,0.461631)">
                <path
                  d="M737.407,420.396L760.711,366.197L731.778,398.346C732.788,408.763 734.476,416.779 737.407,420.396Z"
                  style={{ fill: "rgb(243,145,5)" }}
                />
              </g>
              <path
                d="M745.354,447.72C741.052,440.261 738.529,431.211 737.87,420.494L760.701,367.189L745.928,447.191"
                style={{ fill: "rgb(169,2,1)" }}
              />
              <g transform="matrix(-1,0,0,1,1546.71,0.461631)">
                <path
                  d="M745.354,447.72C741.052,440.261 738.529,431.211 737.87,420.494L760.701,367.189L745.928,447.191"
                  style={{ fill: "rgb(169,2,1)" }}
                />
              </g>
              <path
                d="M759.965,365.914L743.193,350.779L746.759,334.236L759.965,365.914Z"
                style={{ fill: "rgb(248,100,9)" }}
              />
              <g transform="matrix(-1,0,0,1,1546.71,0.461631)">
                <path
                  d="M759.965,365.914L743.193,350.779L746.759,334.236L759.965,365.914Z"
                  style={{ fill: "rgb(245,179,4)" }}
                />
              </g>
              <g transform="matrix(-1,0,0,1,1546.07,0.0520408)">
                <path
                  d="M756.258,283.823L773.751,272.908L755.144,272.757L756.258,283.823Z"
                  style={{ fill: "rgb(137,1,0)" }}
                />
              </g>
              <path
                d="M782.188,227.663L787.939,151.402L761.02,163.402L782.188,227.663Z"
                style={{ fill: "rgb(244,200,0)" }}
              />
              <path
                d="M793.697,197.044L782.679,226.671L787.696,152.396L793.697,197.044Z"
                style={{ fill: "rgb(238,208,0)" }}
              />
              <path
                d="M762.537,139.135L759.898,163.595L789.664,150.799L762.537,139.135Z"
                style={{ fill: "rgb(245,174,0)" }}
              />
              <path
                d="M728.884,171.311L733.643,153.822L739.533,163.362L728.884,171.311Z"
                style={{ fill: "rgb(215,3,2)" }}
              />
              <path
                d="M761.532,140.263L733.899,153.223L739.83,162.928L761.532,140.263Z"
                style={{ fill: "rgb(245,35,2)" }}
              />
              <path
                d="M759.4,163.63L740.545,163.199L761.429,140.574L759.4,163.63Z"
                style={{ fill: "rgb(241,101,0)" }}
              />
              <g transform="matrix(1,0,0,1,0.0240416,0.818032)">
                <path
                  d="M794.077,235.432L791.19,272.678L781.539,226.046L794.077,235.432Z"
                  style={{ fill: "rgb(241,37,9)" }}
                />
              </g>
              <path
                d="M810.347,271.764L794.795,236.534L791.757,272.803L810.347,271.764Z"
                style={{ fill: "rgb(207,3,1)" }}
              />
              <path
                d="M838.249,268.186L795.015,236.516L810.638,271.762L838.249,268.186Z"
                style={{ fill: "rgb(242,69,9)" }}
              />
              <path
                d="M827.01,236.372L838.76,268.649L796.891,237.417L827.01,236.372Z"
                style={{ fill: "rgb(239,48,0)" }}
              />
              <path
                d="M872.482,238.033L838.271,267.595L826.764,236.075L872.482,238.033Z"
                style={{ fill: "rgb(248,141,2)" }}
              />
              <path
                d="M705.233,266.893L719.759,237.536L673.673,236.712L705.233,266.893Z"
                style={{ fill: "rgb(246,176,0)" }}
              />
              <g transform="matrix(1,0,0,1,-0.643332,1.67745)">
                <path
                  d="M750.012,236.771L720.512,235.627L705.759,265.511L750.012,236.771Z"
                  style={{ fill: "rgb(248,67,0)" }}
                />
              </g>
              <g transform="matrix(0.367838,-0.92989,0.92989,0.367838,353.801,797.291)">
                <path
                  d="M762.174,137.878L804.813,178.071L761.542,167.631L762.174,137.878Z"
                  style={{ fill: "rgb(248,226,20)" }}
                />
              </g>
              <g transform="matrix(0.557144,0.220812,-0.120328,0.303606,247.408,-60.8956)">
                <path
                  d="M809.108,167.89L868.477,252.385L750.875,251.343L809.108,167.89Z"
                  style={{ fill: "rgb(199,3,0)" }}
                />
              </g>
              <g transform="matrix(-0.566433,0.195758,-0.106675,-0.308668,1332.72,127.412)">
                <path
                  d="M809.108,167.89L904.903,219.542C853.528,229.858 799.254,244.014 747.966,255.094L809.108,167.89Z"
                  style={{ fill: "rgb(199,3,0)" }}
                />
              </g>
              <g transform="matrix(0.566433,0.195758,0.106675,-0.308668,219.306,128.959)">
                <path
                  d="M809.108,167.89L904.903,219.542C853.528,229.858 799.254,244.014 747.966,255.094L809.108,167.89Z"
                  style={{ fill: "rgb(199,3,0)" }}
                />
              </g>
              <g transform="matrix(-0.557144,0.220812,0.120328,0.303606,1303.25,-63.6287)">
                <path
                  d="M809.108,167.89L868.477,252.385L750.875,251.343L809.108,167.89Z"
                  style={{ fill: "rgb(245,142,0)" }}
                />
              </g>
              <g transform="matrix(0.557144,0.220812,-0.120328,0.303606,298.979,-29.9898)">
                <path
                  d="M825.087,170.081L865.958,250.559L764.749,221.702L825.087,170.081Z"
                  style={{ fill: "rgb(246,33,2)" }}
                />
              </g>
              <g transform="matrix(-0.557144,0.220812,0.120328,0.303606,1251.68,-32.7229)">
                <path
                  d="M825.087,170.081L865.958,250.559L764.749,221.702L825.087,170.081Z"
                  style={{ fill: "rgb(246,33,2)" }}
                />
              </g>
              <g transform="matrix(0.920184,-0.391487,0.391487,0.920184,-32.0513,317.294)">
                <path
                  d="M769.796,197.234L753.219,197.627C753.239,209.397 752.499,219.475 752.255,233.076L768.758,228.167C769.137,217.964 769.637,205.837 769.796,197.234Z"
                  style={{ fill: "rgb(248,103,0)" }}
                />
              </g>
              <g transform="matrix(-0.920184,-0.391487,-0.391487,0.920184,1581.49,315.29)">
                <path
                  d="M771.755,199.804L750.794,196.792C750.814,208.562 752.12,222.142 751.875,235.743L769.287,229.258C769.666,219.056 771.596,208.408 771.755,199.804Z"
                  style={{ fill: "rgb(248,103,0)" }}
                />
              </g>
              <g transform="matrix(0.557144,0.220812,-0.120328,0.303606,184.573,-84.5267)">
                <path
                  d="M813.761,145.124L860.355,249.35L755.9,247.547L813.761,145.124Z"
                  style={{ fill: "rgb(199,3,0)" }}
                />
              </g>
              <g transform="matrix(-0.566433,0.195758,-0.106675,-0.308668,1381.62,112.029)">
                <path
                  d="M820.179,156.353L838.268,254.497L748.349,242.41L820.179,156.353Z"
                  style={{ fill: "rgb(199,3,0)" }}
                />
              </g>
              <g transform="matrix(0.566433,0.195758,0.106675,-0.308668,156.253,105.916)">
                <path
                  d="M813.761,145.124L860.355,249.35L755.9,247.547L813.761,145.124Z"
                  style={{ fill: "rgb(199,3,0)" }}
                />
              </g>
              <g transform="matrix(-0.557144,0.220812,0.120328,0.303606,1366.08,-87.2598)">
                <path
                  d="M813.761,145.124L860.355,249.35L755.9,247.547L813.761,145.124Z"
                  style={{ fill: "rgb(199,3,0)" }}
                />
              </g>
              <g transform="matrix(-0.520616,-0.275526,0.128248,-0.242329,1097.47,469.437)">
                <path
                  d="M808.057,167.155L868.443,253.293L750.635,241.888L808.057,167.155Z"
                  style={{ fill: "rgb(245,104,3)" }}
                />
              </g>
              <g transform="matrix(0.520616,-0.275526,-0.128248,-0.242329,453.183,466.704)">
                <path
                  d="M808.057,167.155L868.443,253.293L750.635,241.888L808.057,167.155Z"
                  style={{ fill: "rgb(206,3,1)" }}
                />
              </g>
              <g transform="matrix(0.689354,0.724424,-0.724424,0.689354,301.804,-602.203)">
                <path
                  d="M684.368,302.822L739.524,325.509L636.446,318.228L684.368,302.822Z"
                  style={{ fill: "rgb(205,3,0)" }}
                />
              </g>
              <g transform="matrix(-0.689354,0.724424,0.724424,0.689354,1247.64,-604.206)">
                <path
                  d="M684.368,302.822L739.524,325.509L636.446,318.228L684.368,302.822Z"
                  style={{ fill: "rgb(205,3,0)" }}
                />
              </g>
              <g transform="matrix(0.878489,-0.15903,0.15903,0.878489,318.004,70.3165)">
                <g transform="matrix(2.94534,0,2.22045e-16,0.971544,-1226.01,7.14014)">
                  <path
                    d="M618.583,250.257L623.691,287.082L606.681,288.914L618.583,250.257Z"
                    style={{ fill: "rgb(246,229,5)" }}
                  />
                </g>
                <g transform="matrix(1.88799,-0.0292835,0.00950583,0.612867,-564.097,144.458)">
                  <path
                    d="M613.698,202.036C616.644,227.405 620.877,261.541 621.44,260.933L608.623,261.137L613.698,202.036Z"
                    style={{ fill: "rgb(247,176,5)" }}
                  />
                </g>
              </g>
              <g transform="matrix(-0.878489,-0.15903,-0.15903,0.878489,1234.02,71.863)">
                <g transform="matrix(2.94534,0,2.22045e-16,0.971544,-1226.01,7.14014)">
                  <path
                    d="M618.626,250.92L630.708,284.475L606.681,288.914L618.626,250.92Z"
                    style={{ fill: "rgb(246,68,4)" }}
                  />
                </g>
                <g transform="matrix(1.88799,-0.0292835,0.00950583,0.612867,-537.417,145.662)">
                  <path
                    d="M599.525,199.663C605.029,218.675 612.345,235.138 618.386,254.661L597.512,257.311L599.525,199.663Z"
                    style={{ fill: "rgb(248,32,0)" }}
                  />
                </g>
              </g>
              <g transform="matrix(0.769835,-0.452092,-0.452092,-0.769835,571.001,641.159)">
                <g transform="matrix(2.94534,0,2.22045e-16,0.971544,-1226.01,7.14014)">
                  <path
                    d="M618.626,250.92L630.708,284.475L606.681,288.914L618.626,250.92Z"
                    style={{ fill: "rgb(246,68,4)" }}
                  />
                </g>
                <g transform="matrix(1.88799,-0.0292835,0.00950583,0.612867,-537.417,145.662)">
                  <path
                    d="M599.525,199.663C605.029,218.675 612.345,235.138 618.386,254.661L597.512,257.311L599.525,199.663Z"
                    style={{ fill: "rgb(246,68,4)" }}
                  />
                </g>
              </g>
              <g transform="matrix(-0.872316,-0.516166,0.382223,-0.645953,1102.22,652.749)">
                <path
                  d="M695.476,211.077L717.208,259.5L666.969,261.964L695.476,211.077Z"
                  style={{ fill: "rgb(246,69,1)" }}
                />
              </g>
              <g transform="matrix(0.872316,-0.516166,-0.382223,-0.645953,447.224,650.745)">
                <path
                  d="M695.476,211.077L717.208,259.5L666.969,261.964L695.476,211.077Z"
                  style={{ fill: "rgb(246,69,1)" }}
                />
              </g>
              <g transform="matrix(-0.872316,-0.516166,0.382223,-0.645953,1092.68,640.982)">
                <path
                  d="M682.452,203.569L727.358,251.59L702.3,252.484L682.452,203.569Z"
                  style={{ fill: "rgb(246,142,6)" }}
                />
              </g>
              <g transform="matrix(0.872316,-0.516166,-0.382223,-0.645953,456.759,638.978)">
                <path
                  d="M682.452,203.569L727.358,251.59L702.3,252.484L682.452,203.569Z"
                  style={{ fill: "rgb(246,199,3)" }}
                />
              </g>
              <g transform="matrix(0.689354,0.724424,-0.724424,0.689354,301.804,-602.203)">
                <path
                  d="M684.368,302.822L739.524,325.509L636.446,318.228L684.368,302.822Z"
                  style={{ fill: "rgb(205,3,0)" }}
                />
              </g>
              <g transform="matrix(-0.689354,0.724424,0.724424,0.689354,1247.64,-604.206)">
                <path
                  d="M684.368,302.822L739.524,325.509L636.446,318.228L684.368,302.822Z"
                  style={{ fill: "rgb(205,3,0)" }}
                />
              </g>
              <g transform="matrix(-0.769835,-0.452092,0.452092,-0.769835,979.653,643.892)">
                <g transform="matrix(2.94534,0,2.22045e-16,0.971544,-1226.01,7.14014)">
                  <path
                    d="M618.626,250.92L630.708,284.475L606.681,288.914L618.626,250.92Z"
                    style={{ fill: "rgb(246,229,5)" }}
                  />
                </g>
                <g transform="matrix(1.88799,-0.0292835,0.00950583,0.612867,-537.417,145.662)">
                  <path
                    d="M599.525,199.663C605.029,218.675 612.345,235.138 618.386,254.661L597.512,257.311L599.525,199.663Z"
                    style={{ fill: "rgb(247,176,5)" }}
                  />
                </g>
              </g>
              <g transform="matrix(0.878489,-0.15903,0.15903,0.878489,318.004,70.3165)">
                <g transform="matrix(2.94534,0,2.22045e-16,0.971544,-1226.01,7.14014)">
                  <path
                    d="M618.583,250.257L623.691,287.082L606.681,288.914L618.583,250.257Z"
                    style={{ fill: "rgb(246,229,5)" }}
                  />
                </g>
                <g transform="matrix(1.88799,-0.0292835,0.00950583,0.612867,-564.097,144.458)">
                  <path
                    d="M613.698,202.036C616.644,227.405 620.877,261.541 621.44,260.933L608.623,261.137L613.698,202.036Z"
                    style={{ fill: "rgb(247,176,5)" }}
                  />
                </g>
              </g>
              <g transform="matrix(-0.878489,-0.15903,-0.15903,0.878489,1234.02,71.863)">
                <g transform="matrix(2.94534,0,2.22045e-16,0.971544,-1226.01,7.14014)">
                  <path
                    d="M618.626,250.92L630.708,284.475L606.681,288.914L618.626,250.92Z"
                    style={{ fill: "rgb(246,68,4)" }}
                  />
                </g>
                <g transform="matrix(1.88799,-0.0292835,0.00950583,0.612867,-537.417,145.662)">
                  <path
                    d="M599.525,199.663C605.029,218.675 612.345,235.138 618.386,254.661L597.512,257.311L599.525,199.663Z"
                    style={{ fill: "rgb(248,32,0)" }}
                  />
                </g>
              </g>
              <g transform="matrix(0.769835,-0.452092,-0.452092,-0.769835,571.001,641.159)">
                <g transform="matrix(2.94534,0,2.22045e-16,0.971544,-1226.01,7.14014)">
                  <path
                    d="M618.626,250.92L630.708,284.475L606.681,288.914L618.626,250.92Z"
                    style={{ fill: "rgb(246,68,4)" }}
                  />
                </g>
                <g transform="matrix(1.88799,-0.0292835,0.00950583,0.612867,-537.417,145.662)">
                  <path
                    d="M599.525,199.663C605.029,218.675 612.345,235.138 618.386,254.661L597.512,257.311L599.525,199.663Z"
                    style={{ fill: "rgb(246,68,4)" }}
                  />
                </g>
              </g>
            </g>
          </g>
        </svg>
      </div>
    </div>
  );
};

export default AnimatedPhoenix;
