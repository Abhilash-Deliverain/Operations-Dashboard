function initDatePicker() {
  const picker = document.getElementById('datePicker');
  const today = new Date().toISOString().split('T')[0];
  picker.value = today;

  picker.addEventListener('change', (e) => {
    const selectedDate = e.target.value;
    console.log('Date selected:', selectedDate);
  });
}


// POPUP DATA
const popupData = {
  sauda: {
    title: "Sauda Monitoring",
    rows: [
      { key: "Contracted",      value: "1200 T", color: "green" },
      { key: "Open",            value: "80 T",   color: "green" },
      { key: "Received",        value: "1120 T", color: "green" },
      { key: "Payment Pending", value: "140 T",  color: "orange" },
      { key: "Paid",            value: "980 T",  color: "green" }
    ]
  },

  weigh: {
    title: "Weigh Bridge",
    rows: [
      { key: "No. of Trucks", value: "24",      color: "" },
      { key: "Bill Weight",  value: "186.8 T", color: "" },
      { key: "Net Weight",   value: "185.9 T", color: "green" },
      { key: "Total Bill Value", value: "+0.4%", color: "green" }
    ]
  },

  pregate: {
    title: "Pre-gate Check",
    rows: [
      { key: "No. of Tests",        value: "3",     color: "" },
      { key: "Avg. Moisture",      value: "11.6%", color: "green" },
      { key: "Avg. Wet Gluten",    value: "26%",   color: "green" },
      { key: "Avg. Stone",         value: "0.3%",  color: "green" },
      { key: "Avg. Dunky",         value: "0.8%",  color: "green" },
      { key: "Avg. Refraction",    value: "1.2%",  color: "green" }
    ]
  },

  postgate: {
    title: "Post-gate Analysis",
    rows: [
      { key: "No. of Tests",        value: "3",     color: "" },
      { key: "Avg. Moisture",      value: "11.8%", color: "green" },
      { key: "Avg. Wet Gluten",    value: "25%",   color: "green" },
      { key: "Avg. Stone",         value: "0.4%",  color: "green" },
      { key: "Avg. Dunky",         value: "1.1%",  color: "orange" },
      { key: "Avg. Refraction",    value: "1.5%",  color: "green" }
    ]
  },

  rmwarehouse: {
    title: "RM Warehouse",
    rows: [
      { key: "Total in Hyd RM", value: "680 T", color: "green" },
      { key: "Total in Wgl RM", value: "520 T", color: "green" },
      { key: "Total in Blr RM", value: "310 T", color: "green" },
      { key: "Total in Vij RM", value: "190 T", color: "orange" }
    ]
  },

  mill: {
    title: "Mill Status",
    rows: [
      { key: "Total Bags (Count)", value: "Running", color: "green" },
      { key: "Total Bulk Production (kgs)", value: "142 T", color: "" },
      { key: "Total Bran %", value: "13.6%", color: "green" },
      { key: "Total Bran (kgs)", value: "19.3 T", color: "" },
      { key: "Total Refraction (kgs)", value: "2.1 T", color: "green" }
    ]
  },

  fg: {
    title: "FG Analysis",
    rows: [
      { key: "Avg. Moisture (Maida)", value: "13.4%", color: "green" },
      { key: "Avg. Moisture (Sooji)", value: "11.6%", color: "green" },
      { key: "Avg. Moisture (Atta)",  value: "12.8%", color: "green" },
      { key: "Avg. Gluten (Maida)",   value: "28%",   color: "green" },
      { key: "Avg. Gluten (Atta)",    value: "25%",   color: "green" },
      { key: "Avg. Ash",              value: "0.62%", color: "green" }
    ]
  },

  fgwarehouse: {
    title: "FG Warehouse",
    rows: [
      { key: "Total Maida Stock",        value: "520 T", color: "green" },
      { key: "Total Atta Stock",         value: "460 T", color: "green" },
      { key: "Total Chakki Atta Stock",  value: "310 T", color: "orange" },
      { key: "Total Rawa Stock",         value: "280 T", color: "green" },
      { key: "Total Bran Stock",         value: "95 T",  color: "green" },
      { key: "Total Chiroti Stock",      value: "42 T",  color: "orange" }
    ]
  },

  sales: {
    title: "Sales",
    rows: [
      { key: "Total Invoice Value", value: "₹4.2 Cr", color: "green" },
      { key: "Total Weight",        value: "1,860 T", color: "green" },
      { key: "Revenue/Kg",          value: "₹22.6",   color: "green" }
    ]
  },

  breakdown: {
    title: "Breakdown Log",
    rows: [
      { key: "Total Downtime", value: "2.1%", color: "green" },
      { key: "Total Production Loss", value: "18 T", color: "orange" },
      { key: "Total Downtime (Chakki)", value: "0.6%", color: "green" },
      { key: "Total Production Loss (Chakki)", value: "38 min", color: "" }
    ]
  },

  power: {
    title: "Power Monitoring",
    rows: [
      { key: "KWH (Day)", value: "2480 kWh", color: "" },
      { key: "KVAH (Day)", value: "2610 kVAh", color: "" },
      { key: "Power Factor (Day)", value: "0.95", color: "green" },
      { key: "Total Grinding (MT)", value: "142 T", color: "green" },
      { key: "KWH/Ton", value: "71", color: "green" },
      { key: "Meter Reading", value: "Stable", color: "green" }
    ]
  },

  complaints: {
    title: "Customer Complaints",
    rows: [
      { key: "No. of Complaints", value: "4", color: "orange" },
      { key: "No. of Customers", value: "860", color: "green" }
    ]
  },

  returns: {
    title: "Sales Returns",
    rows: [
      { key: "Bulk - Total Return (kgs)", value: "6.2 T", color: "green" },
      { key: "Bulk - Total Value (Rs)",   value: "₹0.32 L", color: "green" },
      { key: "Retail - Total Return (kgs)", value: "9.8 T", color: "orange" },
      { key: "Retail - Total Value (Rs)",   value: "₹0.46 L", color: "orange" }
    ]
  }
};


