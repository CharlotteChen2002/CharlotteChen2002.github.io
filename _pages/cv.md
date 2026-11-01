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

Computer architecture, with a secondary emphasis on integrated circuits/VLSI. Hardware acceleration and memory-centric architecture: accelerators for ML and data-intensive workloads, processing in/near memory, hardware–software co-design, and AI-assisted, implementation-aware design methodology, grounded in carrying designs from RTL through to silicon.

---

## Education

* **M.S. in Computer Engineering**, Columbia University *(Sept. 2026 – May 2027, expected)*
  * M.S. Thesis: Agentic microarchitecture design from simulation to implementation (Advisor: Prof. Zishen Wan)
* **B.S. in Computer Engineering**, Columbia University — GPA: 3.85/4.00 (Major: 3.86/4.00) *(Sept. 2024 – May 2026)*
  * Dean's List; Tau Beta Pi Engineering Honor Society
* **B.A. in Computer Science, B.A. in Japanese**, Grinnell College — GPA: 3.96/4.00 (Major: 4.00/4.00) *(Aug. 2021 – May 2024)*
  * Dean's List

---

## Research Experience

* **Agentic Microarchitecture Design: Do Simulated Gains Survive RTL?** *(Sept. 2026 – Present)*
  * M.S. Thesis Research, COMS 6901, Columbia University
  * Advisor: Prof. Zishen Wan
  * Studying how often an AI agent's microarchitectural proposals that change cycle behavior but must preserve ISA semantics (e.g., ROB/LSQ sizing, new bypass paths, store-to-load forwarding) keep their simulated gains through RTL implementation, verification, and timing closure.
  * Building the evaluation environment on my 2-way out-of-order RISC-V core: porting it to an open Yosys/OpenROAD flow calibrated against Genus/Innovus, measuring baseline PPA and the P&R noise floor, and tiering verification (ISA-model co-simulation, hidden random instruction streams, JasperGold invariant proofs) with mutation testing.
  * Developing an `evaluate(patch)→JSON` harness, called by collaborator Christina (Yijing) Jia's agent loop, and a gem5 reference model to compare a prediction-committing agent against simulator-only and RTL-coding agents on performance at achieved frequency per unit area; runs are logged as prediction-vs.-outcome traces to seed a planned self-improvement loop.

* **Power–Performance Characterization of Heterogeneous Edge SoCs** *(Jan. 2025 – Oct. 2025)*
  * Research Assistant, Columbia University
  * Advisor: Prof. Simha Sethumadhavan
  * Studied how dynamic voltage/frequency scaling (DVFS) trades throughput against energy on the NVIDIA Jetson Nano CPU/GPU, using hardware performance counters and fine-grained power measurement to establish energy-delay baselines.
  * Built microbenchmarks sweeping compute vs. memory intensity and automated 50+ DVFS runs; separated compute- and bandwidth-bound regimes with roofline analysis.
  * Found a perf/W sweet spot where mid-frequency operation outperformed maximum frequency by ~1.4× by avoiding throttling; presented results at Columbia.

* **GreenerSKU: Lower-Carbon Datacenter Operations** *(May 2024 – Aug. 2025)*
  * Research Assistant, University of Minnesota
  * PIs: Prof. WenKai Guan & Prof. Yang Katie Zhao
  * Developed a Python datacenter carbon-emission simulator modeling operational carbon under dynamic workload scheduling and variable cooling configurations.
  * Extended the framework to embodied carbon, comparing the savings from reusing recycled servers across server-lifespan scenarios.
  * Refactored the simulation engine to remove concurrency bottlenecks; validated model outputs against empirical datacenter power data and real-world topologies.

* **Autonomous Driving Algorithms** *(Dec. 2023 – Apr. 2024)*
  * Research Assistant, NC State University (Raleigh, NC & Remote)
  * PI: Prof. Nuria González-Prelcic
  * Developed remote-control hardware and path-planning algorithms for autonomous vehicle control, targeting safety margins and routing efficiency.
  * Evaluated time-to-contact (TTC) collision margins and algorithm latency across real-world driving scenarios.

---

## Presentations

<ul>{% for post in site.publications reversed %}
  {% include archive-single-cv.html %}
{% endfor %}</ul>

---

## Selected Hardware & Architecture Projects

* **TSMC 65nm Tape-Out: N-Body Simulation Accelerator** — Verilog, Innovus *(Jan. 2026 – Present)*
  * Co-designed (team of 4) a 1.31 × 1.11 mm² accelerator for O(N²) pairwise force computation, reaching 160M pairs/s at 40 MHz with 90% compute efficiency to enable a real-time 60 Hz interactive 2D simulation.
  * Built four parallel 17-stage pipelined two-body cores (1 pair/cycle, 18-cycle latency) with a 5-stage fast inverse square root and 27-bit floating-point intermediates, broadcasting each j-body across cores over 16-body i-tiles.
  * Supported an on-chip SRAM mode (5 KiB, N ≤ 512) and a streaming bypass mode (N ≤ 2048 at 30 fps) through a 56-pin I/O interface.
  * Completed the full RTL-to-GDSII flow with scan-chain DFT, behavioral and post-synthesis verification, and place & route at 67.7% core density; signed off at 40 MHz with 2.30 ns setup slack.
  * Co-designed the test PCB; the fabricated chip is now in post-silicon testing.

