---
title: "2-Way Out-of-Order RISC-V Core with SMT"
order: 90
excerpt: "
<strong><u>Charlotte Chen</u></strong><br/>
<span style='font-size: 0.9em;'><em>Independent project, Columbia University</em>, Jan. 2025 – Present</span><br/>
<span style='font-size: 0.9em;'>
A solo 2-way superscalar out-of-order RV32IMAF core with R10K-style renaming and 2-thread simultaneous multithreading, synthesized in ASAP7 7nm at ~660 MHz in 0.05 mm². It has per-thread 32-entry ROBs, a 16-entry shared RS, 2 CDBs, an LSQ with out-of-order loads, store-to-load forwarding and a load-wait predictor, a CVFPU-based FP unit, and LR/SC + AMO atomics. Each feature was kept or cut by its measured gain: a 4-MSHR non-blocking D-cache (1.29× IPC), I-cache stream prefetching (1.15×), and a tournament predictor (mispredicts 12.1% → 10.3%); a D-side prefetcher that gained only 0.7% was removed. ICOUNT fetch and thread-hashed indexing raised SMT pair throughput from 0.98× to 1.11×. Every commit is checked against a Spike-checked golden model, with random program pairs and mutation testing.
</span>
<a href='https://github.com/Charlotte-Chen-Courses/CPU-project/tree/smt' target='_blank' style='font-size: 0.9em;'>[code]</a>
<br/><br/>"
collection: portfolio
---
