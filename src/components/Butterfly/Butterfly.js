import './Butterfly.css';

function Background({rotate=0, color=[0,0,0], position=[0,0], onClick}) {
  return (
    <svg
      className="butterfly"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 100 100"
      width="15px" height="15px"
      style={{
        left: position[0],
        top: position[1],
      }}
    >
      <g
        fill={`rgb(${color.join()})`}
        transform={`rotate(${rotate} 50 50)`}
      >
        <path
          onClick={onClick}
          d="M89.163,20.139c-14.103,0-33.235,17.606-35.841,28.565c-0.569-1.253-1.355-2.144-2.061-2.629  c1.26-4.288,7.351-9.814,8.349-14.258c0.109-0.484-0.89-0.941-1.015-0.442c-1.316,5.271-6.477,9.938-7.586,14.542  c-0.278-0.157-0.536-0.247-0.755-0.264v-0.003c-0.013,0-0.025,0.001-0.038,0.001c-0.013,0-0.025-0.001-0.038-0.001v0.003  c-0.219,0.017-0.477,0.106-0.755,0.264c-1.11-4.604-6.269-9.271-7.586-14.542c-0.125-0.5-1.123-0.042-1.014,0.442  c0.997,4.444,7.089,9.971,8.348,14.258c-0.705,0.486-1.491,1.376-2.06,2.629C44.506,37.745,25.373,20.139,11.27,20.139  c-4.671,0-6.737,0.809-6.737,3.324c0,7.276,11.537,29.025,15.708,31.349c1.727,0.962,3.896,1.207,5.917,0.817  c-2.485,2.049-4.289,5.194-4.289,9.513c0,10.374,7.205,15.721,14.283,15.721c7.649,0,11.229-6.597,11.229-22.906  c0.808,1.976,1.707,4.041,1.707,7.636c0,6.221-1.319,14.114,1.092,14.278v0.004c0.013,0,0.025-0.002,0.038-0.003  c0.013,0.001,0.025,0.003,0.038,0.003V79.87c2.411-0.164,1.092-8.058,1.092-14.278c0-3.595,0.897-5.66,1.706-7.636  c0,16.31,3.58,22.906,11.229,22.906c7.078,0,14.283-5.347,14.283-15.721c0-4.318-1.804-7.464-4.288-9.513  c2.02,0.39,4.188,0.145,5.915-0.817C84.363,52.487,95.9,30.738,95.9,23.462C95.9,20.947,93.834,20.139,89.163,20.139z"
        />
      </g>
    </svg>
  );
}

export default Background;