* **2-Way Out-of-Order RISC-V Core with SMT** — SystemVerilog, Verilator, Design Compiler *(Jan. 2025 – Present)*
  * Designed solo a 2-way superscalar out-of-order RV32IMAF core (R10K-style rename) with 2-thread simultaneous multithreading; synthesized in ASAP7 7nm at ~660 MHz in 0.05 mm², est. ~70 mW and ~150 pJ/instruction (pre-layout).
  * Built per-thread 32-entry ROBs, a 16-entry shared RS, 2 CDBs, an LSQ with out-of-order loads, store-to-load forwarding and a load-wait predictor (4% over conservative issue), a CVFPU-based FP unit, and LR/SC + AMO atomics.
  * Evaluated each microarchitectural feature by its measured gain: a 4-MSHR non-blocking D-cache (1.29× IPC), I-cache stream prefetching (1.15×), and a tournament predictor (mispredicts 12.1% → 10.3%); removed a D-side prefetcher that gained only 0.7%.
  * Implemented ICOUNT fetch, per-thread recovery, and thread-hashed indexing (SMT throughput 0.98× → 1.11×); verified per commit against a Spike-checked golden model, with random program pairs and mutation testing.
  * Now extending it in a team project (EECS 6693, Fall 2026) that sweeps ROB, issue-queue, register-file, and LSQ sizes through a post-route ASAP7 Genus/Innovus flow, attributing critical paths to microarchitectural structures and testing how well synthesis-level estimates rank configurations against post-route results.

* **1024-Point Memory-Based FFT Processor in TSMC 65nm** — EECS 6321, Verilog *(Jan. 2026 – May 2026)*
  * Designed solo a radix-2 DIF FFT processor around a single complex butterfly PE, four single-port SRAM banks with XOR bank mapping for conflict-free access, and a 512-entry twiddle ROM, using a Q1.15 datapath with per-stage scaling.
  * Closed full physical design and signoff (PrimeTime/PrimePower; Calibre LVS/DRC clean) at 250 MHz in 0.47 mm² and 2.57 mW, delivering 20.8 MS/s at 123 pJ/sample; 91% of power is in the SRAM banks.
  * Post-layout simulation matches the MATLAB golden model bit-exactly over all 10,240 outputs (SQNR 63.0 dB); post-layout HSPICE agrees with PrimeTime within 6% on delay and 4% on power.

* **TPU-like Accelerator Integration in ESP** — Prof. Luca Carloni; Mentor: Biruk Seyoum *(Oct. 2024 – Dec. 2024)*
  * Studied the TPU-like accelerator from the Koios deep-learning benchmark suite (PE microarchitecture, tiling, memory traffic) and integrated it into the ESP SoC through the ESP RTL flow, defining its register map, DMA descriptors, and status interface.
  * Built the AXI4-Lite control plane and AXI DMA burst streams for input/weight/partial-sum data; wrote bare-metal and Linux user-space applications to run real DNN workloads on FPGA, validating outputs against Koios golden results.
  * Built a generator that produces the accelerator at any PE count, and swept latency against FPGA LUT/DSP utilization to choose per-workload PE counts.

* **64-Tap 16-Bit FIR Filter with Dual-Clock Architecture** — CSEE 4823, SystemVerilog *(Fall 2025)*
  * Achieved 10 kS/s real-time throughput with a 10 kHz input clock and 1 MHz core clock; fixed-point arithmetic with robust clock domain crossing.

* **Microprocessor Core Design and Layout (TSMC N65)** — EECS 4321, Cadence Virtuoso *(Fall 2025)*
  * Full transistor-level schematic, DRC/LVS-clean layout, and functional + timing + power verification from extracted layout.

---

## Teaching Experience

<ul>{% for post in site.teaching reversed %}
  {% include archive-single-cv.html %}
{% endfor %}</ul>

---

## Honors, Grants & Funding

* **UROP Research Grant ($2,500)** — University of Minnesota *(May 2024)*: Funded datacenter carbon-modeling research; co-investigator with Senecy Zhang.
* **Student Research Fund ($4,000)** — Grinnell College *(Mar. 2023)*: Funded Stats2Lab educational software development for the Department of Statistics.
* **Tau Beta Pi Engineering Honor Society** — Columbia University
* **Dean's List** — Columbia University; Grinnell College

---

## Skills

* **Hardware Description & Verification**: SystemVerilog, Verilog, UVM, JasperGold, VCS, Verilator, Verdi, QuestaSim/ModelSim
* **EDA**: Synopsys Design Compiler, PrimeTime/PrimePower, HSPICE; Cadence Genus, Innovus, Virtuoso; Calibre; Yosys/OpenROAD; Vivado
* **Architectures & Simulators**: RISC-V, ESP SoC Platform, Spike, gem5
* **Programming & Scripting**: C/C++, Python, Java, C#, Tcl, Bash
* **Languages**: English, Japanese