// RENDER popups from data
function renderPopups(data) {
  Object.entries(data).forEach(([key, node]) => {
    const el = document.getElementById('popup-' + key);
    if (!el) return;
    el.innerHTML = `
      <div class="popup-title">${node.title}</div>
      ${node.rows.map(row => `
        <div class="popup-row">
          <span class="popup-key">${row.key}</span>
          <span class="popup-val ${row.color}">${row.value}</span>
        </div>
      `).join('')}
    `;
  });
}


// SVG CONNECTORS
function getCenter(el) {
  const r  = el.getBoundingClientRect();
  const gr = document.getElementById('flowGrid').getBoundingClientRect();
  return { x: r.left + r.width / 2 - gr.left, y: r.top + r.height / 2 - gr.top };
}

function makeLine(svg, x1, y1, x2, y2, dashed) {
  const line = document.createElementNS('http://www.w3.org/2000/svg', 'line');
  line.setAttribute('x1', x1); line.setAttribute('y1', y1);
  line.setAttribute('x2', x2); line.setAttribute('y2', y2);
  if (dashed) line.classList.add('dashed');
  svg.appendChild(line);
}

function drawConnectors() {
  const svg = document.getElementById('connectorSvg');
  svg.innerHTML = '';
  const R = 34; 

  function ic(id) {
    return document.getElementById(id).querySelector('.node-icon');
  }
  function pt(id) { return getCenter(ic(id)); }

  // 1. Sauda vertical drop then horizontal jog to Weigh Bridge
  const sauda = pt('node-sauda');
  const weigh = pt('node-weigh');
  makeLine(svg, sauda.x, sauda.y + R, sauda.x, weigh.y, true);
  if (Math.abs(sauda.x - weigh.x) > 2) {
    makeLine(svg, sauda.x, weigh.y, weigh.x - R, weigh.y, false);
  }

  // 2. Main horizontal flow: Weigh -> Pre -> Post -> RMWarehouse -> Mill -> FG
  const mainRow = ['node-weigh','node-pregate','node-postgate','node-rmwarehouse','node-mill','node-fg'];
  const mainPts = mainRow.map(pt);
  for (let i = 0; i < mainPts.length - 1; i++) {
    makeLine(svg, mainPts[i].x + R, mainPts[i].y, mainPts[i+1].x - R, mainPts[i+1].y, false);
  }

  // 3. Branch above Mill: straight vertical line up through Power to Breakdown
  const mill      = pt('node-mill');
  const breakdown = pt('node-breakdown');
  makeLine(svg, mill.x, mill.y - R, mill.x, breakdown.y + R, true);

  // 4. Mill drops down to FG Warehouse
  const fgwh = pt('node-fgwarehouse');
  makeLine(svg, mill.x, mill.y + R, mill.x, fgwh.y, true);
  if (Math.abs(mill.x - fgwh.x) > 2) {
    makeLine(svg, mill.x, fgwh.y, fgwh.x - R, fgwh.y, false);
  }

  // 5. FG Warehouse -> Sales
  const sales = pt('node-sales');
  makeLine(svg, fgwh.x + R, fgwh.y, sales.x - R, sales.y, false);

  // 6. Sales drops down through Complaints to Returns
  const returns = pt('node-returns');
  makeLine(svg, sales.x, sales.y + R, sales.x, returns.y - R, true);
}


