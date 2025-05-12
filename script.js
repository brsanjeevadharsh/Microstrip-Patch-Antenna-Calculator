function calculatePatch() {
    const c = 3e8;  // Speed of light in m/s
    let e_r = parseFloat(document.getElementById("er").value);
    let f0 = parseFloat(document.getElementById("f0").value) * 1e9; // GHz to Hz
    let h = parseFloat(document.getElementById("h").value) * 1e-3;  // mm to m

    if (isNaN(e_r) || isNaN(f0) || isNaN(h) || e_r <= 0 || f0 <= 0 || h <= 0) {
        alert("Please enter valid positive numbers.");
        return;
    }

    // Calculate Width (W)
    let W = (c / (2 * f0)) * (1 / Math.sqrt((e_r + 1) / 2));

    // Effective dielectric constant
    let e_eff = ((e_r + 1) / 2) + ((e_r - 1) / 2) * (1 / Math.sqrt(1 + 12 * (h / W)));

    // Length extension
    let delta_L = 0.824 * h * ((e_eff + 0.3) * ((W / h) + 0.264)) / ((e_eff - 0.258) * ((W / h) + 0.8));

    // Effective length
    let L = (c / (2 * f0 * Math.sqrt(e_eff))) - delta_L;

    // Convert to mm
    W = W * 1e3;
    L = L * 1e3;

    document.getElementById("width").textContent = W.toFixed(4);
    document.getElementById("length").textContent = L.toFixed(4);
}
