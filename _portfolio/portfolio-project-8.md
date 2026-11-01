---
title: "TPU-like Accelerator Integration in ESP"
order: 45
excerpt: "
<strong><u>Charlotte Chen</u></strong><br/>
<span style='font-size: 0.9em;'><em>Columbia University (Prof. Luca Carloni; mentor: Biruk Seyoum)</em>, Fall 2024</span><br/>
<span style='font-size: 0.9em;'>
This project integrated the TPU-like accelerator from the Koios deep-learning benchmark suite into the ESP SoC through the ESP RTL flow, defining its register map, DMA descriptors, and status interface. Charlotte built the AXI4-Lite control plane and AXI DMA burst streams for input, weight, and partial-sum data, and wrote bare-metal and Linux user-space applications that run real DNN workloads on FPGA, validated against Koios golden results. A generator produces the accelerator at any PE count, used to sweep latency against FPGA LUT/DSP utilization and choose per-workload PE counts.
</span>
<br/><br/>"
collection: portfolio
---
