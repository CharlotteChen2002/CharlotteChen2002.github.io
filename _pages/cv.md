---
layout: archive
title: "CV"
permalink: /cv/
author_profile: true
redirect_from:
  - /resume
---

{% include base_path %}

[Download PDF](/files/CharlotteChenCV.pdf){: .btn .btn--info}

---

## Research Interests

**Computer Architecture**: Domain-specific accelerators, power-performance characterization, hardware-software co-design  
**SoC Design**: Heterogeneous SoC integration, design-space exploration, RTL-to-silicon implementation

---

## Education

* **B.S. in Computer Engineering**, Columbia University — Major GPA: 3.86/4.0 *(expected May 2026)*
  * Dean's List; Tau Beta Pi Honor Society
  * Relevant Coursework: VLSI Design Lab (Tapeout), Computer Architecture, SoC Platforms, Advanced Logic Design
* **B.A. in Computer Science, B.A. in Japanese**, Grinnell College — GPA: 3.96/4.0 (Major: 4.0/4.0) *(May 2024)*
  * Dean's List

---

## Research Experience

* **Power and Performance Analysis of SoC Architectures** *(Jan. 2025 – Present)*
  * Undergraduate Researcher, Columbia University
  * Advisor: Prof. Simha Sethumadhavan; Mentor: Annie Peng
  * Characterized NVIDIA Jetson Nano SoC and GPU power-performance behavior via hardware performance counters, establishing energy-delay product (EDP) baselines across heterogeneous compute units under diverse workload conditions.
  * Designed and executed targeted microbenchmarks varying execution unit utilization and memory access patterns to empirically quantify DVFS sensitivity curves and power-gating efficiency tradeoffs from measured hardware data.

* **GreenerSKU: Lower Carbon Datacenter Operations Research** *(May 2024 – Present)*
  * Undergraduate Research Assistant, University of Minnesota Twin Cities
  * PI: Prof. Yang Katie Zhao
  * Built and calibrated a datacenter carbon emission simulation framework to systematically measure the joint effects of dynamic workload scheduling and cooling strategies on total carbon footprint across heterogeneous server configurations.
  * Refactored the Python simulation engine to eliminate concurrency bottlenecks, achieving high-fidelity alignment between simulated and empirical datacenter power traces.

* **Autonomous Driving Algorithms Research** *(Dec. 2023 – April 2024)*
  * Undergraduate Research Assistant, NC State University
  * PI: Prof. Nuria González-Prelcic
  * Implemented hardware-in-the-loop path-planning systems and evaluated dynamic vehicle behavior through structured test scenarios, quantifying tradeoffs between computational safety margins and routing efficiency.
  * Measured collision time-to-contact (TTC) margins and algorithmic latency across a comprehensive suite of real-world driving scenarios to validate algorithm correctness.

---

## Publications & Presentations

<ul>{% for post in site.publications reversed %}
  {% include archive-single-cv.html %}
{% endfor %}</ul>

---

## Selected Hardware & Architecture Projects

* **TSMC 65nm Tape-Out: N-body Simulation Accelerator** — Verilog, Innovus, PrimeTime *(Jan. 2026 – Present)*
  * Architected a 1mm² reconfigurable systolic array with four parallel PEs targeting O(N²) particle interaction offload from host CPU at 100 MHz, <50 mW.
  * Implemented a programmable LUT force engine (updatable via SPI) supporting gravitational and Lennard-Jones potentials.
  * Executing full RTL-to-GDSII flow (Design Compiler, Innovus P&R, DFT scan chain); validated Q4.12 fixed-point precision via Python golden model co-simulation.

* **Superscalar Out-of-Order RISC-V Processor** — SystemVerilog, VCS, Verdi *(Jan. 2025 – Present)*
  * Designed a 32-bit superscalar OOO RV32IM processor (P6/R10K microarchitecture) with 64-entry register renaming, 16-entry RS, and 32-entry ROB.
  * Integrated parallel functional units (3 ALUs, 2 Loads, 2 Multipliers, 1 Branch) and hybrid branch predictor (BTB + Bimodal).
  * Validated correctness via automated differential testing against a C++ golden model.

* **TPU-like Accelerator Integration in ESP** — SystemVerilog, SoC Design *(Oct. – Dec. 2024)*
  * Conducted design-space exploration across tiling factors for CNN accelerators, measuring latency vs. FPGA LUT/DSP constraints to identify Pareto-optimal configurations.
  * Integrated via AXI/DMA into ESP SoC; benchmarked and deployed final SoC to FPGA.

* **64-Tap 16-Bit FIR Filter with Dual-Clock Architecture** — SystemVerilog *(Fall 2025)*
  * Achieved 10 kS/s real-time throughput with a 10 kHz input clock and 1 MHz core clock; fixed-point arithmetic with robust clock domain crossing.

* **Microprocessor Core Design and Layout (TSMC N65)** — Cadence Virtuoso *(Fall 2025)*
  * Full transistor-level schematic, DRC/LVS-clean layout, and functional + timing + power verification from extracted layout.

---

## Teaching Experience

<ul>{% for post in site.teaching reversed %}
  {% include archive-single-cv.html %}
{% endfor %}</ul>

---

## Technical Skills

* **Hardware Description & Verification**: SystemVerilog, Verilog, UVM, JasperGold, VCS, Verdi
* **EDA Tools**: Synopsys Design Compiler, PrimeTime, Cadence Innovus, Virtuoso, Vivado
* **Architectures & Simulators**: RISC-V, ESP SoC Platform, ModelSim, gem5
* **Programming & Scripting**: C/C++, Python (NumPy, pandas, matplotlib), Java, C#, TCL, Bash

---

## Grants & Funding

* **UROP Grant** — University of Minnesota *(May 2024)*: Awarded $2,500 to fund datacenter carbon modeling research (Co-I: Senecy Zhang).
* **Student Research Fund** — Grinnell College *(March 2023)*: Awarded $4,000 for independent academic research.