// POPUP HOVER
function setupPopups() {
  document.querySelectorAll('[data-popup]').forEach(node => {
    const popup = document.getElementById(node.getAttribute('data-popup'));
    if (!popup) return;
    node.addEventListener('mouseenter', () => { positionPopup(node, popup); popup.classList.add('active'); });
    node.addEventListener('mouseleave', () => popup.classList.remove('active'));
  });
}

function positionPopup(node, popup) {
  const icon = node.querySelector('.node-icon');
  const r    = icon.getBoundingClientRect();
  const aw   = document.querySelector('.app-wrapper').getBoundingClientRect();
  const pw   = 210, ph = 160;

  if (popup.classList.contains('arrow-left')) {
    popup.style.top  = (r.top + r.height / 2 - 24) + 'px';
    popup.style.left = (r.right + 10) + 'px';
    if (r.right + 10 + pw > aw.right - 8) {
      popup.classList.remove('arrow-left');
      popup.classList.add('arrow-right-flip');
      popup.style.left = (r.left - pw - 10) + 'px';
    }
  } else {
    let top  = r.bottom + 10;
    let left = r.left - 10;
    if (left + pw > aw.right - 8)  left = aw.right - pw - 8;
    if (left < aw.left + 8)        left = aw.left + 8;
    if (top + ph > aw.bottom - 8) {
      top = r.top - ph - 10;
      popup.classList.add('arrow-down');
    } else {
      popup.classList.remove('arrow-down');
    }
    popup.style.top  = top + 'px';
    popup.style.left = left + 'px';
  }
}


// AUTO SCALE — fits grid to screen uniformly
let currentScale = 1;

function autoScale() {
  const grid = document.getElementById('flowGrid');
  grid.style.transform = 'scale(1)';
  const scaleX = window.innerWidth  / (grid.offsetWidth  + 80);
  const scaleY = window.innerHeight / (grid.offsetHeight + 80);
  currentScale = Math.min(scaleX, scaleY);
  grid.style.transform       = `scale(${currentScale})`;
  grid.style.transformOrigin = 'center center';
}


// INIT
window.addEventListener('load', () => {
  setTimeout(() => {
    renderPopups(popupData);
    initDatePicker();
    autoScale();
    const grid = document.getElementById('flowGrid');
    grid.style.transform = 'scale(1)';
    drawConnectors();
    grid.style.transform = `scale(${currentScale})`;
    setupPopups();
  }, 80);
});

window.addEventListener('resize', () => {
  const grid = document.getElementById('flowGrid');
  autoScale();
  grid.style.transform = 'scale(1)';
  setTimeout(() => {
    drawConnectors();
    grid.style.transform = `scale(${currentScale})`;
  }, 50);
});