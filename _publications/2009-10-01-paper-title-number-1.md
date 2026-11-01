---
title: "Power and Performance Analysis of GPU under DVFS"
collection: publications
category: presentations
permalink: /publication/2025-gpu-dvfs
excerpt: 'Empirical characterization of NVIDIA Jetson Nano CPU/GPU power-performance tradeoffs across DVFS operating points, using hardware performance counters, fine-grained power measurement, and roofline analysis.'
date: 2025-05-01
venue: 'University Research Presentation, Columbia University'
slidesurl: '/files/GPU DVFS.pdf'
citation: 'Charlotte Chen and Annie Peng. (2025). &quot;Power and Performance Analysis of GPU under DVFS.&quot; <i>University Research Presentation, Columbia University</i>, Spring 2025.'
---

This presentation reports on empirical power-performance characterization of the NVIDIA Jetson Nano platform under dynamic voltage and frequency scaling (DVFS). Using hardware performance counters and targeted CPU/GPU microbenchmarks, we characterized energy-delay product (EDP) tradeoffs across heterogeneous compute units, separating compute- and bandwidth-bound regimes with roofline analysis. Across 50+ automated DVFS runs, mid-frequency operation outperformed maximum frequency by ~1.4× in perf/W by avoiding throttling.

[Download Slides](/files/GPU DVFS.pdf){: .btn .btn--info}
